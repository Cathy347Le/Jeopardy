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
    answer: "Answer: What is red envelopes",
    pointValue: 100
  },
  {
    question:
      "This country was the primary location in the movie Crazy Rich Asians",
    answer: "Answer: What is Singapore",
    pointValue: 100
  },
  {
    question: "Q6",
    answer: "Answer: 6",
    pointValue: 200
  },
  {
    question: "Q7",
    answer: "Answer: 7",
    pointValue: 200
  },
  {
    question: "Q8",
    answer: "Answer: 8",
    pointValue: 200
  },
  {
    question: "Q9",
    answer: "Answer: 9",
    pointValue: 200
  },
  {
    question: "Q10",
    answer: "Answer: 10",
    pointValue: 200
  },
  {
    question: "11",
    answer: "Answer: 11",
    pointValue: 300
  },
  {
    question: "12",
    answer: "Answer: 12",
    pointValue: 300
  },
  {
    question: "13",
    answer: "Answer: 13",
    pointValue: 300
  },
  {
    question: "14",
    answer: "Answer: 14",
    pointValue: 300
  },
  {
    question: "Q15",
    answer: "Answer: 15",
    pointValue: 300
  },
  {
    question: "Q16",
    answer: "Answer: 16",
    pointValue: 400
  },
  {
    question: "Q17",
    answer: "Answer: 17",
    pointValue: 400
  },
  {
    question: "Q18",
    answer: "Answer: 18",
    pointValue: 400
  },
  {
    question: "Q19",
    answer: "Answer: 19",
    pointValue: 400
  },
  {
    question: "Q20",
    answer: "Answer: 20",
    pointValue: 400
  },
  {
    question: "Q21",
    answer: "Answer: 21",
    pointValue: 500
  },
  {
    question: "Q22",
    answer: "Answer: 22",
    pointValue: 500
  },
  {
    question: "Q23",
    answer: "Answer: 23",
    pointValue: 500
  },
  {
    question: "Q24",
    answer: "Answer: 24",
    pointValue: 500
  },
  {
    question: "Q25",
    answer: "Answer: 25",
    pointValue: 500
  }
];

// console.log(triviaCards);

//Capturing Elements
var cellsEl = document.querySelectorAll(".cell-board");
var answerButtonEl = document.querySelector("#answer-button");
var correctButtonEl = document.querySelector("#correct-button");
var continueButtonEl = document.querySelector("#continue-button");
var getScore = document.querySelector(".score");
//Capturing properties in the trivia card array
// const questionTextEl = triviaCards.map(function(item) {
//   return item.question;
// });

// const answerTextEl = triviaCards.map(function(item) {
//   return item.answer;
// });

// console.log(answerTextEl);

// const pointValueEl = triviaCards.map(function(item) {
//   return item.pointValue;
// });

//Capture items in my footer and text to it
const triviaQuestionEl = document.querySelector("#trivia-question");
// triviaQuestionEl.innerHTML = "I hope this works";

const triviaAnswerEl = document.querySelector("#trivia-answer");
// triviaAnswerEl.innerHTML = "Answer: I hope this works";
// console.log(triviaAnswerEl);

let score = 0;

const displayQuestion = function() {
  for (let i = 0; i < cellsEl.length; i++) {
    cellsEl[i].addEventListener("click", function() {
      for (let c = 0; c < triviaCards.length; c++) {
        if (i === c) {
          triviaQuestionEl.innerHTML = triviaCards[c].question;
        }
      }
    });
  }
};
displayQuestion();

const displayAnswer = function() {
  for (let i = 0; i < cellsEl.length; i++) {
    cellsEl[i].addEventListener("click", function() {
      for (let c = 0; c < triviaCards.length; c++) {
        answerButtonEl.addEventListener("click", function() {
          if (i === c) {
            triviaAnswerEl.innerHTML = triviaCards[c].answer;
          }
        });
      }
    });
  }
};

displayAnswer();

const awardPoints = function() {
  for (let i = 0; i < cellsEl.length; i++) {
    cellsEl[i].addEventListener("click", function() {
      for (let c = 0; c < triviaCards.length; c++) {
        correctButtonEl.addEventListener("click", function() {
          if (i === c) {
            score += triviaCards[c].pointValue;
            getScore.innerText = score;
          }
        });
      }
    });
  }
};

awardPoints();

// const continueGame = function() {
//   continueButtonEl.addEventListener("click", function() {
//     triviaQuestionEl.innerHTML = "";
//     triviaAnswerEl.innerHTML = "";
//   });
// };

// continueGame();

//         for (let a = 0; a < answerTextEl.length; a++) {
//           if (q === a) {
//             answerButtonEl.addEventListener("click", function() {
//               triviaAnswerEl.innerHTML = answerTextEl[a];

//Displays the correct question text when board is clicked
// for (let i = 0; i < cellsEl.length; i++) {
//   cellsEl[i].addEventListener("click", function() {
//     for (let q = 0; q < questionTextEl.length; q++) {
//       if (i === q) {
//         triviaQuestionEl.innerHTML = questionTextEl[q];
//         //Displays the correct answer text when board is clicked
//         for (let a = 0; a < answerTextEl.length; a++) {
//           if (q === a) {
//             answerButtonEl.addEventListener("click", function() {
//               triviaAnswerEl.innerHTML = answerTextEl[a];
//               //Assign the correct points
//               for (let c = 0; c < pointValueEl.length; c++) {
//                 if ((a === c) & (q === c)) {
//                   correctButtonEl.addEventListener("click", function() {
//                     score += pointValueEl[c];
//                     getScore.innerText = score;
//                 esle {
//                   continueButtonEl.addEventListener("click", function(){
//                     triviaQuestionEl.innerHTML = "";
//                     triviaAnswerEl.innerHTML = "";
//                     pointValueEl[c] = 0
//                   });
//                 }
//                 });
//                   }
//                 }
//               }
//             });
//           }
//         }
//       }
//     }
//   });
// }

// continueButtonEl.addEventListener("click", function () {
//   triviaQuestionEl.innerHTML = "";
//   triviaAnswerEl.innerHTML = "";

// continueButtonEl.addEventListener("click", function() {
//   triviaQuestionEl.innerHTML = "";
//   triviaAnswerEl.innerHTML = "";
// });

// continueButtonEl.addEventListener("click", function() {
//   if (triviaAnswerEl.innerHTML !== null ){
//     for (let i = 0; i < cellsEl.length; i++) {
//   }
//capture the text of the div and remove it.

//   triviaQuestionEl.innerHTML = "";
//   triviaAnswerEl.innerHTML = "";

// });

// for (let a = 0; a < answerTextEl.length; a++) {

// getCellText = cellsEl[i].innerHTML;
// console.log(getCellText);
