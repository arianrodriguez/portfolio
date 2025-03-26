function clear_form(form) {
    const inputs = form.querySelectorAll('input');
    const textarea = form.querySelector('textarea');
    inputs.forEach((input) => input.value = '');
    textarea.value = '';

    const submit = form.querySelector('[data-btn="submit"]');
    submit.textContent = '¡Enviado!';
    submit.cssText = 'background: var(--background-dark-green)';
    
}

export const send_form = async (form) => {
    const spinner = document.getElementById("spinner");
    const success = document.getElementById("form-success");

    spinner.classList.remove("hidden");
    
    await fetch("http://localhost:3000/email", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            subject: form.asunto.value,
            name: form.nombre.value,
            from: form.email.value,
            message: form.mensaje.value
        })
    }).then(res => {
        if(res.status === 201 || res.status === 200) {
            success.classList.remove("hidden");
            clear_form(form);
        }else {
            alert("Ocurrió un error al enviar el mensaje. Intenta de nuevo más tarde.");
        }
    }).catch(err => {
        alert("Ocurrió un error al enviar el mensaje. Intenta de nuevo más tarde.");
    }).finally(() => {
        spinner.classList.add("hidden");
    });
    
}
