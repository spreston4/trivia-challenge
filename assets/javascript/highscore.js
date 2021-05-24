var scoreListEl = document.querySelector('#score-list');
var clearScoresEl = document.querySelector('#clear-scores');

var scores = [];


// Function to render scores
function renderScores() {

    scoreListEl.innerHTML = "";

    for (var i = 0; i < scores.length; i++) {
        
        var score = scores[i];

        var li = document.createElement("li");
        li.textContent = score.userInitials + " : " + score.userScore;
        li.setAttribute("data-index", i);
        scoreListEl.appendChild(li);
    }
};

// Function to initialize page

// Function store all scores to local storage
function storeScores() {
    localStorage.setItem("quizScores", JSON.stringify(scores));
};

// Function to clear scores
function clearScores() {
    scores = [];
    localStorage.setItem("quizScores", JSON.stringify(scores));
    renderScores();
}

// Load the page
function initializeScore(){

    // Retrieve stored scores from local storage
    var storedScores = JSON.parse(localStorage.getItem("quizScores"));
    scores = storedScores;

    renderScores();
}

// Listener for clear storage

initializeScore();

clearScoresEl.addEventListener('click', clearScores);


