function getRandom(a, b) {
    // console.log(Math.floor((Math.random() * (b - a)) + a));
    console.log("Starting machine");
    console.log("Booting system");
    console.log("Generating random number...");

    return Math.floor((Math.random() * (b - a)) + a);
}

console.log(firstName);

const num = getRandom(0, 10);
console.log(num + num);
console.log(getRandom(0, 10) + getRandom(0, 10));
// console.log(console.log("hi"));
// console.log(undefined + undefined);


