//create a class
class Person{
    name: string;
    age: number;

    constructor(name1: string, age1: number){
        this.name = name1;
        this.age = age1;
    }
}

const p1 = new Person("Asif", 21);
console.log(p1);

//Inheritance
class Person1 {
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    show(){
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    }
}