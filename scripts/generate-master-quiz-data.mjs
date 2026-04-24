import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const OUTPUT_FILE = path.join(ROOT, 'assets', 'js', 'master-quiz-data.js');

const QUIZ_MARKERS = [
    'const quizQuestions =',
    'const QUIZ_BANK =',
    'const masterQuizData ='
];

const LABEL_MAP = {
    'asteroid-belt': 'Asteroid Belt',
    'dwarf-planets': 'Dwarf Planets',
    'kuiper-belt': 'Kuiper Belt',
    'planetary-comparisons': 'Planetary Comparisons',
    'astronomical-terms': 'Astronomical Terms'
};

function walkHtmlFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        if (entry.name === 'assets' || entry.name === 'scripts' || entry.name === '.git') continue;
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            files.push(...walkHtmlFiles(fullPath));
            continue;
        }

        if (
            entry.isFile() &&
            entry.name.endsWith('.html') &&
            !entry.name.endsWith('_old.html') &&
            entry.name !== 'index.html' &&
            entry.name !== 'master-quiz.html'
        ) {
            files.push(fullPath);
        }
    }

    return files.sort();
}

function findArrayLiteral(source, marker) {
    const markerIndex = source.indexOf(marker);
    if (markerIndex === -1) return null;

    const start = source.indexOf('[', markerIndex);
    if (start === -1) return null;

    let depth = 0;
    let quote = null;
    let escapeNext = false;
    let inLineComment = false;
    let inBlockComment = false;

    for (let i = start; i < source.length; i++) {
        const char = source[i];
        const next = source[i + 1];

        if (inLineComment) {
            if (char === '\n') inLineComment = false;
            continue;
        }

        if (inBlockComment) {
            if (char === '*' && next === '/') {
                inBlockComment = false;
                i++;
            }
            continue;
        }

        if (quote) {
            if (escapeNext) {
                escapeNext = false;
                continue;
            }

            if (char === '\\') {
                escapeNext = true;
                continue;
            }

            if (char === quote) {
                quote = null;
            }
            continue;
        }

        if (char === '/' && next === '/') {
            inLineComment = true;
            i++;
            continue;
        }

        if (char === '/' && next === '*') {
            inBlockComment = true;
            i++;
            continue;
        }

        if (char === '\'' || char === '"' || char === '`') {
            quote = char;
            continue;
        }

        if (char === '[') {
            depth++;
        } else if (char === ']') {
            depth--;
            if (depth === 0) {
                return source.slice(start, i + 1);
            }
        }
    }

    return null;
}

function parseJsLiteral(source, marker) {
    const literal = findArrayLiteral(source, marker);
    if (!literal) return null;
    return vm.runInNewContext(`(${literal})`);
}

function extractTitle(source) {
    const titleMatch = source.match(/<title>([\s\S]*?)<\/title>/i);
    if (!titleMatch) return '';
    return titleMatch[1]
        .replace(/&amp;/g, '&')
        .replace(/\s+[-—|].*$/, '')
        .trim();
}

function toTitleCase(value) {
    return value
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, char => char.toUpperCase());
}

function slugify(value) {
    return value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function labelForSegment(segment) {
    return LABEL_MAP[segment] || toTitleCase(segment);
}

function deriveMeta(filePath, source) {
    const relPath = path.relative(ROOT, filePath).replace(/\\/g, '/');
    const parts = relPath.split('/');
    const filename = parts[parts.length - 1].replace(/\.html$/i, '');
    const title = extractTitle(source);

    let topic;
    let subtopic;

    if (parts.length === 1) {
        topic = labelForSegment(filename);
        subtopic = labelForSegment(filename);
    } else {
        topic = labelForSegment(parts[0]);
        subtopic = labelForSegment(filename);
    }

    return {
        relPath,
        title: title || subtopic,
        topic,
        subtopic,
        topicSlug: slugify(topic),
        subtopicSlug: slugify(subtopic)
    };
}

function normalizeQuestion(rawQuestion, meta, index) {
    let prompt = rawQuestion.question || rawQuestion.q || '';
    let choices = [];
    let correctIndex = -1;
    const explanation = rawQuestion.explanation || rawQuestion.exp || '';

    if (Array.isArray(rawQuestion.options)) {
        if (rawQuestion.options.length && typeof rawQuestion.options[0] === 'object') {
            choices = rawQuestion.options.map(option => option.text);
            correctIndex = rawQuestion.options.findIndex(option => option.isCorrect === true);
        } else {
            choices = [...rawQuestion.options];
            correctIndex = Number(rawQuestion.correct);
        }
    } else if (Array.isArray(rawQuestion.answers)) {
        choices = rawQuestion.answers.map(answer => answer.text);
        correctIndex = rawQuestion.answers.findIndex(answer => answer.correct === true);
    } else if (Array.isArray(rawQuestion.choices)) {
        choices = [...rawQuestion.choices];
        correctIndex = Number(rawQuestion.correct);
    } else if (Array.isArray(rawQuestion.opts)) {
        choices = [...rawQuestion.opts];
        correctIndex = Number(rawQuestion.ans);
    } else if (rawQuestion.c && Array.isArray(rawQuestion.i)) {
        choices = [rawQuestion.c, ...rawQuestion.i];
        correctIndex = 0;
    }

    if (!prompt || !choices.length || correctIndex < 0 || correctIndex >= choices.length) {
        return null;
    }

    const difficulty = classifyDifficulty({
        prompt: String(prompt).trim(),
        explanation: String(explanation).trim(),
        choices: choices.map(choice => String(choice).trim()),
        topic: meta.topic,
        subtopic: meta.subtopic,
        sourceTitle: meta.title
    });

    return {
        id: `${meta.topicSlug}-${meta.subtopicSlug}-${index + 1}`,
        question: String(prompt).trim(),
        choices: choices.map(choice => String(choice).trim()),
        correctIndex,
        explanation: String(explanation).trim(),
        difficulty,
        topic: meta.topic,
        subtopic: meta.subtopic,
        topicSlug: meta.topicSlug,
        subtopicSlug: meta.subtopicSlug,
        sourceTitle: meta.title,
        sourcePath: meta.relPath,
        sourceType: 'page-quiz'
    };
}

function classifyDifficulty({ prompt, explanation, choices, topic, subtopic, sourceTitle }) {
    const text = `${prompt} ${explanation} ${choices.join(' ')} ${topic} ${subtopic} ${sourceTitle}`.toLowerCase();
    let score = 0;

    const hardTerms = [
        'spectral', 'sidereal', 'synodic', 'libration', 'radiometric', 'precession',
        'magnetosphere', 'convection', 'tectonic', 'oxidation', 'hematite', 'anorthosite',
        'concretions', 'dichotomy', 'synchronous altitude', 'tidal', 'dynamo',
        'corona', 'chromosphere', 'photosphere', 'radiative zone', 'convective zone',
        'eccentric', 'retrograde', 'cryovolcanism', 'occultation', 'albedo',
        'heliosphere', 'syzygy', 'barycenter', 'porosity', 'regolith', 'mohorovi',
        'discontinuity', 'aphelion', 'perihelion', 'kepler', 'electrolysis'
    ];

    const mediumTerms = [
        'orbit', 'density', 'atmosphere', 'gravity', 'diameter', 'volume', 'surface pressure',
        'orbital speed', 'axial tilt', 'greenhouse', 'carbon dioxide', 'methane', 'nitrogen',
        'helium', 'hydrogen', 'volcano', 'crater', 'ring system', 'moon', 'asteroid',
        'dwarf planet', 'solar cycle', 'solar wind', 'magnetic field', 'planetary comparisons'
    ];

    const easyTerms = [
        'largest', 'smallest', 'closest', 'farthest', 'hottest', 'coldest', 'red planet',
        'how many', 'what color', 'which planet', 'which moon', 'named after', 'discovered by'
    ];

    const wordCount = prompt.split(/\s+/).filter(Boolean).length;
    const explanationWordCount = explanation.split(/\s+/).filter(Boolean).length;

    if (wordCount > 22) score += 2;
    else if (wordCount > 14) score += 1;

    if (explanationWordCount > 45) score += 2;
    else if (explanationWordCount > 28) score += 1;

    hardTerms.forEach(term => {
        if (text.includes(term)) score += 2;
    });

    mediumTerms.forEach(term => {
        if (text.includes(term)) score += 1;
    });

    easyTerms.forEach(term => {
        if (text.includes(term)) score -= 1;
    });

    if (topic === 'Planetary Comparisons') score -= 1;
    if (subtopic === 'Physical' || subtopic === 'Orbital') score -= 1;
    if (sourceTitle.includes('Master Quiz')) score += 1;

    if (score >= 6) return 'hard';
    if (score >= 2) return 'medium';
    return 'easy';
}

function getQuizQuestionsFromFile(filePath) {
    const source = fs.readFileSync(filePath, 'utf8');
    const marker = QUIZ_MARKERS.find(candidate => source.includes(candidate));
    if (!marker) return [];

    const parsed = parseJsLiteral(source, marker);
    if (!Array.isArray(parsed)) return [];

    const meta = deriveMeta(filePath, source);
    return parsed
        .map((question, index) => normalizeQuestion(question, meta, index))
        .filter(Boolean);
}

function getPlanetData() {
    const comparisonsPath = path.join(ROOT, 'planetary-comparisons.html');
    const source = fs.readFileSync(comparisonsPath, 'utf8');
    const parsed = parseJsLiteral(source, 'const planetData =');
    if (!Array.isArray(parsed)) {
        throw new Error('Could not extract planetData from planetary-comparisons.html');
    }
    return parsed;
}

function uniqueChoices(correct, distractors, size = 4) {
    const result = [correct];
    for (const distractor of distractors) {
        if (!result.includes(distractor)) result.push(distractor);
        if (result.length === size) break;
    }
    return result;
}

function createComparisonQuestion(question, correct, distractors, explanation, subtopic, id) {
    const options = uniqueChoices(correct, distractors);
    return {
        id,
        question,
        choices: options,
        correctIndex: options.indexOf(correct),
        explanation,
        difficulty: classifyDifficulty({
            prompt: question,
            explanation,
            choices: options,
            topic: 'Planetary Comparisons',
            subtopic,
            sourceTitle: 'Planetary Comparisons'
        }),
        topic: 'Planetary Comparisons',
        subtopic,
        topicSlug: 'planetary-comparisons',
        subtopicSlug: slugify(subtopic),
        sourceTitle: 'Planetary Comparisons',
        sourcePath: 'planetary-comparisons.html',
        sourceType: 'generated-comparison'
    };
}

function formatNumber(value, digits = 2) {
    return Number(value.toFixed(digits)).toString();
}

function generateComparisonQuestions(planets) {
    const byId = id => planets.find(planet => planet.id === id);
    const earth = byId('earth');
    const sortedByDiameter = [...planets].sort((a, b) => b.diameterKm - a.diameterKm);
    const sortedByDensity = [...planets].sort((a, b) => b.density - a.density);
    const sortedByDay = [...planets].sort((a, b) => a.dayHours - b.dayHours);
    const sortedByYear = [...planets].sort((a, b) => a.yearDays - b.yearDays);
    const sortedBySpeed = [...planets].sort((a, b) => b.orbSpeedKm - a.orbSpeedKm);
    const sortedByMoons = [...planets].sort((a, b) => b.moonsCount - a.moonsCount);
    const sortedByTilt = [...planets].sort((a, b) => b.tilt - a.tilt);
    const sortedByTemp = [...planets].sort((a, b) => b.tempC - a.tempC);

    const earthDiameterMultiples = planets.map(planet => ({
        ...planet,
        multiple: planet.diameterKm / earth.diameterKm
    }));

    const mostEarthLikeSize = [...planets]
        .filter(planet => planet.id !== 'earth')
        .sort((a, b) => Math.abs(a.diameterKm - earth.diameterKm) - Math.abs(b.diameterKm - earth.diameterKm))[0];

    return [
        createComparisonQuestion(
            'Which planet has the largest diameter in the solar system?',
            sortedByDiameter[0].name,
            sortedByDiameter.slice(1, 4).map(planet => planet.name),
            `${sortedByDiameter[0].name} is the largest planet by diameter at ${sortedByDiameter[0].diameterKm.toLocaleString()} km.`,
            'Physical',
            'planetary-comparisons-physical-1'
        ),
        createComparisonQuestion(
            'Which planet is closest in diameter to Earth?',
            mostEarthLikeSize.name,
            ['Mars', 'Mercury', 'Neptune'],
            `${mostEarthLikeSize.name} is the closest in size to Earth, with a diameter of ${mostEarthLikeSize.diameterKm.toLocaleString()} km compared with Earth's ${earth.diameterKm.toLocaleString()} km.`,
            'Physical',
            'planetary-comparisons-physical-2'
        ),
        createComparisonQuestion(
            'About how many Earth diameters wide is Jupiter?',
            `${formatNumber(byId('jupiter').diameterKm / earth.diameterKm, 1)} Earth diameters`,
            [
                `${formatNumber(byId('saturn').diameterKm / earth.diameterKm, 1)} Earth diameters`,
                `${formatNumber(byId('uranus').diameterKm / earth.diameterKm, 1)} Earth diameters`,
                `${formatNumber(byId('mars').diameterKm / earth.diameterKm, 2)} Earth diameters`
            ],
            `Jupiter's diameter is about ${formatNumber(byId('jupiter').diameterKm / earth.diameterKm, 1)} times Earth's diameter.`,
            'Physical',
            'planetary-comparisons-physical-3'
        ),
        createComparisonQuestion(
            'Which planet is less dense than liquid water?',
            'Saturn',
            ['Jupiter', 'Neptune', 'Mars'],
            `Saturn's density is about ${byId('saturn').density} kg/m³, which is lower than water's 1000 kg/m³.`,
            'Physical',
            'planetary-comparisons-physical-4'
        ),
        createComparisonQuestion(
            'Which rocky planet is the densest?',
            sortedByDensity[0].name,
            ['Mercury', 'Venus', 'Mars'],
            `${sortedByDensity[0].name} is the densest rocky planet in this comparison set.`,
            'Physical',
            'planetary-comparisons-physical-5'
        ),
        createComparisonQuestion(
            'Which planet has the smallest volume relative to Earth?',
            [...planets].sort((a, b) => a.volumeRatio - b.volumeRatio)[0].name,
            ['Mars', 'Venus', 'Uranus'],
            `${[...planets].sort((a, b) => a.volumeRatio - b.volumeRatio)[0].name} has the smallest volume relative to Earth.`,
            'Physical',
            'planetary-comparisons-physical-6'
        ),
        createComparisonQuestion(
            'Which planet has the shortest year?',
            sortedByYear[0].name,
            sortedByYear.slice(1, 4).map(planet => planet.name),
            `${sortedByYear[0].name} completes one orbit in only ${sortedByYear[0].yearDays} Earth days.`,
            'Orbital',
            'planetary-comparisons-orbital-1'
        ),
        createComparisonQuestion(
            'Which planet has the longest year?',
            sortedByYear[sortedByYear.length - 1].name,
            ['Saturn', 'Uranus', 'Jupiter'],
            `${sortedByYear[sortedByYear.length - 1].name} takes the longest to orbit the Sun.`,
            'Orbital',
            'planetary-comparisons-orbital-2'
        ),
        createComparisonQuestion(
            'Which planet spins the fastest, giving it the shortest day?',
            sortedByDay[0].name,
            sortedByDay.slice(1, 4).map(planet => planet.name),
            `${sortedByDay[0].name} has the shortest day in the comparison data at ${sortedByDay[0].dayHours} hours.`,
            'Orbital',
            'planetary-comparisons-orbital-3'
        ),
        createComparisonQuestion(
            'Which planet has the fastest orbital speed around the Sun?',
            sortedBySpeed[0].name,
            sortedBySpeed.slice(1, 4).map(planet => planet.name),
            `${sortedBySpeed[0].name} moves fastest along its orbit at ${sortedBySpeed[0].orbSpeedKm} km/s.`,
            'Orbital',
            'planetary-comparisons-orbital-4'
        ),
        createComparisonQuestion(
            'Which planet has the greatest axial tilt?',
            sortedByTilt[0].name,
            ['Saturn', 'Earth', 'Mars'],
            `${sortedByTilt[0].name} has the largest axial tilt in the comparison set.`,
            'Orbital',
            'planetary-comparisons-orbital-5'
        ),
        createComparisonQuestion(
            'Which planet has an axial tilt closest to zero degrees?',
            [...planets].sort((a, b) => a.tilt - b.tilt)[0].name,
            ['Jupiter', 'Earth', 'Neptune'],
            `${[...planets].sort((a, b) => a.tilt - b.tilt)[0].name} is tilted the least.`,
            'Orbital',
            'planetary-comparisons-orbital-6'
        ),
        createComparisonQuestion(
            'Which planet is hottest on average in the comparison data?',
            sortedByTemp[0].name,
            ['Mercury', 'Earth', 'Mars'],
            `${sortedByTemp[0].name} is the hottest because its thick carbon dioxide atmosphere drives an extreme greenhouse effect.`,
            'Atmosphere & Extremes',
            'planetary-comparisons-extremes-1'
        ),
        createComparisonQuestion(
            'Which planet is coldest on average in the comparison data?',
            sortedByTemp[sortedByTemp.length - 1].name,
            ['Uranus', 'Saturn', 'Mars'],
            `${sortedByTemp[sortedByTemp.length - 1].name} is the coldest planet in this data set.`,
            'Atmosphere & Extremes',
            'planetary-comparisons-extremes-2'
        ),
        createComparisonQuestion(
            'Which planet currently has the most known moons in the comparison data?',
            sortedByMoons[0].name,
            sortedByMoons.slice(1, 4).map(planet => planet.name),
            `${sortedByMoons[0].name} leads the set with ${sortedByMoons[0].moonsCount} known moons.`,
            'Moons & Missions',
            'planetary-comparisons-extras-1'
        ),
        createComparisonQuestion(
            'Which planet is described as having the strongest magnetic field in the solar system?',
            'Jupiter',
            ['Earth', 'Saturn', 'Mercury'],
            `Jupiter's magnetic field is by far the strongest among the planets shown.`,
            'Moons & Missions',
            'planetary-comparisons-extras-2'
        ),
        createComparisonQuestion(
            'Which pair of planets are most similar in diameter?',
            'Earth and Venus',
            ['Mars and Mercury', 'Jupiter and Saturn', 'Uranus and Neptune'],
            `Earth and Venus are the closest pair in size, which is why Venus is often called Earth's twin in size only.`,
            'Physical',
            'planetary-comparisons-physical-7'
        ),
        createComparisonQuestion(
            'Which planet is about half of Earth’s diameter?',
            'Mars',
            ['Mercury', 'Venus', 'Neptune'],
            `Mars is about 0.53 Earth diameters wide, making it a little over half of Earth's diameter.`,
            'Physical',
            'planetary-comparisons-physical-8'
        )
    ];
}

function buildMasterBank() {
    const htmlFiles = walkHtmlFiles(ROOT);
    const pageQuestions = htmlFiles.flatMap(getQuizQuestionsFromFile);
    const comparisonQuestions = generateComparisonQuestions(getPlanetData());
    const bank = [...pageQuestions, ...comparisonQuestions];

    const topics = [...new Set(bank.map(question => question.topic))].sort();
    const difficulties = ['easy', 'medium', 'hard'];
    const subtopicsByTopic = topics.reduce((acc, topic) => {
        acc[topic] = [...new Set(
            bank
                .filter(question => question.topic === topic)
                .map(question => question.subtopic)
        )].sort();
        return acc;
    }, {});

    return {
        generatedAt: new Date().toISOString(),
        questionCount: bank.length,
        topics,
        difficulties,
        subtopicsByTopic,
        questions: bank
    };
}

function writeOutput(data) {
    const fileContents = `window.MASTER_QUIZ_DATA = ${JSON.stringify(data, null, 4)};\n`;
    fs.writeFileSync(OUTPUT_FILE, fileContents, 'utf8');
}

const result = buildMasterBank();
writeOutput(result);

console.log(`Wrote ${result.questionCount} questions to ${path.relative(ROOT, OUTPUT_FILE)}`);
