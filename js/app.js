/* jshint esversion: 6 */

const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');

const phrases = [
  'A Good Man is Hard to Find',
  'A Fool and His Money Are Soon Parted',
  'Good Things Come to Those Who Wait',
  "The Apple Doesn't Fall Far From the Tree",
  'It Takes Two to Tango',
];

let missed = 0;
let score = 0;

function getRandomPhraseAsArray(arry) { //array of strings, pick one element, return array of chars.
  const random = Math.floor(Math.random() * arry.length);
  console.log(random);
  const charArry = arry[random].split("");
  return charArry;
}

function addPhraseToDisplay(arry) {
  for(i = 0; i < arry.length; i++) {  //loop through the array
    const li = document.createElement('li'); //create li element and add the char
    li.textContent = arry[i];

    const isLetter = RegExp('[a-zA-Z]').test(arry[i]);
    if (isLetter) { //see if its a space, or needs the letter class
      li.className = 'letter';
    }
    phrase.appendChild(li); //attach it
  }
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