var scoreListEl = document.querySelector('#score-list');
var clearScoresEl = document.querySelector('#clear-scores');

var scores = [];


// Function to render scores 
function renderScores() {

    // Sort numerically - learned about sort function here https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
    scores = scores.sort((a,b) => b.userScore - a.userScore);

    // Reset html for OL
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
function initializeScore(){

    // Retrieve stored scores from local storage
    var storedScores = JSON.parse(localStorage.getItem("quizScores"));
    scores = storedScores;

    renderScores();
}

// Function to arrange scores in numerical order


// Function to clear scores
function clearScores() {
    scores = [];
    localStorage.setItem("quizScores", JSON.stringify(scores));
    renderScores();
}

// Load the page

// Listener for clear storage

initializeScore();

clearScoresEl.addEventListener('click', clearScores);


