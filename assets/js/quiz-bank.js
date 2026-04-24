(function () {
    function ensureMasterData() {
        const data = window.MASTER_QUIZ_DATA;
        if (!data || !Array.isArray(data.questions)) {
            throw new Error('MASTER_QUIZ_DATA is not available. Load assets/js/master-quiz-data.js first.');
        }
        return data;
    }

    function getSourceQuestions(sourcePath) {
        const data = ensureMasterData();
        return data.questions.filter((question) =>
            question.sourcePath === sourcePath && question.sourceType === 'page-quiz'
        );
    }

    function toOptionObjects(question) {
        return {
            question: question.question,
            options: question.choices.map((choice, index) => ({
                text: choice,
                isCorrect: index === question.correctIndex
            })),
            explanation: question.explanation,
            difficulty: question.difficulty,
            topic: question.topic,
            subtopic: question.subtopic
        };
    }

    function toOptionStrings(question) {
        return {
            question: question.question,
            options: [...question.choices],
            correct: question.correctIndex,
            explanation: question.explanation,
            difficulty: question.difficulty,
            topic: question.topic,
            subtopic: question.subtopic
        };
    }

    function toQuizBankChoices(question) {
        return {
            q: question.question,
            choices: [...question.choices],
            correct: question.correctIndex,
            explanation: question.explanation,
            difficulty: question.difficulty,
            topic: question.topic,
            subtopic: question.subtopic
        };
    }

    function toQuizAnswers(question) {
        return {
            q: question.question,
            answers: question.choices.map((choice, index) => ({
                text: choice,
                correct: index === question.correctIndex
            })),
            explanation: question.explanation,
            difficulty: question.difficulty,
            topic: question.topic,
            subtopic: question.subtopic
        };
    }

    function toQuizOpts(question) {
        return {
            q: question.question,
            opts: [...question.choices],
            ans: question.correctIndex,
            exp: question.explanation,
            difficulty: question.difficulty,
            topic: question.topic,
            subtopic: question.subtopic
        };
    }

    function toQuizCorrectIncorrect(question) {
        return {
            q: question.question,
            c: question.choices[question.correctIndex],
            i: question.choices.filter((_, index) => index !== question.correctIndex),
            exp: question.explanation,
            difficulty: question.difficulty,
            topic: question.topic,
            subtopic: question.subtopic
        };
    }

    const formatters = {
        'option-objects': toOptionObjects,
        'option-strings': toOptionStrings,
        'quiz-bank-choices': toQuizBankChoices,
        'quiz-answers': toQuizAnswers,
        'quiz-opts': toQuizOpts,
        'quiz-correct-incorrect': toQuizCorrectIncorrect
    };

    window.QuizBank = {
        getPageQuizData({ sourcePath, format }) {
            const formatter = formatters[format];
            if (!formatter) {
                throw new Error(`Unsupported quiz format: ${format}`);
            }

            return getSourceQuestions(sourcePath).map(formatter);
        },
        getSourceQuestions
    };
})();
