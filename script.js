//Bonus: create a class with object instances
var triviaCards = [
  {
    question:
      "This animal ranks third behind apes and dolphins in terms of intelligence",
    answer: "What is pig",
    pointValue: 100
  },
  {
    question:
      "What fruit is considered the smelliest fruit, sometimes known as stinky fruit",
    answer: "What is durian",
    pointValue: 100
  },
  {
    question:
      "This number is considered unlucky because it sounds similar to the word for death",
    answer: "What is four",
    pointValue: 100
  },
  {
    question:
      "This is given by parents of the family to their kids on Lunar New Year",
    answer: "What is red envelopes",
    pointValue: 100
  },
  {
    question:
      "This country was the primary location in the movie Crazy Rich Asians",
    answer: "What is Singapore",
    pointValue: 100
  },
  {
    question:
      "Pigs do not have ______    _____, which is why they tend to roll in the mud to keep cool",
    answer: "What is sweat glands",
    pointValue: 200
  },
  {
    question:
      "This fertilized bird egg (usually a duck) is incubated for a period of 14 to 21 days depending on the local culture and then boiled or steamed. This contents are eaten directly from the shell",
    answer: "What is a balut egg",
    pointValue: 200
  },
  {
    question:
      "Sweeping or dusting should not be done on New Year’s Day for fear that _____ will be swept away",
    answer: "What is good luck",
    pointValue: 200
  },
  {
    question:
      "These items, typically red colored are set off during Lunar New Year to scare away evil spirits",
    answer: "What are fireworks/ firecrackers",
    pointValue: 200
  },
  {
    question:
      "This country is the most populated country in the world with a population of over 1.3 billion",
    answer: "What is China	",
    pointValue: 200
  },
  {
    question:
      "This pig character's best friend is a bear. Though very small in stature, this character always conquers his fears when his friends are in danger",
    answer: "Who is Piglet",
    pointValue: 300
  },
  {
    question:
      "What may not be eaten during Lunar New Year, because its white color symbolizes death and misfortune",
    answer: "What is Tofu",
    pointValue: 300
  },
  {
    question:
      "On the stroke of midnight on New Year’s Eve, these have to be open to allow the old year to go out",
    answer: "What are doors and windows",
    pointValue: 300
  },
  {
    question: "Why might someone feel old on the seventh day of the New Year",
    answer: "The Seventh Day was known as Everybody's Birthday",
    pointValue: 300
  },
  {
    question: "This desert is the world's largest continuous sandy desert",
    answer: "Arabian Desert",
    pointValue: 300
  },
  {
    question:
      "The Pig is the twelfth animal on the zodiac calendar. The Pig is associated with the Earthly Branch and the hours 9-11pm. In terms of yin and yang, the Pig is yin. In Chinese culture, pigs are the symbol of ______",
    answer: "What is wealth",
    pointValue: 400
  },
  {
    question:
      "The candy tray arranged in either a circle or octagon is called ______ and has a dazzling array of candy to start the New Year sweetly	",
    answer: "What is The Tray of Togetherness",
    pointValue: 400
  },
  {
    question:
      "In China, this number is consider lucky because the pronunciation is similar to the word for “prosperity.” On business trips, people often argue over who will stay in rooms that have this room number.",
    answer: "What is number 8",
    pointValue: 400
  },
  {
    question:
      "What object is used during New Year Celebrations, is typically made of silk, paper, and bamboo.",
    answer: "What is a dragon",
    pointValue: 400
  },
  {
    question:
      "Macao, which is the autonomous region of East Asia is considered the richest country in Asia by GDP per capita. What is the second richest country in Asia. This country only borders with another country.",
    answer: "What is Qatar",
    pointValue: 400
  },
  {
    question:
      "Pigs are not just for bacon. They also contribute many other by-products to the market, such as gelatin which makes marshmallows, or hair for high quality _____     _____",
    answer: "What are paint brushes",
    pointValue: 500
  },
  {
    question: "Which seed signifies having many male offspring ",
    answer: "What are lotus seeds",
    pointValue: 500
  },
  {
    question:
      "According to legend, how was the order of the 12 animals of the zodiac decided",
    answer:
      "	What is the animals raced across a river, the first to win headed the cycle",
    pointValue: 500
  },
  {
    question:
      "Last year was year of the Dog. This year is the year of the Dog. What animal are we celebrating next year?",
    answer: "What is a rat",
    pointValue: 500
  },
  {
    question:
      "Asia is home to both Earth's highest point on land, and lowest. Where on Asia is it the highest and lowest point?",
    answer:
      "Mount Everest between Nepal and China is the highest. The Dead Sea between Israel, Palestine, and Jordon",
    pointValue: 500
  }
];

console.log(triviaCards);

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

//Sources
// Game inspiration from
// https://jeopardylabs.com/play/chinese-new-year-jeopardy9
// How to do text shadow
// https://css-tricks.com/adding-stroke-to-web-text/
// How to design buttons
// https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_animate3
// I used the Dots game to work on my scoreboard
// Rogers Campbell from WDI 27 help look at my code
