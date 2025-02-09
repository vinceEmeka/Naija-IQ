// const quizData = [
//   {
//     question: "If you see a Nigerian running suddenly, what is the best thing to do?",
//     options: ["Ask why they are running", "Stand still and observe", "Start running too", "Take a selfie"],
//     answer: "Start running too"
//   },
//   {
//     question: "If someone mistakenly steps on you in Lagos, what is the most common response?",
//     options: ["'Sorry oh!'", "'You no get eye?'", "'May God punish you!'", "'Can we be friends?'"],
//     answer: "'You no get eye?'"
//   },
//   {
//     question: "If a Nigerian says 'E go better,' what does it mean?",
//     options: ["Things will improve", "Nothing will change", "You should give up", "They have no hope"],
//     answer: "Things will improve"
//   }
// ]

// const playerName = document.getElementById("player");
// // const gamer = playerName.value;
// const startGameBtn = document.querySelector(".start");
// const previousBtn = document.querySelector(".previous-btn");
// const questionProgress = document.querySelector(".progress");
// const currentQuestion = document.querySelector(".current-question");
// // const quizCard = document.querySelector(".quiz-card");
// const quizOptions = document.querySelector(".quiz-options");
// const optionText = document.querySelectorAll(".option-text");
// const optionsTest = document.getElementById("options-test")
// const optionDiv = document.querySelectorAll(".option")
// const nextBtn = document.querySelector(".next");
// const finalScore = document.querySelector(".final-score-text");
// const resetBtn = document.querySelector(".reset");
// const homeBtn = document.querySelector(".home");


// // Quiz State
// let currentQuestionIndex = 0;
// let score = 0;
// let selected = false;



// // Function to display a question
// const displayQuestion = () => {
//   let questionObj = quizData[currentQuestionIndex];
//   currentQuestion.textContent = questionObj.question;
//   let questionNo = currentQuestionIndex + 1;

//   //track the question progress
//   questionProgress.textContent = `Question ${questionNo} of ${quizData.length}`

//   // display the Options
//   questionObj.options.forEach((option, index) => {
//     if (optionText[index]) {
//       optionText[index].textContent = option;
//     }
//   });

//   // click options
//   // if (selectAnswer === questionObj.answer) {
//   //  console.log("correct")
//   // }




//   quizOptions.addEventListener("click", (e) => {
//     const selected = e.target.textContent;
//     const isCorrect = quizData.answer;
//     if (selected === isCorrect) {
//       console.log("corec!!!")
//     } else {
//       console.log("wrong!")
//     }

//   })
// }
// nextBtn.addEventListener("click", () => {
//   if (currentQuestionIndex < quizData.length - 1) {
//     currentQuestionIndex++;
//     displayQuestion();
//   } else {
//     alert("GAME OVER")
//   }
// })

// displayQuestion();

const quizData = [
  {
    question: "If you see a Nigerian running suddenly, what is the best thing to do?",
    options: ["Ask why they are running", "Stand still and observe", "Start running too", "Take a selfie"],
    answer: "Start running too"
  },
  {
    question: "If someone mistakenly steps on you in Lagos, what is the most common response?",
    options: ["'Sorry oh!'", "'You no get eye?'", "'May God punish you!'", "'Can we be friends?'"],
    answer: "'You no get eye?'"
  },
  {
    question: "If a Nigerian says 'E go better,' what does it mean?",
    options: ["Things will improve", "Nothing will change", "You should give up", "They have no hope"],
    answer: "Things will improve"
  }
];

const currentQuestion = document.querySelector(".current-question");
const quizOptions = document.querySelector(".quiz-options");
const questionProgress = document.querySelector(".progress");
const nextBtn = document.querySelector(".next");
const resetBtn = document.querySelector(".reset");
const finalScore = document.querySelector(".final-score-text");

let currentQuestionIndex = 0;
let score = 0;
let selected = false; // To prevent multiple selections

// Function to display a question
const displayQuestion = () => {
  selected = false; // Reset selection state
  let questionObj = quizData[currentQuestionIndex];
  currentQuestion.textContent = questionObj.question;
  questionProgress.textContent = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;

  // Clear previous options
  quizOptions.innerHTML = "";

  // Display options dynamically
  questionObj.options.forEach((option) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = option;
    quizOptions.appendChild(button);

    // Add event listener for option selection
    button.addEventListener("click", () => handleAnswerSelection(button, questionObj.answer));
  });

  // Hide next button until an option is selected
  nextBtn.style.display = "none";
};

// Function to handle answer selection
const handleAnswerSelection = (button, correctAnswer) => {
  if (selected) return; // Prevent multiple selections
  selected = true;

  const selectedOption = button.textContent.trim();
  const correctOption = correctAnswer.trim();

  if (selectedOption === correctOption) {
    button.classList.add("correct"); // Green background for correct answer
    score++;
  } else {
    button.classList.add("incorrect"); // Red background for wrong answer
    // Highlight correct answer
    document.querySelectorAll(".option-btn").forEach((btn) => {
      if (btn.textContent.trim() === correctOption) {
        btn.classList.add("correct");
      }
    });
  }

  // Show next button after selecting an answer
  nextBtn.style.display = "block";
};

// Next button event listener
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    displayQuestion();
  } else {
    showFinalScore();
  }
});

// Function to show final score
const showFinalScore = () => {
  currentQuestion.textContent = "Quiz Completed!";
  quizOptions.innerHTML = `Your final score is: ${score} / ${quizData.length}`;
  questionProgress.textContent = "";
  nextBtn.style.display = "none";
  resetBtn.style.display = "block";
};

// Reset button event listener
resetBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resetBtn.style.display = "none";
  displayQuestion();
});

// Initialize quiz
displayQuestion();
