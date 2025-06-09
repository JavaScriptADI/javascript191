// global scope
let user = "Nick";


// function definition
function greet(user) {
    // user is called parameter
    // function body | code block
    // local scope 
    console.log(`გამარჯობა ${user}`);
}




for (let i = 0; i < 100; i++) {
    greet(user); // function call
    // user is an argument
}



greet("Greta"); // function call
// "Greta" is argument

greet();