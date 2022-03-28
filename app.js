let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let code = "";

let letterOne = Math.ceil(Math.random() * letters.length) - 1;
let letterTwo =  Math.ceil(Math.random() * letters.length) - 1;
let letterThree =  Math.ceil(Math.random() * letters.length) - 1;
let numberOne =  Math.ceil(Math.random() * numbers.length) - 1;
let numberTwo =  Math.ceil(Math.random() * numbers.length) - 1;
let numberThree =  Math.ceil(Math.random() * numbers.length) - 1;

code = "" + letters[letterOne] + numbers[numberOne] + letters[letterTwo] +
numbers[numberTwo] + letters[letterThree] + numbers[numberThree];

let codeToAdd = document.querySelector("#code");
codeToAdd.innerText = code;
