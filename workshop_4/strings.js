const firstName = "    John     ";
const lastName = 'Doe';
// const fullName = firstName + " " + lastName;
// template literals (strings)
const fullName = `${firstName} ${lastName}`;
const age = 30;
// console.log("Hello " + fullName);
console.log(`Hello ${fullName}, You are ${age} years old!`);
console.log(`fullName.length: ${fullName.length}`);


// escape characters
console.log("This is a quote from a book: \"The Great Gatsby\"");
console.log('This is a quote from a book: "The Great Gatsby"');

console.log("This is a quote from a book: 'The Great Gatsby'");
console.log('This is a quote from a book: \'The Great Gatsby\'');

console.log("This is a backslash: \\");
console.log("Hello\n\tThis is a new line");

// string methods
// console.log('"' + firstName.trim() + '"');
// console.log(`"${firstName.trim()}"`);
console.log(firstName.trimStart());
console.log(firstName.trimEnd());
