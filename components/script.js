window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 0)
        nav.style.cssText = 'opacity: .95';
    else
        nav.style.cssText = 'opacity: initial';
});