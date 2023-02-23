const first_button = document.querySelector('.box-buttons').firstElementChild;
const second_button = document.querySelector('.box-buttons').lastElementChild;
const buttons = [first_button, second_button];

buttons.forEach((button) => {
    button.addEventListener('mouseover', () => {
        first_button.classList.add('button-light');
        second_button.classList.remove('button-light');
    });
    button.addEventListener('mouseout', () => {
        first_button.classList.remove('button-light');
        second_button.classList.add('button-light');
    })
})
