const toggleBlisDigital = document.querySelector('.toggle_blis');
const blisDigitalText = document.querySelector('.blis_digital');
    
const toggleBook = document.querySelector('.toggle_book');
const bookText = document.querySelector('.book_app');

const toggleDaggerHeart = document.querySelector('.toggle_dh');
const daggerheartText = document.querySelector('.daggerheart');

toggleBlisDigital.onclick = function() {
    if (bookText.classList.contains('open')) {
        bookText.classList.toggle('open');
    }
    if (daggerheartText.classList.contains('open')) {
        daggerheartText.classList.toggle('open');
    }
    blisDigitalText.classList.toggle('open');
}

toggleBook.onclick = function() {
    if (blisDigitalText.classList.contains('open')) {
        blisDigitalText.classList.toggle('open');
    }
    if (daggerheartText.classList.contains('open')) {
        daggerheartText.classList.toggle('open');
    }
    bookText.classList.toggle('open');
}

toggleDaggerHeart.onclick = function() {
    if (blisDigitalText.classList.contains('open')) {
        blisDigitalText.classList.toggle('open');
    }
    if (bookText.classList.contains('open')) {
        bookText.classList.toggle('open');
    }
    daggerheartText.classList.toggle('open');
}