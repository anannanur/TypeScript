// export{}
// *literal type

type status = "pending";
// const status: status = 123
const status: status = "pending"
console.log(status)

// *Basic Union

type Identity = string | number
const id : Identity = 'humu'
console.log(id)

// *Literal Union
type role = "user" | "admin" | "manager"
const userRole : role = "manager"
console.log(userRole)

// *Object Union

type Admin = {
    id : number,
    role : "admin",
    privileges: string[]
}
type Member = {
    id : number,
    role : "member",
    plans : string[]
}
type user = Admin | Member
const user : user ={
    id : 12,
    role : "member",
    plans : ["abc","def"]
}
