const inputs = document.querySelectorAll('input');
const submit = document.getElementById('submit').parentElement;

/*
    verificar:
        - pattern de email
*/

const messages_error = {
    name: {
        valueMissing: '¡El campo nombre no puede estar vacío!'
    },
    email: {
        valueMissing: '¡El campo email no puede estar vacío!',
        patternMismatch: 'El email no es válido'
    },
    subject: {
        valueMissing: '¡El campo asunto no puede estar vacío!'
    }
};

function input_error(error, input) {
    /*
    const div_error = `<div class="input__error">
    <i class="fa-solid fa-circle-info"></i>                                
    <span>Este campo debe estar completo</span>
</div>`;
*/
    const div = document.createElement('div');
    div.classList.add('input__error');

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-circle-info');

    const span = document.createElement('span');
    span.textContent = error;

    div.appendChild(icon);
    div.appendChild(span);

    // reconociendo el padre del input en el que se encuentra (input__container)
    const input_container = input.parentElement;

    if(!input_container.lastElementChild.classList.contains('form__label')) // evitar que se agregue un nuevo div-error debajo de los otros
        input_container.replaceChild(div, input_container.lastElementChild);    
    else
        input_container.appendChild(div);

}

inputs.forEach((input) => {
    input.addEventListener('blur', () => {
        const validity = input.validity;
        for(let i in validity) {
            if(i!='valid') {
                if(validity[i]) 
                    input_error(messages_error[input.dataset.type][i], input);
            } else if(validity[i]) { //sí es válido
                console.log(validity);
                const div_error = input.parentElement.lastChild;
                input.parentElement.removeChild(div_error);
            }
        }
    });
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
})