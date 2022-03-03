// BOUNCE WHEN YOU ADD NEW LETTER
const animateTileBounce = (tile) => {
    tile.classList.add('is_filled', 'animate__animated','animate__bounceIn' )
}

// SHAKE WHOLE ROW WHEN YOU SUBMIT NON EXISTING WORD
const animateRowShake = (row) => {
    
    row.classList.remove('animate__shakeX')

    setTimeout(() => {
        row.classList.add('is_filled', 'animate__animated','animate__shakeX' )
    }, 0);

    

}