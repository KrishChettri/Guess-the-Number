// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
playername = localStorage.getItem("player_name");
var guess = 1;
// count of attempts
// until hit
function submit(){
  var x = document.getElementById("guessField").value;
  if(x == y)
  {
    alert("CONGRATULATIONS "+playername+" YOU GUESSED IT RIGHT "+guess+ " GUESS'S");
    guess = 1;
  }
  else if(x > y)
  {
    guess++;
    alert("OOPS WRONG ANSWER, PLEASE CHOOSE A SMALLER NUMBER");
  }
  else
  {
guess++;
alert("OOPS WRONG ANSWER, PLEASE CHOOSE A GREATER NUMBER");
  }
}
// function for the number sent by the user
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}

