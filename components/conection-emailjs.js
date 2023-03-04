function clear_form(form) {
    const inputs = form.querySelectorAll('input');
    const textarea = form.querySelector('textarea');
    inputs.forEach((input) => input.value = '');
    textarea.value = '';

    const submit = form.querySelector('[data-btn="submit"]');
    submit.textContent = '¡Enviado!';
    submit.cssText = 'background: var(--background-dark-green)';
    
}

export const send_form = (form) => {
    emailjs.init('UYRRWlNj9p-QmgqSl');
    const serviceID = 'service_7yqqida';
    const templateID = 'template_z50vf75';

    emailjs.send(serviceID, templateID, {
        emailjs_asunto: form.asunto.value,
        emailjs_nombre: form.nombre.value,
        emailjs_email: form.email.value,
        emailjs_mensaje: form.mensaje.value
    });

    clear_form(form);
}
