const questions = [
  {
    category: "JavaScript",
    question: "Which keyword declares a constant variable?",
    choices: ["const", "let", "var"],
    answer: "const"
  },
  {
    category: "JavaScript",
    question: "Which method converts a JavaScript object into a JSON string?",
    choices: ["JSON.parse()", "JSON.stringify()", "JSON.convert()"],
    answer: "JSON.stringify()"
  },
  {
    category: "HTML",
    question: "Which HTML tag is used to create a hyperlink?",
    choices: ["<a>", "<link>", "<href>"],
    answer: "<a>"
  },
  {
    category: "CSS",
    question: "Which CSS property changes the text color?",
    choices: ["color", "font-size", "background-color"],
    answer: "color"
  },
  {
    category: "Programming",
    question: "Which data structure follows the LIFO principle?",
    choices: ["Stack", "Queue", "Tree"],
    answer: "Stack"
  }
];

function getRandomQuestion(array){
  const random = Math.floor(Math.random() * array.length)
  return array[random];
}

function getRandomComputerChoice(array){
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}

function getResults(quesObj,computerChoice){
  if(quesObj.answer === computerChoice){
    return "The computer's choice is correct!";
  }else {
    return `The computer's choice is wrong. The correct answer is: ${quesObj.answer}`
  }
}

const randomQues = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQues.choices);
console.log(getResults(randomQues,computerChoice));
