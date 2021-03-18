"use strict";

document.body.style.backgroundColor='#696969';
const Page = document.querySelector('.page');
Page.style.backgroundColor='ghostwhite';
document.querySelector('.name').textContent='DJ Rashad';
document.querySelector('img').setAttribute('src', 'https://thesource.com/wp-content/uploads/2014/04/dj-rashad.jpg');
const Bio = document.querySelector('.short-bio');
Bio.className += " animated";