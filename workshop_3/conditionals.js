// let age = 25;
// age = parseInt(prompt("Enter your age"));

// if (age < 13) { // Code block
//     console.log("Ask for parent");
//     console.log("Here is your candy!");
// } else {
//     const firstName = prompt("What's your name?");
//     console.log("Welcome " + firstName);
// }


let isWindy = false;
let isRainy = true;

// logical operators

// and
if (isWindy && isRainy) {
    console.log("THERE IS NO ESCAPE");
} else if (isWindy && !isRainy) {
    console.log("Let's go to movies");
} else if (!isWindy && !isRainy) {
    console.log("Let's go outside");
}