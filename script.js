var triviaCards = [
  {
    question:
      "This animal ranks third behind apes and dolphins in terms of intelligence",
    answer: "Answer: What is pig",
    pointValue: 100
  },
  {
    question:
      "What fruit is considered the smelliest fruit, sometimes known as stinky fruit?",
    answer: "Answer: What is durian",
    pointValue: 100
  },
  {
    question:
      "This number is considered unlucky because it sounds similar to the word for death",
    answer: "Answer: What is four",
    pointValue: 100
  },
  {
    question:
      "This is given by parents of the family to their kids on Lunar New Year",
    answer: "Answer:	What is red envelopes",
    pointValue: 100
  },
  {
    question:
      "This country was the primary location in the movie Crazy Rich Asians",
    answer: "Answer: What is Singapore",
    pointValue: 100
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Answer: This is the answer",
    pointValue: 200
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 200
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 200
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 200
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 200
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 300
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 300
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 300
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 300
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 300
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 400
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 400
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 400
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 400
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 400
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 500
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 500
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 500
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 500
  },
  {
    question: "Good morning! Lets make a kick ass project. ",
    answer: "Good morning! Lets make a kick ass project",
    pointValue: 500
  }
];

//Capturing Elements
var cellsEl = document.querySelectorAll(".cell-board");
var answerButtonEl = document.querySelector("#answer-button");
var correctButtonEl = document.querySelector("#correct-button");
var wrongButtonEl = document.querySelector("#wrong-button");
var continueButtonEl = document.querySelector("#continue-button");

//Capturing properties in the trivia card array
const questionTextEl = triviaCards.map(function(item) {
  return item.question;
});

const answerTextEl = triviaCards.map(function(item) {
  return item.answer;
});

const pointValueEl = triviaCards.map(function(item) {
  return item.pointValue;
});

//Capture items in my footer and text to it
const triviaQuestionEl = document.querySelector("#trivia-question");
triviaQuestionEl.innerHTML = "I hope this works";
console.log(triviaQuestionEl);

// for (let q = 0; q < questionTextEl.length; q++) {
//   console.log(questionTextEl[q]);
// }

// for (let i = 0; i < cellsEl.length; i++) {
//   cellsEl[i].addEventListener("click", function(evt) {
//     triviaQuestionEl.innerHTML += questionTextEl;
//   });
// }

for (let i = 0; i < cellsEl.length; i++) {
  cellsEl[i].addEventListener("click", function(evt) {
    // const triviaQuestionEl = document.querySelector("#trivia-question");
    for (let q = 0; q < questionTextEl.length; q++) {
      if (i === q) {
        triviaQuestionEl.innerHTML = questionTextEl[q];
      }
    }
  });
}

// for (let i = 0; i < cellsEl.length; i++) {
//     cellsEl[i].addEventListener("click", function (evt) {
//         for (let q = 0; q < questionTextEl.length; q++) {
//             triviaQuestionEl[q].innerHTML += questionTextEl;
//         }

// }
