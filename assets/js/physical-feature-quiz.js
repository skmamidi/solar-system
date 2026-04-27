(function () {
    const FEATURE_ITEMS = [
        {
            path: 'mercury/mercury.html',
            world: 'Mercury',
            feature: 'Caloris Basin',
            visual: 'caloris-basin',
            prompt: 'Which Mercury surface feature is shown in the mission scan?',
            options: [
                { text: 'Caloris Basin', correct: true, feedback: 'Correct. Caloris Basin is one of Mercury\'s largest impact basins, with broad circular rings and scarred plains from an ancient collision.' },
                { text: 'Valles Marineris', feedback: 'Valles Marineris is the giant canyon system on Mars, not Mercury.' },
                { text: 'Great Red Spot', feedback: 'The Great Red Spot is Jupiter\'s long-lived storm. Mercury has no thick atmosphere for storms like that.' },
                { text: 'Tiger stripes', feedback: 'Tiger stripes are the active south-pole fissures on Enceladus.' }
            ],
            explanation: 'The wide circular basin, nested rings, and heavily cratered terrain point to Caloris Basin. It formed when a huge impactor struck Mercury early in solar system history.'
        },
        {
            path: 'venus/venus.html',
            world: 'Venus',
            feature: 'Maat Mons',
            visual: 'maat-mons',
            prompt: 'Which volcanic Venus landmark is shown in the radar-style view?',
            options: [
                { text: 'Maat Mons', correct: true, feedback: 'Correct. Maat Mons is a tall volcanic rise on Venus and one of the planet\'s best-known volcanoes.' },
                { text: 'Olympus Mons', feedback: 'Olympus Mons is the enormous shield volcano on Mars.' },
                { text: 'Kraken Mare', feedback: 'Kraken Mare is a methane sea on Titan, not a volcano on Venus.' },
                { text: 'Valhalla Basin', feedback: 'Valhalla is a multi-ring impact basin on Callisto.' }
            ],
            explanation: 'The broad volcanic cone and lava-like radar plains are a match for Maat Mons, a major Venusian volcano rising from the planet\'s hot, pressure-crushed surface.'
        },
        {
            path: 'earth/earth.html',
            world: 'Earth',
            feature: 'Blue oceans and cloud systems',
            visual: 'blue-marble',
            prompt: 'What identifying Earth feature is shown in this view?',
            options: [
                { text: 'Blue oceans and cloud systems', correct: true, feedback: 'Correct. Earth is instantly recognizable by liquid-water oceans, bright cloud bands, and exposed continents.' },
                { text: 'Methane seas', feedback: 'Methane seas belong to Titan. Earth\'s visible blue color comes mostly from liquid water oceans.' },
                { text: 'Sulfur volcano fields', feedback: 'Sulfur-rich volcanic terrain is a signature of Io.' },
                { text: 'Global dust dunes only', feedback: 'Earth has deserts, but its global signature is oceans, land, and weather systems together.' }
            ],
            explanation: 'The blue ocean, green-brown continents, and swirling white clouds identify Earth. No other known solar-system world combines stable surface oceans with an active weather-filled atmosphere like this.'
        },
        {
            path: 'earth/luna.html',
            world: 'Luna',
            feature: 'Tycho crater rays',
            visual: 'tycho-rays',
            prompt: 'Which lunar feature is highlighted by the bright spoke-like rays?',
            options: [
                { text: 'Tycho crater rays', correct: true, feedback: 'Correct. Tycho has one of the Moon\'s most dramatic ray systems, spreading bright ejecta across the lunar surface.' },
                { text: 'Caloris Basin', feedback: 'Caloris Basin is on Mercury and is much larger than Tycho.' },
                { text: 'Herschel crater', feedback: 'Herschel crater is the enormous crater on Saturn\'s moon Mimas.' },
                { text: 'Wunda crater', feedback: 'Wunda is a bright-ringed crater on Uranus\'s moon Umbriel.' }
            ],
            explanation: 'The sharp bright rays radiating away from a young impact crater identify Tycho. Those rays are fresh ejecta blasted outward during the impact.'
        },
        {
            path: 'mars/mars.html',
            world: 'Mars',
            feature: 'Valles Marineris',
            visual: 'valles-marineris',
            prompt: 'Which huge Martian landform cuts across the red terrain?',
            options: [
                { text: 'Valles Marineris', correct: true, feedback: 'Correct. Valles Marineris is a vast canyon system that stretches thousands of kilometers across Mars.' },
                { text: 'Great Dark Spot', feedback: 'The Great Dark Spot is a storm feature observed on Neptune.' },
                { text: 'Messina Chasma', feedback: 'Messina Chasma is a canyon system on Uranus\'s moon Titania, not Mars.' },
                { text: 'Europa lineae', feedback: 'Europa lineae are reddish cracks in Europa\'s icy crust.' }
            ],
            explanation: 'The long trench, branching side canyons, and rust-colored surface identify Valles Marineris, the largest canyon system in the solar system.'
        },
        {
            path: 'mars/phobos.html',
            world: 'Phobos',
            feature: 'Stickney crater',
            visual: 'stickney',
            prompt: 'What is the giant impact scar on Phobos called?',
            options: [
                { text: 'Stickney crater', correct: true, feedback: 'Correct. Stickney is so large compared with Phobos that it nearly dominates the whole moon.' },
                { text: 'Herschel crater', feedback: 'Herschel is the giant crater on Mimas.' },
                { text: 'Pharos crater', feedback: 'Pharos is the large crater on Proteus.' },
                { text: 'Hamlet crater', feedback: 'Hamlet is a prominent crater on Oberon.' }
            ],
            explanation: 'The irregular potato-like shape plus an oversized circular scar identify Phobos and its huge Stickney crater.'
        },
        {
            path: 'mars/deimos.html',
            world: 'Deimos',
            feature: 'Voltaire crater on a dust-smoothed surface',
            visual: 'deimos-voltaire',
            prompt: 'Which Deimos surface clue is shown here?',
            options: [
                { text: 'Voltaire crater on a dust-smoothed surface', correct: true, feedback: 'Correct. Deimos is smoother-looking than Phobos because loose regolith softens many crater edges; Voltaire is one named crater.' },
                { text: 'Tiger stripes with geysers', feedback: 'Tiger stripes and geysers are found on Enceladus.' },
                { text: 'Valhalla multi-ring basin', feedback: 'Valhalla is a huge impact basin on Callisto.' },
                { text: 'Great Red Spot', feedback: 'The Great Red Spot is on Jupiter.' }
            ],
            explanation: 'Deimos looks small, dark, and softly blanketed by dust. A named crater such as Voltaire stands out, but its edges are muted by regolith.'
        },
        {
            path: 'jupiter/jupiter.html',
            world: 'Jupiter',
            feature: 'Great Red Spot',
            visual: 'great-red-spot',
            prompt: 'Which Jupiter feature is this enormous oval storm?',
            options: [
                { text: 'Great Red Spot', correct: true, feedback: 'Correct. The Great Red Spot is a giant anticyclonic storm embedded in Jupiter\'s colorful cloud bands.' },
                { text: 'Great Dark Spot', feedback: 'The Great Dark Spot was observed on Neptune, not Jupiter.' },
                { text: 'North Polar Hexagon', feedback: 'The North Polar Hexagon is on Saturn.' },
                { text: 'Maat Mons', feedback: 'Maat Mons is a volcano on Venus.' }
            ],
            explanation: 'The brown-white cloud belts and reddish oval identify Jupiter\'s Great Red Spot, a storm larger than Earth that has been watched for centuries.'
        },
        {
            path: 'jupiter/io.html',
            world: 'Io',
            feature: 'Sulfur volcano plume',
            visual: 'sulfur-volcano',
            prompt: 'Which Io feature is shown erupting above the yellow-orange terrain?',
            options: [
                { text: 'Sulfur volcano plume', correct: true, feedback: 'Correct. Io is the most volcanically active world in the solar system, with sulfur-rich lava fields and towering plumes.' },
                { text: 'Methane rainstorm', feedback: 'Methane rain is associated with Titan, not Io.' },
                { text: 'Tycho crater rays', feedback: 'Tycho crater rays are on Earth\'s Moon.' },
                { text: 'Europa chaos terrain', feedback: 'Europa chaos terrain is broken icy crust, not sulfur volcanism.' }
            ],
            explanation: 'The sulfur colors, dark volcanic pit, and plume identify Io. Jupiter\'s gravity flexes Io so strongly that internal heating drives constant eruptions.'
        },
        {
            path: 'jupiter/europa.html',
            world: 'Europa',
            feature: 'Reddish lineae in icy crust',
            visual: 'europa-lineae',
            prompt: 'What Europa feature makes this icy surface recognizable?',
            options: [
                { text: 'Reddish lineae in icy crust', correct: true, feedback: 'Correct. Europa is famous for reddish-brown lineae, long fractures that cross its bright ice shell.' },
                { text: 'Equatorial ridge', feedback: 'A dramatic equatorial ridge is a signature of Iapetus.' },
                { text: 'Great Red Spot', feedback: 'The Great Red Spot is Jupiter\'s atmospheric storm.' },
                { text: 'Caloris Basin', feedback: 'Caloris Basin is on Mercury.' }
            ],
            explanation: 'Europa\'s bright ice and long reddish cracks suggest a flexing crust above a possible subsurface ocean.'
        },
        {
            path: 'jupiter/ganymede.html',
            world: 'Ganymede',
            feature: 'Grooved terrain',
            visual: 'ganymede-grooves',
            prompt: 'Which Ganymede surface pattern is shown here?',
            options: [
                { text: 'Grooved terrain', correct: true, feedback: 'Correct. Ganymede has bright grooved terrain where icy crust was stretched, cracked, and resurfaced.' },
                { text: 'Cantaloupe terrain', feedback: 'Cantaloupe terrain is associated with Triton.' },
                { text: 'Tiger stripes', feedback: 'Tiger stripes are fissures on Enceladus.' },
                { text: 'Maat Mons', feedback: 'Maat Mons is a Venusian volcano.' }
            ],
            explanation: 'Parallel bright grooves cutting through darker ancient terrain are a classic Ganymede signature.'
        },
        {
            path: 'jupiter/callisto.html',
            world: 'Callisto',
            feature: 'Valhalla multi-ring basin',
            visual: 'valhalla',
            prompt: 'Which Callisto impact structure appears as a huge bullseye?',
            options: [
                { text: 'Valhalla multi-ring basin', correct: true, feedback: 'Correct. Valhalla is Callisto\'s enormous multi-ring impact basin, with rings spreading far from the center.' },
                { text: 'Caloris Basin', feedback: 'Caloris Basin is Mercury\'s famous impact basin.' },
                { text: 'Herschel crater', feedback: 'Herschel crater is on Mimas.' },
                { text: 'Wunda crater', feedback: 'Wunda crater is on Umbriel.' }
            ],
            explanation: 'The concentric rings on a dark, heavily cratered icy surface identify Valhalla, one of the largest multi-ring basins in the solar system.'
        },
        {
            path: 'saturn/saturn.html',
            world: 'Saturn',
            feature: 'North Polar Hexagon',
            visual: 'saturn-hexagon',
            prompt: 'Which strange Saturn feature is outlined near the pole?',
            options: [
                { text: 'North Polar Hexagon', correct: true, feedback: 'Correct. Saturn\'s north pole hosts a persistent six-sided jet-stream pattern called the North Polar Hexagon.' },
                { text: 'Great Red Spot', feedback: 'The Great Red Spot is Jupiter\'s oval storm.' },
                { text: 'Great Dark Spot', feedback: 'The Great Dark Spot is a Neptune storm feature.' },
                { text: 'Valles Marineris', feedback: 'Valles Marineris is a canyon system on Mars.' }
            ],
            explanation: 'The pale ringed planet and six-sided polar pattern identify Saturn\'s North Polar Hexagon, a jet stream with an unusually geometric outline.'
        },
        {
            path: 'saturn/titan.html',
            world: 'Titan',
            feature: 'Kraken Mare methane sea',
            visual: 'kraken-mare',
            prompt: 'Which Titan surface feature is shown under the orange haze?',
            options: [
                { text: 'Kraken Mare methane sea', correct: true, feedback: 'Correct. Kraken Mare is Titan\'s largest known sea, filled mostly with liquid methane and ethane.' },
                { text: 'Earth ocean', feedback: 'Earth\'s oceans are liquid water; Titan\'s dark seas are hydrocarbons.' },
                { text: 'Caloris Basin', feedback: 'Caloris Basin is an impact basin on Mercury.' },
                { text: 'Sulfur lava lake', feedback: 'Sulfur-rich volcanic lakes fit Io much better than Titan.' }
            ],
            explanation: 'Titan\'s orange atmosphere and dark polar sea identify Kraken Mare, one of the clearest signs that Titan has stable surface liquids.'
        },
        {
            path: 'saturn/enceladus.html',
            world: 'Enceladus',
            feature: 'Tiger stripes',
            visual: 'tiger-stripes',
            prompt: 'Which active Enceladus feature is shown at the icy south pole?',
            options: [
                { text: 'Tiger stripes', correct: true, feedback: 'Correct. The tiger stripes are warm fractures that vent water vapor and icy particles into space.' },
                { text: 'Europa lineae', feedback: 'Europa lineae are cracks too, but the active plume-producing south-pole stripes are Enceladus\'s signature.' },
                { text: 'Verona Rupes', feedback: 'Verona Rupes is an immense cliff on Miranda.' },
                { text: 'Great Dark Spot', feedback: 'The Great Dark Spot is an atmospheric feature on Neptune.' }
            ],
            explanation: 'Blue-white ice, parallel south-pole fissures, and geyser plumes identify Enceladus\'s tiger stripes.'
        },
        {
            path: 'saturn/mimas.html',
            world: 'Mimas',
            feature: 'Herschel crater',
            visual: 'herschel',
            prompt: 'Which huge crater gives Mimas its unmistakable look?',
            options: [
                { text: 'Herschel crater', correct: true, feedback: 'Correct. Herschel crater is so large that it makes Mimas look like a tiny world with one enormous impact scar.' },
                { text: 'Stickney crater', feedback: 'Stickney crater dominates Phobos.' },
                { text: 'Pharos crater', feedback: 'Pharos crater is on Proteus.' },
                { text: 'Tycho crater', feedback: 'Tycho is a bright ray crater on the Moon.' }
            ],
            explanation: 'The round icy moon and single huge crater with a central peak identify Herschel on Mimas.'
        },
        {
            path: 'saturn/rhea.html',
            world: 'Rhea',
            feature: 'Inktomi bright ray crater',
            visual: 'rhea-rays',
            prompt: 'Which Rhea feature is suggested by the bright splash of rays?',
            options: [
                { text: 'Inktomi bright ray crater', correct: true, feedback: 'Correct. Inktomi is a young bright ray crater on Rhea, where fresh icy ejecta streaks outward.' },
                { text: 'Tycho crater rays', feedback: 'Tycho is a ray crater on Earth\'s Moon; this icy ray pattern belongs to Rhea.' },
                { text: 'Valhalla Basin', feedback: 'Valhalla is a ringed basin on Callisto.' },
                { text: 'Maat Mons', feedback: 'Maat Mons is a volcano on Venus.' }
            ],
            explanation: 'Rhea is heavily cratered, and the bright starburst of fresh ice points to Inktomi, one of its most recognizable young impact features.'
        },
        {
            path: 'saturn/iapetus.html',
            world: 'Iapetus',
            feature: 'Equatorial ridge and two-tone surface',
            visual: 'iapetus-ridge',
            prompt: 'Which Iapetus feature is shown crossing the moon like a raised seam?',
            options: [
                { text: 'Equatorial ridge and two-tone surface', correct: true, feedback: 'Correct. Iapetus is known for a high equatorial ridge and a dramatic dark-and-bright surface contrast.' },
                { text: 'North Polar Hexagon', feedback: 'The hexagon belongs to Saturn\'s atmosphere.' },
                { text: 'Europa lineae', feedback: 'Europa lineae are reddish cracks in ice, not Iapetus\'s equatorial ridge.' },
                { text: 'Kraken Mare', feedback: 'Kraken Mare is Titan\'s largest methane sea.' }
            ],
            explanation: 'The dark leading hemisphere, bright terrain, and long equatorial ridge make Iapetus one of Saturn\'s easiest moons to recognize.'
        },
        {
            path: 'uranus/uranus.html',
            world: 'Uranus',
            feature: 'Sideways axial tilt with rings',
            visual: 'uranus-tilt',
            prompt: 'Which identifying Uranus feature is shown by the sideways ring orientation?',
            options: [
                { text: 'Sideways axial tilt with rings', correct: true, feedback: 'Correct. Uranus rotates on its side, so its poles and ring system appear tipped dramatically compared with most planets.' },
                { text: 'North Polar Hexagon', feedback: 'The hexagon is on Saturn.' },
                { text: 'Great Red Spot', feedback: 'The Great Red Spot is on Jupiter.' },
                { text: 'Methane sea coastline', feedback: 'Methane sea coastlines are found on Titan.' }
            ],
            explanation: 'The pale cyan disk and tilted ring plane identify Uranus, whose axis is tipped by about 98 degrees.'
        },
        {
            path: 'uranus/miranda.html',
            world: 'Miranda',
            feature: 'Verona Rupes and patchwork coronae',
            visual: 'miranda-corona',
            prompt: 'Which Miranda feature set makes this surface look stitched together?',
            options: [
                { text: 'Verona Rupes and patchwork coronae', correct: true, feedback: 'Correct. Miranda has dramatic fault scarps and strange coronae, making its terrain look like mismatched blocks.' },
                { text: 'Valhalla multi-ring basin', feedback: 'Valhalla is on Callisto.' },
                { text: 'Tiger stripes', feedback: 'Tiger stripes are on Enceladus.' },
                { text: 'Great Dark Spot', feedback: 'The Great Dark Spot is on Neptune.' }
            ],
            explanation: 'Miranda\'s patchwork regions, sharp scarps, and chevron-like grooves are unlike the smoother surfaces of many other icy moons.'
        },
        {
            path: 'uranus/ariel.html',
            world: 'Ariel',
            feature: 'Chasmata canyon network',
            visual: 'ariel-chasms',
            prompt: 'Which Ariel terrain feature is shown by the long parallel canyons?',
            options: [
                { text: 'Chasmata canyon network', correct: true, feedback: 'Correct. Ariel has bright icy terrain cut by long chasmata, evidence of tectonic cracking and resurfacing.' },
                { text: 'Valles Marineris', feedback: 'Valles Marineris is much larger and located on Mars.' },
                { text: 'Herschel crater', feedback: 'Herschel is Mimas\'s huge crater.' },
                { text: 'Kraken Mare', feedback: 'Kraken Mare is a dark methane sea on Titan.' }
            ],
            explanation: 'Ariel\'s long, bright-walled canyons are a clue that its icy crust was pulled apart and resurfaced.'
        },
        {
            path: 'uranus/umbriel.html',
            world: 'Umbriel',
            feature: 'Wunda crater bright ring',
            visual: 'wunda',
            prompt: 'Which Umbriel feature is the bright ring on the dark surface?',
            options: [
                { text: 'Wunda crater bright ring', correct: true, feedback: 'Correct. Wunda is a bright-ringed crater that stands out sharply on Umbriel\'s dark surface.' },
                { text: 'Tycho crater rays', feedback: 'Tycho has long rays on the Moon, not a compact bright ring on Umbriel.' },
                { text: 'Pharos crater', feedback: 'Pharos is on Proteus.' },
                { text: 'Maat Mons', feedback: 'Maat Mons is a volcano on Venus.' }
            ],
            explanation: 'Umbriel is one of Uranus\'s darkest moons, so the bright ring inside Wunda crater is an especially useful identifying feature.'
        },
        {
            path: 'uranus/titania.html',
            world: 'Titania',
            feature: 'Messina Chasma',
            visual: 'messina',
            prompt: 'Which Titania feature is shown as a major icy canyon system?',
            options: [
                { text: 'Messina Chasma', correct: true, feedback: 'Correct. Messina Chasma is a huge canyon system across Titania, likely created by extension of the icy crust.' },
                { text: 'Valles Marineris', feedback: 'Valles Marineris is the famous canyon system on Mars.' },
                { text: 'Europa lineae', feedback: 'Europa lineae are narrower cracks in Europa\'s icy crust.' },
                { text: 'Caloris Basin', feedback: 'Caloris Basin is on Mercury.' }
            ],
            explanation: 'The broad canyon cutting across a cratered icy surface identifies Messina Chasma, one of Titania\'s most important tectonic features.'
        },
        {
            path: 'uranus/oberon.html',
            world: 'Oberon',
            feature: 'Hamlet crater with dark floor',
            visual: 'hamlet',
            prompt: 'Which Oberon feature is shown as a large crater with darker material?',
            options: [
                { text: 'Hamlet crater with dark floor', correct: true, feedback: 'Correct. Hamlet is a prominent Oberon crater, and dark material on crater floors helps identify the moon\'s rugged surface.' },
                { text: 'Herschel crater', feedback: 'Herschel is the giant crater on Mimas.' },
                { text: 'Wunda crater', feedback: 'Wunda is a bright-ringed crater on Umbriel.' },
                { text: 'Stickney crater', feedback: 'Stickney dominates Phobos.' }
            ],
            explanation: 'Oberon is a dark, heavily cratered icy moon. A large crater with a darker floor and rugged rim is a strong visual clue for Hamlet-like terrain.'
        },
        {
            path: 'neptune/neptune.html',
            world: 'Neptune',
            feature: 'Great Dark Spot',
            visual: 'great-dark-spot',
            prompt: 'Which Neptune atmospheric feature is shown in the blue clouds?',
            options: [
                { text: 'Great Dark Spot', correct: true, feedback: 'Correct. The Great Dark Spot was a massive dark storm observed in Neptune\'s fast-moving atmosphere.' },
                { text: 'Great Red Spot', feedback: 'The Great Red Spot is Jupiter\'s reddish storm.' },
                { text: 'North Polar Hexagon', feedback: 'The hexagon belongs to Saturn.' },
                { text: 'Kraken Mare', feedback: 'Kraken Mare is a liquid hydrocarbon sea on Titan.' }
            ],
            explanation: 'Neptune\'s deep blue methane-rich atmosphere plus a dark oval storm identify the Great Dark Spot.'
        },
        {
            path: 'neptune/triton.html',
            world: 'Triton',
            feature: 'Nitrogen geysers and cantaloupe terrain',
            visual: 'triton-geysers',
            prompt: 'Which Triton surface clue is shown here?',
            options: [
                { text: 'Nitrogen geysers and cantaloupe terrain', correct: true, feedback: 'Correct. Triton has strange dimpled cantaloupe terrain and dark nitrogen geyser streaks.' },
                { text: 'Sulfur volcano plume', feedback: 'Sulfur volcano plumes are Io\'s specialty.' },
                { text: 'Tiger stripes', feedback: 'Tiger stripes are on Enceladus.' },
                { text: 'Grooved terrain', feedback: 'Grooved terrain is a major Ganymede feature.' }
            ],
            explanation: 'Pinkish nitrogen ice, rounded dimples, and dark wind-blown geyser streaks make Triton visually distinctive.'
        },
        {
            path: 'neptune/proteus.html',
            world: 'Proteus',
            feature: 'Pharos crater',
            visual: 'pharos',
            prompt: 'Which Proteus feature is this enormous crater on an irregular moon?',
            options: [
                { text: 'Pharos crater', correct: true, feedback: 'Correct. Pharos is a huge crater on Proteus, standing out on the moon\'s dark, irregular body.' },
                { text: 'Herschel crater', feedback: 'Herschel crater is on Mimas.' },
                { text: 'Stickney crater', feedback: 'Stickney crater is on Phobos.' },
                { text: 'Wunda crater', feedback: 'Wunda crater is on Umbriel.' }
            ],
            explanation: 'Proteus is irregular and dark, and Pharos crater is one of the best-known features mapped on its surface.'
        },
        {
            path: 'neptune/larissa.html',
            world: 'Larissa',
            feature: 'Irregular cratered body',
            visual: 'larissa',
            prompt: 'Which Larissa-like physical feature is shown in this close view?',
            options: [
                { text: 'Irregular cratered body', correct: true, feedback: 'Correct. Larissa is a small, irregular Neptune moon with a battered cratered surface rather than a round, geologically active look.' },
                { text: 'Global blue ocean', feedback: 'A global blue ocean view is Earth-like, not Larissa-like.' },
                { text: 'North Polar Hexagon', feedback: 'The North Polar Hexagon belongs to Saturn.' },
                { text: 'Kraken Mare methane sea', feedback: 'Kraken Mare is on Titan.' }
            ],
            explanation: 'Larissa is known from limited imaging, but its identifying physical look is a dark, irregular, cratered small-moon surface.'
        },
        {
            path: 'neptune/Nereid.html',
            world: 'Nereid',
            feature: 'Dark irregular icy surface',
            visual: 'nereid',
            prompt: 'Which Nereid clue is shown by the distant uneven surface?',
            options: [
                { text: 'Dark irregular icy surface', correct: true, feedback: 'Correct. Nereid has not been mapped in close detail, so the safest physical identifier is a small, dark, irregular icy moon surface.' },
                { text: 'Great Dark Spot', feedback: 'The Great Dark Spot is a storm in Neptune\'s atmosphere, not a moon surface.' },
                { text: 'Valhalla Basin', feedback: 'Valhalla is on Callisto.' },
                { text: 'Europa lineae', feedback: 'Europa lineae are reddish cracks on Europa\'s ice shell.' }
            ],
            explanation: 'Nereid is a distant irregular moon with limited surface detail available. The quiz emphasizes what students can safely infer: small size, low brightness, and uneven icy terrain.'
        }
    ];

    const MASTER_PATHS = new Set(['master-quiz.html', '/master-quiz.html']);
    const PLANET_PATHS = new Set([
        'mercury/mercury.html',
        'venus/venus.html',
        'earth/earth.html',
        'mars/mars.html',
        'jupiter/jupiter.html',
        'saturn/saturn.html',
        'uranus/uranus.html',
        'neptune/neptune.html'
    ]);
    const GLOBAL_MAGNETIC_FIELD_PATHS = new Set([
        'mercury/mercury.html',
        'earth/earth.html',
        'jupiter/jupiter.html',
        'jupiter/ganymede.html',
        'saturn/saturn.html',
        'uranus/uranus.html',
        'neptune/neptune.html'
    ]);
    const STORM_VISUAL_PATHS = new Set([
        'jupiter/jupiter.html',
        'neptune/neptune.html'
    ]);
    const ATMOSPHERIC_PATTERN_PATHS = new Set([
        'earth/earth.html',
        'saturn/saturn.html'
    ]);

    function normalizePath() {
        const parts = window.location.pathname.split('/').filter(Boolean).map(decodeURIComponent);
        if (!parts.length) return '';
        if (parts[parts.length - 1] === 'master-quiz.html') return 'master-quiz.html';
        return parts.slice(-2).join('/');
    }

    function shuffle(list) {
        const copy = [...list];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function getMeta(item) {
        const isPlanet = PLANET_PATHS.has(item.path);
        const hasGlobalMagneticField = GLOBAL_MAGNETIC_FIELD_PATHS.has(item.path);
        const isStormVisual = STORM_VISUAL_PATHS.has(item.path);
        const isAtmosphericPattern = ATMOSPHERIC_PATTERN_PATHS.has(item.path);

        return {
            kind: isPlanet ? 'planet' : 'moon',
            kindLabel: isPlanet ? 'Planet' : 'Moon',
            oppositeKindLabel: isPlanet ? 'Moon' : 'Planet',
            hasGlobalMagneticField,
            isStormVisual,
            stormExplanation: isStormVisual
                ? `${item.feature} is an atmospheric storm feature. Its shape appears in clouds rather than in solid surface rock or ice.`
                : isAtmosphericPattern
                    ? `${item.feature} is connected to atmosphere and weather, but this quiz is asking about a distinct storm feature. Treat this as an atmospheric pattern, not a single named storm.`
                    : `${item.feature} is not an atmospheric storm. The scan shows a solid-surface or non-storm identifying feature instead.`,
            magneticExplanation: hasGlobalMagneticField
                ? `${item.world} has a confirmed global magnetic field of its own. That means the object generates a large-scale magnetosphere rather than only carrying local crustal magnetism or induced signals.`
                : `${item.world} does not have a confirmed global magnetic field of its own. It may still interact with nearby plasma, have local remnant magnetism, or show induced magnetic effects, but that is not the same as a global self-generated field.`
        };
    }

    function buildRounds(item, isMaster) {
        const meta = getMeta(item);
        const stormYesText = 'Yes, this is showing a storm';
        const stormNoText = 'No, this is not showing a storm';
        const magneticYesText = 'Yes, it has a global magnetic field';
        const magneticNoText = 'No, it lacks a confirmed global magnetic field';

        return [
            {
                type: 'feature',
                item,
                prompt: isMaster ? item.prompt : item.prompt,
                options: item.options,
                explanation: item.explanation,
                caption: `${item.world} feature identification`
            },
            {
                type: 'storm',
                item,
                prompt: isMaster
                    ? 'Is this visual showing an atmospheric storm on the celestial object?'
                    : `Is this visual showing an atmospheric storm on ${item.world}?`,
                options: [
                    {
                        text: stormYesText,
                        correct: meta.isStormVisual,
                        feedback: meta.isStormVisual
                            ? `Correct. ${meta.stormExplanation}`
                            : `Not quite. ${meta.stormExplanation}`
                    },
                    {
                        text: stormNoText,
                        correct: !meta.isStormVisual,
                        feedback: !meta.isStormVisual
                            ? `Correct. ${meta.stormExplanation}`
                            : `Not quite. ${meta.stormExplanation}`
                    }
                ],
                explanation: meta.stormExplanation,
                caption: `${item.world} storm check`
            },
            {
                type: 'kind',
                item,
                prompt: isMaster
                    ? 'Is the celestial object in this scan a planet or a moon?'
                    : `Is ${item.world} classified as a planet or a moon?`,
                options: [
                    {
                        text: 'Planet',
                        correct: meta.kind === 'planet',
                        feedback: meta.kind === 'planet'
                            ? `Correct. ${item.world} is one of the eight major planets.`
                            : `Not quite. ${item.world} is a moon, so it orbits a planet rather than orbiting the Sun directly as a major planet.`
                    },
                    {
                        text: 'Moon',
                        correct: meta.kind === 'moon',
                        feedback: meta.kind === 'moon'
                            ? `Correct. ${item.world} is a natural satellite, so it is classified as a moon.`
                            : `Not quite. ${item.world} is a planet, not a moon.`
                    }
                ],
                explanation: `${item.world} is classified as a ${meta.kind}.`,
                caption: `${item.world} classification`
            },
            {
                type: 'magnetic',
                item,
                prompt: isMaster
                    ? 'Does this object have a confirmed global magnetic field of its own?'
                    : `Does ${item.world} have a confirmed global magnetic field of its own?`,
                options: [
                    {
                        text: magneticYesText,
                        correct: meta.hasGlobalMagneticField,
                        feedback: meta.hasGlobalMagneticField
                            ? `Correct. ${meta.magneticExplanation}`
                            : `Not quite. ${meta.magneticExplanation}`
                    },
                    {
                        text: magneticNoText,
                        correct: !meta.hasGlobalMagneticField,
                        feedback: !meta.hasGlobalMagneticField
                            ? `Correct. ${meta.magneticExplanation}`
                            : `Not quite. ${meta.magneticExplanation}`
                    }
                ],
                explanation: meta.magneticExplanation,
                caption: `${item.world} magnetic-field check`
            }
        ];
    }

    function injectStyles() {
        if (document.getElementById('physical-feature-quiz-styles')) return;
        const style = document.createElement('style');
        style.id = 'physical-feature-quiz-styles';
        style.textContent = `
            .pfq-panel {
                margin: 0 auto 3rem;
                max-width: 72rem;
                border: 1px solid rgba(110, 240, 255, 0.22);
                border-radius: 24px;
                background: linear-gradient(135deg, rgba(8, 13, 32, 0.94), rgba(18, 28, 58, 0.88));
                box-shadow: 0 22px 60px rgba(0, 0, 0, 0.34);
                overflow: hidden;
            }
            .pfq-inner {
                display: grid;
                grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
                gap: 1.5rem;
                padding: clamp(1.25rem, 3vw, 2rem);
                align-items: stretch;
            }
            .pfq-eyebrow {
                display: inline-flex;
                align-items: center;
                width: fit-content;
                border: 1px solid rgba(255, 209, 102, 0.35);
                border-radius: 999px;
                color: #ffd166;
                background: rgba(255, 209, 102, 0.1);
                font: 700 0.72rem/1.1 "JetBrains Mono", monospace;
                letter-spacing: 0.16em;
                text-transform: uppercase;
                padding: 0.45rem 0.7rem;
                margin-bottom: 0.9rem;
            }
            .pfq-title {
                color: #fff;
                font-family: Fredoka, sans-serif;
                font-size: clamp(1.65rem, 3vw, 2.45rem);
                line-height: 1.05;
                margin: 0 0 0.55rem;
            }
            .pfq-copy {
                color: #d7e3f4;
                line-height: 1.65;
                margin: 0 0 1.1rem;
                max-width: 42rem;
            }
            .pfq-question {
                color: #fff;
                font-weight: 800;
                font-size: 1.05rem;
                margin: 0 0 0.8rem;
            }
            .pfq-progress {
                color: #9fb3cc;
                font: 700 0.78rem/1.4 "JetBrains Mono", monospace;
                letter-spacing: 0.12em;
                margin: 0 0 0.8rem;
                text-transform: uppercase;
            }
            .pfq-options {
                display: grid;
                gap: 0.7rem;
            }
            .pfq-option {
                width: 100%;
                border: 1px solid rgba(110, 240, 255, 0.22);
                border-radius: 14px;
                background: rgba(3, 7, 18, 0.64);
                color: #fff;
                cursor: pointer;
                display: flex;
                gap: 0.8rem;
                align-items: flex-start;
                padding: 0.9rem 1rem;
                text-align: left;
                transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
            }
            .pfq-option:hover:not(:disabled),
            .pfq-option:focus-visible:not(:disabled) {
                border-color: #6ef0ff;
                background: rgba(110, 240, 255, 0.1);
                transform: translateY(-1px);
                outline: none;
            }
            .pfq-option:disabled {
                cursor: default;
            }
            .pfq-letter {
                color: #6ef0ff;
                font: 700 0.9rem/1.5 "JetBrains Mono", monospace;
                min-width: 1.2rem;
            }
            .pfq-option.is-correct {
                border-color: rgba(78, 240, 168, 0.82);
                background: rgba(78, 240, 168, 0.14);
            }
            .pfq-option.is-wrong {
                border-color: rgba(255, 107, 107, 0.82);
                background: rgba(255, 107, 107, 0.14);
            }
            .pfq-feedback {
                border: 1px solid rgba(110, 240, 255, 0.22);
                border-radius: 18px;
                background: rgba(3, 7, 18, 0.58);
                color: #d7e3f4;
                line-height: 1.6;
                margin-top: 1rem;
                padding: 1rem;
            }
            .pfq-feedback[hidden] {
                display: none;
            }
            .pfq-feedback-title {
                color: #fff;
                font-family: Fredoka, sans-serif;
                font-size: 1.45rem;
                margin: 0 0 0.35rem;
            }
            .pfq-feedback-title.correct {
                color: #4ef0a8;
            }
            .pfq-feedback-title.wrong {
                color: #ff6b6b;
            }
            .pfq-visual-card {
                border: 1px solid rgba(255, 255, 255, 0.12);
                border-radius: 18px;
                background: radial-gradient(circle at 50% 18%, rgba(110, 240, 255, 0.13), rgba(3, 7, 18, 0.86) 58%);
                min-height: 100%;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .pfq-visual {
                aspect-ratio: 16 / 10;
                border-radius: 14px;
                overflow: hidden;
                border: 1px solid rgba(255, 255, 255, 0.1);
                background: #02030a;
            }
            .pfq-visual svg {
                display: block;
                width: 100%;
                height: 100%;
            }
            .pfq-caption {
                color: #9fb3cc;
                font: 700 0.75rem/1.4 "JetBrains Mono", monospace;
                letter-spacing: 0.12em;
                margin: 0.75rem 0 0;
                text-transform: uppercase;
            }
            .pfq-actions {
                display: flex;
                flex-wrap: wrap;
                gap: 0.7rem;
                margin-top: 1rem;
            }
            .pfq-action {
                border: 1px solid rgba(255, 255, 255, 0.18);
                border-radius: 999px;
                background: rgba(255, 255, 255, 0.08);
                color: #fff;
                cursor: pointer;
                font-weight: 800;
                padding: 0.72rem 1rem;
            }
            .pfq-action.primary {
                background: #6ef0ff;
                border-color: #6ef0ff;
                color: #02030a;
            }
            @media (max-width: 860px) {
                .pfq-inner {
                    grid-template-columns: 1fr;
                }
                .pfq-visual-card {
                    order: -1;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function defs() {
        return `
            <defs>
                <filter id="pfqNoise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
                    <feColorMatrix type="saturate" values="0.25"/>
                    <feBlend mode="soft-light" in2="SourceGraphic"/>
                </filter>
                <radialGradient id="shade" cx="34%" cy="28%" r="72%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.32)"/>
                    <stop offset="58%" stop-color="rgba(255,255,255,0.03)"/>
                    <stop offset="100%" stop-color="rgba(0,0,0,0.62)"/>
                </radialGradient>
                <linearGradient id="ice" x1="0" x2="1">
                    <stop offset="0%" stop-color="#dff6ff"/>
                    <stop offset="50%" stop-color="#a9c8d8"/>
                    <stop offset="100%" stop-color="#eefcff"/>
                </linearGradient>
            </defs>`;
    }

    function craterField(color = '#8d8f95', accent = '#c8c9c9') {
        return `
            <rect width="420" height="260" fill="${color}" filter="url(#pfqNoise)"/>
            <circle cx="62" cy="58" r="18" fill="none" stroke="${accent}" stroke-width="3" opacity="0.45"/>
            <circle cx="330" cy="78" r="24" fill="none" stroke="#111827" stroke-width="3" opacity="0.28"/>
            <circle cx="94" cy="198" r="26" fill="none" stroke="#111827" stroke-width="3" opacity="0.28"/>
            <circle cx="286" cy="205" r="13" fill="none" stroke="${accent}" stroke-width="2" opacity="0.42"/>`;
    }

    function svgFor(type) {
        const baseStart = `<svg viewBox="0 0 420 260" role="img" aria-hidden="true">${defs()}`;
        const end = '</svg>';
        const planetClip = '<clipPath id="disk"><circle cx="210" cy="130" r="108"/></clipPath>';

        switch (type) {
            case 'caloris-basin':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)">${craterField('#a78b6d', '#e4c99f')}<circle cx="220" cy="132" r="76" fill="none" stroke="#f2d9ad" stroke-width="7" opacity="0.7"/><circle cx="220" cy="132" r="55" fill="none" stroke="#5d4333" stroke-width="5" opacity="0.48"/><circle cx="220" cy="132" r="34" fill="rgba(255,238,190,0.16)" stroke="#f6d8a3" stroke-width="4"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'maat-mons':
                return `${baseStart}<rect width="420" height="260" fill="#26120b"/><path d="M0 176 C70 144 120 166 175 125 C222 88 250 76 294 126 C332 168 378 148 420 170 L420 260 L0 260 Z" fill="#b86127" filter="url(#pfqNoise)"/><path d="M168 134 C195 88 230 58 267 132 C230 121 204 121 168 134 Z" fill="#f08a37"/><path d="M204 109 C216 86 229 83 243 110 C229 103 218 103 204 109 Z" fill="#4b1f17"/><path d="M56 208 C142 190 252 196 367 180" fill="none" stroke="#ffd166" stroke-width="3" opacity="0.45"/><path d="M24 225 C130 212 270 220 396 201" fill="none" stroke="#ff8a3d" stroke-width="4" opacity="0.35"/>${end}`;
            case 'blue-marble':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)"><rect width="420" height="260" fill="#1d65c8"/><path d="M156 44 C182 73 166 101 198 126 C164 134 134 112 116 82 Z" fill="#169b62"/><path d="M228 88 C274 84 298 116 286 158 C250 158 229 132 220 112 Z" fill="#28a96e"/><path d="M146 164 C184 162 212 184 207 221 C168 216 140 196 132 178 Z" fill="#a07938"/><path d="M92 92 C154 70 232 74 294 100" stroke="#ffffff" stroke-width="11" opacity="0.68" fill="none"/><path d="M118 152 C184 132 248 151 310 139" stroke="#ffffff" stroke-width="9" opacity="0.58" fill="none"/><path d="M210 32 C266 53 306 84 323 124" stroke="#ffffff" stroke-width="7" opacity="0.42" fill="none"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'tycho-rays':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)">${craterField('#8c8d90', '#d8d8d8')}<g stroke="#f3f4f6" stroke-width="5" opacity="0.75"><path d="M214 152 L85 48"/><path d="M214 152 L330 58"/><path d="M214 152 L110 215"/><path d="M214 152 L352 212"/><path d="M214 152 L214 34"/><path d="M214 152 L204 240"/></g><circle cx="214" cy="152" r="28" fill="#6f7177" stroke="#f1f5f9" stroke-width="6"/><circle cx="214" cy="152" r="12" fill="#2f3339"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'valles-marineris':
                return `${baseStart}<rect width="420" height="260" fill="#170b08"/><rect width="420" height="260" fill="#a64623" filter="url(#pfqNoise)"/><path d="M38 133 C90 98 134 118 181 104 C245 84 287 106 372 77" fill="none" stroke="#3d1d17" stroke-width="28" stroke-linecap="round"/><path d="M45 138 C104 117 146 139 204 119 C257 100 309 118 377 91" fill="none" stroke="#f08a37" stroke-width="6" opacity="0.55"/><path d="M118 164 L167 118 M233 150 L268 111 M290 136 L331 96" stroke="#3d1d17" stroke-width="10" stroke-linecap="round" opacity="0.78"/>${end}`;
            case 'stickney':
                return irregularMoon('#7d726a', `<circle cx="172" cy="122" r="58" fill="#4b4641" stroke="#b7afa7" stroke-width="8"/><circle cx="184" cy="116" r="22" fill="#2b2928"/>`);
            case 'deimos-voltaire':
                return irregularMoon('#8a8177', `<circle cx="244" cy="112" r="32" fill="none" stroke="#c3bbb0" stroke-width="5" opacity="0.62"/><circle cx="116" cy="166" r="18" fill="none" stroke="#5b554e" stroke-width="4" opacity="0.35"/><path d="M76 142 C132 161 229 159 336 130" stroke="#c5bcb1" stroke-width="5" opacity="0.18"/>`);
            case 'great-red-spot':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><g>${bands(['#c78b55','#f6e1bd','#9d6642','#efe5d2','#b57448','#f4d19a'])}<ellipse cx="274" cy="146" rx="72" ry="38" fill="#b34d36" stroke="#f7b37d" stroke-width="7"/><ellipse cx="274" cy="146" rx="48" ry="22" fill="#d67555" opacity="0.72"/><path d="M224 146 C254 128 298 130 330 146" stroke="#fff3da" stroke-width="5" fill="none" opacity="0.56"/></g>${end}`;
            case 'sulfur-volcano':
                return `${baseStart}<rect width="420" height="260" fill="#201100"/><rect width="420" height="260" fill="#d3a72d" filter="url(#pfqNoise)"/><circle cx="116" cy="84" r="32" fill="#f6e05e" opacity="0.52"/><circle cx="304" cy="188" r="40" fill="#9f3a18" opacity="0.58"/><ellipse cx="208" cy="157" rx="66" ry="24" fill="#22120d"/><path d="M180 151 C192 104 226 104 240 151" fill="#ff7a1a"/><path d="M210 140 C176 104 170 72 214 35 C260 72 252 104 220 140" fill="rgba(255,255,255,0.28)" stroke="#fff3c4" stroke-width="3"/></svg>`;
            case 'europa-lineae':
                return `${baseStart}<rect width="420" height="260" fill="url(#ice)" filter="url(#pfqNoise)"/><g stroke="#9b4d39" stroke-linecap="round"><path d="M-10 70 C80 108 128 48 214 78 C294 107 335 63 430 92" stroke-width="7" fill="none"/><path d="M31 200 C118 142 204 184 291 130 C337 101 382 111 430 82" stroke-width="5" fill="none"/><path d="M100 0 C122 72 112 146 150 260" stroke-width="4" fill="none"/><path d="M252 -10 C226 52 250 117 230 270" stroke-width="3" fill="none"/></g><g stroke="#6f8fa4" opacity="0.35"><path d="M0 134 C138 117 278 151 420 128" fill="none"/><path d="M66 0 C108 95 83 166 117 260" fill="none"/></g>${end}`;
            case 'ganymede-grooves':
                return icyDisk('#8b8d8f', `<path d="M97 63 C142 92 166 145 136 207" stroke="#dce7ef" stroke-width="7" fill="none"/><path d="M119 52 C160 91 184 148 161 216" stroke="#dce7ef" stroke-width="5" fill="none"/><path d="M215 45 C196 101 204 171 247 221" stroke="#dce7ef" stroke-width="6" fill="none"/><path d="M239 41 C223 95 234 171 276 211" stroke="#dce7ef" stroke-width="4" fill="none"/><circle cx="283" cy="126" r="38" fill="#55575d" opacity="0.52"/>`);
            case 'valhalla':
                return icyDisk('#4d4d51', `<circle cx="214" cy="130" r="73" fill="none" stroke="#e7e2cf" stroke-width="5" opacity="0.78"/><circle cx="214" cy="130" r="50" fill="none" stroke="#bbb8ae" stroke-width="4" opacity="0.72"/><circle cx="214" cy="130" r="27" fill="#6d6d72" stroke="#ebe6d6" stroke-width="4"/><circle cx="214" cy="130" r="102" fill="none" stroke="#c9c4b7" stroke-width="3" opacity="0.48"/>`);
            case 'saturn-hexagon':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><ellipse cx="210" cy="145" rx="175" ry="35" fill="none" stroke="#d9c29a" stroke-width="15" opacity="0.72"/><circle cx="210" cy="130" r="82" fill="#d5b782"/><g clip-path="circle(82px at 210px 130px)">${bands(['#c8a66e','#e7d2a3','#b99662','#f0dfb8'], 210, 130, 82)}</g><polygon points="210,51 267,84 267,150 210,183 153,150 153,84" fill="none" stroke="#31445f" stroke-width="8"/><circle cx="210" cy="130" r="82" fill="url(#shade)"/>${end}`;
            case 'kraken-mare':
                return `${baseStart}<rect width="420" height="260" fill="#281808"/><rect width="420" height="260" fill="#d38d38" opacity="0.9" filter="url(#pfqNoise)"/><path d="M72 93 C136 69 157 122 222 96 C288 69 321 98 365 78 L373 190 C302 204 238 173 180 203 C130 230 94 178 54 194 Z" fill="#111827" opacity="0.82"/><path d="M0 0 H420 V260 H0 Z" fill="#f6ad55" opacity="0.18"/><path d="M70 93 C151 117 209 106 366 78" stroke="#fbd38d" stroke-width="3" opacity="0.44" fill="none"/>${end}`;
            case 'tiger-stripes':
                return `${baseStart}<rect width="420" height="260" fill="#dff9ff" filter="url(#pfqNoise)"/><g stroke="#218ca8" stroke-linecap="round"><path d="M100 197 C151 155 192 151 247 87" stroke-width="8"/><path d="M139 216 C183 174 223 162 284 103" stroke-width="7"/><path d="M185 225 C225 187 265 174 322 129" stroke-width="6"/></g><g stroke="#f7fdff" stroke-width="4" opacity="0.74"><path d="M247 87 C259 49 284 35 308 13"/><path d="M284 103 C313 70 328 55 362 39"/><path d="M322 129 C345 104 369 91 405 84"/></g>${end}`;
            case 'herschel':
                return icyDisk('#8b8f95', `<circle cx="171" cy="120" r="62" fill="#4e535b" stroke="#d4d8dd" stroke-width="9"/><circle cx="185" cy="128" r="16" fill="#c1c7ce"/><path d="M123 118 C153 100 192 101 221 121" stroke="#f8fafc" stroke-width="5" opacity="0.46" fill="none"/>`);
            case 'rhea-rays':
                return icyDisk('#9da3aa', `<g stroke="#eef7ff" stroke-width="5" opacity="0.72"><path d="M235 122 L124 47"/><path d="M235 122 L340 60"/><path d="M235 122 L119 202"/><path d="M235 122 L343 194"/><path d="M235 122 L230 39"/></g><circle cx="235" cy="122" r="24" fill="#737b84" stroke="#f8fafc" stroke-width="5"/>`);
            case 'iapetus-ridge':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)"><rect x="80" y="22" width="130" height="216" fill="#3c3028"/><rect x="210" y="22" width="130" height="216" fill="#c6c0ae"/><path d="M102 132 C162 121 230 122 318 132" stroke="#f1e9d5" stroke-width="11" fill="none"/><path d="M102 145 C168 136 238 138 318 145" stroke="#3b342f" stroke-width="4" opacity="0.75" fill="none"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'uranus-tilt':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><g transform="rotate(82 210 130)"><ellipse cx="210" cy="130" rx="145" ry="31" fill="none" stroke="#b7f3ff" stroke-width="10" opacity="0.58"/><ellipse cx="210" cy="130" rx="171" ry="39" fill="none" stroke="#d8fbff" stroke-width="3" opacity="0.45"/></g><circle cx="210" cy="130" r="84" fill="#79d7df"/><path d="M135 106 C182 82 235 82 285 105" stroke="#caf9ff" stroke-width="8" opacity="0.28" fill="none"/><circle cx="210" cy="130" r="84" fill="url(#shade)"/>${end}`;
            case 'miranda-corona':
                return icyDisk('#8f969d', `<path d="M106 60 L195 88 L177 174 L91 155 Z" fill="#656b73" stroke="#d9e3ea" stroke-width="5"/><path d="M221 65 L319 94 L285 189 L203 168 Z" fill="#aeb8c0" stroke="#525a63" stroke-width="5"/><path d="M103 155 L175 92 L286 189" stroke="#f0f8ff" stroke-width="5" fill="none"/><path d="M188 93 L238 162 L303 95" stroke="#3f474f" stroke-width="6" fill="none"/>`);
            case 'ariel-chasms':
                return icyDisk('#a6adb4', `<g stroke="#3e4e5d" stroke-width="9" stroke-linecap="round"><path d="M101 64 C124 115 119 168 153 217"/><path d="M160 47 C177 111 180 161 220 217"/><path d="M237 57 C229 121 245 174 300 211"/></g><g stroke="#e7f4ff" stroke-width="3" opacity="0.58"><path d="M112 64 C137 117 131 167 164 218"/><path d="M171 48 C190 111 193 160 232 217"/></g>`);
            case 'wunda':
                return icyDisk('#3c4048', `<circle cx="250" cy="118" r="35" fill="#4d5360" stroke="#eff6ff" stroke-width="8"/><circle cx="250" cy="118" r="17" fill="#2a2f38"/><circle cx="144" cy="172" r="20" fill="none" stroke="#151a22" stroke-width="5" opacity="0.5"/>`);
            case 'messina':
                return icyDisk('#858c94', `<path d="M83 148 C139 91 198 103 255 61 C302 28 339 43 366 23" stroke="#26323e" stroke-width="16" stroke-linecap="round" fill="none"/><path d="M86 151 C146 111 198 119 260 79 C307 50 336 55 369 37" stroke="#dce7ef" stroke-width="5" opacity="0.46" fill="none"/>`);
            case 'hamlet':
                return icyDisk('#595f68', `<circle cx="249" cy="133" r="49" fill="#2d3139" stroke="#aeb7c1" stroke-width="7"/><circle cx="259" cy="130" r="12" fill="#c2cad3"/><path d="M209 102 C231 83 276 84 299 109" stroke="#d8dee8" stroke-width="4" opacity="0.48" fill="none"/>`);
            case 'great-dark-spot':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)"><rect width="420" height="260" fill="#1557c8"/><path d="M91 78 C165 43 271 60 345 93" stroke="#76d4ff" stroke-width="12" opacity="0.38" fill="none"/><path d="M95 180 C177 145 287 164 346 193" stroke="#d8f7ff" stroke-width="8" opacity="0.48" fill="none"/><ellipse cx="248" cy="145" rx="58" ry="32" fill="#081734" opacity="0.86"/><path d="M221 124 C248 111 281 119 305 139" stroke="#7fdcff" stroke-width="5" opacity="0.44" fill="none"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'triton-geysers':
                return `${baseStart}<rect width="420" height="260" fill="#dfb5aa" filter="url(#pfqNoise)"/><g fill="none" stroke="#9a7069" stroke-width="4" opacity="0.45">${Array.from({ length: 8 }, (_, i) => `<circle cx="${70 + (i % 4) * 82}" cy="${65 + Math.floor(i / 4) * 82}" r="${18 + (i % 3) * 4}"/>`).join('')}</g><path d="M232 172 C244 126 266 83 286 43" stroke="#3a3033" stroke-width="8" fill="none"/><path d="M288 43 C318 57 342 68 376 72" stroke="#3a3033" stroke-width="6" fill="none"/><path d="M229 172 C239 124 258 83 276 45" stroke="#f8fafc" stroke-width="3" opacity="0.44" fill="none"/>${end}`;
            case 'pharos':
                return irregularMoon('#59616b', `<circle cx="242" cy="119" r="52" fill="#252b32" stroke="#aeb8c2" stroke-width="8"/><circle cx="98" cy="165" r="17" fill="none" stroke="#1d232b" stroke-width="4" opacity="0.55"/>`);
            case 'larissa':
                return irregularMoon('#555d68', `<circle cx="160" cy="92" r="23" fill="none" stroke="#222832" stroke-width="5" opacity="0.6"/><circle cx="257" cy="159" r="31" fill="none" stroke="#a3acb8" stroke-width="4" opacity="0.48"/><circle cx="312" cy="103" r="14" fill="#2b323b" opacity="0.62"/>`);
            case 'nereid':
                return irregularMoon('#4e5662', `<circle cx="132" cy="148" r="22" fill="none" stroke="#1f2630" stroke-width="4" opacity="0.5"/><circle cx="272" cy="112" r="18" fill="none" stroke="#a3acb8" stroke-width="3" opacity="0.4"/><path d="M91 95 C157 81 233 89 321 126" stroke="#c8d0dc" stroke-width="4" opacity="0.16" fill="none"/>`);
            default:
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><circle cx="210" cy="130" r="90" fill="#64748b"/>${end}`;
        }
    }

    function bands(colors, cx, cy, r) {
        if (cx) {
            return colors.map((color, index) => {
                const y = cy - r + index * ((r * 2) / colors.length);
                return `<rect x="${cx - r}" y="${y}" width="${r * 2}" height="${(r * 2) / colors.length + 1}" fill="${color}"/>`;
            }).join('');
        }
        return colors.map((color, index) => `<rect x="0" y="${index * (260 / colors.length)}" width="420" height="${260 / colors.length + 1}" fill="${color}"/>`).join('');
    }

    function icyDisk(color, featureMarkup) {
        return `<svg viewBox="0 0 420 260" role="img" aria-hidden="true">${defs()}<clipPath id="disk"><circle cx="210" cy="130" r="108"/></clipPath><rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)">${craterField(color, '#dbe3ea')}${featureMarkup}</g><circle cx="210" cy="130" r="108" fill="url(#shade)"/></svg>`;
    }

    function irregularMoon(color, featureMarkup) {
        return `<svg viewBox="0 0 420 260" role="img" aria-hidden="true">${defs()}<rect width="420" height="260" fill="#07101f"/><path d="M101 72 C139 27 238 33 304 60 C359 84 355 157 319 203 C275 258 157 239 101 198 C54 163 62 111 101 72 Z" fill="${color}" filter="url(#pfqNoise)"/><clipPath id="lumpy"><path d="M101 72 C139 27 238 33 304 60 C359 84 355 157 319 203 C275 258 157 239 101 198 C54 163 62 111 101 72 Z"/></clipPath><g clip-path="url(#lumpy)">${featureMarkup}<circle cx="315" cy="195" r="28" fill="#111827" opacity="0.25"/></g><path d="M101 72 C139 27 238 33 304 60 C359 84 355 157 319 203 C275 258 157 239 101 198 C54 163 62 111 101 72 Z" fill="url(#shade)"/></svg>`;
    }

    function createPanel(item, isMaster) {
        const section = document.createElement('section');
        section.className = 'pfq-panel';
        section.dataset.physicalFeatureQuiz = isMaster ? 'master' : item.path;
        section.innerHTML = `
            <div class="pfq-inner">
                <div>
                    <div class="pfq-eyebrow">${isMaster ? 'Master feature lab' : `${escapeHtml(item.world)} feature lab`}</div>
                    <h2 class="pfq-title">${isMaster ? 'Visual Physical Feature Identification' : `Identify ${escapeHtml(item.world)} by Sight`}</h2>
                    <p class="pfq-copy">${isMaster ? 'A random realistic scan appears each round. Identify features, decide whether a visual shows a storm, classify planet versus moon, and check magnetic-field knowledge.' : 'Study each realistic scan, answer the visual question, and use the feedback to lock in features, storms, classification, and magnetic-field clues.'}</p>
                    <p class="pfq-progress" data-pfq-progress></p>
                    <p class="pfq-question" data-pfq-question></p>
                    <div class="pfq-options" data-pfq-options></div>
                    <div class="pfq-feedback" data-pfq-feedback hidden></div>
                    <div class="pfq-actions">
                        <button type="button" class="pfq-action primary" data-pfq-reset>${isMaster ? 'Next Random Round' : 'Next Visual Question'}</button>
                    </div>
                </div>
                <div class="pfq-visual-card">
                    <div class="pfq-visual" data-pfq-visual></div>
                    <p class="pfq-caption" data-pfq-caption></p>
                </div>
            </div>
        `;
        return section;
    }

    function renderRound(panel, round, state) {
        const item = round.item;
        const question = panel.querySelector('[data-pfq-question]');
        const progress = panel.querySelector('[data-pfq-progress]');
        const optionsWrap = panel.querySelector('[data-pfq-options]');
        const feedback = panel.querySelector('[data-pfq-feedback]');
        const visual = panel.querySelector('[data-pfq-visual]');
        const caption = panel.querySelector('[data-pfq-caption]');
        const reset = panel.querySelector('[data-pfq-reset]');
        const options = shuffle(round.options);

        progress.textContent = state.isMaster
            ? `Random round ${state.roundsAnswered + 1} | Score ${state.score} / ${state.roundsAnswered}`
            : `Question ${state.currentIndex + 1} of ${state.rounds.length} | Score ${state.score} / ${state.currentIndex}`;
        question.textContent = round.prompt;
        visual.innerHTML = svgFor(item.visual);
        caption.textContent = round.caption || `${item.world} mission scan`;
        feedback.hidden = true;
        feedback.innerHTML = '';
        optionsWrap.innerHTML = '';
        reset.hidden = true;

        options.forEach((option, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'pfq-option';
            button.innerHTML = `<span class="pfq-letter">${String.fromCharCode(65 + index)}.</span><span>${escapeHtml(option.text)}</span>`;
                button.addEventListener('click', () => {
                    const buttons = [...optionsWrap.querySelectorAll('button')];
                    buttons.forEach((btn, btnIndex) => {
                    btn.disabled = true;
                    if (options[btnIndex].correct) btn.classList.add('is-correct');
                    });
                    button.classList.add(option.correct ? 'is-correct' : 'is-wrong');
                    if (option.correct) state.score += 1;
                    state.roundsAnswered += 1;
                    progress.textContent = state.isMaster
                        ? `Random round ${state.roundsAnswered} | Score ${state.score} / ${state.roundsAnswered}`
                        : `Question ${state.currentIndex + 1} of ${state.rounds.length} | Score ${state.score} / ${state.roundsAnswered}`;
                    feedback.hidden = false;
                    feedback.innerHTML = `
                        <h3 class="pfq-feedback-title ${option.correct ? 'correct' : 'wrong'}">${option.correct ? 'Correct' : 'Not quite'}</h3>
                        <p><strong>Your selection:</strong> ${escapeHtml(option.text)}</p>
                        <p>${escapeHtml(option.feedback)}</p>
                        <p><strong>Visual context:</strong> ${escapeHtml(item.feature)} on ${escapeHtml(item.world)}.</p>
                        <p>${escapeHtml(round.explanation || item.explanation)}</p>
                    `;
                    reset.textContent = state.isMaster
                        ? 'Next Random Round'
                        : state.currentIndex >= state.rounds.length - 1
                            ? 'Restart Visual Lab'
                            : 'Next Visual Question';
                    reset.hidden = false;
                });
            optionsWrap.appendChild(button);
        });
    }

    function mountIndividual(item) {
        const panel = createPanel(item, false);
        const quizContainer = document.getElementById('quizContainer');
        const anchor = quizContainer ? (quizContainer.closest('.glass-panel') || quizContainer.closest('section') || quizContainer) : null;
        const parent = anchor && anchor.parentNode ? anchor.parentNode : document.querySelector('main') || document.body;

        if (anchor && parent) parent.insertBefore(panel, anchor);
        else parent.appendChild(panel);

        const state = {
            isMaster: false,
            rounds: buildRounds(item, false),
            currentIndex: 0,
            score: 0,
            roundsAnswered: 0
        };

        renderRound(panel, state.rounds[state.currentIndex], state);
        panel.querySelector('[data-pfq-reset]').addEventListener('click', () => {
            state.currentIndex += 1;
            if (state.currentIndex >= state.rounds.length) {
                state.currentIndex = 0;
                state.score = 0;
                state.roundsAnswered = 0;
                state.rounds = shuffle(buildRounds(item, false));
            }
            renderRound(panel, state.rounds[state.currentIndex], state);
        });
    }

    function mountMaster() {
        let pool = shuffle(FEATURE_ITEMS.flatMap(item => buildRounds(item, true)));
        let index = 0;
        const panel = createPanel(pool[index].item, true);
        const grid = document.querySelector('main section.grid');
        const hero = document.querySelector('main > section');
        const state = {
            isMaster: true,
            rounds: pool,
            currentIndex: 0,
            score: 0,
            roundsAnswered: 0
        };

        if (grid && grid.parentNode) {
            grid.parentNode.insertBefore(panel, grid);
        } else if (hero && hero.parentNode) {
            hero.parentNode.insertBefore(panel, hero.nextSibling);
        } else {
            (document.querySelector('main') || document.body).appendChild(panel);
        }

        function nextRound() {
            if (index >= pool.length) {
                pool = shuffle(FEATURE_ITEMS.flatMap(item => buildRounds(item, true)));
                state.rounds = pool;
                index = 0;
            }
            state.currentIndex = index;
            renderRound(panel, pool[index], state);
            index += 1;
        }

        nextRound();
        panel.querySelector('[data-pfq-reset]').addEventListener('click', nextRound);
    }

    document.addEventListener('DOMContentLoaded', () => {
        injectStyles();
        const path = normalizePath();

        if (MASTER_PATHS.has(path)) {
            mountMaster();
            return;
        }

        const item = FEATURE_ITEMS.find(entry => entry.path === path);
        if (item) mountIndividual(item);
    });
})();
