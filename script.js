
const choices=['Rock','Paper','Scissors'];
let humanScore=0, computerScore=0;

const getComputerChoice=function(){
return choices[Math.floor(Math.random()*3)]
}

const playRound=function(computerChoice,humanChoice){
    computerChoice=getComputerChoice();
    humanChoice=this.value;
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
     

    // if(humanScore>computerScore) console.log(`You win! ${humanScore} to ${computerScore}`)
    // else if (humanScore<computerScore) console.log(`You loose! ${computerScore} to ${humanScore}`)
    // else console.log(`It's a tie ${computerScore} to ${humanScore}`)
// }

const body=document.querySelector('body');

for(let choice of choices){
    let element=document.createElement('button');
    element.id=`${choice.toLowerCase()}`;
    element.value=`${choice}`
    element.innerHTML=`${choice.toUpperCase()}`;
    element.addEventListener('click',playRound);
    body.appendChild(element);
}