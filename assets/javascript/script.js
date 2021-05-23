// DECLARE a starting 'score' (time)
var score = 75;

// Declare body
var body = document.body;
var delay = 1000;

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


// Create a 'startGame' function
function startGame() {
    // Call 'startTimer' function
    startTimer();
    // Hide the start screne element and show the first question
    startScreenEl.setAttribute("class", "hidden");
    questionScreenEl.setAttribute("class", "visible");
    renderCurrentQuestion();
};

// Create an 'endGame' function
function endGame(){
    stopTimer();
    questionScreenEl.setAttribute("class", "hidden");
    endScreenEl.setAttribute("class", "visible");
    console.log('Game Over. Final score: ' + score);
    timerDisplayEl.textContent = "Time: " + score;
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

function stopTimer(){
    clearInterval(timeInterval);
};

// Create 'correctAnswer' function
function correctAnswer() {
    console.log('Correct!');

    // Display 'Correct!' to screen
    var correctDisplay = document.createElement('p');
    correctDisplay.textContent = 'Correct!'
    body.appendChild(correctDisplay);

    // Add delay & remove message
    setTimeout(function() {
        correctDisplay.remove();
    }, delay);
}

// Create 'wrongAnswer' function
function wrongAnswer() {
    console.log('Wrong!');

    //Subtract from score
    score = score - 10;

    // Display 'Wrong!' to screen
    var wrongDisplay = document.createElement('p');
    wrongDisplay.textContent = 'Wrong!'
    body.appendChild(wrongDisplay);

    // Add delay & remove message
    setTimeout(function() {
        wrongDisplay.remove();
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






// -------------------- RUN THE GAME ---------------------------- //
startButtonEl.addEventListener('click', function() {
    startGame();
});









// --------------------------------------------- OLD CODE ------------------------------------------------------------ //

// // Define variables
// var highScores = [];                                                          // Track highscores
// var body = document.body;

// // Append 'main' element to display start screen
//     // Include header
// var h1Start = document.createElement('h1');
// h1Start.textContent = 'Coding Quiz Challenge';
// body.appendChild(h1Start);
//     // Include start instructions as a paragraph
// var pStart = document.createElement('p');
// pStart.textContent = 'Instructions placeholder here.';
// body.appendChild(pStart);
//     // Include 'start quiz' button
// var startButton = document.createElement('button')
// startButton.textContent = 'Start Quiz';
// body.appendChild(startButton);
//         // When 'start quiz' button is pressed, clear the current display for main and begin the quiz function
// startButton.addEventListener('click', function(){
//     h1Start.remove();
//     pStart.remove();
//     startButton.remove();
//     takeQuiz();
// });

// // ------------------------------------------------------------------------------------------------------------- //
// // ---------------------------------- Quiz Function ------------------------------------------------------------ //
// // ------------------------------------------------------------------------------------------------------------- //
// function takeQuiz() {

//     console.log('Quiz has started');   // Test

// // Begin a countdown timer as soon as quiz begins - display countdown text to the .time class
// // If timer reaches 0, display end screen

// // Declare local variables - score keeper, etc
//     var currentScore = 0;

// // Declare functions to call
//     function q1Wrong() {
//         console.log('Wrong!');
//         console.log('Score : ' + currentScore);
//         b1Q1.removeEventListener('click', q1Wrong);
//         b2Q1.removeEventListener('click', q1Correct);
//         b3Q1.removeEventListener('click', q1Wrong);
//         b4Q1.removeEventListener('click', q1Wrong);
//     };

//     function q1Correct() {
//         currentScore++;
//         console.log('Correct!');
//         console.log('Score : ' + currentScore);
//         b1Q1.removeEventListener('click', q1Wrong);
//         b2Q1.removeEventListener('click', q1Correct);
//         b3Q1.removeEventListener('click', q1Wrong);
//         b4Q1.removeEventListener('click', q1Wrong);
//     };


// // First question - append to .main class
//     // Display question as header
//     var h2Q1 = document.createElement('h2');
//     h2Q1.textContent = 'Question 1 Placeholder'
//     body.appendChild(h2Q1);
//     // Display 4 buttons, each with a different answer on text
//     var b1Q1 = document.createElement('button');
//     var b2Q1 = document.createElement('button');
//     var b3Q1 = document.createElement('button');
//     var b4Q1 = document.createElement('button');

//     b1Q1.textContent = 'Answer 1 placeholder';
//     b2Q1.textContent = 'Answer 2 placeholder';
//     b3Q1.textContent = 'Answer 3 placeholder';
//     b4Q1.textContent = 'Answer 4 placeholder';

//     body.appendChild(b1Q1);
//     body.appendChild(b2Q1);
//     body.appendChild(b3Q1);
//     body.appendChild(b4Q1);

//     // Listen for button presses
//         b1Q1.addEventListener('click', q1Wrong);
//             // q1Wrong();
//             // answerQ1 = false;
//             // clickedQ1 = true;
//         b2Q1.addEventListener('click', q1Correct);
//         b3Q1.addEventListener('click', q1Wrong);
//         b4Q1.addEventListener('click', q1Wrong);


// // Second question
//     // Repeat first question just with different text and selections

// // Third question
//     // Repeat

// // Fourth question
//     // Repeat

// // End Screen
//     // Display 'All Done!' as title
//     // Display score
//     // Display text box to enter initials
//     // Display button to 'submit' - on submit, clear current screen and diplay highscore screen

// // Display highscore
//     // List of high scores in order from highest to lowest
//     // Display return button - when pressed, returns to welcome message
//     // Display clear score button - when pressed, clear high score data
// };
