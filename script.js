let playerSelection = "";
let computerSelection = "";
let computerRandInt = -1;

let playerScore = 0;
let cpuScore = 0;

// there could be a way to have all three buttons
// in one function... but for simplicitys sake

/* onclick on HTML file or buttonlistner on JS file
which is better?
 */

function clickedRockButton()
{
    //alert("alert: rock clicked");
    console.log("console: click rock");
    document.getElementById("playerImg").src = "images/rock.jpg";
    playerSelection = "rock";
    //console.log(playerSelection);

    computerResponds();
    compareHands(playerSelection, computerSelection);
}

function clickedPaperButton()
{
    //alert("alert: paper clicked");
    console.log("console: click paper");
    document.getElementById("playerImg").src = "images/paper.jpg";
    playerSelection = "paper";
    //console.log(playerSelection);

    computerResponds();
    compareHands(playerSelection, computerSelection);
}

function clickedScissorButton()
{
    //alert("alert: scissor clicked");
    console.log("console: click scissor");
    document.getElementById("playerImg").src = "images/scissor.jpg";
    playerSelection = "scissor";
    //console.log(playerSelection);

    computerResponds();
    compareHands(playerSelection, computerSelection);
}

function computerResponds(){
    computerRandInt = Math.floor(Math.random() * Math.floor(3));
    console.log("cpu rand num: ", computerRandInt);
    switch(computerRandInt){
        case 0:
            computerSelection = "rock";
            document.getElementById("computerImg").src = "images/rock.jpg";
            break;
        case 1:
            computerSelection = "paper";
            document.getElementById("computerImg").src = "images/paper.jpg";
            break;
        case 2:
            computerSelection = "scissor";
            document.getElementById("computerImg").src = "images/scissor.jpg";
            break;
        default:
            console.log("switch error?,");
    }
    console.log(computerSelection);
}   

let playerHand = "";
let cpuHand = "";
function compareHands(playerHand, cpuHand){
    if (playerHand === cpuHand){
        console.log("draw");
        
    }
    else if(playerHand === "rock" && cpuHand ==="scissor"){
        console.log("player chose rock, beats CpU scissor ");
        playerScore++;
    }
    else if(playerHand === "rock" && cpuHand ==="paper"){
        console.log("player chose rock, loses to CPU paper ");
        cpuScore++;
    }

    else if(playerHand === "paper" && cpuHand ==="rock"){
        console.log("player chose paper, beats CpU rock ");
        playerScore++;
    }
    else if(playerHand === "paper" && cpuHand ==="scissor"){
        console.log("player chose paper, loses to CPU scissor ");
        cpuScore++;
    }

    else if(playerHand === "scissor" && cpuHand ==="paper"){
        console.log("player chose scissor, beats CpU paper ");
        playerScore++;
    }
    else if(playerHand === "scissor" && cpuHand ==="rock"){
        console.log("player chose scissor, loses to CPU rock ");
        cpuScore++;
    }

    updateScore();

}

document.getElementById("scoreboard").innerHTML = playerScore + " - " + cpuScore;

function updateScore(){
    document.getElementById("scoreboard").innerHTML = playerScore + " - " + cpuScore;
    if (playerSelection === computerSelection){
        document.getElementById("scoreboard").innerHTML = "DRAW " +playerScore + " - " + cpuScore
        + " DRAW";
    }
    if (playerScore == 5){
        alert("player win 5 rounds \n game reset");
        playerScore = 0;
        cpuScore = 0;
        document.getElementById("scoreboard").innerHTML = playerScore + " - " + cpuScore;

        document.getElementById("playerImg").src = "images/questionMark.jpg";
        document.getElementById("computerImg").src = "images/questionMark.jpg";
    }
    else if (cpuScore == 5){
        alert("cpu win 5 rounds \n game rese");
        playerScore = 0;
        cpuScore = 0;
        document.getElementById("scoreboard").innerHTML = playerScore + " - " + cpuScore;

        document.getElementById("playerImg").src = "images/questionMark.jpg";
        document.getElementById("computerImg").src = "images/questionMark.jpg";
    }
    
}