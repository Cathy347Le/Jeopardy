//Bonus: create a class with object instances
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

//Capturing HTML Elements
var cellsHT = document.querySelectorAll(".cell-board");
var answerButtonHT = document.querySelector("#answer-button");
var correctButtonHT = document.querySelector("#correct-button");
var continueButtonHT = document.querySelector("#continue-button");
var getPointHT = document.querySelector(".score");
var resetButtonHT = document.querySelector("img");
//Capture HTML elements in my footer
const triviaQuestionHT = document.querySelector("#trivia-question");
const triviaAnswerHT = document.querySelector("#trivia-answer");

//Math is even worst
// let score = 0;

// for (let i = 0; i < cellsHT.length; i++) {
//   cellsHT[i].addEventListener("click", function(evt) {
//     let currentCard = triviaCards[evt.target.dataset.index];
//     triviaQuestionHT.innerHTML = currentCard.question;
//     answerButtonHT.addEventListener("click", function() {
//       triviaAnswerHT.innerHTML = currentCard.answer;
//       correctButtonHT.addEventListener("click", function() {
//         score += currentCard.pointValue;
//         getScoreHT.innerText = score;
//         continueButtonHT.addEventListener("click", function() {
//           cellsHT[i].innerHTML = "";
//           triviaQuestionHT.innerHTML = "";
//           triviaAnswerHT.innerHTML = "";
//         });
//       });
//     });
//     evt.target.style.pointerEvents = "none";
//   });
// }

//This is why third way with Zakk
/////////////////////////////////

let point = 000;

//Displays the correct question when cell is clicked
for (let i = 0; i < cellsHT.length; i++) {
  cellsHT[i].addEventListener("click", function(evt) {
    let currentCard = triviaCards[evt.target.dataset.index];
    triviaQuestionHT.innerHTML = currentCard.question;
  });
}

//Displays the correct answer when answer button is clicked
for (let i = 0; i < cellsHT.length; i++) {
  cellsHT[i].addEventListener("click", function(evt) {
    answerButtonHT.addEventListener("click", function() {
      let currentCard = triviaCards[evt.target.dataset.index];
      triviaAnswerHT.innerHTML = currentCard.answer;
    });
  });
}

//Award points when correct buttong is clicked
for (let i = 0; i < cellsHT.length; i++) {
  cellsHT[i].addEventListener("click", function(evt) {
    correctButtonHT.addEventListener("click", function() {
      let currentCard = triviaCards[evt.target.dataset.index];
      point += currentCard.pointValue;
      getPointHT.innerText = point;
    });
  });
}

//Erases the trivia Q&A card as well as the cell label when continue it clicked
for (let i = 0; i < cellsHT.length; i++) {
  cellsHT[i].addEventListener("click", function(evt) {
    continueButtonHT.addEventListener("click", function() {
      cellsHT[i].innerHTML = "";
      triviaQuestionHT.innerHTML = "";
      triviaAnswerHT.innerHTML = "";
    });
    evt.target.style.pointerEvents = "none";
  });
}

// resetButtonHT.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   for (let i = 0; i < cellsHT.length; i++) {
//     let point = 000;
//     getPointHT.innerText = point;
//     return cellsHT[i].innerHTML;
//   }
// });

resetButtonHT.addEventListener("click", function() {
  location.reload();
});
