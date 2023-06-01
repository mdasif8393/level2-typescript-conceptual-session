//ternary

const isHeroAvailable = false;

const checkAvailability = isHeroAvailable ? "Book now" : "You can not book";

console.log(checkAvailability);

//nullish operator (??)
//check null and undefined

/**
 * null = No input
 * undefined = no input
 * Hello = Hello
 */

const inputSomething: unknown = undefined;
const checkInput = inputSomething ?? "No input";
console.log(checkInput);