let userNumber = 88;
let score = parseInt(userNumber);
if (score >= 90 && score <= 100) {
    console.log("You got an A!");
} else if (score >= 80) {
    console.log("You got a B!");
} else if (score >= 70) {
    console.log("You got a C!")
} else if (score >= 60) {
    console.log("You got a D!")
} else if (score < 60) {
    console.log("You got an F!")
} else {
    console.log("Wrong score.")
}
