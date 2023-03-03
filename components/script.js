const sections = document.querySelectorAll('section');

/* inicializar las animaciones */
AOS.init();

/* navbar pegajoso */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 0)
        nav.style.cssText = 'opacity: .95';
    else
        nav.style.cssText = 'opacity: initial';
});

/* section activos, según se vaya scrolleando */
window.addEventListener('scroll', () => {
    const height_total = window.pageYOffset;
    sections.forEach((section) => {
        const section_height = section.offsetHeight; //altura de la section
        const section_top = section.offsetTop - 170;
        const section_id = section.getAttribute('id');

        if (height_total > section_top && height_total < section_top + section_height) {
            document.querySelector('.navbar__list-item a[href*=' + section_id + ']').classList.add('item-active');
        }
        else {
            document.querySelector('.navbar__list-item a[href*=' + section_id + ']').classList.remove('item-active');
        }
    });
});