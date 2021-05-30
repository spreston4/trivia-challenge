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
        text: 'According to a 2009 study, what type of music helps to ward off mosquitos?',
        selectionOne: 'Country',
        selectionTwo: 'Electronic Dance Music (EDM)',
        selectionThree: 'Rock',
        selectionFour: 'Reggae',
        correctAnswer: 'Electronic Dance Music (EDM)'
    }, 
    questionTwo = {
        text: 'In a standard deck of cards, the King of which suit does not have a mustache?',
        selectionOne: 'Hearts',
        selectionTwo: 'Diamonds',
        selectionThree: 'Clubs',
        selectionFour: 'Spades',
        correctAnswer: 'Hearts'
    }, 
    questionThree = {
        text: 'A ‘jiffy’ is an actual unit of time. About how long is a ‘jiffy’?',
        selectionOne: 'One minute',
        selectionTwo: 'One millisecond',
        selectionThree: 'One trillionth of a second',
        selectionFour: 'Ten minutes',
        correctAnswer: 'One trillionth of a second'
    }, 
    questionFour = {
        text: 'Why should you not eat apple seeds?',
        selectionOne: 'They are bad for your teeth',
        selectionTwo: 'They contain cyanide',
        selectionThree: 'They are gross',
        selectionFour: 'A tree will sprout in your stomach',
        correctAnswer: 'They contain cyanide'
    }, 
    questionFive = {
        text: 'Which Disney character has the highest kill count?',
        selectionOne: 'Scar (Lion King)',
        selectionTwo: 'Gaston (Beauty and the Beast)',
        selectionThree: 'Cruella de Vil (101 Dalmatians)',
        selectionFour: 'Mulan (Mulan)',
        correctAnswer: 'Mulan (Mulan)'
    }, 
    questionSix = {
        text: 'What is the closest living relative of the Tyrannosaurus rex?',
        selectionOne: 'Komodo Dragon',
        selectionTwo: 'Alligator',
        selectionThree: 'Chicken',
        selectionFour: 'Lizard',
        correctAnswer: 'Chicken'
    }, 
];

console.log(questions);                       // Testing
console.log(questions[2].text);               // Testing
console.log(questions[0].correctAnswer);      // Testing

// Declare an 'questionIndex' variable to point to the current question
var questionIndex = 0;
console.log(questions[questionIndex].text);   // Testing

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
    console.log('Game Over. Final score: ' + score);      // Testing
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

    console.log('Correct!');                 // Testing

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

    console.log('Wrong!');                    // Testing

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

// Validate that a button is pressed with 'validateButton'
function validateButton(event) {

	var click = event.target;

	if (click == buttonOne || click == buttonTwo || click == buttonThree || click == buttonFour) {

		answerQuestion(event);
	
	} else {
	
	return;

	};

};

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
        selections.addEventListener('click', validateButton);

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
