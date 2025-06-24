const mySum = Symbol("key1")

const jsUser = {
    name: "Abhishek",
    age: 23,
    [mySum]:"key2",
    email:"abhishekgadhave549@gmail.com",
    education:"BE-IT",
    location:"Bopardi",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Friday"]

}
console.log(jsUser.email);
console.log(jsUser["email"])
console.log(typeof jsUser.mySum)

jsUser.greetings = function(){
    console.log("Hello ABhishek")
}
console.log(jsUser.greetings())

jsUser.greetings2=function(){
    console.log(`hello ${this.email}`)
}
console.log(jsUser.greetings2())
