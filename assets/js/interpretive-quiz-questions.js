(function () {
    const interpretiveQuestions = [
        {
            id: 'interpretive-mercury-1',
            sourcePath: 'mercury/mercury.html',
            topic: 'Mercury',
            subtopic: 'Mercury',
            sourceTitle: 'Mercury',
            question: 'A probe can only survive one Mercury landing site. Which choice best applies Mercury facts to mission planning?',
            choices: [
                'A permanently shadowed polar crater, because it avoids the harshest sunlight and can preserve ice',
                'The equator at noon, because Mercury has the thickest atmosphere there',
                'The Caloris Basin during perihelion, because solar heating is weakest there',
                'Any lowland plain, because Mercury has Earth-like weather patterns'
            ],
            correctIndex: 0,
            explanation: 'Mercury has almost no atmosphere and extreme sunlight, but permanently shadowed polar craters can stay cold enough to preserve water ice and protect instruments from direct solar heating.'
        },
        {
            id: 'interpretive-venus-1',
            sourcePath: 'venus/venus.html',
            topic: 'Venus',
            subtopic: 'Venus',
            sourceTitle: 'Venus',
            question: 'Why would a Venus mapping mission rely on radar rather than normal visible-light photography?',
            choices: [
                'Radar can penetrate the planetwide cloud deck that blocks visible views of the surface',
                'Venus has no solid surface to photograph',
                'Radar works only because Venus has no atmosphere',
                'Visible light cannot travel through space near Venus'
            ],
            correctIndex: 0,
            explanation: 'Venus is wrapped in thick sulfuric-acid clouds. Radar can pass through those clouds and bounce off the surface, which is why missions such as Magellan could map the terrain.'
        },
        {
            id: 'interpretive-earth-1',
            sourcePath: 'earth/earth.html',
            topic: 'Earth',
            subtopic: 'Earth',
            sourceTitle: 'Earth',
            question: 'Which combination best explains why Earth can keep stable liquid water on its surface?',
            choices: [
                'Moderate solar distance, enough gravity to hold an atmosphere, and a climate-regulating water cycle',
                'No atmosphere, weak gravity, and constant volcanic resurfacing',
                'A mostly hydrogen atmosphere and no magnetic field',
                'A surface hotter than Venus and a year shorter than Mercury'
            ],
            correctIndex: 0,
            explanation: 'Earth applies several base facts at once: it orbits in a moderate temperature range, holds an atmosphere, and cycles water through oceans, clouds, and precipitation.'
        },
        {
            id: 'interpretive-luna-1',
            sourcePath: 'earth/luna.html',
            topic: 'Earth',
            subtopic: 'Luna',
            sourceTitle: 'The Moon',
            question: 'If you saw many large, ancient craters preserved on the Moon, what interpretation would fit best?',
            choices: [
                'The Moon has little weather, liquid water, or plate tectonics to erase old impact scars',
                'The Moon has stronger rainstorms than Earth',
                'The Moon resurfaces itself with active plate tectonics every few million years',
                'The Moon has no solid surface'
            ],
            correctIndex: 0,
            explanation: 'The Moon preserves ancient impacts because it lacks the active erosion and plate tectonics that constantly recycle much of Earth surface.'
        },
        {
            id: 'interpretive-mars-1',
            sourcePath: 'mars/mars.html',
            topic: 'Mars',
            subtopic: 'Mars',
            sourceTitle: 'Mars',
            question: 'A rover finds rounded pebbles inside an ancient channel on Mars. Which conclusion best uses the evidence?',
            choices: [
                'Liquid water probably moved those rocks in the past',
                'Mars must currently have warm oceans',
                'The pebbles prove Mars has plate tectonics like Earth',
                'The rocks were rounded by Saturn ring particles'
            ],
            correctIndex: 0,
            explanation: 'Rounded pebbles and channels are interpretive evidence: moving water can tumble rocks until their edges wear down, even if Mars is dry and cold today.'
        },
        {
            id: 'interpretive-phobos-1',
            sourcePath: 'mars/phobos.html',
            topic: 'Mars',
            subtopic: 'Phobos',
            sourceTitle: 'Phobos',
            question: 'Phobos orbits very close to Mars and is slowly spiraling inward. What is the best long-term prediction?',
            choices: [
                'It will likely break apart into a ring or crash into Mars in the distant future',
                'It will become a larger planet than Mars',
                'It will move outward until it orbits Jupiter',
                'It will develop a thick oxygen atmosphere'
            ],
            correctIndex: 0,
            explanation: 'Phobos is inside a region where Mars tides are pulling it inward. Over millions of years, it is expected either to break apart into debris or impact Mars.'
        },
        {
            id: 'interpretive-deimos-1',
            sourcePath: 'mars/deimos.html',
            topic: 'Mars',
            subtopic: 'Deimos',
            sourceTitle: 'Deimos',
            question: 'Which comparison correctly interprets the Mars moons from innermost to outermost?',
            choices: [
                'Phobos, then Deimos',
                'Deimos, then Phobos',
                'Luna, then Phobos',
                'Europa, then Deimos'
            ],
            correctIndex: 0,
            explanation: 'Phobos is the inner Martian moon, while smaller Deimos orbits farther out.'
        },
        {
            id: 'interpretive-jupiter-1',
            sourcePath: 'jupiter/jupiter.html',
            topic: 'Jupiter',
            subtopic: 'Jupiter',
            sourceTitle: 'Jupiter',
            question: 'Why does Jupiter strongly reshape the activity of its major moons?',
            choices: [
                'Its huge gravity creates tidal forces and orbital resonances that heat and stress nearby moons',
                'Its solid surface rubs directly against the moons',
                'Its rings block all sunlight from reaching the moons',
                'Its magnetic field turns every moon into a star'
            ],
            correctIndex: 0,
            explanation: 'Jupiter mass drives strong tidal effects. In the Galilean system, resonances especially affect Io, Europa, and Ganymede, powering geology and internal heating.'
        },
        {
            id: 'interpretive-io-1',
            sourcePath: 'jupiter/io.html',
            topic: 'Jupiter',
            subtopic: 'Io',
            sourceTitle: 'Io',
            question: 'Io is covered with active volcanoes even though it is small. Which explanation applies the moon facts best?',
            choices: [
                'Jupiter and neighboring moons flex Io through tidal heating',
                'Io is close enough to the Sun to melt like Mercury',
                'Io has Earth-style rain erosion',
                'Io is heated mainly by humans landing probes there'
            ],
            correctIndex: 0,
            explanation: 'Io volcanic activity is powered by tidal heating as Jupiter gravity and orbital resonances continually stretch and squeeze the moon.'
        },
        {
            id: 'interpretive-europa-1',
            sourcePath: 'jupiter/europa.html',
            topic: 'Jupiter',
            subtopic: 'Europa',
            sourceTitle: 'Europa',
            question: 'Why is Europa often considered a stronger astrobiology target than Io?',
            choices: [
                'Europa likely has a salty subsurface ocean beneath ice, while Io is dominated by extreme volcanism',
                'Europa is the hottest volcanic body in the solar system',
                'Europa has a breathable oxygen atmosphere at sea level',
                'Europa is closer to the Sun than Earth'
            ],
            correctIndex: 0,
            explanation: 'Europa combines water, chemistry, and tidal energy in a possible ocean environment. Io has energy too, but its surface is intensely volcanic and hostile.'
        },
        {
            id: 'interpretive-ganymede-1',
            sourcePath: 'jupiter/ganymede.html',
            topic: 'Jupiter',
            subtopic: 'Ganymede',
            sourceTitle: 'Ganymede',
            question: 'Which statement best interprets Ganymede size and structure?',
            choices: [
                'It is larger than Mercury and is the only moon known to generate its own magnetic field',
                'It is smaller than Phobos and has no ice',
                'It is inside Saturn rings',
                'It is the closest Galilean moon to Jupiter'
            ],
            correctIndex: 0,
            explanation: 'Ganymede is the largest moon in the solar system, larger than Mercury by diameter, and it has evidence of an internally generated magnetic field.'
        },
        {
            id: 'interpretive-callisto-1',
            sourcePath: 'jupiter/callisto.html',
            topic: 'Jupiter',
            subtopic: 'Callisto',
            sourceTitle: 'Callisto',
            question: 'Callisto is heavily cratered. What does that suggest when compared with more resurfaced moons?',
            choices: [
                'Its surface has been geologically quieter for a long time',
                'It has the most active lava volcanoes in the solar system',
                'It has no history of impacts',
                'It recently formed from Saturn rings'
            ],
            correctIndex: 0,
            explanation: 'A heavily cratered surface usually means old terrain has not been erased by frequent volcanism, tectonics, or icy resurfacing.'
        },
        {
            id: 'interpretive-saturn-1',
            sourcePath: 'saturn/saturn.html',
            topic: 'Saturn',
            subtopic: 'Saturn',
            sourceTitle: 'Saturn',
            question: 'Saturn is less dense than water. What is the best interpretation of that fact?',
            choices: [
                'Its average density is very low because it is made mostly of hydrogen and helium',
                'It is a small rocky planet like Mercury',
                'It has no gravity',
                'Its rings are made of liquid water oceans'
            ],
            correctIndex: 0,
            explanation: 'Saturn can still be massive and have strong gravity, but its huge volume and light gases give it an average density lower than liquid water.'
        },
        {
            id: 'interpretive-titan-1',
            sourcePath: 'saturn/titan.html',
            topic: 'Saturn',
            subtopic: 'Titan',
            sourceTitle: 'Titan',
            question: 'Why is Titan often compared with early Earth even though it is much colder?',
            choices: [
                'It has a thick nitrogen atmosphere and active surface liquids, but the liquids are methane and ethane',
                'It has warm saltwater oceans exposed to the air',
                'It has no atmosphere and no chemistry',
                'It is hotter than Venus'
            ],
            correctIndex: 0,
            explanation: 'Titan is chemically complex, with a dense nitrogen atmosphere and methane-based weather. The comparison is about active chemistry, not matching Earth temperature.'
        },
        {
            id: 'interpretive-enceladus-1',
            sourcePath: 'saturn/enceladus.html',
            topic: 'Saturn',
            subtopic: 'Enceladus',
            sourceTitle: 'Enceladus',
            question: 'What makes Enceladus a practical place to sample a subsurface ocean?',
            choices: [
                'Its south-polar geysers spray ocean material into space',
                'It has oceans exposed across the whole surface',
                'It is larger than Earth',
                'It has no ice shell'
            ],
            correctIndex: 0,
            explanation: 'Enceladus geysers vent material from beneath the icy crust. A spacecraft can fly through the plume and sample ocean-linked particles without drilling.'
        },
        {
            id: 'interpretive-mimas-1',
            sourcePath: 'saturn/mimas.html',
            topic: 'Saturn',
            subtopic: 'Mimas',
            sourceTitle: 'Mimas',
            question: 'Mimas has the enormous Herschel crater. What does that help students infer?',
            choices: [
                'A past impact nearly disrupted a very small icy moon',
                'Mimas is covered in active lava lakes',
                'Mimas has the thickest atmosphere of any moon',
                'Mimas is the largest moon of Saturn'
            ],
            correctIndex: 0,
            explanation: 'Herschel crater is huge relative to Mimas. Its scale shows how close a large impact came to breaking the small moon apart.'
        },
        {
            id: 'interpretive-rhea-1',
            sourcePath: 'saturn/rhea.html',
            topic: 'Saturn',
            subtopic: 'Rhea',
            sourceTitle: 'Rhea',
            question: 'Rhea is icy, cratered, and much smaller than Titan. Which statement best compares the two moons?',
            choices: [
                'Titan can hold a dense atmosphere, while Rhea only has an extremely thin exosphere',
                'Rhea has thicker air than Titan',
                'Rhea is hotter because it is closer to the Sun',
                'Titan has no surface chemistry'
            ],
            correctIndex: 0,
            explanation: 'Titan large mass and cold temperature help it keep a dense atmosphere. Rhea has only a very tenuous oxygen-carbon dioxide exosphere.'
        },
        {
            id: 'interpretive-iapetus-1',
            sourcePath: 'saturn/iapetus.html',
            topic: 'Saturn',
            subtopic: 'Iapetus',
            sourceTitle: 'Iapetus',
            question: 'Iapetus has one dark side and one bright side. What is the best interpretive explanation?',
            choices: [
                'Dark material collected on the leading side, then sunlight warmed it and amplified the contrast',
                'Half the moon is made of liquid iron',
                'Saturn blocks sunlight from exactly one hemisphere forever',
                'The bright side is covered by a thick atmosphere'
            ],
            correctIndex: 0,
            explanation: 'Iapetus two-tone look is linked to dark material on one hemisphere and a thermal feedback that helps ice migrate away from warmer dark regions.'
        },
        {
            id: 'interpretive-uranus-1',
            sourcePath: 'uranus/uranus.html',
            topic: 'Uranus',
            subtopic: 'Uranus',
            sourceTitle: 'Uranus',
            question: 'What is the best consequence of Uranus rotating on its side?',
            choices: [
                'Its poles can experience decades of sunlight followed by decades of darkness',
                'It has no seasons at all',
                'Its moons orbit the Sun instead of Uranus',
                'It becomes hotter than Mercury'
            ],
            correctIndex: 0,
            explanation: 'Uranus extreme axial tilt means its seasons are extreme and long. A pole can face the Sun for about half of the 84-year orbit.'
        },
        {
            id: 'interpretive-miranda-1',
            sourcePath: 'uranus/miranda.html',
            topic: 'Uranus',
            subtopic: 'Miranda',
            sourceTitle: 'Miranda',
            question: 'Miranda has cliffs, grooves, and patched terrain. What interpretation fits this strange surface?',
            choices: [
                'It likely experienced intense past disruption or resurfacing despite being small',
                'It has an Earthlike ocean and beaches today',
                'It is completely smooth because nothing ever happened there',
                'It is a captured comet with no connection to Uranus'
            ],
            correctIndex: 0,
            explanation: 'Miranda surface looks unusually jumbled for such a small moon, suggesting a complicated history of tidal heating, resurfacing, or disruption.'
        },
        {
            id: 'interpretive-ariel-1',
            sourcePath: 'uranus/ariel.html',
            topic: 'Uranus',
            subtopic: 'Ariel',
            sourceTitle: 'Ariel',
            question: 'Ariel is brighter and less cratered than Umbriel. What is the best comparison?',
            choices: [
                'Ariel surface is probably younger or more resurfaced than Umbriel surface',
                'Ariel must be closer to the Sun than Mercury',
                'Umbriel has no craters',
                'Ariel is made mostly of metal while Umbriel is all gas'
            ],
            correctIndex: 0,
            explanation: 'Brightness and fewer craters can suggest fresher icy material and younger resurfaced terrain compared with an older, darker, cratered surface.'
        },
        {
            id: 'interpretive-umbriel-1',
            sourcePath: 'uranus/umbriel.html',
            topic: 'Uranus',
            subtopic: 'Umbriel',
            sourceTitle: 'Umbriel',
            question: 'Umbriel is dark and heavily cratered, with a bright ring in Wunda crater. What should students infer?',
            choices: [
                'Most of the surface is old and dark, but the crater exposed or collected brighter material',
                'The whole moon is currently covered by glowing lava',
                'Umbriel is the innermost Uranian moon',
                'Wunda is a liquid ocean'
            ],
            correctIndex: 0,
            explanation: 'The contrast between Umbriel dark terrain and Wunda bright ring invites interpretation: an impact can expose fresher ice or concentrate brighter material.'
        },
        {
            id: 'interpretive-titania-1',
            sourcePath: 'uranus/titania.html',
            topic: 'Uranus',
            subtopic: 'Titania',
            sourceTitle: 'Titania',
            question: 'Titania has long fault valleys. What do they suggest about its interior history?',
            choices: [
                'The moon may have expanded as its interior froze, cracking the icy crust',
                'It is a gas giant with no surface',
                'It has active plate tectonics exactly like Earth',
                'It was never heated internally'
            ],
            correctIndex: 0,
            explanation: 'Large fault systems on icy moons can form when internal changes, including freezing and expansion, stress and crack the outer shell.'
        },
        {
            id: 'interpretive-oberon-1',
            sourcePath: 'uranus/oberon.html',
            topic: 'Uranus',
            subtopic: 'Oberon',
            sourceTitle: 'Oberon',
            question: 'Oberon is outermost among the five major Uranian moons and is heavily cratered. Which interpretation is strongest?',
            choices: [
                'Its surface has probably been less resurfaced than some inner Uranian moons',
                'It is the youngest and smoothest major Uranian moon',
                'It has a thick methane atmosphere like Titan',
                'It orbits inside Miranda'
            ],
            correctIndex: 0,
            explanation: 'A heavily cratered outer moon usually points to an old surface with fewer resurfacing events than brighter, more tectonically altered moons such as Ariel.'
        },
        {
            id: 'interpretive-neptune-1',
            sourcePath: 'neptune/neptune.html',
            topic: 'Neptune',
            subtopic: 'Neptune',
            sourceTitle: 'Neptune',
            question: 'Neptune is far from the Sun but has extremely fast winds. What explanation best applies the facts?',
            choices: [
                'Internal heat and atmospheric dynamics help drive storms even with weak sunlight',
                'It is close enough to the Sun for desert winds',
                'It has a solid surface spinning under the clouds',
                'Its winds are caused by Saturn rings'
            ],
            correctIndex: 0,
            explanation: 'Neptune receives little sunlight, so its strong weather points students toward internal heat and atmospheric circulation rather than simple solar heating.'
        },
        {
            id: 'interpretive-triton-1',
            sourcePath: 'neptune/triton.html',
            topic: 'Neptune',
            subtopic: 'Triton',
            sourceTitle: 'Triton',
            question: 'Triton orbits Neptune backward compared with Neptune rotation. What is the best interpretation?',
            choices: [
                'Triton was probably captured rather than formed normally beside Neptune',
                'Triton is older than the Sun',
                'Triton must be inside Jupiter orbit',
                'Backward orbit proves Triton has no ice'
            ],
            correctIndex: 0,
            explanation: 'A large retrograde moon is unusual. Triton backward orbit strongly suggests it was captured, likely from the Kuiper Belt.'
        },
        {
            id: 'interpretive-nereid-1',
            sourcePath: 'neptune/Nereid.html',
            topic: 'Neptune',
            subtopic: 'Nereid',
            sourceTitle: 'Nereid',
            question: 'Nereid has a very stretched-out orbit. What does that orbital shape suggest?',
            choices: [
                'Its history was probably disturbed by capture or gravitational interactions',
                'It is the closest moon to Neptune',
                'It has a perfectly circular orbit',
                'It is larger than Triton'
            ],
            correctIndex: 0,
            explanation: 'A highly eccentric orbit is a clue that Nereid may have had a disturbed past, possibly connected to Triton capture or other gravitational interactions.'
        },
        {
            id: 'interpretive-larissa-1',
            sourcePath: 'neptune/larissa.html',
            topic: 'Neptune',
            subtopic: 'Larissa',
            sourceTitle: 'Larissa',
            question: 'Larissa is small, irregular, and close to Neptune. What is the best inference about its shape?',
            choices: [
                'Its gravity is too weak to pull it into a round sphere',
                'It is a gas giant moon with no surface',
                'It is larger than Earth Moon',
                'It is round because it has active plate tectonics'
            ],
            correctIndex: 0,
            explanation: 'Small moons often have too little self-gravity to become spherical, so they keep irregular, battered shapes.'
        },
        {
            id: 'interpretive-proteus-1',
            sourcePath: 'neptune/proteus.html',
            topic: 'Neptune',
            subtopic: 'Proteus',
            sourceTitle: 'Proteus',
            question: 'Proteus is one of Neptune larger inner moons but is still irregular. What does that help show?',
            choices: [
                'There is a size threshold before gravity can easily round an icy body',
                'All large moons must be perfect spheres',
                'Proteus is made only of liquid water',
                'Proteus is farther away than Nereid'
            ],
            correctIndex: 0,
            explanation: 'Proteus is near the upper size range for irregular moons, making it a useful example of how self-gravity, composition, and temperature affect shape.'
        },
        {
            id: 'interpretive-master-galilean-inner-order',
            sourcePath: 'master-quiz.html',
            topic: 'Master Quiz',
            subtopic: 'Moon Ordering',
            sourceTitle: 'Solar System Master Quiz',
            question: 'Order Jupiter major Galilean moons from innermost to outermost.',
            choices: [
                'Io, Europa, Ganymede, Callisto',
                'Callisto, Ganymede, Europa, Io',
                'Europa, Io, Callisto, Ganymede',
                'Ganymede, Callisto, Io, Europa'
            ],
            correctIndex: 0,
            explanation: 'The Galilean moons move outward from Jupiter as Io, Europa, Ganymede, and Callisto.'
        },
        {
            id: 'interpretive-master-galilean-size-order',
            sourcePath: 'master-quiz.html',
            topic: 'Master Quiz',
            subtopic: 'Moon Ordering',
            sourceTitle: 'Solar System Master Quiz',
            question: 'Order Jupiter Galilean moons from smallest to biggest by diameter.',
            choices: [
                'Europa, Io, Callisto, Ganymede',
                'Io, Europa, Ganymede, Callisto',
                'Callisto, Europa, Io, Ganymede',
                'Ganymede, Callisto, Io, Europa'
            ],
            correctIndex: 0,
            explanation: 'By diameter, Europa is smallest, then Io, then Callisto, and Ganymede is largest.'
        },
        {
            id: 'interpretive-master-saturn-inner-order',
            sourcePath: 'master-quiz.html',
            topic: 'Master Quiz',
            subtopic: 'Moon Ordering',
            sourceTitle: 'Solar System Master Quiz',
            question: 'Using the Saturn moon pages, which selected moons are ordered from innermost to outermost?',
            choices: [
                'Mimas, Enceladus, Rhea, Titan, Iapetus',
                'Titan, Rhea, Enceladus, Mimas, Iapetus',
                'Iapetus, Titan, Rhea, Enceladus, Mimas',
                'Rhea, Mimas, Titan, Iapetus, Enceladus'
            ],
            correctIndex: 0,
            explanation: 'Among these Saturn moons, the orbital order outward is Mimas, Enceladus, Rhea, Titan, and Iapetus.'
        },
        {
            id: 'interpretive-master-uranus-inner-order',
            sourcePath: 'master-quiz.html',
            topic: 'Master Quiz',
            subtopic: 'Moon Ordering',
            sourceTitle: 'Solar System Master Quiz',
            question: 'Order Uranus five major moons from innermost to outermost.',
            choices: [
                'Miranda, Ariel, Umbriel, Titania, Oberon',
                'Oberon, Titania, Umbriel, Ariel, Miranda',
                'Ariel, Miranda, Titania, Umbriel, Oberon',
                'Umbriel, Ariel, Miranda, Oberon, Titania'
            ],
            correctIndex: 0,
            explanation: 'The five major Uranian moons are ordered outward as Miranda, Ariel, Umbriel, Titania, and Oberon.'
        },
        {
            id: 'interpretive-master-neptune-size-order',
            sourcePath: 'master-quiz.html',
            topic: 'Master Quiz',
            subtopic: 'Moon Ordering',
            sourceTitle: 'Solar System Master Quiz',
            question: 'Order these Neptune moons from smallest to biggest.',
            choices: [
                'Larissa, Nereid, Proteus, Triton',
                'Triton, Proteus, Nereid, Larissa',
                'Proteus, Larissa, Triton, Nereid',
                'Nereid, Triton, Larissa, Proteus'
            ],
            correctIndex: 0,
            explanation: 'Among these four, Larissa is smallest, then Nereid, then Proteus, while Triton is by far the largest.'
        },
        {
            id: 'interpretive-master-everest-comparison',
            sourcePath: 'master-quiz.html',
            topic: 'Master Quiz',
            subtopic: 'Extreme Features',
            sourceTitle: 'Solar System Master Quiz',
            question: 'Which solar-system feature is famously much taller than Mount Everest?',
            choices: [
                'Olympus Mons on Mars',
                'Herschel crater on Mimas',
                'Wunda crater on Umbriel',
                'The Galle ring of Neptune'
            ],
            correctIndex: 0,
            explanation: 'Olympus Mons on Mars rises about 22 km above the surrounding plains, making it far taller than Mount Everest above sea level.'
        },
        {
            id: 'interpretive-master-short-jupiter-moons',
            sourcePath: 'master-quiz.html',
            topic: 'Master Quiz',
            subtopic: 'Written Response',
            sourceTitle: 'Solar System Master Quiz',
            question: 'Type two of Jupiter major moons and briefly describe why each is scientifically interesting.',
            questionType: 'short-answer',
            sampleAnswer: 'Example: Io is interesting because tidal heating makes it the most volcanically active world in the solar system. Europa is interesting because it likely has a salty ocean beneath its ice shell, making it a major astrobiology target.',
            rubric: 'A strong answer names two Galilean moons and gives a meaningful description for each, such as Io volcanoes, Europa ocean, Ganymede size and magnetic field, or Callisto ancient cratered surface.'
        },
        {
            id: 'interpretive-master-short-planet-mission',
            sourcePath: 'master-quiz.html',
            topic: 'Master Quiz',
            subtopic: 'Written Response',
            sourceTitle: 'Solar System Master Quiz',
            question: 'Choose one planet and explain how one physical fact about it would change how you design a spacecraft mission.',
            questionType: 'short-answer',
            sampleAnswer: 'Example: For Venus, I would design a radar orbiter or a very heat-resistant lander because the cloud deck hides the surface and the lower atmosphere has crushing pressure and extreme heat.',
            rubric: 'A strong answer names a planet, states a real physical fact, and connects that fact to a mission design choice.'
        }
    ];

    function slugify(value) {
        return String(value)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    function toMasterQuestion(question) {
        const hasChoices = Array.isArray(question.choices) && question.choices.length > 0;
        return {
            id: question.id,
            question: question.question,
            choices: hasChoices ? [...question.choices] : [],
            correctIndex: hasChoices ? question.correctIndex : -1,
            explanation: question.explanation || question.sampleAnswer || '',
            sampleAnswer: question.sampleAnswer || '',
            rubric: question.rubric || '',
            questionType: question.questionType || 'multiple-choice',
            category: 'interpretive',
            tags: ['interpretive'],
            difficulty: question.difficulty || 'hard',
            topic: question.topic,
            subtopic: question.subtopic,
            topicSlug: slugify(question.topic),
            subtopicSlug: slugify(question.subtopic),
            sourceTitle: question.sourceTitle,
            sourcePath: question.sourcePath,
            sourceType: hasChoices && question.sourcePath !== 'master-quiz.html' ? 'page-quiz' : 'interpretive-practice'
        };
    }

    function augmentMasterData() {
        const data = window.MASTER_QUIZ_DATA;
        if (!data || !Array.isArray(data.questions)) return;

        const existingIds = new Set(data.questions.map((question) => question.id));
        const additions = interpretiveQuestions
            .map(toMasterQuestion)
            .filter((question) => !existingIds.has(question.id));

        if (!additions.length) return;

        data.questions.push(...additions);
        data.questionCount = data.questions.length;
        data.topics = [...new Set(data.questions.map((question) => question.topic))].sort();
        data.difficulties = [...new Set([...(data.difficulties || []), ...data.questions.map((question) => question.difficulty)])];
        data.categories = [...new Set(data.questions.map((question) => question.category || 'fact'))].sort();
        data.subtopicsByTopic = data.topics.reduce((acc, topic) => {
            acc[topic] = [...new Set(
                data.questions
                    .filter((question) => question.topic === topic)
                    .map((question) => question.subtopic)
            )].sort();
            return acc;
        }, {});
    }

    function convertMultipleChoice(question, format) {
        const choices = question.choices.map((choice, index) => ({
            text: choice,
            isCorrect: index === question.correctIndex
        }));

        if (format === 'answers') {
            return {
                q: question.question,
                a: choices.map((choice) => ({ t: choice.text, c: choice.isCorrect })),
                exp: question.explanation,
                category: 'interpretive',
                tags: ['interpretive']
            };
        }

        if (format === 'correct-wrongs') {
            return {
                q: question.question,
                c: question.choices[question.correctIndex],
                w: question.choices.filter((_, index) => index !== question.correctIndex).slice(0, 3),
                exp: question.explanation,
                category: 'interpretive',
                tags: ['interpretive']
            };
        }

        if (format === 'correct-string') {
            return {
                q: question.question,
                options: [...question.choices],
                correct: question.choices[question.correctIndex],
                explanation: question.explanation,
                category: 'interpretive',
                tags: ['interpretive']
            };
        }

        return {
            q: question.question,
            options: choices,
            explanation: question.explanation,
            category: 'interpretive',
            tags: ['interpretive']
        };
    }

    function extendLocalQuestions(sourcePath, target, format) {
        if (!Array.isArray(target)) return target;

        const existingPrompts = new Set(target.map((question) => question.q || question.question));
        interpretiveQuestions
            .filter((question) => question.sourcePath === sourcePath && question.questionType !== 'short-answer')
            .forEach((question) => {
                if (!existingPrompts.has(question.question)) {
                    target.push(convertMultipleChoice(question, format));
                }
            });

        return target;
    }

    window.InterpretiveQuiz = {
        questions: interpretiveQuestions,
        augmentMasterData,
        extendLocalQuestions
    };

    augmentMasterData();
})();
