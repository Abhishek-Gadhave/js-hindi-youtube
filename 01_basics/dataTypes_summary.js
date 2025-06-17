//#primitive 
//7types :string,number,Boolean,null,undefined,bigInit,symbol

//Non-primitve (reference)
//Arrey, objects, functions

const number = 100;
const scoreNumber = 0.343;
const isLoggedIn = true;
const outSideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)
console.log(id === anotherId)


//*******Arreys objects and functions  */
const heros = ["Nana patekar", "chagan bhujbal","kavi kalash", "deva bhau"];
let myInfo = {
    name: 'Abhishek',
    age: 20,
    salary:60,
}

const myFunction = function Rada(){
    console.log("hello world")
}

console.log(typeof myFunction)