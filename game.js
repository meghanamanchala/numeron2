// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1=0
let number2=0
let number1Box = document.getElementById("number1");
let number2Box = document.getElementById("number2");
// Iteration 3: Creating variables required to make the game functional
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let multiplyButton = document.getElementById("mul");
let divideButton = document.getElementById("divide");
let modButton = document.getElementById("modulus");
let score =0;
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3Box = document.getElementById("number3");
let number3;
// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    number1=Math.ceil(Math.random()*100);
    number2=Math.ceil(Math.random()*100);

    let operators = Math.ceil(Math.random()*5);
    console.log(operators);
    switch(operators){
        case 1:
        number3 = number1 + number2;
        break;
        case 2:
        number3 = number1 - number2;
        break;
        case 3:
        number3 = number1 * number2;
        break;
        case 4:
        number3 = Math.floor(number1 / number2);
        break;
        case 5:
        number3 = number1 % number2;
        break;
    }
    number3Box.textContent = number3;
    number2Box.textContent = number2;
    number1Box.textContent = number1;
   
};

randomise();
// Iteration 6: Making the Operators (button) functional
plusButton.onclick = () =>{
    timer=20;
    if(number1 + number2 == number3){
        score++;
        randomise();
        
    }else{
        gameOver();
    }
};
minusButton.onclick = () =>{
    timer=20;
    if(number1 - number2 == number3){
        score++;
        randomise();
    }else{
        gameOver();
    }
};
multiplyButton.onclick = () =>{
    timer=20;
    if(number1 * number2 == number3){
        score++;
        randomise();
    }else{
        gameOver();
    }
};
divideButton.onclick = () =>{
    timer=20;
    if (Math.floor(number1 / number2)== number3){
        score++;
        randomise();
    }else{
        gameOver();
    }
};
modButton.onclick = () =>{
    timer=20;
    if (number1 % number2 == number3){
        score++;
        randomise();
    }else{
        gameOver();
    }
};



function gameOver(){
    localStorage.setItem("score",score);
        window.location.href = "./gameover.html";
}
// Iteration 7: Making Timer functional
let timer =20;
let timerDiv = document.getElementById("timer")
function countDown(){
   
    if (timer > 0){
        timerDiv.innerText=timer;
        timer--;
    }else{
       gameOver();
    }

}
setInterval(countDown,1000);