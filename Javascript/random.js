var name = prompt("What is your name?");
    
// Ask for the other person's name
var theirName = prompt("What is their name?");

// Calculate a random love score between 1 and 100
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

// Display the love score
alert("Your love score is " + loveScore + "");