
const choices=['Rock','Paper','Scissors'];
let humanScore=0, computerScore=0;
let playing=true;

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
    if(playing&&computerChoice===humanChoice) results.innerText=`It's a tie! ${(computerChoice)} = ${(humanChoice)}`
    else if (playing&&winnerCases[computerChoice]===humanChoice) 
            {   computerScore++;
                results.innerText=`You lose! ${(computerChoice)} beats ${(humanChoice)}!`
                
           }
    else if(playing)
            {results.innerText=`You win! ${(humanChoice)} beats ${(computerChoice)}`;
            humanScore++;}
    if(humanScore<5&&computerScore<5)
    {
        results.innerText=(`${results.innerText}
            You: ${humanScore} Computer: ${computerScore}`)
    }
    else if (computerScore===5) { results.innerText=(`Computer wins!!!!!


        Computer: ${computerScore} You: ${humanScore}`);
        playing=false;
        setTimeout(()=>document.location.reload(),2000);
    }
    
    else { results.innerText=(`You win!!!!!


        You: ${humanScore} Computer: ${computerScore}`);
        playing=false;
        setTimeout(()=>document.location.reload(),2000);}           
    }   

const body=document.querySelector('body');

for(let choice of choices){
    let element=document.createElement('button');
    element.id=`${choice.toLowerCase()}`;
    element.value=`${choice}`
    element.innerHTML=`${choice.toUpperCase()}`;
    element.style.padding='30px';
    element.style.background='#C292A1';
    element.style.color='white';
    element.addEventListener('click',playRound);
    body.appendChild(element);
}

const results=document.createElement('div');
results.style.background='lightgreen';
results.style.color='#874C62';
results.style.height='200px';
results.style.width='350px';
results.style.display='flex';
results.style.justifyContent='center';
results.style.alignItems='center';

body.appendChild(results);
