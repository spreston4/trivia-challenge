// Get initials and score form local storage
var setInitials = localStorage.getItem("quizSetInitials");
var setScore = localStorage.getItem("quizFinalScore");

// Create <li>s to append
var body = document.body;
var liEl = document.createElement("li");
liEl.textContent = setInitials + " ---- " + setScore;

// Append
body.appendChild(liEl);

