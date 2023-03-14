'use strict';


var leftBordertWidth = 1; //avec var l'elt doit etre declarer au prealable,sinon on aura comme reponse indefined dans la console. console.log viendra apres la declaration.

let second = 2; // de meme pour let doit etre cree au prealable,et console.log apres la declaration.

const pi = 3.14;

// console.log(second);

//types de donnees
var number = 2;
var string = 'Hello';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

// console.log(4/0);

// console.log(something);

let persone = {
    name : "Lunel",
    age : 33,
    isMaried: false

};

// console.log(persone.name);
// console.log(persone["age"]);

let arr = ['plum.png', 'orange.jpg', 'apple.gif' ];
console.log(arr[0]);

//Methodes
// alert("Hello World!");
// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = prompt("Are you 18?", "Yes");
// console.log(answer);

// console.log("arr" + "- object");

let incr = 10,
    decr = 10;

// incr ++;
// decr --;
console.log(incr++);
console.log(decr--);
console.log(5%2);
console.log("2" === 2);

let isChecked = true,
    isClosed = true;

console.log(isChecked && isClosed );



