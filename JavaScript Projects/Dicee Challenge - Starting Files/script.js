// Generate a random number between 1 and 6 for Player 1
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomDiceImage1 = `dice${randomNumber1}.png`; // e.g., "dice3.png"
const randomImageSource1 = `images/${randomDiceImage1}`;

// Generate a random number between 1 and 6 for Player 2
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomDiceImage2 = `dice${randomNumber2}.png`; // e.g., "dice5.png"
const randomImageSource2 = `images/${randomDiceImage2}`;

// Select the <img> elements for Player 1 and Player 2
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

// Set the src attributes to the randomly selected images
image1.setAttribute("src", randomImageSource1);
image2.setAttribute("src", randomImageSource2);

// Determine the winner and update the heading
const heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    //heading.textContent = "🚩 Player 1 Wins!";
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    //heading.textContent = "Player 2 Wins! 🚩";
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!"
} else {
   // heading.textContent = "It's a Draw!";
   document.querySelector("h1").innerHTML= "Its a draw!"
}
