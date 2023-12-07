// Iteration 8: Making scoreboard functional

document.getElementById("play-again-button").onclick = () =>{
    window.location.href = "./game.html";
};



document.getElementById("score-board").innerText = localStorage.getItem("score")