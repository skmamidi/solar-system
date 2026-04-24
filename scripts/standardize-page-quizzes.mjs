import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const PAGE_CONFIG = {
    'asteroid-belt/asteroid-belt.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'asteroid-belt/ceres.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'asteroid-belt/hygiea.html': { declaration: 'const quizQuestions =', format: 'option-objects' },
    'asteroid-belt/pallas.html': { declaration: 'const quizQuestions =', format: 'option-objects' },
    'asteroid-belt/vesta.html': { declaration: 'const quizQuestions =', format: 'option-objects' },
    'dwarf-planets/eris.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'dwarf-planets/haumea.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'dwarf-planets/makemake.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'dwarf-planets/pluto.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'earth/earth.html': { declaration: 'const masterQuizData =', format: 'quiz-answers' },
    'earth/luna.html': { declaration: 'const QUIZ_BANK =', format: 'quiz-bank-choices' },
    'jupiter/callisto.html': { declaration: 'const QUIZ_BANK =', format: 'quiz-bank-choices' },
    'jupiter/europa.html': { declaration: 'const QUIZ_BANK =', format: 'quiz-bank-choices' },
    'jupiter/ganymede.html': { declaration: 'const QUIZ_BANK =', format: 'quiz-bank-choices' },
    'jupiter/io.html': { declaration: 'const QUIZ_BANK =', format: 'quiz-bank-choices' },
    'kuiper-belt/arrokoth.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'kuiper-belt/kuiper-belt.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'kuiper-belt/orcus.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'kuiper-belt/quaoar.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'kuiper-belt/salacia.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'mars/mars.html': { declaration: 'const masterQuizData =', format: 'quiz-opts' },
    'neptune/Nereid.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'neptune/larissa.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'neptune/proteus.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'neptune/triton.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'saturn/enceladus.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'saturn/iapetus.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'saturn/mimas.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'saturn/rhea.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'saturn/titan.html': { declaration: 'const quizQuestions =', format: 'option-strings' },
    'sun.html': { declaration: 'const masterQuizData =', format: 'quiz-correct-incorrect' }
};

function findArrayEnd(source, startIndex) {
    const arrayStart = source.indexOf('[', startIndex);
    if (arrayStart === -1) throw new Error('Could not find array start');

    let depth = 0;
    let quote = null;
    let escapeNext = false;
    let inLineComment = false;
    let inBlockComment = false;

    for (let i = arrayStart; i < source.length; i++) {
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
            if (char === quote) quote = null;
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

        if (char === '[') depth++;
        if (char === ']') {
            depth--;
            if (depth === 0) {
                let end = i + 1;
                while (source[end] && /\s/.test(source[end])) end++;
                if (source[end] === ';') end++;
                return end;
            }
        }
    }

    throw new Error('Could not find array end');
}

function relativeAssetPath(relPath, assetFile) {
    const depth = relPath.split('/').length - 1;
    return `${'../'.repeat(depth)}assets/js/${assetFile}`;
}

function ensureSharedScripts(source, relPath, declarationIndex) {
    const dataScript = relativeAssetPath(relPath, 'master-quiz-data.js');
    const helperScript = relativeAssetPath(relPath, 'quiz-bank.js');

    if (source.includes(dataScript) && source.includes(helperScript)) {
        return source;
    }

    const scriptInsertIndex = source.lastIndexOf('<script>', declarationIndex);
    if (scriptInsertIndex === -1) {
        throw new Error(`Could not find inline script tag for ${relPath}`);
    }

    const injection = `    <script src="${dataScript}"></script>\n    <script src="${helperScript}"></script>\n`;
    return source.slice(0, scriptInsertIndex) + injection + source.slice(scriptInsertIndex);
}

function standardizePage(relPath, config) {
    const absPath = path.join(ROOT, relPath);
    let source = fs.readFileSync(absPath, 'utf8');
    const declarationIndex = source.indexOf(config.declaration);
    if (declarationIndex === -1) {
        throw new Error(`Could not find declaration ${config.declaration} in ${relPath}`);
    }

    source = ensureSharedScripts(source, relPath, declarationIndex);
    const updatedDeclarationIndex = source.indexOf(config.declaration);
    const arrayEnd = findArrayEnd(source, updatedDeclarationIndex);
    const replacement = `${config.declaration} window.QuizBank.getPageQuizData({ sourcePath: '${relPath}', format: '${config.format}' });`;
    const updated = source.slice(0, updatedDeclarationIndex) + replacement + source.slice(arrayEnd);
    fs.writeFileSync(absPath, updated, 'utf8');
}

for (const [relPath, config] of Object.entries(PAGE_CONFIG)) {
    standardizePage(relPath, config);
    console.log(`Standardized ${relPath}`);
}
