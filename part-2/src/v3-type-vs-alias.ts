//*type alias vs interface

//? Interface is generally connected to objects
//? type alias is more connected to literals,unions,tuples, primitivs

//TODO : type alias
type ID = number

//! interface id = number

type Role = "admin" | "member"

//!interface role = "admin" | "member"

interface User {
    name : string
    id : ID
    role : Role

}

const user : User = {
    id : 12,
    name : "abc",
    role : "admin"
}

//TODO : interface

interface Animal {
    species : string
}

interface Cat extends Animal{
    breed: string
}
const cat : Cat = {
    species : "Felix Cattus",
    breed : "persian"

}

type vehicle = {
    brand : string
}

type Car = vehicle &{
    model : string
}

const car : Car ={
    model : "corolla",
    brand: "Toyota"
}

interface IEmployee {
    id : number
}

interface IEmployee {
    name : string
}
///!This is not valid
// type TEmployee = {
//     name : string
// }
// type TEmployee={}
const employee : IEmployee ={
    id: 12,
    name : "Humu"
}