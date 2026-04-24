(function () {
    const COMMON_ASSEMBLY_PARTS = [
        { id: 'hga', label: 'High-Gain Antenna', short: 'HGA', slot: 'hga', summary: 'This giant dish is Voyager’s big space ear and mouth. It helps the spacecraft listen for messages from Earth and talk back across an enormous distance.' },
        { id: 'rss', label: 'Radio Science System', short: 'RSS', slot: 'rss', summary: 'This system uses radio signals like a science flashlight. By seeing how the signal changes, scientists can learn about rings, air, and space plasma.' },
        { id: 'scan', label: 'Scan Platform', short: 'SCAN', slot: 'scan', summary: 'This moving platform acts like a careful pointing arm. It turns instruments toward planets, moons, and other targets.' },
        { id: 'iss', label: 'Imaging Science System', short: 'ISS', slot: 'iss', summary: 'These cameras are Voyager’s eyes. They took many of the amazing pictures we still use to explore the mission today.' },
        { id: 'uvs', label: 'Ultraviolet Spectrometer', short: 'UVS', slot: 'uvs', summary: 'This tool studies a kind of light our eyes cannot see. It helps scientists learn about glowing gases and thin atmospheres.' },
        { id: 'iris', label: 'Infrared Interferometer Spectrometer', short: 'IRIS', slot: 'iris', summary: 'This instrument looks for heat. It helps scientists tell which places are warmer, cooler, or made of different materials.' },
        { id: 'pps', label: 'Photopolarimeter', short: 'PPS', slot: 'pps', summary: 'This instrument checks how light is shining and bouncing. That helps scientists study hazes, clouds, and rings.' },
        { id: 'pra', label: 'Planetary Radio Astronomy', short: 'PRA', slot: 'pra', summary: 'This is a radio listener for space. It picks up natural radio sounds coming from planets and charged particles.' },
        { id: 'pws', label: 'Plasma Wave Subsystem', short: 'PWS', slot: 'pws', summary: 'This instrument listens to waves in super-thin space gas called plasma. It helps scientists hear what space is doing around Voyager.' },
        { id: 'pls', label: 'Plasma Science', short: 'PLS', slot: 'pls', summary: 'This tool measures tiny charged particles flowing through space, a bit like checking the speed and temperature of a cosmic wind.' },
        { id: 'lecp', label: 'Low-Energy Charged Particles', short: 'LECP', slot: 'lecp', summary: 'This instrument counts fast-moving particles in space. It helps show what the solar wind and magnetic environments are like.' },
        { id: 'crs', label: 'Cosmic Ray Subsystem', short: 'CRS', slot: 'crs', summary: 'This tool counts super-energetic particles zooming through space. It helps Voyager study conditions near and beyond the heliosphere.' },
        { id: 'magboom', label: 'Magnetometer Boom', short: 'BOOM', slot: 'magboom', summary: 'This long arm holds magnetic tools far from the spacecraft so Voyager can measure space magnetism without too much interference from itself.' },
        { id: 'mag', label: 'Magnetometer', short: 'MAG', slot: 'mag', summary: 'This instrument is like a magnetic compass for space. It measures invisible magnetic fields around planets and in deep space.' },
        { id: 'fieldboom', label: 'Science Boom', short: 'BOOM', slot: 'fieldboom', summary: 'This extra arm carries science tools away from the main body so they can make cleaner measurements.' },
        { id: 'rtg', label: 'RTG Power Cluster', short: 'RTG', slot: 'rtg', summary: 'These power units are Voyager’s long-lasting batteries. They make electricity from heat so the spacecraft can keep working far from the Sun.' }
    ];

    const SLOT_LAYOUT = [
        { id: 'hga', x: 37, y: 45 },
        { id: 'rss', x: 28, y: 45 },
        { id: 'scan', x: 52, y: 57 },
        { id: 'iss', x: 62, y: 47 },
        { id: 'uvs', x: 66, y: 55 },
        { id: 'iris', x: 58, y: 65 },
        { id: 'pps', x: 49, y: 66 },
        { id: 'pra', x: 77, y: 50 },
        { id: 'pws', x: 78, y: 40 },
        { id: 'pls', x: 77, y: 72 },
        { id: 'lecp', x: 67, y: 72 },
        { id: 'crs', x: 24, y: 74 },
        { id: 'magboom', x: 76, y: 18 },
        { id: 'mag', x: 89, y: 14 },
        { id: 'fieldboom', x: 88, y: 72 },
        { id: 'rtg', x: 18, y: 84 }
    ];

    const PAGE_DATA = {
        voyager1: {
            title: 'Voyager 1',
            subtitle: 'The most distant human-made object',
            accent: '#ffd166',
            accentSoft: '#ffe7a6',
            glow: 'rgba(255,209,102,0.30)',
            heroImage: 'assets/voyagers/voyager-1.svg',
            intro: 'Launched on September 5, 1977, Voyager 1 used a fast “Grand Tour” path past Jupiter and Saturn, then turned north out of the ecliptic after its historic Titan flyby. NASA’s official mission pages describe it as the first human-made object to enter interstellar space and the farthest spacecraft ever sent from Earth.',
            quickFacts: [
                { label: 'Launch', value: 'Sept. 5, 1977', note: 'Titan IIIE-Centaur from Cape Canaveral' },
                { label: 'Major Flybys', value: 'Jupiter, Saturn', note: 'Closest approaches in 1979 and 1980' },
                { label: 'Interstellar Space', value: 'Aug. 25, 2012', note: 'First spacecraft to cross the heliopause' },
                { label: 'Distance', value: '~170 AU', note: 'Approximate early-2026 Sun distance' },
                { label: 'Speed', value: '~3.5 AU/yr', note: 'NASA FAQ value' },
                { label: 'Signature Win', value: 'Titan + Pale Blue Dot era', note: 'Saturn/Titan geometry shaped the mission' }
            ],
            cards: [
                { front: 'Fast Path', back: 'Voyager 1 launched after Voyager 2 but overtook it in December 1977 because its trajectory was optimized for a quicker Jupiter-Saturn tour.' },
                { front: 'Jupiter Lab', back: 'At Jupiter, Voyager 1 discovered a thin ring and two small moons, Thebe and Metis, while revolutionizing how scientists understood the giant planet’s magnetosphere.' },
                { front: 'Titan Choice', back: 'A close Titan flyby bent Voyager 1 upward out of the plane of the planets. That ended any chance of visiting Uranus or Neptune, but it transformed Titan science.' },
                { front: 'Interstellar Pioneer', back: 'Voyager 1 crossed the heliopause in August 2012, becoming humanity’s first direct sampler of the interstellar medium.' },
                { front: 'Power Limits', back: 'As the RTGs slowly weaken, NASA has been turning off instruments one by one. The spacecraft still sends unique fields-and-particles data from beyond the heliosphere.' },
                { front: 'Cultural Capsule', back: 'Voyager 1 carries the Golden Record, a curated time capsule of sounds, music, images, and greetings from Earth.' }
            ],
            timeline: [
                { year: '1977', title: 'Launch', body: 'Lifted off on Sept. 5, 1977 aboard Titan IIIE-Centaur.' },
                { year: '1979', title: 'Jupiter', body: 'Closest approach on March 5, 1979; found a thin ring and new moons.' },
                { year: '1980', title: 'Saturn + Titan', body: 'Closest approach on Nov. 12, 1980; the Titan encounter redirected the mission out of the ecliptic.' },
                { year: '1990', title: 'Interstellar Mission Begins', body: 'NASA officially began the Voyager Interstellar Mission phase on Jan. 1, 1990.' },
                { year: '2012', title: 'Interstellar Space', body: 'Crossed into interstellar space in August 2012.' },
                { year: '2026', title: 'Still Sending Data', body: 'Voyager 1 continues to operate under severe power limits while measuring the outer heliosphere and interstellar medium.' }
            ],
            quiz: [
                { q: 'Why did Voyager 1 not continue on to Uranus and Neptune?', choices: ['Its cameras failed at Saturn', 'Its Titan flyby bent it out of the planetary plane', 'NASA canceled all outer-planet targets in 1979', 'Jupiter gravity pushed it back inward'], correct: 1, exp: 'Voyager 1’s close Titan encounter changed its path, sending it north out of the ecliptic instead of toward Uranus and Neptune.', topic: 'Deep Space', subtopic: 'Voyager 1' },
                { q: 'Which milestone makes Voyager 1 unique among all spacecraft?', choices: ['First spacecraft to Jupiter', 'First probe to visit Uranus', 'First human-made object to enter interstellar space', 'First mission to carry plutonium power'], correct: 2, exp: 'Voyager 1 became the first human-made object to enter interstellar space in August 2012.', topic: 'Deep Space', subtopic: 'Voyager 1' },
                { q: 'Which pair of giant planets did Voyager 1 fly past up close?', choices: ['Jupiter and Saturn', 'Saturn and Uranus', 'Uranus and Neptune', 'Jupiter and Neptune'], correct: 0, exp: 'Voyager 1’s prime planetary tour covered Jupiter and Saturn.', topic: 'Deep Space', subtopic: 'Voyager 1' },
                { q: 'What famous moon strongly shaped Voyager 1’s trajectory after Saturn?', choices: ['Europa', 'Triton', 'Titan', 'Enceladus'], correct: 2, exp: 'Titan was such a high-priority target that the flyby geometry set Voyager 1 on its interstellar path.', topic: 'Deep Space', subtopic: 'Voyager 1' },
                { q: 'What is the Golden Record?', choices: ['A backup computer memory system', 'A gold-plated information disc intended as an Earth time capsule', 'A sun sensor for navigation', 'A propulsion experiment'], correct: 1, exp: 'The Golden Record is a curated message from Earth mounted on the spacecraft.', topic: 'Deep Space', subtopic: 'Voyager 1' },
                { q: 'What kind of science does Voyager 1 still do best today?', choices: ['Surface geology', 'Fields-and-particles measurements in deep space', 'Weather imaging at Saturn', 'Radar mapping'], correct: 1, exp: 'With cameras long off, Voyager 1’s most valuable modern science comes from fields-and-particles instruments.', topic: 'Deep Space', subtopic: 'Voyager 1' }
            ],
            sources: [
                { label: 'NASA Voyager 1 mission page', url: 'https://science.nasa.gov/mission/voyager/voyager-1/' },
                { label: 'NASA Voyager mission overview', url: 'https://science.nasa.gov/mission/voyager/mission-overview/' },
                { label: 'NASA Voyager FAQ', url: 'https://science.nasa.gov/mission/voyager/frequently-asked-questions/' },
                { label: 'NASA Voyager instruments page', url: 'https://science.nasa.gov/mission/voyager/instruments/' }
            ]
        },
        voyager2: {
            title: 'Voyager 2',
            subtitle: 'First to visit all four giant planets',
            accent: '#6ef0ff',
            accentSoft: '#c6fbff',
            glow: 'rgba(110,240,255,0.28)',
            heroImage: 'assets/voyagers/voyager-2.svg',
            intro: 'Launched on August 20, 1977, Voyager 2 became the only spacecraft ever to study Jupiter, Saturn, Uranus, and Neptune at close range. NASA’s official mission pages describe it as the first human-made object to fly past Uranus and Neptune and the second Voyager to reach interstellar space.',
            quickFacts: [
                { label: 'Launch', value: 'Aug. 20, 1977', note: 'Titan IIIE-Centaur from Cape Canaveral' },
                { label: 'Grand Tour', value: '4 giant planets', note: 'Jupiter, Saturn, Uranus, Neptune' },
                { label: 'Interstellar Space', value: 'Nov. 5, 2018', note: 'Second spacecraft to cross the heliopause' },
                { label: 'Distance', value: '~142 AU', note: 'Approximate early-2026 Sun distance' },
                { label: 'Speed', value: '~3.1 AU/yr', note: 'NASA FAQ value' },
                { label: 'Signature Win', value: 'Uranus + Neptune', note: 'Still the only close-up visitor to either world' }
            ],
            cards: [
                { front: 'The Complete Grand Tour', back: 'Voyager 2 is the only mission to have visited all four giant planets of the outer solar system at close range.' },
                { front: 'Uranus First', back: 'In January 1986, Voyager 2 became the first spacecraft to fly past Uranus, discovering new moons and rings and revealing a radically tilted world.' },
                { front: 'Neptune First', back: 'In August 1989, Voyager 2 became the first spacecraft to visit Neptune, finding new moons and capturing evidence of powerful atmospheric storms.' },
                { front: 'Interstellar Traveler', back: 'Voyager 2 crossed the heliopause in late 2018, giving scientists a second path through the edge of the heliosphere for comparison with Voyager 1.' },
                { front: 'Power Management', back: 'Like its twin, Voyager 2 is now in a careful long-duration phase where NASA manages a shrinking power budget to keep the most useful science alive.' },
                { front: 'Twin Design', back: 'The spacecraft are near-twins. Their shared hardware makes Voyager 2 a perfect comparison mission when scientists want to separate spacecraft effects from space-environment effects.' }
            ],
            timeline: [
                { year: '1977', title: 'Launch', body: 'Lifted off on Aug. 20, 1977 aboard Titan IIIE-Centaur.' },
                { year: '1979', title: 'Jupiter', body: 'Closest approach on July 9, 1979 during the first leg of the Grand Tour.' },
                { year: '1981', title: 'Saturn', body: 'Flew by Saturn on Aug. 25, 1981 and stayed on course for the Ice Giants.' },
                { year: '1986', title: 'Uranus', body: 'Closest approach on Jan. 24, 1986; first spacecraft to visit Uranus.' },
                { year: '1989', title: 'Neptune', body: 'Closest approach on Aug. 25, 1989; first spacecraft to visit Neptune.' },
                { year: '2018', title: 'Interstellar Space', body: 'Crossed the heliopause in late 2018 and continues measuring the interstellar environment.' }
            ],
            quiz: [
                { q: 'What makes Voyager 2 unique in planetary exploration history?', choices: ['It was the first spacecraft to leave Earth orbit', 'It is the only spacecraft to visit Uranus and Neptune', 'It returned samples from Jupiter', 'It orbited all four giant planets'], correct: 1, exp: 'Voyager 2 remains the only spacecraft to have visited Uranus and Neptune.', topic: 'Deep Space', subtopic: 'Voyager 2' },
                { q: 'Which sequence correctly lists Voyager 2’s giant-planet flybys?', choices: ['Saturn, Jupiter, Uranus, Neptune', 'Jupiter, Saturn, Uranus, Neptune', 'Jupiter, Uranus, Saturn, Neptune', 'Saturn, Uranus, Neptune, Jupiter'], correct: 1, exp: 'Voyager 2 flew by Jupiter, then Saturn, then Uranus, then Neptune.', topic: 'Deep Space', subtopic: 'Voyager 2' },
                { q: 'Why was Voyager 2 able to continue on to Uranus and Neptune after Saturn?', choices: ['It had onboard nuclear engines', 'Its Saturn geometry preserved a path deeper into the outer solar system', 'It used a lunar gravity assist', 'NASA relaunched it from Jupiter'], correct: 1, exp: 'Voyager 2’s path after Saturn was designed to keep the Grand Tour going toward Uranus and Neptune.', topic: 'Deep Space', subtopic: 'Voyager 2' },
                { q: 'Which planet did Voyager 2 reveal to have a surprisingly dynamic atmosphere with strong winds and a Great Dark Spot?', choices: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'], correct: 3, exp: 'Voyager 2 showed Neptune to be far more meteorologically active than many scientists expected.', topic: 'Deep Space', subtopic: 'Voyager 2' },
                { q: 'What happened to Voyager 2 in 2018?', choices: ['It reached the asteroid belt', 'It entered interstellar space', 'It orbited Neptune again', 'It stopped transmitting permanently'], correct: 1, exp: 'Voyager 2 crossed the heliopause and entered interstellar space in 2018.', topic: 'Deep Space', subtopic: 'Voyager 2' },
                { q: 'Why is Voyager 2 still scientifically valuable today?', choices: ['It can still land on moons', 'It provides direct measurements at the edge of and beyond the heliosphere', 'It still takes high-resolution color images', 'It refuels using solar panels'], correct: 1, exp: 'Voyager 2 gives scientists in-situ measurements of regions no other active spacecraft is traversing.', topic: 'Deep Space', subtopic: 'Voyager 2' }
            ],
            sources: [
                { label: 'NASA Voyager 2 mission page', url: 'https://science.nasa.gov/mission/voyager/voyager-2/' },
                { label: 'NASA Voyager mission overview', url: 'https://science.nasa.gov/mission/voyager/mission-overview/' },
                { label: 'NASA Voyager FAQ', url: 'https://science.nasa.gov/mission/voyager/frequently-asked-questions/' },
                { label: 'NASA Voyager instruments page', url: 'https://science.nasa.gov/mission/voyager/instruments/' }
            ]
        }
    };

    let assemblyState = { selected: null, placed: new Set() };
    let quizState = { index: 0, score: 0 };

    function init() {
        const key = document.body.dataset.voyager;
        const data = PAGE_DATA[key];
        if (!data) return;

        document.documentElement.style.setProperty('--voyager-accent', data.accent);
        document.documentElement.style.setProperty('--voyager-accent-soft', data.accentSoft);
        document.documentElement.style.setProperty('--voyager-glow', data.glow);

        setText('mission-title', data.title);
        setText('mission-subtitle', data.subtitle);
        setText('mission-intro', data.intro);
        setText('assembly-mission-name', data.title);

        const heroImg = document.getElementById('hero-spacecraft-image');
        const assemblyImg = document.getElementById('assembly-spacecraft-image');
        if (heroImg) {
            heroImg.src = data.heroImage;
            heroImg.alt = `${data.title} spacecraft illustration`;
        }
        if (assemblyImg) {
            assemblyImg.src = data.heroImage;
            assemblyImg.alt = `${data.title} assembly board`;
        }

        renderQuickFacts(data.quickFacts);
        renderCards(data.cards);
        renderTimeline(data.timeline);
        renderSources(data.sources);
        renderAssemblyBoard();
        renderAssemblyInventory();
        updateAssemblyStatus();
        initQuiz(data.quiz);
    }

    function setText(id, text) {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    }

    function renderQuickFacts(items) {
        const root = document.getElementById('quick-facts');
        if (!root) return;
        root.innerHTML = items.map((item) => `
            <article class="glass-card rounded-2xl p-4">
                <div class="font-mono text-[11px] uppercase tracking-[0.24em] text-slate-400">${item.label}</div>
                <div class="mt-2 font-display text-2xl text-white">${item.value}</div>
                <p class="mt-2 text-sm text-slate-300 leading-snug">${item.note}</p>
            </article>
        `).join('');
    }

    function renderCards(cards) {
        const root = document.getElementById('mission-cards');
        if (!root) return;
        root.innerHTML = cards.map((card, index) => `
            <button type="button" class="flip-card perspective-1000 h-64 cursor-pointer group text-left" onclick="toggleVoyagerCard(this)" aria-label="Flip mission card ${index + 1}">
                <div class="flip-card-inner relative w-full h-full text-center transform-style-3d">
                    <div class="absolute inset-0 backface-hidden glass-card rounded-3xl p-6 flex flex-col justify-between">
                        <div class="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-400">Mission Card ${index + 1}</div>
                        <div class="font-display text-3xl text-white leading-tight">${card.front}</div>
                        <div class="text-sm text-[var(--voyager-accent)] uppercase tracking-[0.2em]">Tap To Decode</div>
                    </div>
                    <div class="absolute inset-0 backface-hidden rotate-y-180 glass-panel rounded-3xl p-6 flex items-center">
                        <p class="text-left text-slate-100 leading-relaxed">${card.back}</p>
                    </div>
                </div>
            </button>
        `).join('');
    }

    function renderTimeline(items) {
        const root = document.getElementById('timeline-list');
        if (!root) return;
        root.innerHTML = items.map((item) => `
            <article class="glass-card rounded-2xl p-4 border-l-4 border-[var(--voyager-accent)]">
                <div class="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--voyager-accent)]">${item.year}</div>
                <h3 class="mt-2 font-display text-xl text-white">${item.title}</h3>
                <p class="mt-2 text-sm text-slate-300 leading-snug">${item.body}</p>
            </article>
        `).join('');
    }

    function renderSources(items) {
        const root = document.getElementById('source-list');
        if (!root) return;
        root.innerHTML = items.map((item) => `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="glass-card rounded-2xl p-4 block hover:border-white/40">
                <div class="font-display text-lg text-white">${item.label}</div>
                <div class="mt-2 text-sm text-[var(--voyager-accent)] break-all">${item.url}</div>
            </a>
        `).join('');
    }

    function renderAssemblyBoard() {
        const root = document.getElementById('assembly-slots');
        if (!root) return;
        root.innerHTML = SLOT_LAYOUT.map((slot) => {
            const part = COMMON_ASSEMBLY_PARTS.find((item) => item.slot === slot.id);
            return `
                <button type="button"
                    class="assembly-slot"
                    style="left:${slot.x}%; top:${slot.y}%"
                    data-slot="${slot.id}"
                    aria-label="Assembly slot for ${part ? part.label : slot.id}"
                    onclick="placeVoyagerPart('${slot.id}')">
                    <span>${part ? part.short : '?'}</span>
                </button>
            `;
        }).join('');
    }

    function renderAssemblyInventory() {
        const root = document.getElementById('assembly-inventory');
        if (!root) return;
        root.innerHTML = COMMON_ASSEMBLY_PARTS.map((item) => `
            <button type="button"
                id="part-${item.id}"
                class="inventory-chip"
                onclick="selectVoyagerPart('${item.id}')">
                <span class="inventory-short">${item.short}</span>
                <span>${item.label}</span>
            </button>
        `).join('');
    }

    function updateAssemblyStatus(message) {
        const progress = document.getElementById('assembly-progress');
        const hint = document.getElementById('assembly-hint');
        const total = COMMON_ASSEMBLY_PARTS.length;
        const placed = assemblyState.placed.size;
        if (progress) progress.textContent = `${placed}/${total} parts placed`;

        if (hint) {
            if (message) {
                hint.textContent = message;
            } else if (assemblyState.selected) {
                const item = COMMON_ASSEMBLY_PARTS.find((part) => part.id === assemblyState.selected);
                hint.textContent = item ? `${item.label}: ${item.summary}` : 'Select a spacecraft part or instrument.';
            } else {
                hint.textContent = 'Select a part on the right, then click its correct location on the spacecraft.';
            }
        }

        if (placed === total) {
            showVoyagerMessage('Assembly Complete', 'You rebuilt the Voyager spacecraft and instrument layout. That is exactly the kind of systems thinking these missions required.', '🛰️');
        }
    }

    function selectVoyagerPart(id) {
        if (assemblyState.placed.has(id)) return;
        assemblyState.selected = id;
        document.querySelectorAll('.inventory-chip').forEach((chip) => chip.classList.remove('selected'));
        const chip = document.getElementById(`part-${id}`);
        if (chip) chip.classList.add('selected');
        updateAssemblyStatus();
    }

    function placeVoyagerPart(slotId) {
        if (!assemblyState.selected) {
            updateAssemblyStatus('Choose a part or instrument first.');
            return;
        }

        const item = COMMON_ASSEMBLY_PARTS.find((part) => part.id === assemblyState.selected);
        if (!item) return;

        const slot = document.querySelector(`.assembly-slot[data-slot="${slotId}"]`);
        if (!slot) return;

        if (item.slot === slotId) {
            assemblyState.placed.add(item.id);
            slot.classList.add('correct');
            slot.innerHTML = `<span>${item.short}</span>`;
            const chip = document.getElementById(`part-${item.id}`);
            if (chip) {
                chip.classList.add('done');
                chip.classList.remove('selected');
            }
            assemblyState.selected = null;
            updateAssemblyStatus(`${item.label} placed correctly.`);
        } else {
            slot.classList.remove('wrong');
            void slot.offsetWidth;
            slot.classList.add('wrong');
            updateAssemblyStatus(`${item.label} does not belong there. Try another mount point.`);
        }
    }

    function initQuiz(questions) {
        const root = document.getElementById('quiz-root');
        if (!root) return;
        root.dataset.questions = JSON.stringify(questions);
        quizState = { index: 0, score: 0 };
        renderQuizQuestion();
    }

    function getQuizQuestions() {
        const root = document.getElementById('quiz-root');
        return root ? JSON.parse(root.dataset.questions || '[]') : [];
    }

    function renderQuizQuestion() {
        const questions = getQuizQuestions();
        const current = questions[quizState.index];
        if (!current) return renderQuizResults();

        setText('quiz-counter', `Question ${quizState.index + 1} of ${questions.length}`);
        setText('quiz-score', `Score ${quizState.score}`);
        setText('quiz-question', current.q);

        const choices = document.getElementById('quiz-choices');
        if (!choices) return;
        choices.innerHTML = current.choices.map((choice, index) => `
            <button type="button" class="quiz-choice" onclick="answerVoyagerQuiz(${index})">${choice}</button>
        `).join('');

        document.getElementById('quiz-explanation')?.classList.add('hidden');
        document.getElementById('quiz-next')?.classList.add('hidden');
    }

    function answerVoyagerQuiz(index) {
        const questions = getQuizQuestions();
        const current = questions[quizState.index];
        if (!current) return;

        const buttons = [...document.querySelectorAll('.quiz-choice')];
        buttons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === current.correct) btn.classList.add('correct');
            if (idx === index && idx !== current.correct) btn.classList.add('wrong');
        });

        if (index === current.correct) quizState.score += 1;
        setText('quiz-score', `Score ${quizState.score}`);
        setText('quiz-explanation-text', current.exp);
        document.getElementById('quiz-explanation')?.classList.remove('hidden');
        document.getElementById('quiz-next')?.classList.remove('hidden');
    }

    function nextVoyagerQuizQuestion() {
        quizState.index += 1;
        const questions = getQuizQuestions();
        if (quizState.index >= questions.length) {
            renderQuizResults();
        } else {
            renderQuizQuestion();
        }
    }

    function renderQuizResults() {
        const questions = getQuizQuestions();
        const total = questions.length;
        const result = document.getElementById('quiz-result');
        if (!result) return;
        const pct = total ? quizState.score / total : 0;
        const title = pct >= 0.85 ? 'Navigation Mastered' : pct >= 0.55 ? 'Mission Debrief Passed' : 'Review And Relaunch';
        const message = pct >= 0.85
            ? 'Excellent work. You have a strong grasp of the mission timeline, discoveries, and spacecraft design.'
            : pct >= 0.55
                ? 'Solid effort. Revisit a few timeline cards and the assembly bay to sharpen the details.'
                : 'Give the cards and instrument lab another run, then try the quiz again.';

        result.innerHTML = `
            <div class="glass-panel rounded-3xl p-6 text-center">
                <div class="font-display text-3xl text-white">${title}</div>
                <div class="mt-3 text-5xl text-[var(--voyager-accent)]">${quizState.score}/${total}</div>
                <p class="mt-3 text-sm text-slate-300 max-w-xl mx-auto">${message}</p>
                <button type="button" class="mission-btn mt-6" onclick="restartVoyagerQuiz()">Retake Quiz</button>
            </div>
        `;
        result.classList.remove('hidden');
        document.getElementById('quiz-panel')?.classList.add('hidden');
    }

    function restartVoyagerQuiz() {
        quizState = { index: 0, score: 0 };
        document.getElementById('quiz-result')?.classList.add('hidden');
        document.getElementById('quiz-panel')?.classList.remove('hidden');
        renderQuizQuestion();
    }

    function toggleVoyagerCard(el) {
        el.classList.toggle('flipped');
    }

    function showVoyagerMessage(title, text, icon) {
        setText('msg-title', title);
        setText('msg-text', text);
        setText('msg-icon', icon || '✨');
        document.getElementById('msg-box')?.classList.add('active');
    }

    function closeVoyagerMessage() {
        document.getElementById('msg-box')?.classList.remove('active');
    }

    window.toggleVoyagerCard = toggleVoyagerCard;
    window.selectVoyagerPart = selectVoyagerPart;
    window.placeVoyagerPart = placeVoyagerPart;
    window.answerVoyagerQuiz = answerVoyagerQuiz;
    window.nextVoyagerQuizQuestion = nextVoyagerQuizQuestion;
    window.restartVoyagerQuiz = restartVoyagerQuiz;
    window.closeVoyagerMessage = closeVoyagerMessage;

    document.addEventListener('DOMContentLoaded', init);
})();
