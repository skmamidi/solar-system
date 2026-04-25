(function () {
    const missedQuestions = [];
    let lastQuestionText = '';

    function isVisible(el) {
        return !!el && !el.classList.contains('hidden') && el.offsetParent !== null;
    }

    function cleanText(text) {
        return (text || '').replace(/\s+/g, ' ').trim();
    }

    function getQuestionText() {
        const selectors = [
            '#quizQuestion',
            '#questionText',
            '#dynamicQuizArea h3',
            '#quizBody h3',
            '#questionWrapper h3',
            '#quizContainer h3'
        ];

        for (const selector of selectors) {
            const el = document.querySelector(selector);
            const text = cleanText(el && el.innerText);
            if (text) return text;
        }

        return lastQuestionText || 'Missed question';
    }

    function getExplanationText() {
        const selectors = [
            '#quizExplanationText',
            '#explanationText',
            '#explanationArea',
            '#explanationBox',
            '#explanationPanel',
            '#explanationContainer'
        ];

        for (const selector of selectors) {
            const el = document.querySelector(selector);
            const text = cleanText(el && el.innerText);
            if (text) return text;
        }

        return 'Review the highlighted correct answer and source material for this one.';
    }

    function isWrongSelection(button) {
        const classes = button.classList;
        const text = cleanText(button.innerText).toLowerCase();

        return classes.contains('bg-star-red')
            || classes.contains('text-star-red')
            || classes.contains('border-star-red')
            || text.includes('incorrect')
            || text.includes('not quite');
    }

    function rememberQuestionContext() {
        const text = getQuestionText();
        if (text) lastQuestionText = text;
    }

    function recordMiss(button) {
        const question = getQuestionText();
        const explanation = getExplanationText();
        const selectedAnswer = cleanText(button.innerText);
        const duplicate = missedQuestions.some(item => item.question === question && item.selectedAnswer === selectedAnswer);

        if (!duplicate) {
            missedQuestions.push({ question, selectedAnswer, explanation });
        }
    }

    function clearReview() {
        missedQuestions.length = 0;
        lastQuestionText = '';
        document.querySelectorAll('[data-review-missed-btn], [data-review-missed-panel]').forEach(el => el.remove());
    }

    function makeReviewButton() {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.dataset.reviewMissedBtn = 'true';
        btn.className = 'bg-star-magenta border border-star-magenta text-white px-6 py-2 rounded-full hover:opacity-90 transition mx-auto font-bold';
        btn.addEventListener('click', showMissedReview);
        return btn;
    }

    function findResultsContainer() {
        return [
            '#q-result',
            '#quizResultsArea',
            '#quizResults',
            '#quizResultScreen',
            '#resultsCard',
            '#quizContainer'
        ]
            .map(selector => document.querySelector(selector))
            .find(el => {
                if (!isVisible(el)) return false;
                const text = cleanText(el.innerText).toLowerCase();
                return text.includes('complete')
                    || text.includes('final score')
                    || text.includes('olympiad')
                    || text.includes('quiz finished')
                    || text.includes('debrief failed')
                    || text.includes('exceptional debrief')
                    || text.includes('keep studying');
            });
    }

    function ensureReviewButton() {
        const container = findResultsContainer();
        if (!container || !missedQuestions.length) return;

        const existingBtn = container.querySelector('[data-review-missed-btn]');
        if (existingBtn) {
            const label = `Review ${missedQuestions.length} Missed ${missedQuestions.length === 1 ? 'Question' : 'Questions'}`;
            if (existingBtn.textContent !== label) existingBtn.textContent = label;
            return;
        }

        const btn = makeReviewButton();
        btn.textContent = `Review ${missedQuestions.length} Missed ${missedQuestions.length === 1 ? 'Question' : 'Questions'}`;

        const buttonWrap = [...container.querySelectorAll('div')]
            .reverse()
            .find(div => div.querySelector('button'));

        if (buttonWrap) {
            buttonWrap.appendChild(btn);
        } else {
            container.appendChild(btn);
        }
    }

    function showMissedReview() {
        const container = findResultsContainer();
        if (!container) return;

        container.querySelector('[data-review-missed-panel]')?.remove();

        const panel = document.createElement('div');
        panel.dataset.reviewMissedPanel = 'true';
        panel.className = 'mt-6 text-left rounded-2xl border border-star-magenta/40 bg-space-900/70 p-5 space-y-4';
        panel.innerHTML = `
            <h4 class="font-display text-2xl text-star-magenta text-center">Missed Question Review</h4>
            ${missedQuestions.map((item, index) => `
                <article class="rounded-xl border border-space-500 bg-space-800/70 p-4">
                    <p class="font-bold text-white mb-2">${index + 1}. ${item.question}</p>
                    <p class="text-sm text-star-red mb-2"><strong>Your answer:</strong> ${item.selectedAnswer || 'Not recorded'}</p>
                    <p class="text-sm text-space-100 leading-relaxed">${item.explanation}</p>
                </article>
            `).join('')}
        `;
        container.appendChild(panel);
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    document.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (!button) return;

        if (button.matches('[data-review-missed-btn]')) return;

        const commandText = cleanText(button.innerText).toLowerCase();
        const onclick = button.getAttribute('onclick') || '';
        if (
            /^(retake|try again|start|restart|run again)/.test(commandText)
            || onclick.includes('reset')
            || onclick.includes('initQuiz')
            || onclick.includes('startQuiz')
        ) {
            setTimeout(clearReview, 0);
            return;
        }

        rememberQuestionContext();
        setTimeout(() => {
            if (isWrongSelection(button)) recordMiss(button);
            ensureReviewButton();
        }, 0);
    }, true);

    const observer = new MutationObserver(() => ensureReviewButton());
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class', 'style'] });
})();
