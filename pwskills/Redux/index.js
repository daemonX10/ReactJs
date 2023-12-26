// Compose 
import { compose } from 'redux';


function removeSpaces(str){
    // remove spaces from string
    return str.split(' ').join('');
}

function repeatString(str){
    // repeat string
    return str+str;
}

function toUpperCase(str){
    // convert to upper case
    return str.toUpperCase();
}

let str = "Hello World";
let newStr = toUpperCase(repeatString(removeSpaces(str)));
console.log(newStr); // HELLOHELLOWORLDWORLD

const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);