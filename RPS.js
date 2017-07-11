var playerChoice = "Rock"
var computerChoice = ["Rock", "Paper", "Scissor"]
var computerSelection = computerChoice[Math.floor(Math.random)()*3]

if (playerChoice == computerSelection){
    console.log = ("It's A Tie!")
}  

if (playerChoice == "Rock") {
    if (computerSelection == "Scissor"){
     console.log("Player Wins!");
    }else if (computerSelection == "Paper"){
        console.log("Computer Wins!");
    }
}
if (playerChoice == "Paper") {
    if (computerSelection == "Scissor"){
     console.log("Computer Wins!");
    }else if (computerSelection == "Rock"){
        console.log("Player Wins!");
    }
}
if (playerChoice == "Scissor") {
    if (computerSelection == "Rock"){
     console.log("Computer Wins!");
    }else if (computerSelection == "Paper"){
        console.log("Player Wins!");
    }
}

