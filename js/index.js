'use strict';

const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', () => {
  console.log("I got clicked");
  hamburger.classList.toggle('active'); // (Array.from(hamburger.children)).forEach(element => {
  //     element.classList.toggle("active");
  //     console.log(element.classList);
  // });
});