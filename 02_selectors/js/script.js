"use strict";

const byTag = document.getElementsByTagName('div');
const byClass = document.getElementsByClassName('myClass');
const byId = document.getElementById('myId');

console.log(byTag, byClass, byId);

const allBySelectors = document.querySelectorAll('.coolClass.mine');
const firstBySelector = document.querySelector('div');
console.log(firstBySelector, allBySelectors);


const quest = prompt('Что напишем на странице?');
byId.innerHTML = quest;