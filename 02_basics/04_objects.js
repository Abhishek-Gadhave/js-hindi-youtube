//const tinderObject = new Object();//singleton object
const tinderObject ={} // non singleton object

tinderObject.email ="abhishekgadhave@gmail.com";
tinderObject.name = "abhishek g"
console.log(tinderObject);

// const userInfo = {
//     email: "abhishekgadhave@incredmoney.com",
//     fullName: {
//         name: "abhishek",
//         sirName: "Gadhave"
//     }
// }
// console.log(userInfo.fullName.name)

const obj_1 = {1:"a",2:"b"}
const obj_2 ={3:"c",4:"d"}
console.log({...obj_1,...obj_2})

const UserData = [
    {
        name:"abhishek",
        sirName:"Gadhave"
    },
    {
        name:"abhishek",
        sirName:"Gadhave2322"
    },
    {
        name:"abhishek",
        sirName:"Gadhave"
    }
]
console.log(UserData[1].sirName)
console.log(Object.keys(tinderObject))
console.log(Object.values(tinderObject))
console.log(Object.entries(tinderObject))
console.log(tinderObject.hasOwnProperty("isLoggedIn"))


const course = {
    name: "js in hindi",
    price: 0,
    courseInstructor: "Ramesh Jha"
}

console.log(course.courseInstructor)

const {courseInstructor:instructor} = course;
console.log(instructor)