65 - 91; "A - Z"
97 - 122; "a - z"
48 - 57; "0 - 9"

const a = 97;
const b = 122;
console.log(Math.round(Math.random() * (b - a) + a));
console.log(String.fromCharCode(Math.round(Math.random() * (b - a) + a)));
let randomWord = "";
let i = 0;
// while (randomWord.length < 10) {
//     // code block
//     i++;
//     randomWord += String.fromCharCode(Math.round(Math.random() * (b - a) + a));
// }

console.log(i);
// do {
//     randomWord += String.fromCharCode(Math.round(Math.random() * (b - a) + a));
// } while (randomWord.length < 0)

for (let i = 0; i < 10; i++) {
    // console.log(i);
    randomWord += String.fromCharCode(Math.round(Math.random() * (b - a) + a));
}

console.log(randomWord, randomWord.length);