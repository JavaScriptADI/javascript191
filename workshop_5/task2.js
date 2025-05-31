const setence = "This is a really good day Javascript";
console.log(setence);

// console.log(setence.split(" ").length);
const incudesJS = setence.toLowerCase().includes("javascript");
const wordCount = setence.split(" ").length;
console.log(`Total characters: ${setence.length}\nTotal words: ${wordCount}\nContains 'JavaScript': ${incudesJS}`);
