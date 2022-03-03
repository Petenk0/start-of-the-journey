//DATA

let word = ''
let solution = 'balls'
let tries = 1
const maxWordLength = 5


//KEYBOARD

document.addEventListener('keydown',(event) => {

    if (event.key === 'Enter') {

        submitWord()
    }

    else if (event.key === 'Backspace') {

        removeLetter()
    }

    else{

        addLetter(event.key)
    }



} )

//SUBMIT WORD
const submitWord = () => {
    if (word.length !== maxWordLength) return
    
    if(word !== solution){
        animateRowShake(currentRow())
    }

    judgeResult(word)

        
    

    


    //alert(word)   
}


//ADD LETTER
const addLetter = (character) => {
    if (word.length >= maxWordLength) return
    
    // allow only letters
    if(/^\p{L}$/u.test(character)){

        word = word + character
        word = word.toLowerCase()

        let tile = currentTile()    
        tile.innerHTML = character

        animateTileBounce(tile)
    }
      
}


//REMOVE LETTER
const removeLetter = () => {
    if (word.length <= 0) return
    
    let tile = currentTile()
    tile.className = 'tile'

    tile.innerHTML = ''

    word = word.slice(0, -1)  
}

//TILE TO UPDATE
const currentTile = () => {
    return currentRow().querySelector(':nth-child('+ word.length +')')
}

//CURRENT ROW 
const currentRow = () => {
    return document.querySelector('.row:nth-child('+ tries +')')
}

//JUDGE RESULT
const judgeResult = () => {
    if(word === solution){
        alert ( 'win')
    }
    else if( tries >= 6){
        alert (' Spravne riesenie bolo: ' +solution.toUpperCase() )
    }

    else{
        word = ''
        tries++
    }
}

