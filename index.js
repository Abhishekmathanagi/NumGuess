let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let RNumber=Math.ceil(Math.random()*100)
function checkGuess() {
    let GuessNumber=parseInt(userInput.value);
    if (GuessNumber>RNumber){
        gameResult.textContent="Too high try again";
        gameResult.style.backgroundColor="red";
    }
    else if(GuessNumber<RNumber){
        gameResult.textContent="too low try again";
        gameResult.style.backgroundColor="blue";
    }
    else if (GuessNumber===RNumber){
        gameResult.textContent="congratuations! you got it correct";
        gameResult.style.backgroundColor="green";
    }
    else{
        gameResult.textContent="Enter valid input";
        gameResult.style.backgroundColor="red";
    }
}