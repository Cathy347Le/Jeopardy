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

//Capturing Elements
var cellsEl = document.querySelectorAll(".cell-board");
var answerButtonEl = document.querySelector("#answer-button");
var correctButtonEl = document.querySelector("#correct-button");
var wrongButtonEl = document.querySelector("#wrong-button");
var continueButtonEl = document.querySelector("#continue-button");
var getScore = document.querySelector(".score");
console.log(getScore);
//Capturing properties in the trivia card array
const questionTextEl = triviaCards.map(function(item) {
  return item.question;
});

const answerTextEl = triviaCards.map(function(item) {
  return item.answer;
});

// console.log(answerTextEl);

const pointValueEl = triviaCards.map(function(item) {
  return item.pointValue;
});

//Capture items in my footer and text to it
const triviaQuestionEl = document.querySelector("#trivia-question");
// triviaQuestionEl.innerHTML = "I hope this works";

const triviaAnswerEl = document.querySelector("#trivia-answer");
// triviaAnswerEl.innerHTML = "Answer: I hope this works";
// console.log(triviaAnswerEl);

// for (let q = 0; q < questionTextEl.length; q++) {
//   console.log(questionTextEl[q]);
// }

// for (let i = 0; i < cellsEl.length; i++) {
//   cellsEl[i].addEventListener("click", function(evt) {
//     triviaQuestionEl.innerHTML += questionTextEl;
//   });
// }

let score = 0;
//Get the correct question text to display when board is clicked
for (let i = 0; i < cellsEl.length; i++) {
  cellsEl[i].addEventListener("click", function() {
    for (let q = 0; q < questionTextEl.length; q++) {
      if (i === q) {
        triviaQuestionEl.innerHTML = questionTextEl[q];
        for (let a = 0; a < answerTextEl.length; a++) {
          if (q === a) {
            answerButtonEl.addEventListener("click", function() {
              triviaAnswerEl.innerHTML = answerTextEl[a];
              for (let c = 0; c < pointValueEl.length; c++) {
                if (a === c) {
                  correctButtonEl.addEventListener("click", function() {
                    score += pointValueEl[c];
                    getScore.innerText = score;
                  });
                }
              }
            });
          }
        }
      }
    }
  });
}

//Get the correct question text to display when board is clicked
// for (let i = 0; i < cellsEl.length; i++) {
//   cellsEl[i].addEventListener("click", function() {
//     for (let q = 0; q < questionTextEl.length; q++) {
//       if (i === q) {
//         triviaQuestionEl.innerHTML = questionTextEl[q];
//       }
//     }
//   });
// }

// for (let i = 0; i < questionTextEl.length; i++) {
//   answerButtonEl.addEventListener("click", function() {
//     for (let a = 0; a < answerTextEl.length; a++) {
//       if (i === a) {
//         triviaAnswerEl.innerHTML = answerTextEl[a];
//       }
//     }
//   });
// }

//Get the correct answer text to display when button is clicked
// for (let q = 0; q < questionTextEl.length; q++) {
//   answerButtonEl.addEventListener("click", function() {
//     for (let a = 0; a < answerTextEl.length; a++) {
//       if (q === a) {
//         triviaAnswerEl.innerHTML = answerTextEl[a];
//       }
//     }
//   });
// }

// answerButtonEl.addEventListener("click", function(e) {
//     e.preventDefault();
//     for (let q = 0; q < questionTextEl.length; q++) {
//             if (i === q) {
//                 triviaQuestionEl.innerHTML = questionTextEl[q];
//             }
//         }
//     });
// }

//   for (let q = 0; q < answerTextEl.length; q++) {
//     triviaAnswerEl.innerHTML = answerTextEl[q];
//   }
// });
