
const hello_about = document.querySelector('.hello_about');
const me_work = document.querySelector('.me_work');
const name_contact = document.querySelector('.name_contact');

document.addEventListener('DOMContentLoaded', () => {

    hello_about.addEventListener('mouseover', () => {
        hello_about.innerHTML = 'Hakkımda';
    });

    hello_about.addEventListener('mouseleave', () => {
        hello_about.innerHTML = 'Merhaba.';
    });

    me_work.addEventListener('mouseover', () => {
        me_work.innerHTML = 'Projeler';
    });

    me_work.addEventListener('mouseleave', () => {
        me_work.innerHTML = 'Ben';
    });

    name_contact.addEventListener('mouseover', () => {
        name_contact.innerHTML = 'İletişim';
    });

    name_contact.addEventListener('mouseleave', () => {
        name_contact.innerHTML = 'Osman'
    })
})