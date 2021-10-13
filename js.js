function redirect(href) {
    window.open(href, '_blank');
}

function flip() {
    $('.flip-card-inner').addClass('flipped')
}

function unflip() {
    $('.flip-card-inner').removeClass('flipped')
}