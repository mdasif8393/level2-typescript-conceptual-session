//spread operator
const heroArr1 : string[] = ["Khan", "Jalil", "Siam"];
const heroArr2 : string[] = ["Alom", "Faruk", "Rajjak"];

heroArr1.push(...heroArr2);
// console.log(...heroArr1);


//rest parameter
const heroScore = (...score: number[]): number =>{
      let sum = 0;
      score.map( n => sum += n);
      return sum;
} 

console.log(heroScore(1,2,3,4));