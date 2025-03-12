var n =Math.floor(Math.random() * 6)+1;

var randomDiceImage = "dice" + n + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);



var m =Math.floor(Math.random() * 6)+1;

var randomDiceImage = "dice" + m + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);



if(n > m){
    document.querySelector("h1").innerHTML="☠️Player 1 Wins";
}else if(n < m){
    document.querySelector("h1").innerHTML="Player 2 Wins☠️";
}else{
    document.querySelector("h1").innerHTML="Draw";
}