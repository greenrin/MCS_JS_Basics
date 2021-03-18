"use strict";

const Colored = document.querySelector('.colored');

console.log(Colored.style);
Colored.style.backgroundColor = 'blue';

let quest = prompt('what color?');
Colored.style.backgroundColor = quest;