//Create the array of letters the computer can choose from:
var computerChoices = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];    //This allows the computer to make a random selection from the array called computerChoices. 
var userGuess;  //setting a placeholder that can be used for functions below.  Has to be included above because it's not defined until the onkeyup function
//Create variables to track wins, losses, guesses made and guesses remaining
var wins = 0;
var losses = 0;
// var guessesMade = 0;
var guessesRemaining = 9;

//When the user presses a key:
function reset () {
computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];   //Whole line has to be included
guessesRemaining = 9;
renderHTML ();
console.log(reset)
}
function renderHTML () {
    var html =
    "<p>You chose: " + userGuess + "</p>" +
    // "<p>The computer chose: " + computerGuess + "</p>" +    //keeping this because it's a great way to see if the wins works when user matches computer guess
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Remaining: " + guessesRemaining + "</p>" 
    // "<p>Guesses Made " + userGuess + "</p>"  

    document.getElementById("letter").innerHTML = html;
    // document.getElementById("guess").innerHTML = "Did you guess correctly?";
}


document.onkeyup = function(event) {
    userGuess = event.key; //This must be within the function to know what event to look for
    console.log(userGuess);
    renderHTML ();

    //If the guess matches the random number:
    if (guessesRemaining >0) {
    
    
    
    if (userGuess === computerGuess) {
        wins = wins + 1;
        reset();
    } else {
        guessesRemaining --;
        // guessesMade ++;  //Add letters guessed                   
        }
    
} else {
    losses ++;
    reset();
}

}