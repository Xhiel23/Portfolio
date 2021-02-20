'use strict'
const hamburger = (document.querySelector('#hamburger') as HTMLElement);
const nav = (document.querySelector('.nav') as HTMLElement);
const menu = (document.querySelector('.menuList') as HTMLElement);
hamburger. addEventListener('click', () : void =>{
    console.log("I got clicked");
    hamburger.classList.toggle('active');
    nav.classList.toggle('visible');
    menu.classList.toggle('visible');
});
