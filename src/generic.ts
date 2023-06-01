type myArray<T> = Array<T>

const myNumbers: myArray<number> = [1,2,3,4,5,6];
const myString: myArray<string> = ['a', "xyz", "abc", "pqr"];
const myBoolean: myArray<boolean> = [true, false, false, true];

interface ourInfoType {
    name: string;
    age: number;
}

const ourInfo: myArray<ourInfoType> = [
    {name: "Fahim", age: 70},
    {name: "Mir", age: 60},
    {name: "Mezba", age: 50},
]

//tuple generic type
type MyGenericType<X,Y> = [X,Y];
const A:MyGenericType<string, number> = ["Sda", 43];

//Generic in Function
const printInfo = <P,Q>(param1:P, param2:Q): P  => {
    return param1;
}

console.log(printInfo<string, string>("ass", "ass"));

//Generic in interface

interface IMe<T, U>{
    name: string;
    age: T;
    mark: U;
}

const me:IMe<number, number> =  {
    name: "Firoz",
    age: 23,
    mark: 34
}

// keyof
type MovieType = {
    name: string;
    duration: number;
    category: string;
}

type test = "name" | "duration" | "category";
const myTest:test = "duration"

type myMovieType = keyof MovieType; // "name" | "Duration" | "category"