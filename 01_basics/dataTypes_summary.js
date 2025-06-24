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

/********************Memory */

//stack(primitive) ,Heap(non-primitive)

let name = "abhishek"
name3 = name;
name3 = "prajakta"
console.log(name)
console.log(name3);

const userName = {
    email: "@google.com",
    name:"sham"
}

let userTwo= userName;

userTwo.name = "Abhi";
console.log(userTwo);

//all primitive value goes inside the stack where all non primitive value goes inside the heap
// stack will give the copy of the value while in heap it will take the reference of the previouse value