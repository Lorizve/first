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