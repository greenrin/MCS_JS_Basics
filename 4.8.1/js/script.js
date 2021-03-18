"use strict";



console.log(watchesSum+earringsSum<=totalCash);

function haveEnough(){
	let totalCash = prompt('how much money?');
	let watchesCount = prompt('how much watches?');
	let earringsCount = prompt('how much earrings?');
	let watchesSum = prompt('how much is watches cost?')*watchesCount;
	let earringsSum = prompt('how much is earrings cost?')*earringsCount;

	((watchesSum+earringsSum)<=totalCash)? alert('enough$$$') : alert('not enough$$$')
}
