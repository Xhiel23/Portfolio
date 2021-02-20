'use strict';

const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menuList');
hamburger.addEventListener('click', () => {
  console.log("I got clicked");
  hamburger.classList.toggle('active');
  nav.classList.toggle('visible');
  menu.classList.toggle('visible');
});