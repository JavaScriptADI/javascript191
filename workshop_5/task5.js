const age = 11;

let ageGroup = "";
if (age < 13) {
    ageGroup = "Child";
} else if (age < 18) {
    ageGroup = "Teen";
} else if (age < 65) {
    ageGroup = "Adult";
} else {
    ageGroup = "Senior";
}

console.log(`Age Group: ${ageGroup}`);