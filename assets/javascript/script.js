// DECLARE a starting 'score' (time)
var score = 75;

// Declare body
var body = document.body;
var delay = 1000;

var scoresArray = [];
var storedScores = JSON.parse(localStorage.getItem("quizScores"));

// DECLARE an array list of 'questions'
    // Where each value is an object to define a question and its properties
var questions = [
    questionOne = {
        text: 'Question 1 placeholder.',
        selectionOne: 'First Selection',
        selectionTwo: 'Second Selection',
        selectionThree: 'Third Selection',
        selectionFour: 'Fourth Selection',
        correctAnswer: 'First Selection'
    }, 
    questionTwo = {
        text: 'Question 2 placeholder.',
        selectionOne: 'First Selection',
        selectionTwo: 'Second Selection',
        selectionThree: 'Third Selection',
        selectionFour: 'Fourth Selection',
        correctAnswer: 'Second Selection'
    }, 
    questionThree = {
        text: 'Question 3 placeholder.',
        selectionOne: 'First Selection',
        selectionTwo: 'Second Selection',
        selectionThree: 'Third Selection',
        selectionFour: 'Fourth Selection',
        correctAnswer: 'Third Selection'
    }, 
    questionFour = {
        text: 'Question 4 placeholder.',
        selectionOne: 'First Selection',
        selectionTwo: 'Second Selection',
        selectionThree: 'Third Selection',
        selectionFour: 'Fourth Selection',
        correctAnswer: 'Fourth Selection'
    }, 
];

console.log(questions);
console.log(questions[2].text);
console.log(questions[0].correctAnswer);

// Declare an 'questionIndex' variable to point to the current question
var questionIndex = 0;
console.log(questions[questionIndex].text);

// Store a refrence to the element for the 'timerDisplayEl'
var timerDisplayEl = document.querySelector('#timer');

// Store a reference to the 'startButtonEl'
var startButtonEl = document.querySelector('#start-button');

// Store a reference to the screen sections
var startScreenEl = document.querySelector('#start-screen');
var questionScreenEl = document.querySelector('#question-screen');
var endScreenEl = document.querySelector('#end-screen');

// Store a refrence to question/button display elements
var questionText = document.querySelector('#question-text');
var buttonOne = document.querySelector('#button-one');
var buttonTwo = document.querySelector('#button-two');
var buttonThree = document.querySelector('#button-three');
var buttonFour = document.querySelector('#button-four');
var selections = document.querySelector('#selections');
var finalScore = document.querySelector('#final-score');
var submitButtonEl = document.querySelector('#submit');
var initialsEl = document.querySelector('#initials');
var feedBackEl = document.querySelector('#response-feedback');
var feedBackTextEl = document.querySelector('#response-feeback-text');


// Create a 'startGame' function
function startGame() {

    // Call 'startTimer' function
    startTimer();

    // Hide the start screne element and show the first question
    startScreenEl.setAttribute("class", "hidden container");
    questionScreenEl.setAttribute("class", "visible container");
    renderCurrentQuestion();
};

// Create an 'endGame' function
function endGame(){

    // Stop the timer
    stopTimer();

    // Display correct screen
    questionScreenEl.setAttribute("class", "hidden container");
    endScreenEl.setAttribute("class", "visible container");

    // Display final score
    console.log('Game Over. Final score: ' + score);
    timerDisplayEl.textContent = "Time: " + score;
    finalScore.textContent = "Your final score is: " + score + ".";

    // Listen for submit
    submitButtonEl.addEventListener('click', submitScore);
};


// Create a 'startTimer' function
function startTimer(){

    // Initializing the string 'score' value (75)
    timerDisplayEl.textContent = "Time: 75";

    // Start the running countdown on the timer / 'score' 
    timeInterval = setInterval(function() {

        if (score > 0){

            timerDisplayEl.textContent = 'Time: ' + score;
            score--;

        } else {

            clearInterval(timeInterval);
            timerDisplayEl.textContent = 'Time: 0';
            endGame();
        }
    }, 1000);

};

// Create a 'stopTimer' function
function stopTimer(){

    clearInterval(timeInterval);

};

// Create 'correctAnswer' function
function correctAnswer() {

    console.log('Correct!');

    // Display 'Correct!' to screen
    feedBackEl.setAttribute("class", "visible container");
    feedBackTextEl.textContent = "Correct!";

    // Add delay & remove message
    setTimeout(function() {
        feedBackEl.setAttribute("class", "hidden container");
    }, delay);
}

// Create 'wrongAnswer' function
function wrongAnswer() {

    console.log('Wrong!');

    //Subtract from score
    score = score - 10;

    // Display 'Wrong!' to screen
    feedBackEl.setAttribute("class", "visible container");
    feedBackTextEl.textContent = "Wrong!";

    // Add delay & remove message
    setTimeout(function() {
        feedBackEl.setAttribute("class", "hidden container");
    }, delay);
}

// Create 'answerQuestion' function
function answerQuestion(event) {

    // Get the value associated with the clicked button
    var currentSelection = event.target.textContent;

    // Compare against the correct answer for the current question
    if (currentSelection == questions[questionIndex].correctAnswer){

        correctAnswer();

    } else {
        
        wrongAnswer();
    };

      // Continue to next question - call 'renderCurrent Question()'
    questionIndex++;

    // Delay before rendering next question
    setTimeout(renderCurrentQuestion, delay);
};
    
// Create 'renderCurrentQuestion' function
function renderCurrentQuestion() {

    // Determine last question
    if (questionIndex < questions.length) {

        // Access the current question data from 'questions[questionIndex];'
        questionText.textContent = questions[questionIndex].text;
        buttonOne.textContent = questions[questionIndex].selectionOne;
        buttonTwo.textContent = questions[questionIndex].selectionTwo;
        buttonThree.textContent = questions[questionIndex].selectionThree;
        buttonFour.textContent = questions[questionIndex].selectionFour;

        // Call 'answerQuestion'
        selections.addEventListener('click', answerQuestion);

    } else {

        endGame();
    }
};

// ------------------------------ Submit Scores------------------ //

// Function 'submitScore'
function submitScore(event){

    // Declare variables
    var scoresArray = [];
    var storedScores = JSON.parse(localStorage.getItem("quizScores"));
    var userScore = {
        userInitials: initialsEl.value.trim(),
        userScore: score
    };

    // If local storage is empty, populate with current userScore
    if (storedScores == null) {
        scoresArray.push(userScore);
        localStorage.setItem("quizScores", JSON.stringify(scoresArray));
    // If local storage is not empty, add current userScore to end
    } else {
        scoresArray = storedScores;
        scoresArray.push(userScore);
        localStorage.setItem("quizScores", JSON.stringify(scoresArray));
    }

}

// -------------------- RUN THE GAME ---------------------------- //
startButtonEl.addEventListener('click', function() {
    startGame();
});
