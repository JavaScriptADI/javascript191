let number = 0
for (let i = 0; i < 15; i++) { // i = 15
    number++; // number = 15

    if (number % 3 == 0 && number % 5 == 0) {
        console.log("FizzBuzz")

    } else if (number % 3 == 0) {
        console.log("Fizz")
    }
    else if (number % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(number)
    }
}

console.log("#".repeat(20));
for (let i = 1; i < 15; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")

    } else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)
    }
}