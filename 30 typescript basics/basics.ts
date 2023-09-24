//way to specify type in
let age: number
let namex: string
let isBool: boolean
let hob: string[] = ["", ""]
//type alias, DEfining a type so that we don't need to repeat writing this if used for multiple vars
type PersonX = {
    name: string,
    age: number
}

//specifiying type for object type var
let per: PersonX
//array of such objects
let pers: PersonX[]
//union of types, so this can either be string or number
let un:string|number

//type inference for function return type too, can be union, alias or anything
function add(a: number, b: number) {
    return a+b
}
//void for no return type
function printO(a: any){
    console.log(a)
}

//generics in TS
function insertBegin<T>(array: T[], value: T){
    const newArr = [value, ...array]
    return newArr
}
