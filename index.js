let randomNumber = (Math.floor(Math.random() * 6))+1;
let randomNumber2 = (Math.floor(Math.random() * 6))+1;

// console.log(randomNumber);

const img1 = document.getElementById('img1');
img1.setAttribute('src', './images/dice'+ randomNumber +'.png');

const img2 = document.getElementById('img2');
img2.setAttribute('src', './images/dice'+ randomNumber2 +'.png');

if(randomNumber > randomNumber2){
    document.querySelector('h1').innerHTML = 'Player 1 wins 🥳';
}
else if (randomNumber2 > randomNumber){
    document.querySelector('h1').innerHTML = 'Player 2 wins 🥳';
}
else{
    document.querySelector('h1').innerHTML = 'Draw 😲';
}