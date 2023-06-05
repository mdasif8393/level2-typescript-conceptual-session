//of guard
type typeOfData = number | string;
const doSomething = (a: typeOfData) : typeOfData => {
    if(typeof a === "number"){
        return a;
    }
    else{
        return a;
    }
}

console.log(doSomething(23));
console.log(doSomething("Hello"));

//in guard
type X = {
    name: string;
    phone: number;
}

type Y = {
    name: string;
    address: string;
    salary: number;
}

const getInfo = (info: X | Y) => {
    if("phone" in info){
        return info.phone;
    }
    else if("salary" in info){
        return info.salary;
    }
}

//instance of guard
class P{
    position: string;
    salary: number;

    constructor(position: string, salary: number){
        this.position = position;
        this.salary = salary;
    }
    showDetails(){
        console.log(`Position: ${this.position}`);
    }
}

class Q extends P {
    constructor(position: string, salary: number){
        super(position, salary);
    }
    showSalary(){
        console.log(`Salary: ${this.salary}`);
    }
}

class R extends P {
    constructor(position: string, salary: number){
        super(position, salary);
    }
    showSalaryWithPosition(){
        console.log(`Position: ${this.position}`);
    }
}

function findInstance(person: P){
    if(person instanceof Q){
        person.showSalary(); //don't suggest showSalaryWithPosition();
    }
    else if(person instanceof R){
        person.showSalaryWithPosition();
    }
}

const p4 = new Q("Developer", 23);
const p5 = new R("Engineer", 33); 
