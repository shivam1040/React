const numbers = [1, 2, 3]

const number = [...numbers, 4] //spread operator, this can also be used for objects

const obj = {
    naa:"Max"
}

const newP = {
    ...obj,
    age:2
}

const rest = (...args) => {
    return args.filter(e => e=== 1); //here thre equals means check for data and type
}

console.log(rest(1, 2, 3))