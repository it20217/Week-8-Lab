let computerScore = 0;
let playerScore = 0;

let playerChoice;
let playerResult;
let computerChoice;
let computerResult;
const imageRockUrl = 'https://img.icons8.com/ios/50/000000/hand-rock.png';
const imagePaperUrl = 'https://img.icons8.com/ios/50/000000/hand.png';
const imageScissorsUrl = 'https://img.icons8.com/ios/50/000000/hand-scissors--v1.png';
let imgPlayer = document.createElement('img'); 
let imgComputer = document.createElement('img'); 
const array = ["rock", "paper", "scissors"];

// Start of the game
reset();

//update player Score and computer score

function scoreUpdate(){
  document.getElementById("playerScore").innerHTML = playerScore;
  document.getElementById("computerScore").innerHTML = computerScore;
}

// show  result message in the DOM

function winMessage(){
  document.getElementById("message").innerHTML = "Success";
  document.getElementById("message").style.color = "#45d492";
  playerScore++;
  scoreUpdate();
  console.log("Player score: "+playerScore)
  console.log("Computer score: "+computerScore)
} 
function lostMessage(){
  document.getElementById("message").innerHTML = "Losing is part of the game";
  document.getElementById("message").style.color = "#e44d61";
  computerScore++;
  scoreUpdate();
  console.log("Player score: "+playerScore)
  console.log("Computer score: "+computerScore)
} 
function equalMessage(){
  document.getElementById("message").innerHTML = "No winner. Try again.";
  document.getElementById("message").style.color = "#000";
} 

// show player choice in the DOM

function setPlayerResult(){
  if(playerChoice === "rock"){
    console.log(playerChoice);
    imgPlayer.src = imageRockUrl; 
    document.getElementById('playerResult').appendChild(imgPlayer);
    
  } else if(playerChoice === "paper"){
    imgPlayer.src = imagePaperUrl; 
    document.getElementById('playerResult').appendChild(imgPlayer);
  } else {
    imgPlayer.src = imageScissorsUrl; 
    document.getElementById('playerResult').appendChild(imgPlayer);
  }
} 

//show computer choice in the DOM

function setComputerResult(){
  computerChoice = array[Math.floor(Math.random() * array.length)];
  if(computerChoice === "rock"){
    imgComputer.src = imageRockUrl; 
    document.getElementById('computerResult').appendChild(imgComputer);
    
  } else if(computerChoice === "paper"){
    imgComputer.src = imagePaperUrl; 
    document.getElementById('computerResult').appendChild(imgComputer);
  } else {
    imgComputer.src = imageScissorsUrl; 
    document.getElementById('computerResult').appendChild(imgComputer);
  }
} 
// calculate the Winner

function selectWinner(){
  if(playerChoice === "rock"){
    if(computerChoice === "paper"){
      lostMessage();
    } else if(computerChoice === "scissors"){
      winMessage();
    } else {
      equalMessage();
    }
  }
  if(playerChoice === "paper"){
    if(computerChoice === "scissors"){
      lostMessage();
    } else if(computerChoice === "rock"){
      winMessage();
    } else {
      equalMessage();
    }
  }
  if(playerChoice === "scissors"){
    if(computerChoice === "rock"){
      lostMessage();
    } else if(computerChoice === "paper"){
      winMessage();
    } else {
      equalMessage();
    }
  }
}

// functions on button click

function setRock(){
  playerChoice="rock";
  setPlayerResult();
  setComputerResult();
  selectWinner();
  
}
function setPaper(){
  playerChoice="paper";
  setPlayerResult();
  setComputerResult();
  selectWinner();
}
function setScissors(){
  playerChoice="scissors";
  setPlayerResult();
  setComputerResult(); 
  selectWinner(); 
}
//Reset the game

function reset(){
  computerScore = 0;
  playerScore = 0;
  scoreUpdate();
  document.getElementById("playerScore").innerHTML = 0;
  document.getElementById("computerScore").innerHTML = 0;
  document.getElementById("message").innerHTML = " ";
  document.getElementById('computerResult').innerHTML = " ";
  document.getElementById('playerResult').innerHTML = " ";
}


