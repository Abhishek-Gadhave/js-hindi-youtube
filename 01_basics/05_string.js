    const name = "ABhishek"
    const age = 23;

    console.log(`my name is ${name} and i am ${age}years old`)//string inroplation

    const gameName = new String ("hiteshhc")
    console.log(gameName[gameName.length-1])
    console.log(gameName[1]);
    console.log(gameName.__proto__)
    console.log(gameName.toUpperCase())
    console.log(gameName.charAt(2))
    console.log(gameName.indexOf('t'))

    const newGameName = gameName.slice(1,4);
    const newGameName2 = gameName.substring(0,4);
    console.log(newGameName,newGameName2)

    const newName = " Neha "
    console.log(newName);
    console.log(newName.trim());

    const url = "https://abhishek.com/google/20%name"
    const firstUrl = url.replace("20%","_")
    const urlSecond = url.includes("abhishek")
    console.log(firstUrl,urlSecond)


    const neha = "My name is Neha and i am Tester";
    const neha1 = neha.split(" ");
    console.log(neha1);