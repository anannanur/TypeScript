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