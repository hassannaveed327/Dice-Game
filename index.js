                      /*     Dice 1           */

var randomNumber1 = Math.floor((Math.random()*6) + 1) ; //random number;

var randomDice = "images/dice" + randomNumber1 + ".png";//image link

document.querySelector("img").setAttribute("src",randomDice);

/*                           Dice 2                                              */

var randomNumber2 = Math.floor((Math.random()*6) + 1) ; //random number;

var randomDice = "images/dice" + randomNumber2 + ".png";//image link

document.querySelector("img.img2").setAttribute("src", randomDice);

/*                        Conditions                              */

if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML = "DRAW!"
}
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";

}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";

}
