function getRandom(a, b) {
    // console.log(Math.floor((Math.random() * (b - a)) + a));
    console.log("Starting machine");
    console.log("Booting system");
    console.log("Generating random number...");

    return Math.floor((Math.random() * (b - a)) + a);
}

console.log(getRandom(0, 10) + getRandom(-10, 0));
// console.log(console.log("hi"));
// console.log(undefined + undefined);

