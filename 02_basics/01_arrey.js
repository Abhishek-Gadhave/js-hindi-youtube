const myArray = [1,3,5,6,7,"Abhishek",true]
//in arrey we can take any type of elements as an arrey


const myArray1 = [1,4,5,6,7,6]

//arrey indexing always starts with zero

//console.log(myArray1[0])

const myHeros = ["shaktiman","spiderman"];

const myArr2 = new Array(1,2,3,4,5,6);
//console.log(typeof myArr2)

//Array methods
myArr2.push(22)  // push method used to add the element at the end of the arrey
//console.log(myArr2)

myArr2.pop()//this method removes the last element of the array
//console.log(myArr2)

myArr2.unshift(9);//this method used to add element at the first position but this is not a good practice
//console.log(myArr2)

myArr2.shift()//removes the first element of the array

//console.log(myArr2.includes(9));//it find out the elements includes in the list of array or not.it always gives boolean response

//console.log(myArr2.indexOf(9))//

const newArray = myArr2.join()//this method converts the arrey into the coma seprated string
console.log(newArray);
console.log(myArr2);

//slice
console.log("A",myArr2);

console.log(myArr2.slice(0,3));

console.log("B",myArr2);

console.log("C",myArr2);
console.log(myArr2.splice(1,3))