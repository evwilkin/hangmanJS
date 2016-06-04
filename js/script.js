var words = ["Dog", "Cat", "Seattle", "Space Needle", "World Wide Web"];
var guess = [];

function playGame() {
  var answer = words[Math.floor(Math.random() * 4)].toLowerCase();
  console.log(answer);

  var letters = answer.split("");
  console.log(letters);

  
}

playGame();