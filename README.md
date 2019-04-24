#Lunar New Year Jeopardy
Project 1: Trivia Game

![image](https://user-images.githubusercontent.com/46338135/56693509-a2059f00-66b2-11e9-8971-863754a3f397.png)

#Introduction:
My first class project was to build a game and I built Jeopardy, which I call Asian Jeopardy since all the trivia questions are Asian/Lunar New Year theme.

#Prerequisites and Installing:
There are no prerequisites and nothing needs to be installed. You can play the game yourself as it is loaded live on my GitHub pages. If you prefer, you can also download all my files to play the game locally – just open the index.html file in the browser.

https://cathy347le.github.io/Lunar-New-Year-Jeopardy/

#Running the program
The Jeopardy game is built using HTML, CSS, JavaScript, and DOM manipulation. The code uses event listeners and array methods. A loop is used to add a event listeners to all the Jeopardy cells and it captures the question, answer, and pointValue by accessing the triviaCards array.

Play the game as soon as it is uploaded on the browser. The steps are:

1. Click on any Jeopardy cell on the board to reveal the trivia
2. Similar to the live game on TV – answer the question out loud in the form of a question
3. Click the answer button to reveal the answer
4. If you guessed correctly, click on the correct button to be awarded the points. If you didn’t guess wrong, click on the continue button
5. Regardless if you got the question wrong or right, remember to click on the continue button. This will remove trivia question and answer below and allow you to continue with the game. Hitting the continue button will also remove the money value label on the board so you know that question has been completed.
6. Repeat the steps above and try to go through all the trivia questions.
7. Hit the reset if you want to start over. Good luck and chúc mừng năm mới!

#Features to add later

1. Refactor the triviaCards array as a class with instances of that object may help and also make my code cleaner.
2. Disable certain buttons during the game so participant is forced to follow the steps. Also deactivate the board during the process of answering the trivia.
3. Create a main page with the game’s name Asian Jeopardy. Add a start game button. If possible, add the Jeopardy music to the main page
4. Add a timer
5. Create a 2 player and 3 player option
6. Double bonus: looking into revealing the questions as a modal
7. Double bonus: Add a daily double using a modal and some animation

#Acknowledgments
Thank you to my instructor Zakk Fleischmann for solving the bug in my self-scoring code. Also thank you to Rogers Campbell from GA WDI 27 for helping to review my code.
