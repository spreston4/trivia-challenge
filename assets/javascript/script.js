// DECLARE a starting 'score' (time)

// DECLARE an array list of 'questions'
    // Where each value is an object to define a question and its properties

// Declare an 'questionIndex' variable to point to the current question

// Store a refrence to the element for the 'timerDisplayEl'
// Store a reference to the 'startButtonEl'

// Create a 'startGame' function
    // Call 'startTimer' function
    // Hide the start screne element and show the first question

// Create an 'endGame' function
    

// Create a 'startTimer' function
    // Initializing the string 'score' value (75)
    // Start the running countdown on the timer / 'score'   

// Create 'answerQuestion' function
    // Get the value associated with the clicked button
    // Compare against the correct answer for the current question
        // If correct...
        // If incorreect...
            // Subtract points from the 'score'
    // Continue to next question - call 'renderCurrent Question()'

// Create 'renderCurrentQuestion' function
    // Access the current question data from 'questions[questionIndex];'

















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
