// alert("refresh page to play!")
var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");
dice1.src = "images/dice6.png";
dice2.src = "images/dice6.png";

var randomNumber1 = Math.floor((Math.random() * 5) + 1 );
var randomNumber2 = Math.floor((Math.random() * 5) + 1 );



function throw_dice(randomNumber) {
var src = "";
if (randomNumber === 0){
    src = "images/dice1.png"
}
else if (randomNumber === 1){
    src = "images/dice2.png"
}
else if (randomNumber === 2){
    src = "images/dice3.png"
}
else if (randomNumber === 3){
    src = "images/dice4.png"
}
else if (randomNumber === 4){
    src = "images/dice5.png"
}
else if (randomNumber === 5){
    src = "images/dice6.png"
}

return src;
}


dice1.src = throw_dice(randomNumber1);
dice2.src = throw_dice(randomNumber2);

var new_title = "";



if (randomNumber1 === randomNumber2){
    new_title = "Draw!"
}
else if (randomNumber1 > randomNumber2){
    new_title = "🚩 Player1 Wins!"
}
else if (randomNumber1 < randomNumber2){
    new_title = "Player2 Wins! 🚩 "
}


document.querySelector("h1").innerHTML = new_title;