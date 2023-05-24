//type assertion

const thinkSomething: unknown = 34.434343;
console.log((thinkSomething as number).toFixed(2));