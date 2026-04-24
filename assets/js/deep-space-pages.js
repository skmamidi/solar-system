(function () {
    const PAGE_DATA = {
        'scattered-disk': {
            title: 'Scattered Disk',
            subtitle: 'The stirred-up frontier beyond the main Kuiper Belt',
            kicker: 'Trans-Neptunian Region',
            accent: '#f472b6',
            glow: 'rgba(244, 114, 182, 0.28)',
            intro: 'The scattered disk begins where the main Kuiper Belt starts to thin out. NASA describes it as a broad, linked extension of the Kuiper Belt populated by worlds that Neptune helped fling into stretched, tilted, and still-evolving orbits.',
            facts: [
                { label: 'Main Span', value: '50 to ~1,000 AU', note: 'NASA says the scattered disk extends far beyond the main Kuiper Belt.' },
                { label: 'Orbit Shape', value: 'Highly elliptical', note: 'Many objects swing inward near Neptune and then outward hundreds of AU.' },
                { label: 'Orbit Tilt', value: 'Often steeply inclined', note: 'Some scattered objects tilt by tens of degrees from the planetary plane.' },
                { label: 'Primary Sculptor', value: 'Neptune', note: 'Neptune’s migration and gravity helped scatter many of these bodies.' },
                { label: 'Famous Resident', value: 'Eris', note: 'NASA lists Eris as a textbook scattered disk object.' },
                { label: 'Why It Matters', value: 'Solar system history', note: 'This region preserves clues about how the giant planets moved early on.' }
            ],
            cards: [
                { title: 'Not A Clean Ring', body: 'Unlike the more orderly classical Kuiper Belt, the scattered disk is thicker, messier, and more dynamic.' },
                { title: 'Neptune Left Its Mark', body: 'The leading explanation is that Neptune’s gravity tossed many bodies outward during the early reshaping of the outer solar system.' },
                { title: 'Some Objects Travel Far', body: 'A scattered disk world can dive back toward Neptune at one end of its orbit and reach hundreds of AU away at the other.' },
                { title: 'A Bridge Region', body: 'It overlaps the outer Kuiper Belt and helps connect the trans-Neptunian realm to even more distant populations.' }
            ],
            timeline: [
                { heading: '4.6 billion years ago', text: 'Leftover icy planetesimals formed beyond the giant planets after the Sun and planets formed.' },
                { heading: 'Planet migration era', text: 'As Neptune moved outward, its gravity reshaped the outer debris disk and scattered some objects into long, tilted orbits.' },
                { heading: 'Modern discoveries', text: 'As telescopes improved, astronomers identified more trans-Neptunian objects with scattered, eccentric paths.' },
                { heading: 'Today', text: 'The scattered disk remains an active research zone for understanding migration, resonances, and the architecture of the outer solar system.' }
            ],
            visual: 'scattered-disk',
            sources: [
                { label: 'NASA Kuiper Belt Facts', url: 'https://science.nasa.gov/solar-system/kuiper-belt/facts' },
                { label: 'NASA Kuiper Belt: 10 Things To Know', url: 'https://science.nasa.gov/solar-system/kuiper-belt/10-things-to-know-about-the-kuiper-belt/' }
            ]
        },
        'termination-shock': {
            title: 'Termination Shock',
            subtitle: 'Where the solar wind first slams on the brakes',
            kicker: 'Heliosphere Boundary',
            accent: '#fbbf24',
            glow: 'rgba(251, 191, 36, 0.28)',
            intro: 'The termination shock is the place where the Sun’s outward-flowing solar wind drops from supersonic to slower speeds as it begins to feel stronger pressure from the interstellar medium. NASA’s Voyager pages treat it as the entry point into the heliosheath.',
            facts: [
                { label: 'What Changes', value: 'Supersonic to subsonic', note: 'The solar wind slows abruptly at this shock boundary.' },
                { label: 'Voyager 1', value: 'Dec. 2004 at ~94 AU', note: 'NASA fast facts place Voyager 1’s crossing near 94 AU.' },
                { label: 'Voyager 2', value: 'Aug. 2007 at ~84 AU', note: 'Voyager 2 crossed closer in, showing the heliosphere is asymmetric.' },
                { label: 'What It Shows', value: 'Heliosphere is squashed', note: 'The two different crossing distances revealed the bubble is not perfectly round.' },
                { label: 'Region Afterward', value: 'Heliosheath', note: 'Crossing the shock moves a spacecraft into the compressed heliosheath.' },
                { label: 'Scale On This Map', value: 'Inside the 30–200 AU linear section', note: 'It belongs to the outer heliosphere, not the deep compressed section.' }
            ],
            cards: [
                { title: 'A Shock, Not A Wall', body: 'This boundary is not a solid shell. It is a transition where plasma conditions change sharply.' },
                { title: 'Solar Wind Physics', body: 'The Sun constantly blows charged particles outward. Far enough away, that flow can no longer ignore interstellar pressure.' },
                { title: 'Voyager Measured It Directly', body: 'The Voyagers gave scientists in-situ measurements instead of just models or remote sensing.' },
                { title: 'Shape Matters', body: 'Because Voyager 1 and 2 crossed at different distances, scientists learned the heliosphere is shaped by its galactic surroundings.' }
            ],
            timeline: [
                { heading: '1950s', text: 'Solar wind theory made scientists expect the Sun’s influence would create a giant bubble in interstellar space.' },
                { heading: '1977', text: 'Voyager 1 and 2 launched carrying instruments that could measure fields, particles, and plasma.' },
                { heading: '2004 and 2007', text: 'Voyager 1 and then Voyager 2 crossed the termination shock at different distances.' },
                { heading: 'Today', text: 'Those crossings remain key benchmarks in heliophysics and in our map of the Sun’s outer environment.' }
            ],
            visual: 'termination-shock',
            sources: [
                { label: 'NASA Voyager Fast Facts', url: 'https://science.nasa.gov/mission/voyager/fast-facts/' },
                { label: 'NASA Voyager Mission Overview', url: 'https://science.nasa.gov/mission/voyager/mission-overview/' },
                { label: 'NASA Components of the Heliosphere', url: 'https://science.nasa.gov/learn/heat/resource/components-of-the-heliosphere/' }
            ]
        },
        'heliosheath': {
            title: 'Heliosheath',
            subtitle: 'The compressed outer layer of the Sun’s space-weather bubble',
            kicker: 'Outer Heliosphere',
            accent: '#6ef0ff',
            glow: 'rgba(110, 240, 255, 0.28)',
            intro: 'The heliosheath is the region between the termination shock and the heliopause. NASA describes it as the part of the heliosphere where the solar wind slows, piles up, and becomes more turbulent as it pushes against interstellar space.',
            facts: [
                { label: 'Location', value: 'Between shock and heliopause', note: 'It begins after the termination shock and ends at the heliopause.' },
                { label: 'Solar Wind State', value: 'Slowed and compressed', note: 'The plasma here is hotter, denser, and less orderly than deeper inside the heliosphere.' },
                { label: 'Voyager 1 Crossing', value: '2004 to 2012', note: 'Voyager 1 spent years traversing the heliosheath before reaching interstellar space.' },
                { label: 'Voyager 2 Crossing', value: '2007 to 2018', note: 'Voyager 2 provided a second path through the same boundary region.' },
                { label: 'Scientific Role', value: 'Shield + mixing zone', note: 'It helps shape how solar and interstellar particles meet and interact.' },
                { label: 'Map Placement', value: '~84 to ~120 AU', note: 'On the landing page it sits just beyond the termination shock.' }
            ],
            cards: [
                { title: 'A Turbulent Buffer', body: 'Think of the heliosheath as the Sun’s outer weather zone, where the solar wind becomes crowded and disturbed.' },
                { title: 'Not Empty Space', body: 'Even very far from the planets, this region is full of plasma, magnetic fields, and energetic particles.' },
                { title: 'Two Voyagers, Two Paths', body: 'Voyager 1 and Voyager 2 crossed different parts of the heliosheath, helping scientists compare north and south conditions.' },
                { title: 'Part Of Our Cosmic Shield', body: 'Conditions in the heliosheath affect how much galactic radiation reaches the inner solar system.' }
            ],
            timeline: [
                { heading: 'Termination shock', text: 'Once the solar wind slows from supersonic speeds, the heliosheath begins.' },
                { heading: 'Voyager 1 era', text: 'From late 2004 to 2012, Voyager 1 sampled the heliosheath on the north side of the heliosphere.' },
                { heading: 'Voyager 2 era', text: 'From 2007 to 2018, Voyager 2 sampled a second heliosheath path below the plane of the planets.' },
                { heading: 'Boundary science today', text: 'The heliosheath remains central to understanding how the Sun interacts with the galaxy around it.' }
            ],
            visual: 'heliosheath',
            sources: [
                { label: 'NASA Components of the Heliosphere', url: 'https://science.nasa.gov/learn/heat/resource/components-of-the-heliosphere/' },
                { label: 'NASA Voyager 1 Mission Page', url: 'https://science.nasa.gov/mission/voyager/voyager-1/' },
                { label: 'NASA Voyager 2 Mission Page', url: 'https://science.nasa.gov/mission/voyager/voyager-2/' }
            ]
        },
        'heliopause': {
            title: 'Heliopause',
            subtitle: 'The boundary where interstellar space takes over',
            kicker: 'Edge Of The Heliosphere',
            accent: '#4ef0a8',
            glow: 'rgba(78, 240, 168, 0.28)',
            intro: 'The heliopause is the outer boundary of the heliosphere, the bubble inflated by the solar wind. Beyond it, the Sun still holds objects gravitationally, but the surrounding plasma and magnetic environment are dominated by the interstellar medium.',
            facts: [
                { label: 'What Ends Here', value: 'Solar wind dominance', note: 'The heliopause is where the solar wind is stopped by the interstellar medium.' },
                { label: 'Voyager 1', value: 'Aug. 25, 2012', note: 'NASA identifies Voyager 1 as the first spacecraft to cross into interstellar space.' },
                { label: 'Voyager 2', value: 'Nov. 5, 2018', note: 'Voyager 2 confirmed the boundary from a second direction.' },
                { label: 'Approximate Distance', value: '~120 AU', note: 'The crossing zone is far beyond Pluto but still vastly inside the Oort Cloud.' },
                { label: 'Not The Sun’s Gravity Limit', value: 'Only the plasma boundary', note: 'Comets and distant icy bodies remain gravitationally tied to the Sun far beyond it.' },
                { label: 'Why It Matters', value: 'Gateway science', note: 'It marks the handoff from solar-dominated space to the local interstellar environment.' }
            ],
            cards: [
                { title: 'A Boundary Of Influence', body: 'The heliopause is about plasma pressure and magnetic fields, not about where the solar system “ends” in every possible sense.' },
                { title: 'Voyager 2 Added New Evidence', body: 'Unlike Voyager 1, Voyager 2 still had a working plasma instrument, giving scientists especially valuable boundary data.' },
                { title: 'Interstellar Space Begins', body: 'Past this line, spacecraft sample matter and fields that are no longer mainly shaped by the Sun.' },
                { title: 'Still Inside The Solar System', body: 'A spacecraft beyond the heliopause has entered interstellar space physically, but it can still be inside the Sun’s long gravitational domain.' }
            ],
            timeline: [
                { heading: 'Early models', text: 'Heliophysicists predicted that the solar wind bubble must end at a boundary with interstellar space.' },
                { heading: '2012', text: 'Voyager 1 became the first spacecraft to cross the heliopause.' },
                { heading: '2018', text: 'Voyager 2 crossed the heliopause and strengthened the case with direct plasma measurements.' },
                { heading: 'Modern view', text: 'Today the heliopause is a central concept for mapping how stars carve out astrospheres in the galaxy.' }
            ],
            visual: 'heliopause',
            sources: [
                { label: 'NASA Components of the Heliosphere', url: 'https://science.nasa.gov/learn/heat/resource/components-of-the-heliosphere/' },
                { label: 'NASA Voyager Fast Facts', url: 'https://science.nasa.gov/mission/voyager/fast-facts/' },
                { label: 'NASA Voyager 2 Enters Interstellar Space', url: 'https://science.nasa.gov/missions/voyager-program/nasas-voyager-2-probe-enters-interstellar-space/' }
            ]
        },
        'oort-cloud': {
            title: 'Oort Cloud',
            subtitle: 'The Sun’s immense, distant comet reservoir',
            kicker: 'Far Solar System',
            accent: '#c084fc',
            glow: 'rgba(192, 132, 252, 0.28)',
            intro: 'The Oort Cloud is a theoretical spherical shell of icy bodies far beyond Pluto and the Kuiper Belt. NASA’s Oort Cloud facts page places the main cloud roughly between 5,000 and 100,000 AU, while many models also include an inner Oort Cloud beginning a few thousand AU from the Sun.',
            facts: [
                { label: 'Main Cloud Range', value: '~5,000 to 100,000 AU', note: 'That is NASA’s typical scale for the Oort Cloud proper.' },
                { label: 'Inner Oort Cloud', value: 'A few thousand AU', note: 'Many models place an inner Oort region or Hills Cloud closer in.' },
                { label: 'Shape', value: 'Roughly spherical shell', note: 'Unlike the flatter Kuiper Belt, the Oort Cloud surrounds the solar system in all directions.' },
                { label: 'Seen Directly?', value: 'No', note: 'It is inferred from comet behavior and models, not directly imaged as a whole.' },
                { label: 'Comet Source', value: 'Long-period comets', note: 'Many long-period comets are thought to come from this remote reservoir.' },
                { label: 'Scale Compared To Stars', value: 'Perhaps 1/4 to 1/2 of the way to the next star', note: 'NASA notes the Oort Cloud extends astonishingly far.' }
            ],
            cards: [
                { title: 'Jan Oort’s Idea', body: 'Astronomer Jan Oort proposed the cloud in 1950 to explain why long-period comets seem to arrive from every direction.' },
                { title: 'A Deep-Freeze Archive', body: 'These icy leftovers preserve information about the solar system’s earliest building material.' },
                { title: 'Not A Flat Belt', body: 'Objects in the Oort Cloud can orbit at many inclinations, which is why it is described as a cloud rather than a belt.' },
                { title: 'Still Mostly Theoretical', body: 'Scientists are confident in the concept, but no spacecraft has visited it and no telescope has imaged the entire structure directly.' }
            ],
            timeline: [
                { heading: 'Solar system formation', text: 'Icy leftovers were scattered outward by the giant planets during the early evolution of the solar system.' },
                { heading: '1950', text: 'Jan Oort proposed a vast distant comet reservoir to explain long-period comet orbits.' },
                { heading: 'Modern modeling', text: 'Computer simulations and comet observations strengthened the case for an enormous distant shell.' },
                { heading: 'Future exploration', text: 'The Oort Cloud remains one of the least directly explored regions linked to our Sun.' }
            ],
            visual: 'oort-cloud',
            sources: [
                { label: 'NASA Oort Cloud Overview', url: 'https://science.nasa.gov/solar-system/oort-cloud/' },
                { label: 'NASA Oort Cloud Facts', url: 'https://science.nasa.gov/solar-system/oort-cloud/facts/' },
                { label: 'NASA Solar System Facts', url: 'https://science.nasa.gov/solar-system/facts/' }
            ]
        },
        'proxima-centauri': {
            title: 'Proxima Centauri',
            subtitle: 'The nearest known star beyond our Sun',
            kicker: 'Nearby Star',
            accent: '#ff7a59',
            glow: 'rgba(255, 122, 89, 0.28)',
            intro: 'Proxima Centauri is the closest known star to the Sun, located a little over 4.2 light-years away in the constellation Centaurus. NASA describes it as a small, dim red dwarf and a flare star, meaning its brightness can change dramatically.',
            facts: [
                { label: 'Distance', value: '~4.24 light-years', note: 'On the landing-page compressed scale that is about 268,000 AU from the Sun.' },
                { label: 'Star Type', value: 'Red dwarf', note: 'It is a cool, low-mass M-type star.' },
                { label: 'Mass', value: '~1/8 of the Sun', note: 'NASA notes Proxima is much smaller than our Sun.' },
                { label: 'Brightness', value: 'Very low luminosity', note: 'It is too faint to see with the unaided human eye.' },
                { label: 'Behavior', value: 'Flare star', note: 'Its magnetic activity can trigger sudden bursts of brightness.' },
                { label: 'System', value: 'Part of Alpha Centauri', note: 'Proxima is associated with the Alpha Centauri triple-star system.' }
            ],
            cards: [
                { title: 'Nearest But Still Far', body: 'Even our nearest stellar neighbor is so distant that current spacecraft would need tens of thousands of years to get there.' },
                { title: 'A Red Dwarf', body: 'Red dwarfs are smaller and cooler than the Sun, but they can live for incredibly long times.' },
                { title: 'A Flare Star', body: 'Proxima’s brightness can change because magnetic activity triggers energetic flares.' },
                { title: 'Planet Host', body: 'NASA’s star and exoplanet catalogs list planets around Proxima Centauri, including the well-known Proxima b.' }
            ],
            timeline: [
                { heading: '1915', text: 'Astronomer Robert Innes announced the discovery of Proxima Centauri as a separate nearby star.' },
                { heading: 'Hubble era', text: 'Space telescopes helped refine our view of this faint but scientifically important nearby star.' },
                { heading: '2016', text: 'Astronomers announced Proxima b, a planet orbiting within the system’s habitable-zone neighborhood.' },
                { heading: 'Today', text: 'Proxima remains a prime target for exoplanet studies and long-term thinking about interstellar exploration.' }
            ],
            visual: 'proxima-centauri',
            sources: [
                { label: 'NASA Hubble: Proxima Centauri', url: 'https://science.nasa.gov/asset/hubble/proxima-centauri/' },
                { label: 'NASA Exoplanet Star Catalog: Proxima Centauri', url: 'https://science.nasa.gov/exoplanets/star-catalog/proxima_cen/' },
                { label: 'NASA Hubble Article: Our Nearest Neighbor', url: 'https://science.nasa.gov/missions/hubble/hubbles-new-shot-of-proxima-centauri-our-nearest-neighbor' }
            ]
        }
    };

    function setText(id, value) {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    }

    function renderFacts(items) {
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

    function renderCards(items) {
        const root = document.getElementById('concept-cards');
        if (!root) return;
        root.innerHTML = items.map((item) => `
            <article class="glass-card rounded-3xl p-6">
                <div class="font-mono text-[11px] uppercase tracking-[0.26em] text-[var(--page-accent-soft)]">Key Idea</div>
                <h3 class="mt-3 font-display text-2xl text-white">${item.title}</h3>
                <p class="mt-3 text-slate-300 leading-7">${item.body}</p>
            </article>
        `).join('');
    }

    function renderTimeline(items) {
        const root = document.getElementById('timeline-list');
        if (!root) return;
        root.innerHTML = items.map((item) => `
            <article class="glass-card timeline-item rounded-2xl p-4">
                <div class="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--page-accent-soft)]">${item.heading}</div>
                <p class="mt-2 text-slate-200 leading-7">${item.text}</p>
            </article>
        `).join('');
    }

    function renderSources(items) {
        const root = document.getElementById('source-list');
        if (!root) return;
        root.innerHTML = items.map((item) => `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="glass-card source-link rounded-2xl p-4 hover:border-white/40">
                <div class="font-display text-lg text-white">${item.label}</div>
                <div class="mt-2 text-sm text-[var(--page-accent-soft)] break-all">${item.url}</div>
            </a>
        `).join('');
    }

    function renderVisual(type) {
        const root = document.getElementById('hero-visual');
        if (!root) return;
        const common = '<div class="starfield"></div><div class="sun-dot"></div>';
        const visuals = {
            'scattered-disk': `${common}
                <div class="scene-layer">
                    <div class="disk-swoosh"></div>
                    <div class="disk-swoosh secondary"></div>
                    <div class="body-dot" style="left:44%; top:36%; width:13px; height:13px;"></div>
                    <div class="body-dot" style="left:58%; top:26%; width:10px; height:10px;"></div>
                    <div class="body-dot" style="left:66%; top:58%; width:14px; height:14px;"></div>
                    <div class="body-dot" style="left:73%; top:42%; width:11px; height:11px;"></div>
                    <div class="glow-halo" style="left:40%; top:24%; width:280px; height:220px;"></div>
                </div>`,
            'termination-shock': `${common}
                <div class="scene-layer">
                    <div class="shock-front"></div>
                    <div class="boundary-wave one"></div>
                    <div class="body-dot" style="left:58%; top:48%; width:12px; height:12px;"></div>
                    <div class="body-dot" style="left:65%; top:57%; width:12px; height:12px;"></div>
                    <div class="glow-halo" style="left:44%; top:26%; width:240px; height:240px;"></div>
                </div>`,
            'heliosheath': `${common}
                <div class="scene-layer">
                    <div class="boundary-wave one"></div>
                    <div class="boundary-wave two"></div>
                    <div class="shock-front" style="left:32%; width:28%; height:56%; top:22%; opacity:0.45;"></div>
                    <div class="body-dot" style="left:60%; top:50%; width:12px; height:12px;"></div>
                    <div class="body-dot" style="left:71%; top:39%; width:11px; height:11px;"></div>
                    <div class="glow-halo" style="left:34%; top:20%; width:320px; height:250px;"></div>
                </div>`,
            'heliopause': `${common}
                <div class="scene-layer">
                    <div class="boundary-wave one"></div>
                    <div class="boundary-wave two"></div>
                    <div class="boundary-wave three"></div>
                    <div class="body-dot" style="left:74%; top:44%; width:14px; height:14px;"></div>
                    <div class="glow-halo" style="left:24%; top:12%; width:380px; height:300px;"></div>
                </div>`,
            'oort-cloud': `${common}
                <div class="scene-layer">
                    <div class="oort-shell inner"></div>
                    <div class="oort-shell outer"></div>
                    <div class="body-dot" style="left:36%; top:26%; width:9px; height:9px;"></div>
                    <div class="body-dot" style="left:54%; top:16%; width:10px; height:10px;"></div>
                    <div class="body-dot" style="left:72%; top:34%; width:11px; height:11px;"></div>
                    <div class="body-dot" style="left:80%; top:58%; width:8px; height:8px;"></div>
                    <div class="body-dot" style="left:28%; top:68%; width:10px; height:10px;"></div>
                    <div class="glow-halo" style="left:18%; top:10%; width:420px; height:320px;"></div>
                </div>`,
            'proxima-centauri': `
                <div class="starfield"></div>
                <div class="scene-layer">
                    <div class="star-core"></div>
                    <div class="star-flare"></div>
                    <div class="body-dot" style="left:24%; top:62%; width:10px; height:10px;"></div>
                    <div class="body-dot" style="left:31%; top:56%; width:8px; height:8px;"></div>
                    <div class="glow-halo" style="left:56%; top:14%; width:340px; height:340px;"></div>
                </div>`
        };
        root.innerHTML = visuals[type] || common;
    }

    function init() {
        const topic = document.body.dataset.topic;
        const data = PAGE_DATA[topic];
        if (!data) return;

        document.documentElement.style.setProperty('--page-accent', data.accent);
        document.documentElement.style.setProperty('--page-accent-soft', colorMixFallback(data.accent));
        document.documentElement.style.setProperty('--page-glow', data.glow);

        setText('page-kicker', data.kicker);
        setText('page-title', data.title);
        setText('page-subtitle', data.subtitle);
        setText('page-intro', data.intro);
        document.title = `${data.title} — Interactive Solar System Explorer`;

        renderFacts(data.facts);
        renderCards(data.cards);
        renderTimeline(data.timeline);
        renderSources(data.sources);
        renderVisual(data.visual);
    }

    function colorMixFallback(accent) {
        const map = {
            '#f472b6': '#fbcfe8',
            '#fbbf24': '#fde68a',
            '#6ef0ff': '#c6fbff',
            '#4ef0a8': '#bbf7d0',
            '#c084fc': '#e9d5ff',
            '#ff7a59': '#ffd0c3'
        };
        return map[accent] || '#e2e8f0';
    }

    document.addEventListener('DOMContentLoaded', init);
})();
