const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Compose your tweet: ', (tweet) => {
  if (tweet.trim() !== "") {
    var tweetCount = tweet.length;
    if (tweetCount > 280) {
      console.log("Tweet is too long! It should be 280 characters or less.");
    } else {
      console.log("Your tweet: " + tweet);
      console.log("Characters remaining: " + (280 - tweetCount));
    }
  } else {
    console.log("You didn't enter a tweet!");
  }
  rl.close();
});