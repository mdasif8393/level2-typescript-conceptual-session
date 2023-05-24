// Normal function
function heroNormalFunc (a:number,b:number): string{
    const sum = a + b;
    return `Sum: ${sum}`;
};

// console.log(heroNormalFunc(2,3));

//arrow function
const heroArrow = (c: number,d: number) : number => {
    return c + d;
} 

console.log(heroArrow(3,3));