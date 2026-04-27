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

    const EXTRA_FEATURES_BY_PATH = {
        'mercury/mercury.html': [
            {
                feature: 'Lobate scarps',
                visual: 'mercury-scarps',
                explanation: 'Lobate scarps are long, curved cliffs formed as Mercury cooled, shrank, and wrinkled its crust. They are a strong clue that the small planet contracted after its interior lost heat.'
            },
            {
                feature: 'Mercury hollows',
                visual: 'mercury-hollows',
                explanation: 'Mercury hollows are bright, shallow, irregular depressions. They likely formed when volatile-rich material was lost from the surface, leaving fresh-looking pits behind.'
            }
        ],
        'venus/venus.html': [
            {
                feature: 'Coronae',
                visual: 'venus-coronae',
                explanation: 'Coronae are circular to oval volcanic-tectonic structures on Venus. Their broken rings and radiating fractures show where hot material pushed upward and warped the crust.'
            },
            {
                feature: 'Tessera terrain',
                visual: 'venus-tessera',
                explanation: 'Tessera terrain is highly deformed Venusian highland terrain with intersecting ridges and fractures. It looks like a crumpled tile pattern in radar views.'
            },
            {
                feature: 'Pancake domes',
                visual: 'venus-pancake-domes',
                explanation: 'Venus has broad flat-topped volcanic domes often nicknamed pancake domes. Their circular shapes suggest thick lava spread outward and then stalled.'
            }
        ],
        'earth/earth.html': [
            {
                feature: 'Hurricane spiral',
                visual: 'earth-hurricane',
                isStorm: true,
                explanation: 'A hurricane spiral is an organized tropical storm system with curved cloud bands around a central eye. From space, it is one of Earth\'s clearest active weather signatures.'
            },
            {
                feature: 'Auroral oval',
                visual: 'earth-aurora',
                explanation: 'Earth\'s auroral ovals glow near the poles where charged particles guided by the magnetic field collide with the upper atmosphere.'
            },
            {
                feature: 'Nile Delta',
                visual: 'earth-nile-delta',
                explanation: 'The Nile Delta is a fan-shaped green region where the Nile River spreads into the Mediterranean Sea. Deltas are distinctive from orbit because rivers branch into sediment-rich coastlines.'
            }
        ],
        'earth/luna.html': [
            {
                feature: 'Lunar maria',
                visual: 'lunar-maria',
                explanation: 'Lunar maria are dark basaltic plains created by ancient lava flows. They make the Moon\'s near side look patchy and are much smoother than the surrounding highlands.'
            },
            {
                feature: 'Copernicus crater rays',
                visual: 'copernicus-rays',
                explanation: 'Copernicus is a prominent lunar ray crater. Its bright ejecta rays are shorter and more centered than Tycho\'s huge spoke system, making it a useful comparison feature.'
            },
            {
                feature: 'South Pole-Aitken Basin',
                visual: 'spa-basin',
                explanation: 'The South Pole-Aitken Basin is an enormous ancient impact basin on the Moon\'s far side. It is much broader and subtler than a fresh ray crater.'
            }
        ],
        'mars/mars.html': [
            {
                feature: 'Olympus Mons',
                visual: 'olympus-mons',
                explanation: 'Olympus Mons is the largest known volcano in the solar system. Its broad shield shape and summit caldera make it a major visual identifier for Mars.'
            },
            {
                feature: 'North polar ice cap',
                visual: 'mars-polar-cap',
                explanation: 'Mars has bright polar caps made of water ice and seasonal carbon dioxide frost. The cap\'s spiral troughs are a famous orbital view.'
            },
            {
                feature: 'Global dust storm',
                visual: 'mars-dust-storm',
                isStorm: true,
                explanation: 'Mars can develop planet-encircling dust storms. These are storms, but they are dusty atmospheric events rather than water-cloud hurricanes.'
            },
            {
                feature: 'Gale crater sediment mound',
                visual: 'gale-crater-mound',
                explanation: 'Gale crater contains a central mound of layered sediments explored by Curiosity. Layers and alluvial features are clues to Mars\'s watery past.'
            }
        ],
        'mars/phobos.html': [
            {
                feature: 'Linear grooves',
                visual: 'phobos-grooves',
                explanation: 'Phobos is crossed by long grooves and crater chains. Many of them radiate away from the region around Stickney crater or relate to tidal stresses from Mars.'
            }
        ],
        'mars/deimos.html': [
            {
                feature: 'Regolith-muted craters',
                visual: 'deimos-muted-craters',
                explanation: 'Deimos has many craters softened by a thick blanket of loose regolith. That dusty coating makes its surface look smoother and less sharply battered than Phobos.'
            }
        ],
        'jupiter/jupiter.html': [
            {
                feature: 'Zonal cloud belts',
                visual: 'jupiter-belts',
                explanation: 'Jupiter\'s alternating bright zones and darker belts are high-speed atmospheric bands. They make the planet recognizable even without the Great Red Spot.'
            },
            {
                feature: 'White oval storms',
                visual: 'jupiter-white-ovals',
                isStorm: true,
                explanation: 'Jupiter has many smaller white oval storms. They test whether students can recognize Jovian storm activity even when the Great Red Spot is absent.'
            },
            {
                feature: 'Jupiter polar aurora',
                visual: 'jupiter-aurora',
                explanation: 'Jupiter has powerful auroras near its poles. They are driven by the planet\'s strong magnetic field and plasma from Io.'
            }
        ],
        'jupiter/io.html': [
            {
                feature: 'Loki Patera lava lake',
                visual: 'loki-patera',
                explanation: 'Loki Patera is a huge volcanic depression on Io. Its dark lava lake and bright sulfur-rich surroundings show why Io is the solar system\'s most volcanically active world.'
            },
            {
                feature: 'Pele red ring deposit',
                visual: 'pele-red-ring',
                explanation: 'Pele is surrounded by a reddish sulfur-rich ring deposit from volcanic plumes. The red-orange ring is one of Io\'s most recognizable color features.'
            },
            {
                feature: 'Tvashtar eruption plume',
                visual: 'tvashtar-plume',
                explanation: 'Tvashtar is known for dramatic volcanic plume activity. A tall plume above a sulfur-colored surface is a strong Io clue.'
            }
        ],
        'jupiter/europa.html': [
            {
                feature: 'Chaos terrain',
                visual: 'europa-chaos',
                explanation: 'Europa\'s chaos terrain looks like broken icy plates that shifted and refroze. It is one of the strongest visual clues that Europa\'s ice shell has been active.'
            },
            {
                feature: 'Double ridges',
                visual: 'europa-double-ridges',
                explanation: 'Europa has long paired ridges running across its ice. Double ridges are a common feature associated with repeated cracking and refreezing.'
            },
            {
                feature: 'Conamara Chaos',
                visual: 'conamara-chaos',
                explanation: 'Conamara Chaos is a famous region of disrupted Europa ice blocks. It looks like rafts of ice that broke apart and shifted.'
            }
        ],
        'jupiter/ganymede.html': [
            {
                feature: 'Galileo Regio dark terrain',
                visual: 'galileo-regio',
                explanation: 'Galileo Regio is a large dark ancient region on Ganymede. The contrast between dark old terrain and brighter grooved terrain helps identify the moon.'
            },
            {
                feature: 'Tros crater rays',
                visual: 'tros-rays',
                explanation: 'Tros is a bright ray crater on Ganymede. Fresh icy ejecta makes ray patterns stand out against older terrain.'
            }
        ],
        'jupiter/callisto.html': [
            {
                feature: 'Ancient crater saturation',
                visual: 'callisto-craters',
                explanation: 'Callisto is covered with densely packed ancient craters. Its old, dark surface shows little large-scale resurfacing compared with many other icy moons.'
            },
            {
                feature: 'Asgard multi-ring basin',
                visual: 'asgard-basin',
                explanation: 'Asgard is another large multi-ring impact basin on Callisto. It reinforces the moon\'s identity as an ancient, heavily cratered icy world.'
            }
        ],
        'saturn/saturn.html': [
            {
                feature: 'Main ring system',
                visual: 'saturn-rings',
                explanation: 'Saturn\'s broad bright rings are its most famous identifier. The rings are made mostly of icy particles arranged into many thin bands and gaps.'
            },
            {
                feature: 'Cassini Division',
                visual: 'cassini-division',
                explanation: 'The Cassini Division is the dark gap between Saturn\'s A and B rings. Spotting the gap helps students identify ring structure rather than just "rings".'
            },
            {
                feature: 'Saturn banded atmosphere',
                visual: 'saturn-bands',
                explanation: 'Saturn has subtle yellow-brown cloud bands. They are lower contrast than Jupiter\'s but still show the planet\'s fast atmospheric circulation.'
            }
        ],
        'saturn/titan.html': [
            {
                feature: 'Equatorial dune fields',
                visual: 'titan-dunes',
                explanation: 'Titan has long dark dune fields near its equator. They are shaped by winds moving hydrocarbon-rich particles across the cold surface.'
            },
            {
                feature: 'Titan river channels',
                visual: 'titan-river-channels',
                explanation: 'Titan has branching river channels carved by liquid methane and ethane. They are a key clue that Titan has an active hydrocarbon cycle.'
            },
            {
                feature: 'Ontario Lacus',
                visual: 'ontario-lacus',
                explanation: 'Ontario Lacus is a dark southern lake on Titan. Like Kraken Mare, it shows stable liquid hydrocarbons on the surface.'
            }
        ],
        'saturn/enceladus.html': [
            {
                feature: 'South polar geyser curtain',
                visual: 'enceladus-geysers',
                explanation: 'Enceladus vents water vapor and icy grains from its south polar fractures. These geysers feed Saturn\'s E ring and reveal an active interior.'
            },
            {
                feature: 'Cratered northern terrain',
                visual: 'enceladus-cratered-north',
                explanation: 'Enceladus also has older cratered terrain away from the active south pole. Comparing old cratered regions with smooth fractured ice reveals its geologic variety.'
            }
        ],
        'saturn/mimas.html': [
            {
                feature: 'Cratered icy surface',
                visual: 'mimas-crater-field',
                explanation: 'Beyond Herschel crater, Mimas has a cold heavily cratered icy surface. Its small size and lack of broad resurfacing leave impact scars easy to see.'
            }
        ],
        'saturn/rhea.html': [
            {
                feature: 'Wispy icy chasmata',
                visual: 'rhea-wisps',
                explanation: 'Rhea has bright wispy markings that trace fractures and scarps across older terrain. They help distinguish Rhea from smoother icy moons.'
            }
        ],
        'saturn/iapetus.html': [
            {
                feature: 'Cassini Regio dark terrain',
                visual: 'cassini-regio',
                explanation: 'Cassini Regio is Iapetus\'s dark leading-hemisphere terrain. The strong contrast between dark and bright hemispheres is one of Iapetus\'s signature clues.'
            }
        ],
        'uranus/uranus.html': [
            {
                feature: 'Methane-blue disk',
                visual: 'uranus-blue-disk',
                explanation: 'Uranus appears pale blue-green because methane in its atmosphere absorbs red light. Its mostly smooth disk is much quieter-looking than Jupiter or Saturn.'
            }
        ],
        'uranus/miranda.html': [
            {
                feature: 'Inverness Corona',
                visual: 'inverness-corona',
                explanation: 'Inverness Corona is a chevron-shaped region on Miranda. Its ridges and boundaries make Miranda look like a world assembled from mismatched geologic pieces.'
            }
        ],
        'uranus/ariel.html': [
            {
                feature: 'Smooth resurfaced plains',
                visual: 'ariel-plains',
                explanation: 'Ariel has relatively bright smooth plains in places, suggesting that icy material resurfaced parts of the moon after older craters formed.'
            }
        ],
        'uranus/umbriel.html': [
            {
                feature: 'Low-albedo cratered terrain',
                visual: 'umbriel-dark-terrain',
                explanation: 'Umbriel is unusually dark for a Uranian moon. Its low-albedo cratered terrain makes bright features like Wunda stand out even more.'
            }
        ],
        'uranus/titania.html': [
            {
                feature: 'Gertrude crater',
                visual: 'gertrude-crater',
                explanation: 'Gertrude is a very large crater on Titania. Its scale and relaxed-looking icy rim make it one of the moon\'s best-known named features.'
            }
        ],
        'uranus/oberon.html': [
            {
                feature: 'Mommur Chasma',
                visual: 'mommur-chasma',
                explanation: 'Mommur Chasma is a major canyon-like feature on Oberon. It shows that this dark outer Uranian moon is not only cratered but also fractured.'
            }
        ],
        'neptune/neptune.html': [
            {
                feature: 'Scooter bright cloud',
                visual: 'neptune-scooter',
                isStorm: true,
                explanation: 'The Scooter was a fast-moving bright cloud feature seen on Neptune. It highlights how dynamic Neptune\'s blue atmosphere can be.'
            },
            {
                feature: 'Methane cloud bands',
                visual: 'neptune-cloud-bands',
                explanation: 'Neptune often shows bright methane ice clouds and bands. These high clouds contrast sharply with the planet\'s deep blue atmosphere.'
            }
        ],
        'neptune/triton.html': [
            {
                feature: 'South polar nitrogen cap',
                visual: 'triton-polar-cap',
                explanation: 'Triton has a bright south polar cap made largely of nitrogen ice. Its pinkish icy surface and polar deposits help separate it from other large moons.'
            },
            {
                feature: 'Cantaloupe terrain',
                visual: 'triton-cantaloupe',
                explanation: 'Triton\'s cantaloupe terrain is made of rounded dimples and ridges. It is one of the strangest and most recognizable icy terrains in the solar system.'
            }
        ],
        'neptune/proteus.html': [
            {
                feature: 'Angular irregular shape',
                visual: 'proteus-shape',
                explanation: 'Proteus is large for an irregular moon, but it is not round. Its angular outline shows that gravity was not strong enough to pull it into a smooth sphere.'
            }
        ],
        'neptune/larissa.html': [
            {
                feature: 'Elongated battered silhouette',
                visual: 'larissa-elongated',
                explanation: 'Larissa is a small irregular moon with an elongated, battered shape. Limited imaging still shows that it is not a smooth round body.'
            }
        ],
        'neptune/Nereid.html': [
            {
                feature: 'Unresolved low-albedo profile',
                visual: 'nereid-low-albedo',
                explanation: 'Nereid is so distant and small that detailed surface features are not well resolved. Its useful visual clue is a dark, irregular, low-albedo icy profile rather than a named crater.'
            }
        ]
    };

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
    const STORM_VISUALS = new Set([
        'earth-hurricane',
        'great-red-spot',
        'great-dark-spot',
        'neptune-scooter'
    ]);
    const ATMOSPHERIC_PATTERN_VISUALS = new Set([
        'blue-marble',
        'jupiter-belts',
        'saturn-hexagon',
        'uranus-blue-disk'
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

    function getFeatureCards(item) {
        const primary = {
            feature: item.feature,
            visual: item.visual,
            prompt: item.prompt,
            options: item.options,
            explanation: item.explanation
        };

        return [primary, ...(EXTRA_FEATURES_BY_PATH[item.path] || [])];
    }

    function getAllFeatureNames() {
        return FEATURE_ITEMS.flatMap(item => getFeatureCards(item).map(card => card.feature));
    }

    function makeFeatureOptions(item, card) {
        if (Array.isArray(card.options) && card.options.length) return card.options;

        const distractors = shuffle(getAllFeatureNames().filter(feature => feature !== card.feature)).slice(0, 3);
        return shuffle([
            {
                text: card.feature,
                correct: true,
                feedback: `Correct. ${card.explanation}`
            },
            ...distractors.map(feature => ({
                text: feature,
                feedback: `Not quite. The scan is showing ${card.feature} on ${item.world}, not ${feature}. Look for the shape, color, and surface context before choosing.`
            }))
        ]);
    }

    function getMeta(item, card = item) {
        const isPlanet = PLANET_PATHS.has(item.path);
        const hasGlobalMagneticField = GLOBAL_MAGNETIC_FIELD_PATHS.has(item.path);
        const isStormVisual = card.isStorm === true || STORM_VISUALS.has(card.visual);
        const isAtmosphericPattern = !isStormVisual && ATMOSPHERIC_PATTERN_VISUALS.has(card.visual);

        return {
            kind: isPlanet ? 'planet' : 'moon',
            kindLabel: isPlanet ? 'Planet' : 'Moon',
            oppositeKindLabel: isPlanet ? 'Moon' : 'Planet',
            hasGlobalMagneticField,
            isStormVisual,
            stormExplanation: isStormVisual
                ? `${card.feature} is an atmospheric storm feature. Its shape appears in clouds rather than in solid surface rock or ice.`
                : isAtmosphericPattern
                    ? `${card.feature} is connected to atmosphere and weather, but this quiz is asking about a distinct storm feature. Treat this as an atmospheric pattern, not a single named storm.`
                    : `${card.feature} is not an atmospheric storm. The scan shows a solid-surface or non-storm identifying feature instead.`,
            magneticExplanation: hasGlobalMagneticField
                ? `${item.world} has a confirmed global magnetic field of its own. That means the object generates a large-scale magnetosphere rather than only carrying local crustal magnetism or induced signals.`
                : `${item.world} does not have a confirmed global magnetic field of its own. It may still interact with nearby plasma, have local remnant magnetism, or show induced magnetic effects, but that is not the same as a global self-generated field.`
        };
    }

    function getStormChallenge(item) {
        const stormYesText = `Yes, this is a storm on ${item.world}`;
        const stormNoText = `No, this is not a storm on ${item.world}`;
        const challenges = {
            'earth/earth.html': {
                visual: 'storm-earth-hurricane-challenge',
                correct: true,
                context: 'A hurricane spiral in Earth clouds',
                explanation: 'This is an Earth hurricane: a real atmospheric storm with spiral cloud bands around an eye. Earth has the warm oceans, moisture, and atmosphere needed for storms like this.'
            },
            'jupiter/jupiter.html': {
                visual: 'storm-jupiter-red-spot-challenge',
                correct: true,
                context: 'Jupiter\'s Great Red Spot storm embedded in cloud belts',
                explanation: 'This is Jupiter\'s Great Red Spot, a real atmospheric storm. The surrounding banded clouds are a clue that the image belongs to Jupiter.'
            },
            'neptune/neptune.html': {
                visual: 'storm-neptune-dark-spot-challenge',
                correct: true,
                context: 'A dark oval storm in Neptune\'s blue atmosphere',
                explanation: 'This is a Neptune storm, similar to the Great Dark Spot. Neptune has a dynamic methane-rich atmosphere with fast winds and large storm systems.'
            },
            'saturn/saturn.html': {
                visual: 'storm-saturn-hexagon-challenge',
                correct: false,
                context: 'Saturn\'s polar hexagon, a jet-stream pattern rather than a single storm',
                explanation: 'This is Saturn\'s north polar hexagon. It is atmospheric and weather-related, but the quiz is asking about a storm. The six-sided pattern is a jet-stream structure, not a single oval storm.'
            }
        };

        if (challenges[item.path]) return challenges[item.path];

        return {
            visual: PLANET_PATHS.has(item.path) ? 'storm-decoy-jupiter-on-rocky-world' : 'storm-decoy-jupiter-on-moon',
            correct: false,
            context: `A tempting Jupiter-style storm decoy shown for ${item.world}`,
            explanation: `${item.world} is not the world shown by this stormy banded-atmosphere visual. This is a deliberate decoy: a large oval storm in banded clouds points students toward Jupiter-like weather, not ${item.world}.`
        };
    }

    function getMagneticChallenge(item) {
        const meta = getMeta(item);
        let visual = 'magnetic-field-absent';
        let context = `No confirmed global magnetic field around ${item.world}`;

        if (meta.hasGlobalMagneticField) {
            if (item.path === 'mercury/mercury.html' || item.path === 'jupiter/ganymede.html') {
                visual = 'magnetic-field-weak';
                context = `A weak but real global magnetic field around ${item.world}`;
            } else {
                visual = 'magnetic-field-strong';
                context = `A large global magnetosphere around ${item.world}`;
            }
        }

        return {
            visual,
            context,
            explanation: meta.magneticExplanation
        };
    }

    function getIdentityChallenge(item) {
        const showCorrectObject = Math.random() < 0.55;
        const sameKind = FEATURE_ITEMS.filter(candidate =>
            candidate.path !== item.path && PLANET_PATHS.has(candidate.path) === PLANET_PATHS.has(item.path)
        );
        const broadPool = FEATURE_ITEMS.filter(candidate => candidate.path !== item.path);
        const decoyItem = shuffle(sameKind.length ? sameKind : broadPool)[0];
        const shownItem = showCorrectObject ? item : decoyItem;
        const shownCard = shuffle(getFeatureCards(shownItem))[0];

        return {
            correct: showCorrectObject,
            visual: shownCard.visual,
            shownWorld: shownItem.world,
            shownFeature: shownCard.feature,
            context: showCorrectObject
                ? `A real ${item.world} visual cue: ${shownCard.feature}`
                : `A realistic decoy: ${shownCard.feature} on ${shownItem.world}, not ${item.world}`,
            explanation: showCorrectObject
                ? `This image really is showing ${item.world}. The visual cue is ${shownCard.feature}, a recognizable feature for this object.`
                : `This is not ${item.world}. The image shows ${shownCard.feature} on ${shownItem.world}; the similar scale, color, or cratered texture is meant to be tempting, but the identifying feature belongs to a different world.`
        };
    }

    function buildRounds(item, isMaster) {
        const cards = getFeatureCards(item);
        const firstCard = cards[0];
        const meta = getMeta(item, firstCard);
        const stormChallenge = getStormChallenge(item);
        const identityChallenge = getIdentityChallenge(item);
        const magneticChallenge = getMagneticChallenge(item);
        const stormYesText = `Yes, this is a storm on ${item.world}`;
        const stormNoText = `No, this is not a storm on ${item.world}`;
        const magneticYesText = 'Yes, it has a global magnetic field';
        const magneticNoText = 'No, it lacks a confirmed global magnetic field';

        const featureRounds = cards.map(card => ({
            type: 'feature',
            item,
            card,
            prompt: isMaster
                ? `Which ${item.world} feature is shown in this scan?`
                : card.prompt || `Which ${item.world} feature is shown in this mission scan?`,
            options: makeFeatureOptions(item, card),
            explanation: card.explanation,
            caption: `${item.world} feature identification`
        }));

        return [
            ...featureRounds,
            {
                type: 'storm',
                item,
                card: firstCard,
                visual: stormChallenge.visual,
                visualContext: stormChallenge.context,
                prompt: isMaster
                    ? `Is this visual showing a storm on ${item.world}?`
                    : `Is this visual showing a storm on ${item.world}?`,
                options: [
                    {
                        text: stormYesText,
                        correct: stormChallenge.correct,
                        feedback: stormChallenge.correct
                            ? `Correct. ${stormChallenge.explanation}`
                            : `Not quite. ${stormChallenge.explanation}`
                    },
                    {
                        text: stormNoText,
                        correct: !stormChallenge.correct,
                        feedback: !stormChallenge.correct
                            ? `Correct. ${stormChallenge.explanation}`
                            : `Not quite. ${stormChallenge.explanation}`
                    }
                ],
                explanation: stormChallenge.explanation,
                caption: `${item.world} storm trap`
            },
            {
                type: 'identity',
                item,
                card: firstCard,
                visual: identityChallenge.visual,
                visualContext: identityChallenge.context,
                prompt: isMaster
                    ? `Is this image showing ${item.world}?`
                    : `Is this image showing ${item.world}?`,
                options: [
                    {
                        text: `Yes, this image shows ${item.world}`,
                        correct: identityChallenge.correct,
                        feedback: identityChallenge.correct
                            ? `Correct. ${identityChallenge.explanation}`
                            : `Not quite. ${identityChallenge.explanation}`
                    },
                    {
                        text: `No, this image shows a different object`,
                        correct: !identityChallenge.correct,
                        feedback: !identityChallenge.correct
                            ? `Correct. ${identityChallenge.explanation}`
                            : `Not quite. ${identityChallenge.explanation}`
                    }
                ],
                explanation: identityChallenge.explanation,
                caption: `${item.world} image identity check`
            },
            {
                type: 'magnetic',
                item,
                card: firstCard,
                visual: magneticChallenge.visual,
                visualContext: magneticChallenge.context,
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
                explanation: magneticChallenge.explanation,
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
            case 'mercury-scarps':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)">${craterField('#947b62', '#e7d2b6')}<path d="M95 173 C128 123 166 151 196 103 C230 52 267 94 313 63" fill="none" stroke="#3f3128" stroke-width="14" stroke-linecap="round"/><path d="M101 166 C135 126 170 151 201 107 C235 65 270 98 315 69" fill="none" stroke="#f4d0a4" stroke-width="5" opacity="0.6"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'venus-coronae':
                return `${baseStart}<rect width="420" height="260" fill="#2a140b"/><rect width="420" height="260" fill="#b7652c" filter="url(#pfqNoise)"/><ellipse cx="214" cy="132" rx="88" ry="52" fill="rgba(255,209,102,0.1)" stroke="#ffd166" stroke-width="6"/><ellipse cx="214" cy="132" rx="52" ry="29" fill="none" stroke="#4b2114" stroke-width="6" opacity="0.55"/><g stroke="#ffcf7a" stroke-width="3" opacity="0.65"><path d="M214 80 L214 41"/><path d="M214 184 L214 225"/><path d="M128 132 L82 132"/><path d="M300 132 L347 132"/><path d="M153 96 L118 66"/><path d="M274 168 L315 203"/></g>${end}`;
            case 'earth-hurricane':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)"><rect width="420" height="260" fill="#1c66bd"/><path d="M90 172 C150 151 214 170 276 134 C242 180 178 210 117 196 Z" fill="#15965f" opacity="0.75"/><g fill="none" stroke="#f8fafc" stroke-linecap="round"><path d="M249 119 C296 116 325 152 296 182 C258 222 183 195 195 143 C205 101 267 87 302 105" stroke-width="13" opacity="0.82"/><path d="M244 126 C270 126 288 147 273 166 C252 190 213 176 220 146 C226 122 261 116 281 123" stroke-width="9" opacity="0.95"/></g><circle cx="248" cy="150" r="10" fill="#1c66bd"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'lunar-maria':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)">${craterField('#a7a8aa', '#e2e4e6')}<path d="M126 72 C169 54 205 86 189 129 C170 176 105 154 94 111 C88 91 103 79 126 72 Z" fill="#565b63" opacity="0.82"/><path d="M224 95 C276 70 327 103 316 151 C302 203 223 198 207 149 C199 124 207 105 224 95 Z" fill="#464b54" opacity="0.78"/><path d="M160 171 C194 157 228 173 226 205 C205 223 169 211 152 190 Z" fill="#555a62" opacity="0.74"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'olympus-mons':
                return `${baseStart}<rect width="420" height="260" fill="#170b08"/><rect width="420" height="260" fill="#a84925" filter="url(#pfqNoise)"/><ellipse cx="218" cy="156" rx="139" ry="56" fill="#c76737"/><ellipse cx="218" cy="138" rx="82" ry="32" fill="#d9824f"/><ellipse cx="218" cy="126" rx="35" ry="16" fill="#522117" stroke="#f3b37d" stroke-width="4"/><path d="M80 170 C151 138 258 139 356 168" stroke="#f6ad55" stroke-width="5" opacity="0.42" fill="none"/>${end}`;
            case 'phobos-grooves':
                return irregularMoon('#756b63', `<circle cx="168" cy="123" r="40" fill="#4b4641" stroke="#b7afa7" stroke-width="6" opacity="0.75"/><g stroke="#d7c8b7" stroke-width="5" stroke-linecap="round" opacity="0.62"><path d="M111 69 C156 113 199 151 281 203"/><path d="M143 54 C177 105 221 145 316 178"/><path d="M89 138 C152 151 212 168 300 221"/></g>`);
            case 'deimos-muted-craters':
                return irregularMoon('#8b8177', `<g opacity="0.42"><circle cx="130" cy="92" r="28" fill="none" stroke="#d0c6ba" stroke-width="5"/><circle cx="223" cy="148" r="36" fill="none" stroke="#5a534d" stroke-width="5"/><circle cx="292" cy="97" r="20" fill="none" stroke="#d0c6ba" stroke-width="4"/></g><path d="M88 165 C158 190 245 184 326 154" stroke="#d9cec0" stroke-width="7" opacity="0.16"/>`);
            case 'jupiter-belts':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><g>${bands(['#e6c097','#9d6544','#fff1d0','#c48152','#f7dfb7','#7f513d','#f3cc93'])}<g stroke="#fff3da" stroke-width="5" opacity="0.48"><path d="M20 72 C111 91 218 55 404 82"/><path d="M6 133 C122 110 264 151 420 126"/><path d="M0 190 C100 177 214 204 420 184"/></g></g>${end}`;
            case 'loki-patera':
                return `${baseStart}<rect width="420" height="260" fill="#211103"/><rect width="420" height="260" fill="#d8a72f" filter="url(#pfqNoise)"/><ellipse cx="220" cy="135" rx="104" ry="54" fill="#5a1d13" stroke="#f8d94f" stroke-width="7"/><path d="M144 137 C176 103 244 105 294 135 C251 150 192 158 144 137 Z" fill="#111827" opacity="0.88"/><path d="M153 139 C185 126 235 126 283 137" stroke="#ff8a1f" stroke-width="8" opacity="0.85" fill="none"/>${end}`;
            case 'europa-chaos':
                return `${baseStart}<rect width="420" height="260" fill="url(#ice)" filter="url(#pfqNoise)"/><g stroke="#7b3f35" stroke-width="4" opacity="0.72"><path d="M92 61 L160 96 L140 164 L79 133 Z"/><path d="M184 76 L260 56 L291 126 L221 159 Z"/><path d="M154 172 L225 151 L276 205 L196 225 Z"/><path d="M290 127 L356 101 L377 181 L312 204 Z"/></g><g fill="rgba(155,77,57,0.18)"><path d="M92 61 L160 96 L140 164 L79 133 Z"/><path d="M184 76 L260 56 L291 126 L221 159 Z"/><path d="M154 172 L225 151 L276 205 L196 225 Z"/></g>${end}`;
            case 'galileo-regio':
                return icyDisk('#8d9299', `<path d="M90 64 C147 30 227 56 240 122 C253 188 190 222 126 196 C77 176 55 99 90 64 Z" fill="#34383f" opacity="0.86"/><g stroke="#dce7ef" stroke-width="4" opacity="0.62"><path d="M231 67 C209 113 225 174 278 215"/><path d="M260 54 C240 110 257 163 308 200"/></g>`);
            case 'callisto-craters':
                return icyDisk('#4c4c52', `<g fill="none" stroke="#d7d0bd" stroke-width="4" opacity="0.75">${Array.from({ length: 12 }, (_, i) => `<circle cx="${92 + (i % 4) * 76}" cy="${58 + Math.floor(i / 4) * 62}" r="${14 + (i % 3) * 7}"/>`).join('')}</g>`);
            case 'saturn-rings':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><ellipse cx="210" cy="140" rx="178" ry="42" fill="none" stroke="#f3dfb4" stroke-width="12"/><ellipse cx="210" cy="140" rx="140" ry="31" fill="none" stroke="#a98556" stroke-width="8"/><ellipse cx="210" cy="140" rx="104" ry="24" fill="none" stroke="#f9edce" stroke-width="5"/><circle cx="210" cy="130" r="67" fill="#d7b67e"/><circle cx="210" cy="130" r="67" fill="url(#shade)"/>${end}`;
            case 'titan-dunes':
                return `${baseStart}<rect width="420" height="260" fill="#24160a"/><rect width="420" height="260" fill="#c67b2f" filter="url(#pfqNoise)"/><g stroke="#2b1f19" stroke-width="9" stroke-linecap="round" opacity="0.72"><path d="M35 87 C120 71 198 104 292 83 C338 74 379 81 415 92"/><path d="M9 140 C105 124 181 157 280 137 C334 127 379 132 420 145"/><path d="M24 194 C104 178 203 206 291 187 C340 177 380 181 420 192"/></g><rect width="420" height="260" fill="#f6ad55" opacity="0.12"/>${end}`;
            case 'enceladus-geysers':
                return `${baseStart}<rect width="420" height="260" fill="#dff9ff" filter="url(#pfqNoise)"/><g stroke="#1689a6" stroke-width="7" stroke-linecap="round"><path d="M128 211 C166 178 210 160 254 100"/><path d="M174 225 C208 190 252 170 297 127"/></g><g stroke="#ffffff" stroke-width="5" opacity="0.82"><path d="M254 100 C248 57 268 30 287 4"/><path d="M297 127 C319 89 350 60 394 31"/><path d="M220 148 C200 102 205 64 225 27"/></g>${end}`;
            case 'mimas-crater-field':
                return icyDisk('#8b8f95', `<g fill="none" stroke="#e0e5eb" stroke-width="4" opacity="0.7">${Array.from({ length: 10 }, (_, i) => `<circle cx="${105 + (i % 5) * 49}" cy="${69 + Math.floor(i / 5) * 83}" r="${12 + (i % 4) * 5}"/>`).join('')}</g><circle cx="285" cy="165" r="31" fill="none" stroke="#4f5660" stroke-width="6" opacity="0.55"/>`);
            case 'rhea-wisps':
                return icyDisk('#989fa8', `<g stroke="#eef7ff" stroke-width="6" opacity="0.76" stroke-linecap="round"><path d="M98 72 C155 105 180 168 145 221"/><path d="M138 59 C191 98 216 157 190 220"/><path d="M248 51 C225 108 244 174 304 213"/></g>`);
            case 'cassini-regio':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)"><rect width="420" height="260" fill="#c9c1ab"/><path d="M68 22 C163 58 205 106 209 238 L80 238 Z" fill="#30251f"/><circle cx="263" cy="120" r="25" fill="none" stroke="#847c70" stroke-width="5"/><circle cx="150" cy="148" r="21" fill="none" stroke="#645149" stroke-width="4"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'uranus-blue-disk':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><circle cx="210" cy="130" r="94" fill="#79d7df"/><path d="M132 116 C182 95 251 96 292 120" stroke="#caf9ff" stroke-width="10" opacity="0.2" fill="none"/><path d="M146 164 C198 180 250 174 299 153" stroke="#2f98a8" stroke-width="8" opacity="0.18" fill="none"/><circle cx="210" cy="130" r="94" fill="url(#shade)"/>${end}`;
            case 'inverness-corona':
                return icyDisk('#8f969d', `<path d="M98 78 L196 111 L154 206 Z" fill="#c8d1d9" stroke="#3e4650" stroke-width="6"/><path d="M196 111 L312 75 L276 203 L154 206 Z" fill="#5e6670" stroke="#e2ebf2" stroke-width="5"/><g stroke="#f8fafc" stroke-width="4" opacity="0.78"><path d="M126 96 L178 126 L156 181"/><path d="M211 121 L281 99 L260 174"/></g>`);
            case 'ariel-plains':
                return icyDisk('#a6adb4', `<path d="M91 105 C144 70 236 78 314 103 C331 157 276 205 196 199 C132 195 89 162 91 105 Z" fill="#d5e3ee" opacity="0.5"/><g stroke="#465767" stroke-width="6" opacity="0.42"><path d="M104 174 C155 130 193 136 247 96"/><path d="M183 201 C235 165 287 151 328 107"/></g>`);
            case 'umbriel-dark-terrain':
                return icyDisk('#333844', `<g fill="none" stroke="#121821" stroke-width="5" opacity="0.62">${Array.from({ length: 8 }, (_, i) => `<circle cx="${108 + (i % 4) * 64}" cy="${78 + Math.floor(i / 4) * 85}" r="${16 + (i % 3) * 6}"/>`).join('')}</g><circle cx="261" cy="126" r="24" fill="none" stroke="#cbd5e1" stroke-width="4" opacity="0.52"/>`);
            case 'gertrude-crater':
                return icyDisk('#858c94', `<circle cx="200" cy="128" r="65" fill="#555e68" stroke="#dbe5ee" stroke-width="7"/><circle cx="206" cy="131" r="22" fill="#323b45" opacity="0.64"/><path d="M144 113 C181 88 225 88 259 113" stroke="#f8fafc" stroke-width="4" opacity="0.42" fill="none"/>`);
            case 'mommur-chasma':
                return icyDisk('#5c626c', `<path d="M79 168 C139 118 195 135 242 91 C282 54 330 56 365 34" stroke="#202832" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M85 171 C145 134 197 146 249 106 C290 75 330 73 370 52" stroke="#c8d1dc" stroke-width="4" opacity="0.48" fill="none"/>`);
            case 'neptune-scooter':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)"><rect width="420" height="260" fill="#1557c8"/><path d="M84 78 C168 48 279 67 344 99" stroke="#6fd3ff" stroke-width="10" opacity="0.34" fill="none"/><ellipse cx="277" cy="155" rx="58" ry="18" fill="#e7fbff" opacity="0.88"/><path d="M219 155 C248 139 300 138 336 151" stroke="#b6f0ff" stroke-width="5" opacity="0.72" fill="none"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'triton-polar-cap':
                return `${baseStart}<rect width="420" height="260" fill="#dbaea7" filter="url(#pfqNoise)"/><ellipse cx="214" cy="188" rx="145" ry="48" fill="#f4edf0" opacity="0.82"/><g fill="none" stroke="#9a7069" stroke-width="4" opacity="0.42">${Array.from({ length: 7 }, (_, i) => `<circle cx="${82 + i * 44}" cy="${78 + (i % 2) * 38}" r="${18 + (i % 3) * 4}"/>`).join('')}</g><path d="M88 188 C151 167 259 173 354 188" stroke="#ffffff" stroke-width="5" opacity="0.55" fill="none"/>${end}`;
            case 'proteus-shape':
                return irregularMoon('#59616b', `<path d="M101 81 L177 40 L283 61 L344 132 L304 211 L184 226 L83 173 Z" fill="none" stroke="#d4dde7" stroke-width="6" opacity="0.45"/><circle cx="246" cy="128" r="38" fill="none" stroke="#252b32" stroke-width="6" opacity="0.62"/>`);
            case 'larissa-elongated':
                return irregularMoon('#555d68', `<ellipse cx="213" cy="130" rx="128" ry="61" fill="none" stroke="#c2ccd8" stroke-width="6" opacity="0.45"/><circle cx="156" cy="101" r="21" fill="#252c35" opacity="0.65"/><circle cx="278" cy="158" r="27" fill="none" stroke="#202730" stroke-width="5" opacity="0.6"/>`);
            case 'nereid-low-albedo':
                return irregularMoon('#3b4350', `<rect x="66" y="28" width="290" height="205" fill="#02030a" opacity="0.18"/><path d="M116 95 C169 76 253 84 315 121" stroke="#9aa5b4" stroke-width="5" opacity="0.17" fill="none"/><circle cx="263" cy="152" r="24" fill="#151b24" opacity="0.58"/>`);
            case 'storm-earth-hurricane-challenge':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><rect width="420" height="260" fill="#1b63b8"/><path d="M24 191 C82 153 165 179 220 132 C190 194 119 229 44 222 Z" fill="#158456" opacity="0.78"/><g fill="none" stroke="#f8fafc" stroke-linecap="round"><path d="M248 98 C312 96 348 151 304 192 C249 243 144 206 166 129 C181 78 261 56 316 91" stroke-width="15" opacity="0.85"/><path d="M245 114 C283 114 303 146 281 171 C250 206 191 183 202 141 C211 108 260 99 291 115" stroke-width="10" opacity="0.95"/></g><circle cx="248" cy="146" r="11" fill="#1b63b8"/><path d="M22 44 C111 13 250 29 394 53" stroke="#ffffff" stroke-width="7" opacity="0.24" fill="none"/>${end}`;
            case 'storm-jupiter-red-spot-challenge':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/>${bands(['#d9a36f','#f5e3c4','#9e6644','#fff0d2','#c8794a','#f0d1a0','#8b5941'])}<ellipse cx="265" cy="147" rx="82" ry="41" fill="#a94334" stroke="#ffd0a1" stroke-width="8"/><ellipse cx="265" cy="147" rx="54" ry="23" fill="#db7656" opacity="0.74"/><path d="M41 113 C152 97 247 121 407 106" stroke="#fff6de" stroke-width="7" opacity="0.52" fill="none"/><path d="M37 179 C139 159 247 191 406 173" stroke="#5c342a" stroke-width="7" opacity="0.34" fill="none"/>${end}`;
            case 'storm-neptune-dark-spot-challenge':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)"><rect width="420" height="260" fill="#1155cb"/><path d="M74 75 C158 42 276 64 350 98" stroke="#77d8ff" stroke-width="12" opacity="0.36" fill="none"/><ellipse cx="252" cy="148" rx="66" ry="34" fill="#07142d" opacity="0.9"/><path d="M205 124 C241 105 290 115 329 143" stroke="#b7f2ff" stroke-width="5" opacity="0.55" fill="none"/><ellipse cx="306" cy="93" rx="36" ry="10" fill="#effcff" opacity="0.85"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'storm-saturn-hexagon-challenge':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><circle cx="210" cy="132" r="89" fill="#d7b67e"/><g clip-path="circle(89px at 210px 132px)">${bands(['#c49f66','#f1ddb5','#b9905e','#ead3a2','#cfad78'], 210, 132, 89)}</g><polygon points="210,49 270,84 270,154 210,190 150,154 150,84" fill="rgba(26,35,77,0.26)" stroke="#1a234d" stroke-width="9"/><ellipse cx="210" cy="132" rx="156" ry="36" fill="none" stroke="#ecd9b5" stroke-width="11" opacity="0.7"/><circle cx="210" cy="132" r="89" fill="url(#shade)"/>${end}`;
            case 'storm-decoy-jupiter-on-rocky-world':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><g opacity="0.96">${bands(['#d8a06d','#f8e3bd','#a06a48','#fff0cf','#bf764e','#f1d09b'])}<ellipse cx="282" cy="148" rx="67" ry="35" fill="#a94334" stroke="#ffd0a1" stroke-width="7"/><path d="M38 109 C145 88 246 125 404 106" stroke="#fff5d8" stroke-width="6" opacity="0.48" fill="none"/></g><circle cx="78" cy="66" r="31" fill="#9d8067" stroke="#e4c9a5" stroke-width="3"/><path d="M54 65 C70 45 88 71 103 48" stroke="#3f3128" stroke-width="5" fill="none" opacity="0.7"/><circle cx="78" cy="66" r="31" fill="url(#shade)"/>${end}`;
            case 'storm-decoy-jupiter-on-moon':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><g opacity="0.96">${bands(['#d8a06d','#f8e3bd','#a06a48','#fff0cf','#bf764e','#f1d09b'])}<ellipse cx="276" cy="149" rx="69" ry="34" fill="#a94334" stroke="#ffd0a1" stroke-width="7"/><path d="M18 180 C130 160 260 190 420 170" stroke="#5c342a" stroke-width="7" opacity="0.35" fill="none"/></g><path d="M56 45 C80 22 133 28 157 57 C184 88 164 132 128 144 C89 157 45 135 37 96 C33 76 40 59 56 45 Z" fill="#777d87"/><circle cx="91" cy="76" r="17" fill="none" stroke="#d7dee7" stroke-width="4" opacity="0.65"/><path d="M56 45 C80 22 133 28 157 57 C184 88 164 132 128 144 C89 157 45 135 37 96 C33 76 40 59 56 45 Z" fill="url(#shade)"/>${end}`;
            case 'classification-planet-orbit':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><circle cx="96" cy="130" r="31" fill="#ffd166"/><ellipse cx="246" cy="130" rx="132" ry="63" fill="none" stroke="#6ef0ff" stroke-width="3" opacity="0.52"/><circle cx="331" cy="91" r="34" fill="#4aa3ff"/><path d="M151 130 C204 89 267 73 331 91" stroke="#6ef0ff" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="331" cy="91" r="34" fill="url(#shade)"/><text x="96" y="188" fill="#ffd166" font-size="13" font-family="JetBrains Mono, monospace" text-anchor="middle">SUN</text>${end}`;
            case 'classification-moon-orbit':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><circle cx="211" cy="132" r="61" fill="#5aa7ff"/><ellipse cx="211" cy="132" rx="132" ry="59" fill="none" stroke="#ffd166" stroke-width="3" opacity="0.62"/><circle cx="326" cy="111" r="22" fill="#b9c2cf"/><path d="M211 132 C247 101 286 97 326 111" stroke="#ffd166" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="211" cy="132" r="61" fill="url(#shade)"/><circle cx="326" cy="111" r="22" fill="url(#shade)"/>${end}`;
            case 'magnetic-field-strong':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><circle cx="210" cy="130" r="50" fill="#4aa3ff"/><g fill="none" stroke="#4ef0a8" stroke-width="4" opacity="0.78"><ellipse cx="210" cy="130" rx="92" ry="58"/><ellipse cx="210" cy="130" rx="130" ry="82"/><ellipse cx="210" cy="130" rx="168" ry="106"/></g><path d="M38 130 C91 82 138 76 210 80 C282 76 330 82 383 130" stroke="#6ef0ff" stroke-width="5" opacity="0.5" fill="none"/><circle cx="210" cy="130" r="50" fill="url(#shade)"/>${end}`;
            case 'magnetic-field-weak':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><circle cx="210" cy="130" r="48" fill="#9a826c"/><g fill="none" stroke="#4ef0a8" stroke-width="3" opacity="0.58"><ellipse cx="210" cy="130" rx="75" ry="45"/><ellipse cx="210" cy="130" rx="103" ry="64"/></g><path d="M100 130 C142 101 174 100 210 108 C246 100 278 101 320 130" stroke="#6ef0ff" stroke-width="4" opacity="0.33" fill="none"/><circle cx="210" cy="130" r="48" fill="url(#shade)"/>${end}`;
            case 'magnetic-field-absent':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><circle cx="210" cy="130" r="52" fill="#7b808a"/><g fill="none" stroke="#ff6b6b" stroke-width="5" opacity="0.78"><path d="M160 82 L260 182"/><path d="M260 82 L160 182"/></g><path d="M70 106 C120 92 162 91 210 103 C258 91 300 92 350 106" stroke="#94a3b8" stroke-width="3" opacity="0.22" fill="none" stroke-dasharray="8 9"/><path d="M70 154 C120 168 162 169 210 157 C258 169 300 168 350 154" stroke="#94a3b8" stroke-width="3" opacity="0.22" fill="none" stroke-dasharray="8 9"/><circle cx="210" cy="130" r="52" fill="url(#shade)"/>${end}`;
            case 'mercury-hollows':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)">${craterField('#9d856a', '#e6cfaa')}<g fill="#d8f7d0" stroke="#f8ffe8" stroke-width="3" opacity="0.78"><ellipse cx="158" cy="112" rx="22" ry="11"/><ellipse cx="186" cy="127" rx="17" ry="9"/><ellipse cx="232" cy="96" rx="18" ry="10"/><ellipse cx="250" cy="118" rx="25" ry="12"/></g></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'venus-tessera':
                return `${baseStart}<rect width="420" height="260" fill="#2a140b"/><rect width="420" height="260" fill="#a95f2b" filter="url(#pfqNoise)"/><g stroke="#ffd166" stroke-width="4" opacity="0.56"><path d="M35 60 L384 210"/><path d="M70 34 L407 174"/><path d="M12 131 L310 247"/><path d="M92 229 L337 29"/><path d="M27 198 L245 36"/><path d="M174 250 L401 66"/></g>${end}`;
            case 'venus-pancake-domes':
                return `${baseStart}<rect width="420" height="260" fill="#2a140b"/><rect width="420" height="260" fill="#b7652c" filter="url(#pfqNoise)"/><g fill="#d98a43" stroke="#ffd166" stroke-width="4"><ellipse cx="134" cy="114" rx="57" ry="25"/><ellipse cx="270" cy="145" rx="72" ry="29"/><ellipse cx="220" cy="80" rx="38" ry="16"/></g><g fill="#4b2114" opacity="0.55"><ellipse cx="134" cy="114" rx="22" ry="8"/><ellipse cx="270" cy="145" rx="30" ry="10"/></g>${end}`;
            case 'earth-aurora':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)"><rect width="420" height="260" fill="#1d65c8"/><path d="M128 154 C180 126 247 138 297 108" fill="none" stroke="#20d485" stroke-width="15" opacity="0.85"/><path d="M138 168 C189 146 245 155 305 126" fill="none" stroke="#6ef0ff" stroke-width="7" opacity="0.65"/><path d="M98 74 C149 52 237 62 302 91" fill="#15965f" opacity="0.65"/></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'earth-nile-delta':
                return `${baseStart}<rect width="420" height="260" fill="#1c66bd"/><path d="M146 44 C231 57 281 101 315 174 C269 210 186 207 112 169 C92 116 102 73 146 44 Z" fill="#b98b55"/><path d="M214 57 C214 96 212 131 218 165" stroke="#4ea3ff" stroke-width="8" fill="none"/><g stroke="#4ef0a8" stroke-width="6"><path d="M218 165 L178 201"/><path d="M218 165 L227 214"/><path d="M218 165 L268 197"/><path d="M218 165 L192 222"/></g>${end}`;
            case 'copernicus-rays':
                return icyDisk('#96989c', `<g stroke="#f8fafc" stroke-width="4" opacity="0.64"><path d="M181 124 L91 69"/><path d="M181 124 L286 52"/><path d="M181 124 L93 194"/><path d="M181 124 L302 189"/></g><circle cx="181" cy="124" r="34" fill="#696d73" stroke="#f8fafc" stroke-width="6"/>`);
            case 'spa-basin':
                return icyDisk('#8f9094', `<ellipse cx="217" cy="143" rx="102" ry="70" fill="#4d535c" opacity="0.6" stroke="#cbd5e1" stroke-width="5"/><ellipse cx="217" cy="143" rx="69" ry="43" fill="none" stroke="#222832" stroke-width="5" opacity="0.45"/>`);
            case 'mars-polar-cap':
                return `${baseStart}<rect width="420" height="260" fill="#a84925" filter="url(#pfqNoise)"/><ellipse cx="210" cy="58" rx="104" ry="35" fill="#f8fafc"/><path d="M135 61 C176 39 241 41 286 60" stroke="#9ed8ff" stroke-width="6" fill="none" opacity="0.75"/><path d="M108 89 C164 108 251 104 313 86" stroke="#f8fafc" stroke-width="7" fill="none" opacity="0.58"/>${end}`;
            case 'mars-dust-storm':
                return `${baseStart}<rect width="420" height="260" fill="#a84925"/><g filter="url(#pfqNoise)"><path d="M-10 130 C80 69 173 103 250 70 C318 42 371 75 430 50 L430 260 L-10 260 Z" fill="#d79a55" opacity="0.86"/><path d="M0 174 C105 123 191 158 280 125 C345 102 378 111 420 97" stroke="#f6d39c" stroke-width="28" opacity="0.55" fill="none"/></g>${end}`;
            case 'gale-crater-mound':
                return `${baseStart}<rect width="420" height="260" fill="#a84925" filter="url(#pfqNoise)"/><circle cx="210" cy="137" r="91" fill="none" stroke="#522117" stroke-width="12" opacity="0.6"/><path d="M149 174 C174 113 203 76 236 113 C256 137 276 157 292 177 Z" fill="#d88951"/><g stroke="#f8c082" stroke-width="3" opacity="0.8"><path d="M158 168 C202 151 236 153 285 168"/><path d="M174 142 C210 130 238 133 266 145"/></g>${end}`;
            case 'jupiter-white-ovals':
                return `${baseStart}${bands(['#d9a36f','#f5e3c4','#9e6644','#fff0d2','#c8794a','#f0d1a0'])}<g fill="#fffaf0" stroke="#d7b48a" stroke-width="5"><ellipse cx="162" cy="154" rx="35" ry="18"/><ellipse cx="229" cy="145" rx="29" ry="15"/><ellipse cx="291" cy="160" rx="34" ry="17"/></g>${end}`;
            case 'jupiter-aurora':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><circle cx="210" cy="130" r="93" fill="#d9a36f"/><g clip-path="circle(93px at 210px 130px)">${bands(['#d9a36f','#f5e3c4','#9e6644','#fff0d2'],210,130,93)}<ellipse cx="210" cy="61" rx="58" ry="18" fill="none" stroke="#6ef0ff" stroke-width="8" opacity="0.85"/></g><circle cx="210" cy="130" r="93" fill="url(#shade)"/>${end}`;
            case 'pele-red-ring':
                return `${baseStart}<rect width="420" height="260" fill="#d3a72d" filter="url(#pfqNoise)"/><ellipse cx="210" cy="133" rx="108" ry="70" fill="none" stroke="#b3261e" stroke-width="17" opacity="0.82"/><ellipse cx="210" cy="133" rx="38" ry="24" fill="#24110d"/><path d="M180 122 C205 96 236 103 252 128" stroke="#ffdf5a" stroke-width="7" fill="none"/>${end}`;
            case 'tvashtar-plume':
                return `${baseStart}<rect width="420" height="260" fill="#d3a72d" filter="url(#pfqNoise)"/><ellipse cx="215" cy="188" rx="68" ry="22" fill="#21110c"/><path d="M215 182 C168 126 171 65 214 18 C266 67 263 128 225 182" fill="rgba(255,255,255,0.32)" stroke="#fff3c4" stroke-width="4"/><path d="M202 178 C200 132 209 92 221 55" stroke="#ff8a1f" stroke-width="7" fill="none"/>${end}`;
            case 'europa-double-ridges':
                return `${baseStart}<rect width="420" height="260" fill="url(#ice)" filter="url(#pfqNoise)"/><g stroke="#8c4a3b" stroke-linecap="round"><path d="M41 191 C135 120 212 139 347 57" stroke-width="5" fill="none"/><path d="M51 207 C144 137 220 156 357 75" stroke-width="5" fill="none"/><path d="M82 75 C154 100 215 92 314 124" stroke-width="4" fill="none"/><path d="M79 91 C151 116 212 109 312 140" stroke-width="4" fill="none"/></g>${end}`;
            case 'conamara-chaos':
                return `${baseStart}<rect width="420" height="260" fill="url(#ice)" filter="url(#pfqNoise)"/><g stroke="#8c4a3b" stroke-width="4" fill="rgba(155,77,57,0.16)"><path d="M92 84 L162 66 L184 130 L119 156 Z"/><path d="M191 71 L277 90 L258 162 L178 141 Z"/><path d="M103 171 L180 149 L231 210 L137 223 Z"/><path d="M270 149 L345 122 L363 202 L292 222 Z"/></g>${end}`;
            case 'tros-rays':
                return icyDisk('#8b8d8f', `<g stroke="#eef7ff" stroke-width="5" opacity="0.72"><path d="M244 132 L142 53"/><path d="M244 132 L340 76"/><path d="M244 132 L122 200"/><path d="M244 132 L337 213"/></g><circle cx="244" cy="132" r="28" fill="#59606a" stroke="#f8fafc" stroke-width="5"/>`);
            case 'asgard-basin':
                return icyDisk('#4d4d51', `<circle cx="202" cy="132" r="86" fill="none" stroke="#d7d0bd" stroke-width="5" opacity="0.65"/><circle cx="202" cy="132" r="62" fill="none" stroke="#908a7e" stroke-width="4"/><circle cx="202" cy="132" r="39" fill="none" stroke="#e7e2cf" stroke-width="4"/><circle cx="202" cy="132" r="18" fill="#6d6d72"/>`);
            case 'cassini-division':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><ellipse cx="210" cy="142" rx="178" ry="42" fill="none" stroke="#f4deb0" stroke-width="22"/><ellipse cx="210" cy="142" rx="151" ry="35" fill="none" stroke="#05060f" stroke-width="6"/><ellipse cx="210" cy="142" rx="116" ry="27" fill="none" stroke="#a98556" stroke-width="10"/><circle cx="210" cy="130" r="61" fill="#d7b67e"/><circle cx="210" cy="130" r="61" fill="url(#shade)"/>${end}`;
            case 'saturn-bands':
                return `${baseStart}<rect width="420" height="260" fill="#07101f"/><circle cx="210" cy="130" r="96" fill="#d7b67e"/><g clip-path="circle(96px at 210px 130px)">${bands(['#c49f66','#f1ddb5','#b9905e','#ead3a2','#cfad78','#f3e0b8'],210,130,96)}</g><circle cx="210" cy="130" r="96" fill="url(#shade)"/>${end}`;
            case 'titan-river-channels':
                return `${baseStart}<rect width="420" height="260" fill="#c67b2f" filter="url(#pfqNoise)"/><g stroke="#151a22" stroke-width="8" stroke-linecap="round" fill="none"><path d="M83 55 C130 91 164 125 206 199"/><path d="M132 104 L84 132"/><path d="M158 141 L109 177"/><path d="M182 165 L246 134"/><path d="M206 199 L292 214"/></g><rect width="420" height="260" fill="#f6ad55" opacity="0.13"/>${end}`;
            case 'ontario-lacus':
                return `${baseStart}<rect width="420" height="260" fill="#c67b2f" filter="url(#pfqNoise)"/><path d="M101 134 C147 92 218 115 263 95 C325 68 357 112 333 164 C297 219 205 196 154 213 C104 231 62 177 101 134 Z" fill="#111827" opacity="0.88"/><rect width="420" height="260" fill="#f6ad55" opacity="0.14"/>${end}`;
            case 'enceladus-cratered-north':
                return icyDisk('#dff9ff', `<g fill="none" stroke="#7997a7" stroke-width="5" opacity="0.68"><circle cx="129" cy="82" r="25"/><circle cx="210" cy="94" r="19"/><circle cx="282" cy="74" r="30"/><circle cx="160" cy="162" r="34"/><circle cx="270" cy="171" r="22"/></g>`);
            case 'neptune-cloud-bands':
                return `${baseStart}${planetClip}<rect width="420" height="260" fill="#07101f"/><g clip-path="url(#disk)"><rect width="420" height="260" fill="#1357c8"/><g stroke="#d8f7ff" stroke-linecap="round" opacity="0.78"><path d="M91 89 C154 58 260 70 335 97" stroke-width="9"/><path d="M86 171 C165 140 258 158 332 187" stroke-width="7"/><path d="M147 127 C205 111 259 119 305 139" stroke-width="5"/></g></g><circle cx="210" cy="130" r="108" fill="url(#shade)"/>${end}`;
            case 'triton-cantaloupe':
                return `${baseStart}<rect width="420" height="260" fill="#dfb5aa" filter="url(#pfqNoise)"/><g fill="none" stroke="#9a7069" stroke-width="5" opacity="0.55">${Array.from({length:14},(_,i)=>`<circle cx="${58+(i%5)*76}" cy="${54+Math.floor(i/5)*70}" r="${18+(i%3)*5}"/>`).join('')}</g><path d="M38 216 C128 188 252 207 382 176" stroke="#f4edf0" stroke-width="8" opacity="0.42" fill="none"/>${end}`;
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
        const card = round.card || item;
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
        visual.innerHTML = svgFor(round.visual || card.visual);
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
                        <p><strong>Visual context:</strong> ${escapeHtml(round.visualContext || `${card.feature} on ${item.world}`)}.</p>
                        <p>${escapeHtml(round.explanation || card.explanation || item.explanation)}</p>
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

    function getMasterQuestions() {
        return FEATURE_ITEMS.flatMap(item => buildRounds(item, true).map((round, index) => {
            const card = round.card || item;
            const choices = round.options.map(option => option.text);
            const correctIndex = round.options.findIndex(option => option.correct);

            return {
                id: `visual-${item.path.replace(/[^a-z0-9]+/gi, '-')}-${index + 1}`,
                question: round.prompt,
                choices,
                correctIndex,
                explanation: round.explanation || card.explanation || item.explanation,
                difficulty: round.type === 'feature' ? 'medium' : 'easy',
                topic: item.world,
                subtopic: card.feature,
                topicSlug: item.world.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                subtopicSlug: card.feature.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                sourceTitle: `${item.world} Visual Identification`,
                sourcePath: item.path,
                sourceType: 'visual',
                category: 'visual',
                visual: round.visual || card.visual,
                visualCaption: round.visualContext || `${card.feature} on ${item.world}`,
                tags: ['visual', round.type, item.world.toLowerCase().replace(/[^a-z0-9]+/g, '-')]
            };
        }));
    }

    function installMasterQuestions() {
        const data = window.MASTER_QUIZ_DATA;
        if (!data || !Array.isArray(data.questions) || data.__visualQuestionsInstalled) return;

        const visualQuestions = getMasterQuestions();
        const existingIds = new Set(data.questions.map(question => question.id));
        const additions = visualQuestions.filter(question => !existingIds.has(question.id));
        data.questions.push(...additions);
        data.questionCount = data.questions.length;
        data.topics = [...new Set(data.questions.map(question => question.topic))].sort();
        data.difficulties = [...new Set(data.questions.map(question => question.difficulty))].sort();
        data.categories = [...new Set(data.questions.map(question => question.category || 'fact'))].sort();
        data.subtopicsByTopic = data.questions.reduce((groups, question) => {
            if (!groups[question.topic]) groups[question.topic] = [];
            if (!groups[question.topic].includes(question.subtopic)) groups[question.topic].push(question.subtopic);
            return groups;
        }, {});
        Object.keys(data.subtopicsByTopic).forEach(topic => data.subtopicsByTopic[topic].sort());
        data.__visualQuestionsInstalled = true;
    }

    window.PhysicalFeatureQuiz = {
        getMasterQuestions,
        renderVisual: svgFor
    };

    installMasterQuestions();

    function initPhysicalFeatureQuiz() {
        injectStyles();
        const path = normalizePath();

        if (MASTER_PATHS.has(path)) {
            mountMaster();
            return;
        }

        const item = FEATURE_ITEMS.find(entry => entry.path === path);
        if (item) mountIndividual(item);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPhysicalFeatureQuiz);
    } else {
        initPhysicalFeatureQuiz();
    }
})();
