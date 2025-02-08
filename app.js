// Quiz questions and answers Array

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
 },
 {
  question: "Which of these is a common Nigerian way of saying 'Goodbye'?",
  options: ["'See you later'", "'Bye-bye'", "'We go see'", "'Safe journey'"],
  answer: "'We go see'"
 },
 {
  question: "Which of these Nigerian foods is 'swallow'?",
  options: ["Jollof rice", "Eba", "Moi Moi", "Bole"],
  answer: "Eba"
 },
 {
  question: "What is the best way to cross a busy Lagos road?",
  options: ["Wait for the traffic light", "Look left and right", "Follow the mad man crossing", "Pray and run"],
  answer: "Follow the mad man crossing"
 },
 {
  question: "A Nigerian mother shouts your full name from the kitchen. What does it mean?",
  options: ["She wants to give you money", "You are in trouble", "She forgot your name", "She is practicing for a singing competition"],
  answer: "You are in trouble"
 },
 {
  question: "A Nigerian says, 'I no dey for that one.'What does it mean?",
  options: ["They don't understand", "They are not interested", "They are planning to join", "They are waiting for approval"],
  answer: "They are not interested"
 },
 {
  question: "When a Nigerian says, 'Who go pay?' What do they really mean?",
  options: ["They are about to pay the bill", "They want to know who is responsible", "They want to borrow money", "They are talking about their landlord"],
  answer: "They want to know who is responsible"
 },
 {
  question: "What happens if you mistakenly drop your meat while eating outside?",
  options: ["You pick it up and eat it", "You respect yourself and leave it", "You cry", "You ask someone else to pick it"],
  answer: "You respect yourself and leave it"
 },
 {
  question: "A Nigerian mother says, 'So you have grown wings?' What does she mean?",
  options: ["You are about to fly", "You have become a bird", "You are being stubborn", "She is proud of you"],
  answer: "You are being stubborn"
 },
 {
  question: "Which Nigerian musician is known as the 'African Giant'?",
  options: ["Wixkid", "Burna Boy", "Davido", "Olamide"],
  answer: "Burna Boy"
 }
]

// ELEMENTS 
const playerName = document.getElementById("player");
// const gamer = playerName.value;
const startGameBtn = document.querySelector(".start");
const previousBtn = document.querySelector(".previous-btn");
const questionProgress = document.querySelector(".progress");
const question = document.querySelector(".current-question");
const quizCard = document.querySelector(".quiz-card");
const options = document.querySelectorall(".option");
const nextBtn = document.querySelector(".next");
const finalScore = document.querySelector(".final-score-text");
const resetBtn = document.querySelector(".reset");
const homeBtn = document.querySelector(".home");

// Quiz State

let currentQuestionIndex = 0;
let score = 0;


// Function to display a question
function displayQuestion() {
 if (currentQuestionIndex < quizData.length) {
  const questionObj = quizData[currentQuestionIndex];

  console.log(`Q${currentQuestionIndex + 1}: ${questionObj.question}`);
  questionObj.options.forEach((option, index) => {
   console.log(`${index + 1}. ${option}`);
  });
 } else {
  console.log("Quiz completed!");
 }
}

//Store the playersName
// startGameBtn.addEventListener("click", (e) => {
//  e.preventDefault();
//  window.location.href = "quiz.html";
// });
// the start btn should go to the quiz page

// previous btn should check where it is and go back

// progress should change as next or previous is clicked

// randomize the question display on the quiz card


// record selected option when next is clicked

// display if selected option is correct or not


// if its the last question next should display final score

// final score should include player's name

// reset should start the game again

// home should go to login page

