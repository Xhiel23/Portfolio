'use strict'
const hamburger = (document.querySelector('#hamburger') as HTMLElement);
hamburger. addEventListener('click', () : void =>{
    console.log("I got clicked");
    hamburger.classList.toggle('active');
    // (Array.from(hamburger.children)).forEach(element => {
    //     element.classList.toggle("active");
    //     console.log(element.classList);
    // });
});
