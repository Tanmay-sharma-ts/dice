var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "images/" + randomNumber1 + ".png";
var randomDiceImage2 = "images/" + randomNumber2 + ".png";

document.querySelector(".dice1").setAttribute("src",randomDiceImage1);
document.querySelector(".dice2").setAttribute("src",randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 Won! (refresh to play again)";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText = "Player 2 Won! (refresh to play again)";
}
else {
    document.querySelector("h1").innerText = "Match draw, please refresh to play";
}

var refreshBtn = document.getElementsByClassName("refreshBtn")[0];
refreshBtn.addEventListener('click', function(){
    location.reload();
});
