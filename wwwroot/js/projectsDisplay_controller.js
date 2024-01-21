const toggleBlisDigital = document.querySelector('.toggle_blis');
const blisDigitalText = document.querySelector('.blis_digital');
    
const toggleDice = document.querySelector('.toggle_dice');
const diceText = document.querySelector('.dice_roller');

toggleBlisDigital.onclick = function() {
    if (diceText.classList.contains('open')) {
        diceText.classList.toggle('open');
    }
    blisDigitalText.classList.toggle('open');
}

toggleDice.onclick = function() {
    if (blisDigitalText.classList.contains('open')) {
        blisDigitalText.classList.toggle('open');
    }
    diceText.classList.toggle('open');
}