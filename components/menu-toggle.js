const navbar_toggle = document.querySelector('.navbar__content-toggle');
const navbar = document.querySelector('.navbar__list');
const navbar_toggleIcon = document.querySelector('.navbar__content-toggle i')

navbar_toggle.addEventListener('click', () => {
    /* convirtiendo el DOMTokenList a un array JS para luego recorrerlo
    const class_list = Array.from(navbar.classList); 
            // buscando en el array si tiene la clase el cual NO está activo el navbar

    if(class_list.some((cls) => cls === 'navbar__list')*/
    if(navbar.classList.contains('navbar__list')) {
        // reemplazando directamente del DOMTokenList, la clase NO activa, a la clase activa
        navbar.classList.replace('navbar__list', 'navbar__list-active');
        
        // cambiando el icono a la X
        navbar_toggleIcon.setAttribute('class', 'fa fa-times');
    }
    else {
        navbar.classList.replace('navbar__list-active', 'navbar__list');
        navbar_toggleIcon.setAttribute('class', 'fa fa-bars');
    }
});