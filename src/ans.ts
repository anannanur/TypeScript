const addTwo = (a:number,b:number) => {
    return a+b
}
console.log(addTwo(50,20))

const arr : number[] = [232,345,234]
const starr : string[] = ["Humayra","Nur"]
// const arr2 : number[] = ["Humayra", "Pookie", "Pori"]

console.log(arr)
arr.push(232)
console.log(arr)

const tu : readonly [number,number] = [231,241]
console.log(tu)
// tu.push(345)
console.log(tu)

const dhakalatlong : readonly [number,number] = [23.8041, 90.4152]
console.log(dhakalatlong)

const concatName = (firstName: string, lastName?: string)=>{
    if(!lastName){
        return lastName;
    }
    return firstName + " " + lastName
}
console.log(concatName("Humayra","Nur"))

const greetings =(greeting:string,fullName:string)=>{
    console.log(greeting+", "+ fullName)
}
greetings("Good Night","Pookie")

const greetings1 =(fullName:string, greeting="Hello")=>{
    console.log(greeting+", "+ fullName)
}
greetings1("Pookie")
//rest parameter
const sum = (...numbers : number[])=>{
    return numbers.reduce((total,sum)=> total+sum,0)
}

sum(1,2,3,4,5,6)

const logUserAction = (...args : [name: string, age : number, isActive: boolean])=>{
    const [name,age, isActive] = args
    console.log(name + " is "+age)
}
logUserAction("Humayra",19, false)


// obj type , type alias 
const user : {
    name : string
    age : number
    isActive : boolean
    action : () => void
    badges : string[]
}={
    name : "Humayra",
    age : 19,
    isActive: true,
    action : () => console.log("Hi"),
    badges: ["abc", "def"]
}
console.log(user)