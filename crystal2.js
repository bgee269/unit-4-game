// DOM Elements

var randomNumber = document.getElementById ('randomNum');
var Score = document.getElementById ('score');
var Wins = document.getElementById ('Wins');
var Losses = document.getElementById ('Losses');
var one = document.getElementById ('one');
var two = document.getElementById ('two');
var three = document.getElementById ('three');
var four = document.getElementById ('four');




// Var
var crystrandoms = ('30', '5', '10', '7');
var crystval = '';
var Score = 0;
var Result = 0;
var Wins = 0;
var Losses = 0;
var one = [];
var two =[];
var three =[];
var four =[];




// Random num to guess
function myFunction() {
    var x = Math.floor((Math.random() * 50) + 15);
    Result = x;
    document.getElementById("randomNum").innerHTML = x;
    
}


// Crystal functions + Win/Lose

function myFunction1() {
    Score = Score + 5;
    document.getElementById('score').innerHTML = Score;
    if (Result === Score ) {
      alert("You win!");
    } else if (Result < Score) {
      alert("You lose!!");
    };
  }
  
function myFunction2() {
    Score = Score + 10;
    document.getElementById('score').innerHTML = Score;
        if (Result === Score ) {
      alert("You win!");
    } else if (Result < Score) {
      alert("You lose!!");
    } else {
        return
    };
}
 function myFunction3() {
    Score = Score + 3;
    document.getElementById('score').innerHTML = Score;
     if (Result === Score) {
         alert("You win!");
     } else if (Result < Score) {
         alert("You lose!!");
     };
    }
function myFunction4() {
    Score = Score + 6;
    document.getElementById('score').innerHTML = Score;
    if (Result === Score) {
        alert("You win!");
    } else if (Result < Score) {
        alert("You lose!!");
    };
    }

  