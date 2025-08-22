const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Camel", correct: false }
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false }
        ]
    },
    {
        question: "Which is the largest dessert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false }
        ]
    }
]

const questionElement = document.getElementById("question");
const ansBtn = document.getElementById("answer-btns");
const nextBtn = document.getElementById("nextBtn");


let currentQIdx = 0;
let score = 0;

function startQuiz() {
    currentQIdx = 0;
    score = 0;
    nextBtn.innerText = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currQues = questions[currentQIdx];
    let Qnum = currentQIdx + 1;
    questionElement.innerText = Qnum + ". " + currQues.question;

    currQues.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })


}

function resetState() {
    nextBtn.style.display = "none";
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";

}

function showScore() {
    resetState();
    questionElement.innerText = `You Scored ${score} out of ${questions.length}!`;
    nextBtn.innerText = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextBtn() {
    currentQIdx++;
    if (currentQIdx < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", () => {
    if (currentQIdx < questions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
})

startQuiz();