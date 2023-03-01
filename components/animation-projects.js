const images = document.querySelectorAll('.cards__item-img img');
const cards = document.querySelectorAll('.cards__item-img');

const sources = {
    psw_generator: {
        gif: '/assets/files/generador_passw.gif',
        img: '/assets/img/generador_passw.PNG'
    },
    encrypting: {
        gif: '/assets/files/encriptador_texto.gif',
        img: '/assets/img/encriptador_texto.PNG'
    },
    staysafe: {
        gif: '/assets/files/staysafe.gif',
        img: '/assets/img/staysafe.PNG'
    }

};

cards.forEach((card)=> {
    card.addEventListener('mouseover', (e) => {
        e.target.src = sources[e.target.dataset.gif]['gif'];
    });
    card.addEventListener('mouseout', (e) => {
        e.target.src = sources[e.target.dataset.gif]['img'];
    });
})