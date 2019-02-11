//Bonus: create a class with object instances instance. Code will be cleaner
var triviaCards = [
  {
    question:
      "This animal ranks third behind apes and dolphins in terms of intelligence",
    answer: "ANSWER: What is pig",
    pointValue: 100
  },
  {
    question:
      "What fruit is considered the smelliest fruit, sometimes known as stinky fruit",
    answer: "ANSWER: What is durian",
    pointValue: 100
  },
  {
    question:
      "This number is considered unlucky because it sounds similar to the word for death",
    answer: "ANSWER: What is four",
    pointValue: 100
  },
  {
    question:
      "This is given by parents of the family to their kids on Lunar New Year",
    answer: "ANSWER: What is red envelopes",
    pointValue: 100
  },
  {
    question:
      "This country was the primary location in the movie Crazy Rich Asians",
    answer: "ANSWER: What is Singapore",
    pointValue: 100
  },
  {
    question:
      "Pigs do not have ______    _____, which is why they tend to roll in the mud to keep cool",
    answer: "ANSWER: What is sweat glands",
    pointValue: 200
  },
  {
    question:
      "This fertilized bird egg (usually a duck) is incubated for a period of 14 to 21 days depending on the local culture and then boiled or steamed. This contents are eaten directly from the shell",
    answer: "ANSWER: What is a balut egg",
    pointValue: 200
  },
  {
    question:
      "Sweeping or dusting should not be done on New Year’s Day for fear that _____ will be swept away",
    answer: "ANSWER: What is good luck",
    pointValue: 200
  },
  {
    question:
      "These items, typically red colored are set off during Lunar New Year to scare away evil spirits",
    answer: "ANSWER: What are fireworks/ firecrackers",
    pointValue: 200
  },
  {
    question:
      "This country is the most populated country in the world with a population of over 1.3 billion",
    answer: "ANSWER: What is China	",
    pointValue: 200
  },
  {
    question:
      "This pig character's best friend is a bear. Though very small in stature, this character always conquers his fears when his friends are in danger",
    answer: "ANSWER: Who is Piglet",
    pointValue: 300
  },
  {
    question:
      "What may not be eaten during Lunar New Year, because its white color symbolizes death and misfortune",
    answer: "ANSWER: What is Tofu",
    pointValue: 300
  },
  {
    question:
      "On the stroke of midnight on New Year’s Eve, these have to be open to allow the old year to go out",
    answer: "ANSWER: What are doors and windows",
    pointValue: 300
  },
  {
    question: "Why might someone feel old on the seventh day of the New Year",
    answer: "ANSWER: The Seventh Day was known as Everybody's Birthday",
    pointValue: 300
  },
  {
    question: "This desert is the world's largest continuous sandy desert",
    answer: "ANSWER: Arabian Desert",
    pointValue: 300
  },
  {
    question:
      "The Pig is the twelfth animal on the zodiac calendar. The Pig is associated with the Earthly Branch and the hours 9-11pm. In terms of yin and yang, the Pig is yin. In Chinese culture, pigs are the symbol of ______",
    answer: "ANSWER: What is wealth",
    pointValue: 400
  },
  {
    question:
      "The candy tray arranged in either a circle or octagon is called ______ and has a dazzling array of candy to start the New Year sweetly	",
    answer: "ANSWER: What is The Tray of Togetherness",
    pointValue: 400
  },
  {
    question:
      "In China, this number is consider lucky because the pronunciation is similar to the word for “prosperity.” On business trips, people often argue over who will stay in rooms that have this room number.",
    answer: "ANSWER: What is number 8",
    pointValue: 400
  },
  {
    question:
      "What object is used during New Year Celebrations, is typically made of silk, paper, and bamboo.",
    answer: "ANSWER: What is a dragon",
    pointValue: 400
  },
  {
    question:
      "Macao, which is the autonomous region of East Asia is considered the richest country in Asia by GDP per capita. What is the second richest country in Asia. This country only borders with another country.",
    answer: "ANSWER: What is Qatar",
    pointValue: 400
  },
  {
    question:
      "Pigs are not just for bacon. They also contribute many other by-products to the market, such as gelatin which makes marshmallows, or hair for high quality _____     _____",
    answer: "ANSWER: What are paint brushes",
    pointValue: 500
  },
  {
    question: "Which seed signifies having many male offspring ",
    answer: "ANSWER: What are lotus seeds",
    pointValue: 500
  },
  {
    question:
      "According to legend, how was the order of the 12 animals of the zodiac decided",
    answer:
      "ANSWER: What is the animals raced across a river, the first to win headed the cycle",
    pointValue: 500
  },
  {
    question:
      "Last year was year of the Dog. This year is the year of the Dog. What animal are we celebrating next year?",
    answer: "ANSWER: What is a rat",
    pointValue: 500
  },
  {
    question:
      "Asia is home to both Earth's highest point on land, and lowest. Where on Asia is it the highest and lowest point?",
    answer:
      "ANSWER: Mount Everest between Nepal and China is the highest point. The Dead Sea between Israel, Palestine, and Jordon is the lowest point",
    pointValue: 500
  }
];

//Capturing HTML Elements - HT label is for HTML
var cellsHT = document.querySelectorAll(".cell-board");
var getPointHT = document.querySelector(".score");
var resetButtonHT = document.querySelector("img");

//Capture HTML elements in my footer - HT label is for HTML
const triviaQuestionHT = document.querySelector("#trivia-question");
const triviaAnswerHT = document.querySelector("#trivia-answer");
var answerButtonHT = document.querySelector("#answer-button");
var correctButtonHT = document.querySelector("#correct-button");
var continueButtonHT = document.querySelector("#continue-button");

let point = 0;
let currentCard;

//Displays the question when cell is clicked
for (let i = 0; i < cellsHT.length; i++) {
  cellsHT[i].addEventListener("click", function(evt) {
    currentCard = triviaCards[evt.target.dataset.index];
    triviaQuestionHT.innerHTML = currentCard.question;
  });
}

//Displays the answer when answer button is clicked
answerButtonHT.addEventListener("click", function() {
  if (currentCard) {
    triviaAnswerHT.innerHTML = currentCard.answer;
  }
});

//Award points when correct button is clicked
correctButtonHT.addEventListener("click", function() {
  point += currentCard.pointValue;
  getPointHT.innerText = point;
});

//Erases the trivia Q&A as well as the cell $$$ value when the continue button is clicked
for (let i = 0; i < cellsHT.length; i++) {
  cellsHT[i].addEventListener("click", function(evt) {
    continueButtonHT.addEventListener("click", function() {
      cellsHT[i].innerHTML = "";
      triviaQuestionHT.innerHTML = "";
      triviaAnswerHT.innerHTML = "";
      currentCard = undefined;
    });
    evt.target.style.pointerEvents = "none";
  });
}

//My reset button which reloads the page, thus starting over
resetButtonHT.addEventListener("click", function() {
  location.reload();
});
