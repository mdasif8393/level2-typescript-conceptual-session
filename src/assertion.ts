//type assertion

const thinkSomething: unknown = 34.434343;
console.log((thinkSomething as number).toFixed(2));

const a : unknown = 43.21;
console.log((a as number).toFixed(32));