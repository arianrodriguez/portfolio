const buttons = document.querySelectorAll('.button');

const links = {
    cv: 'https://drive.google.com/file/d/1HznJPnFa53yveJleuDKj4TddCu6KHykt/view?usp=sharing',
    psw_demo: 'https://arianrodriguez.github.io/password-generator/',
    psw_gh: 'https://github.com/arianrodriguez/password-generator',
    encryp_demo: 'https://arianrodriguez.github.io/encrypting-text/',
    encryp_gh: 'https://github.com/arianrodriguez/encrypting-text',
    ss_demo: 'https://www.youtube.com/watch?v=gZjYU_DTVuQ',
    ss_gh: 'https://github.com/arianrodriguez/staysafe'
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(links[button.dataset.btn])
            window.open(links[button.dataset.btn], '_blank');
    }) 
});