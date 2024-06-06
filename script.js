const getComputerChoice=function(){
const choices=['Rock','Paper','Scissors'];
return choices[Math.floor(Math.random()*3)]
}

const getHumanChoice=function(){
    let humanChoice='';
    while(!['rock','paper','scissors'].includes(humanChoice)) humanChoice=(prompt('Your choice? rock, papers or scissors?').toLowerCase());
    return humanChoice[0].toUpperCase()+humanChoice.substring(1)
}

const playGame=function(){
    let humanScore=0, computerScore=0;
    const playRound=function(computerChoice,humanChoice){
    let winnerCases={
            'Paper':'Rock',
            'Scissors':'Paper',
            'Rock':'Scissors'
        }
    if(computerChoice===humanChoice) console.log(`It's a tie! ${(computerChoice)} = ${(humanChoice)}`)
    else if (winnerCases[computerChoice]===humanChoice) 
            {console.log(`You lose! ${(computerChoice)} beats ${(humanChoice)}`);
            computerScore++;}
    else 
            {console.log(`You win! ${(humanChoice)} beats ${(computerChoice)}`);
            humanScore++;}
    }

    for(let i=0;i<5;i++){
        const computerChoice=getComputerChoice();
        const humanChoice=getHumanChoice();
        playRound(computerChoice,humanChoice)
    }

    if(humanScore>computerScore) console.log(`You win! ${humanScore} to ${computerScore}`)
    else if (humanScore<computerScore) console.log(`You loose! ${computerScore} to ${humanScore}`)
    else console.log(`It's a tie ${computerScore} to ${humanScore}`)
}

playGame()