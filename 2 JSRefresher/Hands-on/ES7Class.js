class Person{

    //in es7 no need to create constructor
        name="Me"

        //method can be arrow functions
    print = () =>{
        console.log(this.name)
    }
}

class Person1 extends Person{
        name="Person1"

    printPer = () =>{
        console.log(this.name)
    }
}

//creating object
new Person1().printPer()