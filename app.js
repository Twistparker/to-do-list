let buttons = document.querySelectorAll("button");
let computer = document.getElementById("computer-choice");
let computerScoreEl=document.getElementById("computer-score");
let userScoreEl=document.getElementById("username-score");
let UserChoice =document.getElementById("user-choice");
 let annoucement =document.getElementById("results");
let computerchoice;
let userResult;
let result;
let computerScore = 0;
let userScore = 0;
let username =document.getElementById("username");

 let Yourname = window.prompt("Please what is your name") ;
  username.innerText = Yourname;



buttons.forEach(buttons => buttons.addEventListener("click",(e) => {
    userResult = e.target.id
    UserChoice.innerText = "YOUR CHOICE: " + userResult;
    generateComputer()
    finalResult()
    getScore()
}))


function generateComputer(){
    let randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);

    
if (randomNumber == 0 ) {
    computerchoice = "rock"
}
if (randomNumber == 1 ) {
    computerchoice = "paper"
}
if (randomNumber == 2 ) {
    computerchoice = "scissors"
}
computer.innerText =  "COMPUTER CHOICE: "+ computerchoice;

}


function finalResult(){
    if (computerchoice === userResult) {
       result = "its a draw"
    }
    if (computerchoice === "rock" && userResult === "paper") {
       result = "You won the round"
    }
    if (computerchoice === "paper" && userResult === "rock") {
       result = "Airrack4344# won the round"
    }
    if (computerchoice === "rock" && userResult === "scissors") {
       result = "Airrack4344# won the round"
    }
    if (computerchoice === "scissors" && userResult === "rock") {
       result = "You won the round"
    }
    if (computerchoice === "paper" && userResult === "scissors") {
       result = "You won the round"
    }
    if (computerchoice === "scissors" && userResult === "paper") {
       result = "Airrack4344# won the round"
    }
    
    annoucement.innerText=result  ;

}

function getScore(){
   if (result === "Airrack4344# won the round" ) {
      computerScore++;
      computerScoreEl.innerText = computerScore  ;
   }
   if (result ===  "You won the round" ) {
      userScore++;
      userScoreEl.innerText = userScore  ;
   }
   

}














