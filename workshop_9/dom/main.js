// const button = document.getElementById("test");
const button = document.querySelector("#test");

function clickEvent(event) {

    // event.target.style.background = "red";
    // event.target.className = "test";
    event.target.classList.add("green");
    
    console.log(event)
}

// addEventListener is called higher-order function
button.addEventListener("click", clickEvent); // clickEvent is called callback function


console.log(button);