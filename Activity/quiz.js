const quizQuestions = [
    {
        question: "Which of the following is a server-side scripting language?",
        options: ["a) HTML", "b) CSS", "c) JavaScript", "d) PHP"],
        answer: 3
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["a) <div>", "b) <a>", "c) <img>", "d) <link>"],
        answer: 1
    },
    {
        question: "Which of the following is a correct way to declare a JavaScript variable?",
        options: ["a) variable myVar = 5;", "b) int myVar = 5;", "c) let myVar = 5;", "d) var myVar := 5;"],
        answer: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["a) Cascading Style Sheets", "b) Computer Style Sheets", "c) Colorful Style Sheets", "d) Creative Style Sheets"],
        answer: 0 
    },
    {
        question: "Which of the following is used to connect PHP to a MySQL database?",
        options: ["a) mysqli_connect()", "b) mysql_open()", "c) mysql_start()", "d) mysqli_query()"],
        answer: 0
    },
    {
        question: "In MySQL, which SQL statement is used to retrieve data from a database?",
        options: ["a) INSERT", "b) UPDATE", "c) SELECT", "d) DELETE"],
        answer: 2 
    },
    {
        question: "Which of the following is the correct syntax to define a function in JavaScript?",
        options: ["a) function = myFunc()", "b) myFunc() = function", "c) function myFunc()", "d) function: myFunc()"],
        answer: 2
    },
    {
        question: "Which PHP function is used to start a session?",
        options: ["a) session_begin()", "b) session_start()", "c) start_session()", "d) session_open()"],
        answer: 1
    },
    {
        question: "Which of the following is the correct way to add a comment in CSS?",
        options: ["a) // This is a comment", "b) <!-- This is a comment -->", "c) /* This is a comment */", "d) # This is a comment"],
        answer: 2
    },
    {
        question: "Which of the following is used to prevent SQL injection in PHP?",
        options: ["a) Using plain SQL queries", "b) Escaping user inputs", "c) Using prepared statements", "d) Using echo to display user inputs"],
        answer: 2
    }
];


let currentQuestionIndex = 0;
let score = 0;


const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");


function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    

    questionEl.textContent = currentQuestion.question;
    

    optionsEl.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.addEventListener("click", () => selectAnswer(index));
        optionsEl.appendChild(li);
    });
}


function selectAnswer(selectedOptionIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    if (selectedOptionIndex === currentQuestion.answer) {
        score++; 
    }

    nextBtn.classList.remove("hidden");
}


nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
        nextBtn.classList.add("hidden");
    } else {
        showResult();
    }
});


function showResult() {
    questionEl.classList.add("hidden");
    optionsEl.classList.add("hidden");
    nextBtn.classList.add("hidden");
    
    resultEl.textContent = `Your score: ${score} / ${quizQuestions.length}`;
    resultEl.classList.remove("hidden");
}

showQuestion();
