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

const p2 = new Person1("Fahim", 23);
// console.log(p2); 

class Person2 extends Person1 {
    salary: number;
    position: string;

    constructor(name: string, age: number, salary: number, position: string){
        super(name, age)
        this.salary = salary;
        this.position = position;
    }

    show(){
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    }
}

const p3 = new Person2("Fahim", 23, 300000, "developer");
console.log(p3.show()); 

