class Person{
    constructor () {
        this.name="Me"
    }

    print(){
        console.log(this.name)
    }
}

class Person1 extends Person{
    constructor(){
        super()
        this.name="Person1"
    }

    printPer(){
        console.log(this.name)
    }
}

//creating object
new Person1().printPer()