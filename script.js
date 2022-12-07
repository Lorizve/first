function otziv() {
    alert('Отзыв отправлен!');
}

let button = document.querySelector('.btn');
button.addEventListener('click', otziv);

function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
}

let button1 = document.querySelector('.btn');
button1.addEventListener('click', handle);

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
let condition = true;

function forwards() {
    anime({
        targets: '.menu-small',
        translateX: ['-100%', '0'],
        backgroundColor: ['white', 'black'],
        color: 'white',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });

    anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = false
}

function backwards() {
    anime({
        targets: '.menu-small',
        translateX: ['0', '-100%'],
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
    });
    condition = true;
}

$('.menu_small_icon').click(function () {
    if (condition) {
        forwards();
    } else {
        backwards();
    }
});

let start = 0;
let end = 0;


$('.container').on('touchstart', function(event) {
    start = event.originalEvent.touches[0].pageX;
})
$('.container').on('touchend', function(event) {
    end = event.originalEvent.touches[0].pageX;
    if (end - start >= 100 &&condition){
        forward();
    }
    else if (start - end >= 100 && !condition) {
        backwards();
    }
})


$(document).ready(function () {
    $('.slider').bxSlider(
    );
});








