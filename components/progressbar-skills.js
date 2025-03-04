const progressbars = document.querySelectorAll('.fill-progressbar');

const fill = {
    html: 80,
    css: 60,
    js: 80,
    py: 80,
    cpp: 80,
    git: 80
};

progressbars.forEach((pb) => {
    const porcentage = fill[pb.dataset.fillpb];
    let bg = 'var(--color-red)';

    if(porcentage > 40 && porcentage < 80) 
        bg = '#FDD36A';
    else if(porcentage >= 80 && porcentage <= 100)
        bg = '#609966';
    
    pb.style.cssText = `
    width: ${porcentage.toString()}%;
    background: ${bg}
    `;
});