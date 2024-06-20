
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const counttext = document.querySelector("#countText")
// here in btn we use queryselectorAll to select all the button 

let Player;
let Computer ;
let Result ;
let count = 0;


// here choiceBtns is a array which have three elements
// args is button and and in it retun we add a eventlistener to the button which again use arrow fn

choiceBtns.forEach(button => button.addEventListener("click", () => {
 //  choiceBtns.forEach(button => button.addEventListener("click",() => {

    Player = button.textContent;
     // here the button select from arary will have a enentlisten and it return it above statement
     // basically the array's index(any button) , textContent we will assign the value to the player coz he/she choose that 
      computerTurn();

    playerText.textContent =   `Player : ${Player}`;
    computerText.textContent = `Computer : ${Computer}`;
    counttext.textContent = `WinCount : ${count}`
    resultText.textContent = winner();
})); 



function computerTurn(){

   let choice =  Math.floor(Math.random()*3 +1);
 //this will give us whether 1,2 or 3 then we can use it in switch to select the text

// here choice can be 1,2 or 3
   switch(choice){

    case 1:
        Computer = "ROCK 🪨";
        break;
    case 2 :
        Computer = "PAPER 📃";
        break;
    case 3 :
        Computer = "SCISSORS ✂️";
        break;
    default :
        break;
   }

}

function winner(){
    if(Player == Computer){
      return "DRAW !!" ;
    }

    else if(Computer == "ROCK"){
    
        if(Player == "PAPER"){
            ++count
            return "U WIN"
        }
        else{
            --count;
            return "U Lose"
        }
    }

    else if(Computer=="PAPER"){

        if(Player == "ROCk"){
            --count;
            return "U Lose"
        }
        else{
            ++count;
            return "U WIN"
        }
    }

    else (Computer =="SCISSORS")
    {
        if(Player == "ROCk"){
            ++count
            return "U WIN"
        }
        else{
            --count;
            return "U LOSE"
        }
    }
}




