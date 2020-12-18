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


let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
    currentGlassCounter = localStorageValue;
} else {
    localStorage.setItem(key, 0);
}



buttonAdd.addEventListener(`click`, () =>{
   currentGlassCounter = currentGlassCounter +1;
   glassCounter.innerHTML = currentGlassCounter;
   localStorage.setItem(key, currentGlassCounter);
});
buttonRemove.addEventListener(`click`, () =>{
    if(currentGlassCounter > 0) {
        currentGlassCounter--;
    }
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
})