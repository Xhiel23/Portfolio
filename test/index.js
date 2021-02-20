'use strict'; // Cuando hago CLICK en .header__fas, .header__nav le toggle la class 'ver'
// // Javascript Nativo
// const icono = document.querySelector('.header__fas')
// const nav   = document.querySelector('.header__nav')
// icono.addEventListener('click',function(){
//     nav.classList.toggle('ver')
// })
// TypeScript

var icono = document.querySelector('.header__fas');
var nav = document.querySelector('.header__nav');
icono.addEventListener('click', function () {
  nav.classList.toggle('ver');
});