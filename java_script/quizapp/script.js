const questions = [
    {
        question: "Which is largesst animal in the world",
        answers: [
            { text: "Shark", Correct: false },
            { text: "Blue Whale", Correct: true },
            { text: "Elephant", Correct: false },
            { text: "Giraffe", Correct: false }
        ]
    },
    {
        question: "Which is largesst desert in the world?",
        answers: [
            { text: "Kalahari", Correct: false },
            { text: "Gobi", Correct: false },
            { text: "Sahara", Correct: false },
            { text: "Antarctica", Correct: true }
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", Correct: false },
            { text: "Australia", Correct: true },
            { text: "Arctic", Correct: false },
            { text: "Africa", Correct: false }
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz() {
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next"
    showQustion()
}
function showQustion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer =>{
        const button = document.getElementById("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
startQuiz()

