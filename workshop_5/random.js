// const n = Math.round(Math.random() * 9) + 1;
// console.log(n);

// const n = Math.round(Math.random() * 40) + 50;


const a = 1;
const b = 10;

const n = Math.round(Math.random() * (b - a)) + a;
const minimum = Math.round(0 * (b - a)) + a;
const maximum = Math.round(0.99999999 * (b - a)) + a;
console.log(`Random: ${n}`);
console.log(`${minimum} - ${maximum}`);


