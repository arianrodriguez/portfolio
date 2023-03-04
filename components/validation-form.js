import { send_form } from "./conection-emailjs.js";

const inputs = document.querySelectorAll('input');
const submit = document.querySelector('[data-btn="submit"]');

const messages_error = {
    name: {
        valueMissing: '¡El campo nombre no puede estar vacío!'
    },
    email: {
        valueMissing: '¡El campo email no puede estar vacío!',
        patternMismatch: 'Porfavor, ingresa un email válido'
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
    div.classList.add('input__error', 'flex-center');
    const div_content = document.createElement('div');
    div.appendChild(div_content);

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-circle-info');

    const span = document.createElement('span');
    span.textContent = error;

    div_content.appendChild(icon);
    div_content.appendChild(span);

    // reconociendo el padre del input en el que se encuentra (input__container)
    const input_container = input.parentElement;

    if(!input_container.lastElementChild.classList.contains('form__label')) // evitar que se agregue un nuevo div-error debajo de los otros
        input_container.replaceChild(div, input_container.lastElementChild);    
    else
        input_container.appendChild(div);

    // borde rojo en el input
    input_container.firstElementChild.style.cssText = 'border-bottom: 2px solid var(--color-red)';

}

function manage_validity(input) {
    const validity = input.validity;
    for(let i in validity) {
        if(i!='valid') {
            if(validity[i]) 
                input_error(messages_error[input.dataset.type][i], input);
        } else if(validity[i]) { //sí es válido
            if (input.parentElement.lastElementChild.tagName !== 'LABEL') { // evitando que se elimine el label
                const div_error = input.parentElement.lastChild;
                input.parentElement.removeChild(div_error);
            }  
            // regresar al color original
            input.parentElement.firstElementChild.style.cssText = 'border-bottom: 2px solid var(--background-light-green)';
        }
    }
}

inputs.forEach((input) => {
    input.addEventListener('blur', () => {
        manage_validity(input);
    });
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let valids = 0;
    inputs.forEach((input) => {
        if(input.validity['valid']) valids++;
    });

    if(valids !== 3) {
        inputs.forEach((input) => manage_validity(input));
    }else {
        const form = document.querySelector('[data-form]');            
        send_form(form);
        
    }  
});