
//DROPDOWN MENU SETTINGS
document.querySelector('.menu').onmouseover = function(event) {
    if(event.target.className == 'menu__item') {
        let submenu = event.target.querySelectorAll('.dropdown-item');
        closeMenu();
        submenu[0].style.display="block";
    }
}

function closeMenu() {
    let submenu = document.querySelectorAll('.dropdown-item');
    for (let i=0; i<submenu.length; i++) {
        submenu[i].style.display = 'none';
    }
}

document.onmousemove = function(event) {
    if (event.target.className != 'menu__item' && event.target.className != 'dropdown__row' && event.target.className != 'dropdown__link') {
        closeMenu();
    }
}

//BACT TO TOP BUTTON SETTINGS
const totop = document.querySelector(".toTop-button");
window.addEventListener("scroll", scrolling);

function scrolling() {
    if (window.pageYOffset > 300) {
        totop.style.display="flex";
    }
    else
    {
        totop.style.display="none";
    }
}

totop.addEventListener("click", upperScroll);

function upperScroll() {
    window.scrollTo(0,0);
}
