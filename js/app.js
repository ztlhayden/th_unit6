/* jshint esversion: 6 */

const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');

const phrases = [
  'one',
  'two',
  'three',
  'four',
  'five',
];

let missed = 0;
let score = 0;

function getRandomPhraseAsArray(arry) {
  //take any array of strings, randomly pick one element, split it into array of chars.
}

function addPhraseToDisplay(arr) {
  //loop through the array and wrap each el in a li, add it to #phrase ul. If letter, add .letter class.
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 

function checkLetter(key) {
  let letterFound;
  //get elements .letter.
  //add .show if the letter mattches the key.
  return letterFound; //return letterFound flag
}

function checkWin() {
  //see if the player won or lost (miss>5) and assign class to overlay.
}

function reset() {
  //reset the game
}