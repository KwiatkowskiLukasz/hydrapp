import '../scss/main.scss';

// uncomment the lines below to enable PWA
 import {registerSW} from './pwa.js';
 registerSW();

/* place your code below */

console.log('HELLO 🚀')

const glassCounter = document.querySelector(`.glass--counter__js`);
const buttonAdd = document.querySelector(`.button--add__js`)
const buttonRemove = document.querySelector(`.button--remove__js`);
const key = new Date().toLocaleString().slice(0, 10);

console.log(key);

let currentGlassCounter = 0;

buttonAdd.addEventListener(`click`, () =>{
   currentGlassCounter++;
   glassCounter.innerHTML = currentGlassCounter;
});
buttonRemove.addEventListener(`click`, () =>{
    if(currentGlassCounter > 0) {
        currentGlassCounter--;
    }
    glassCounter.innerHTML = currentGlassCounter;
});