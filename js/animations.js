// BOUNCE WHEN YOU ADD NEW LETTER
const animateTileBounce = (tile) => {
    tile.classList.add('is_filled', 'animate__animated','animate__bounceIn' )
}

// SHAKE WHOLE ROW WHEN YOU SUBMIT NON EXISTING WORD
const animateRowShake = (row) => {
    
    row.classList.remove('animate__shakeX')

    setTimeout(() => {
        row.classList.add('animate__animated','animate__shakeX' )
    }, 0);

}

// ROTATE TILE WHEN YOU SUBMIT EXISTING WORD
 const animateTileReveal = (row) => {
    
    row.querySelectorAll('.tile').forEach((tile, index) => {

        let tileLetter = word.charAt(index)
        let collorClass = 'wrong'

        if (solution.includes(tileLetter)){
           collorClass = 'present'
        }

        if (solution.charAt(index) === tileLetter){
           collorClass = 'correct'
        }

        tile.classList.add(collorClass)

    
        tile.classList.remove('animate__bounceIn','animate__flipInY')

        setTimeout(() => {
            tile.classList.add('animate__flipInY', `animate__delay-${index}s` )
        }, 0);
        
    });

 }   


//DANCE WHEN YOU WIN!
const animateTileDance = (row) => {
    
    row.querySelectorAll('.tile').forEach((tile, index) => {

        tile.classList.remove('animate__bounceIn','animate__flipInY','animate__bounce')

        setTimeout(() => {
            tile.classList.add('animate__bounce', `animate__delay-${index}s` )
        }, 0);
        
    });

 }  

 //GAME OVER
const youLose = () => {
    let board = document.querySelector('.board')
    board.classList.add('animate__animated', 'animate__hinge')
    
    let audio = new Audio('sound/losesound.wav');
		audio.play();
    

    setTimeout(() => {
        let wrapper = document.querySelector('.alert-wrapper')
        wrapper.classList.remove('hidden')
        answerReveal()
    }, 2000);

}

//CORRECT ANSWER WAS REVEAL
const answerReveal = () => {
    let alertSolution = document.querySelector('.alert-solution');
    
    alertSolution.classList.remove('animate__animated','animate__heartBeat');
    alertSolution.classList.add('animate__animatex','animate__heartBeat');
    alertSolution.innerHTML = solution.toUpperCase();
}
