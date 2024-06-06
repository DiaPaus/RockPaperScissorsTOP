const getComputerChoice=function(){
const choices=['rock','paper','scissors'];
return choices[Math.floor(Math.random()*3)]
}

const getHumanChoice=function(){
    let humanChoice='';
    while(!['rock','paper','scissors'].includes(humanChoice)) humanChoice=(prompt('Your choice? rock, papers or scissors?').toLowerCase());
    return humanChoice;
}


const playGame=function(){
    let humanScore=0, computerScore=0;
    const playRound=function(computerChoice,humanChoice){

        let winnerCases={
            'paper':'rock',
            'scissors':'paper',
            'rock':'scissors'
        }
    
        if (winnerCases[computerChoice]===humanChoice) 
            {console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;}
            else 
            {console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;}
    }

    for(let i=0;i<5;i++){
        const computerChoice=getComputerChoice();
        const humanChoice=getHumanChoice();
        playRound(computerChoice,humanChoice)
    }

    if(humanScore>computerScore) console.log(`You win! ${humanScore} to ${computerScore}`)
        else console.log(`You loose! ${computerScore} to ${humanScore}`)
}

playGame()