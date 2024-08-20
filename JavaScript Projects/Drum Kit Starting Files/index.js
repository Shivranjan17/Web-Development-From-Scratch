var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

// //Method 2 with keyboaed and click

// const soundMap = {
//     'w': "sounds/tom-1.mp3",
//     'a': "sounds/tom-2.mp3",
//     's': "sounds/tom-3.mp3",
//     'd': "sounds/tom-4.mp3",
//     'j': "sounds/snare.mp3",
//     'k': "sounds/crash.mp3",
//     'l': "sounds/kick-bass.mp3"
// };

// // Function to play sound based on the key or button pressed
// function playSound(soundFile) {
//     const audio = new Audio(soundFile);
//     audio.play();
// }

// // Handle button clicks
// document.querySelectorAll(".drum").forEach(button => {
//     button.addEventListener("click", function() {
//         const buttonInnerHTML = this.innerHTML.toLowerCase();
//         if (soundMap[buttonInnerHTML]) {
//             playSound(soundMap[buttonInnerHTML]);
//         }
//     });
// });
// // Handle keyboard presses
// document.addEventListener("keydown", function(event) {
//     const key = event.key.toLowerCase(); // Get the pressed key
//     if (soundMap[key]) { // Check if the key has a corresponding sound
//         playSound(soundMap[key]);
//     }
// });



// // The keydown event in JavaScript is an event that occurs when a user presses down a key on the keyboard. This event is part of the KeyboardEvent interface and is commonly used in web applications to handle keyboard input.

// // Key Concepts of keydown
// // Event Triggering:

// // The keydown event is triggered when a key is first pressed. This event is fired continuously as long as the key remains pressed down. However, it only fires once for each key press, regardless of how long the key is held down. For continuous actions while holding a key, you might need to handle the keydown event in combination with the keyup event.
// // Event Object:

// // The event object provided to the event handler contains useful properties about the key event. Key properties include:
// // event.key: Returns the value of the key that was pressed. For example, pressing the "A" key returns "a", and pressing the "Enter" key returns "Enter".
// // event.code: Returns a string representing the physical key on the keyboard (e.g., "KeyA" for the "A" key, "Enter" for the Enter key). This is more consistent across different keyboard layouts.
// // event.altKey: Returns a Boolean indicating whether the Alt key was pressed when the event was triggered.
// // event.ctrlKey: Returns a Boolean indicating whether the Control key was pressed.
// // event.shiftKey: Returns a Boolean indicating whether the Shift key was pressed.
// // event.metaKey: Returns a Boolean indicating whether the Meta key (Command key on macOS, Windows key on Windows) was pressed.
// // Handling keydown Event:

// // To handle the keydown event, you attach an event listener to a DOM element or the document object. The event listener executes a function when the event occurs.