'use strict';

const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('.header__nav');
hamburger.addEventListener('click', () => {
  console.log("I got clicked");
  hamburger.classList.toggle('active');
  nav.classList.toggle('visible');
  menu.classList.toggle('visible');
});