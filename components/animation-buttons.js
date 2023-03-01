const box_buttons = document.querySelectorAll('.box-buttons');
box_buttons.forEach((box) => {
    const first_button = box.firstElementChild;
    const second_button = box.lastElementChild;
    const buttons = [first_button, second_button];
    
    buttons.forEach((button) => {
        button.addEventListener('mouseover', () => {
            first_button.classList.add('button-light');
            second_button.classList.remove('button-light');
        });
        button.addEventListener('mouseout', () => {
            first_button.classList.remove('button-light');
            second_button.classList.add('button-light');
        });
    });
})

