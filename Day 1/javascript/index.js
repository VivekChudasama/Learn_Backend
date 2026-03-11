const { group } = require("node:console")

let name = "VIVEK"
let age = 22
let hasHobbies = true

function sumarizeUser(uName , uAge , uHasHobbies){
    return (
        `
        Name of the user : ${uName}
        Age of the user : ${uAge}
        hobbies of the user is : ${uHasHobbies}
        `
    )
}

const add = (a,b) => a+b

console.log(add(1,5))
console.log(sumarizeUser(name , age , hasHobbies))


const person = {
    name :"v" ,
    age : 22 , 
    greet() {
        console.log("hi i am " + name)
    }
}

person.greet()

const printName = ({name})=>{
    console.log(name)
}
printName(person)


const hobbie = ['gaming' , "sifi" , "cycling"];

const [a , b] = hobbie
console.log(a)

for (let hobbies of hobbie ){
    console.log(hobbies)
}

hobbie.push("Sports")

console.log(hobbie.map(hobbie => "hobbie:" + hobbie))


const newHobbies = [...hobbie , "programming"]
console.log(newHobbies)

const toArray =(...args) =>{
    return args
}

console.log(toArray(1,2,3,4,5))