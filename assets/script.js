/* Menu Show di mobile */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/* buat aktifin si burger*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /* Active link */
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /* Remove menu mobile */
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Ini kalo mau ada data di console.log //
// document.addEventListener('DOMContentLoaded', function () {
//     const contactFormElement = document.getElementById
//         ("contact__form");

//     contactFormElement.addEventListener('submit', function (event) {
//         event.preventDefault();

//         const contactForm = new FormData(contactFormElement);
//         const name = contactForm.get('name')
//         const email = contactForm.get('email');
//         const pesan = contactForm.get('pesan');

//         console.log('Name: ' + name);
//         console.log('Email :' + email);
//         console.log('Pesan :' + pesan);
//     });
// });
