let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');

}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
const sr = ScrollReveal ( {
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true

})

sr.reveal ('.text-inicio', {delay:300});
sr.reveal ('.inicio-img', {delay:400});
sr.reveal ('.sobre-img', {delay:300});
sr.reveal ('.sobre-text', {delay:300});