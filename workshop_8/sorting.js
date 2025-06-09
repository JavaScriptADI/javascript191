
const numbers = [10, -10, 11, 12, 5, 6, 7, -25];
let operations = 0;

// numbers.sort();
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        // console.log(numbers[i], numbers[j]);
        operations++;
    }
}
console.log(numbers);
console.log(numbers.length, operations);

