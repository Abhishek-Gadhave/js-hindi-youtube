const marvel_heros = ["thor","ironman","spiderman"];
const dc_heros =["superman","flash","batman"]

marvel_heros.push(dc_heros);
console.log(marvel_heros)

const newArray = marvel_heros.concat(dc_heros)
console.log(newArray);

const newArray3 = [...marvel_heros,...dc_heros]
console.log(newArray3);


// //to check this is the arrey or not we use this method
// console.log(Array.isArray("Abhishek")); //to check this is the arrey or not
// console.log(Array.from("Abhishek"));

// console.log(Array.from({name:"Abhishek"}))

// const score1 = 100;
// const score2 = 28;
// const score3 = 54;
// console.log(Array.of(score1,score2,score3));


console.log(Array.isArray("Abhishek"))
console.log(Array.from("Abhishek"));

const num1 =33;
const num3 =45;
const num4 =67;
console.log(Array.of(num1,num3,num4));