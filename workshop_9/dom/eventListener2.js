// const button = document.getElementById("test");
const button = document.querySelector("#test");


// addEventListener is called higher-order function
button.addEventListener("click", function (event) {
    // anonymous function
    event.target.classList.add("green");
    console.log(event)
});


console.log(button);