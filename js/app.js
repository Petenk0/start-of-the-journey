//DATA

let word = "";

// | 0 zapis oreže desatinnu časť čisla tj. nastavy ho na integer
// let solution = 'balls'
let solution = allWords[(allWords.length * Math.random()) | 0].toLowerCase();
let tries = 1;
const maxWordLength = 5;
const maxTries = 6;

//KEYBOARD

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    submitWord();
  } else if (event.key === "Backspace") {
    removeLetter();
  } else {
    addLetter(event.key);
  }
});

//SUBMIT WORD
const submitWord = () => {
  if (word.length !== maxWordLength) return;

  //is this a real word
  if (!allWords.includes(word)) {
    animateRowShake(currentRow());
    return;
  }

  animateTileReveal(currentRow());

  setTimeout(() => {
    judgeResult(word);
  }, 1500);
};

//ADD LETTER
const addLetter = (character) => {
  if (word.length >= maxWordLength) return;

  // allow only letters
  if (/^\p{L}$/u.test(character)) {
    word = word + character;
    word = word.toLowerCase();

    let tile = currentTile();
    tile.innerHTML = character;

    animateTileBounce(tile);
  }
};

//REMOVE LETTER
const removeLetter = () => {
  if (word.length <= 0) return;

  let tile = currentTile();
  tile.className = "tile";

  tile.innerHTML = "";

  word = word.slice(0, -1);
};

//TILE TO UPDATE
const currentTile = () => {
  return currentRow().querySelector(":nth-child(" + (word.length + 1) + ")");
};

//CURRENT ROW
const currentRow = () => {
  return document.querySelector(".row:nth-child(" + tries + ")");
};

//JUDGE RESULT
const judgeResult = () => {
  if (word === solution) {
    let audio = new Audio("sound/sound.mp3");
    audio.play();
    animateTileDance(currentRow());
  }
  else if (tries >= maxTries) {
    youLose();
  }
  else {
    word = "";
    tries++;
  }
};
