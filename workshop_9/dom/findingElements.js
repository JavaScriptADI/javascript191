function random(a, b) {
    return Math.floor((Math.random() * (b - a)) + a);
}

function getRandomColor() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

const spinach = document.querySelector(".spinach");
console.log(spinach);
const spans = document.querySelectorAll("div > span");
// console.log(spans);


// for (let i = 0; i < spans.length; i++){
//     console.log(spans[i]);
//     const span = spans[i];
//     span.style.width = "20px";
//     span.style.height = "20px";
// }

function updateSpan(span) {
    span.style.display = "block";
    span.style.width = "20px";
    span.style.height = "20px";
    span.style.backgroundColor = getRandomColor();
    const borderColor = getRandomColor();
    span.style.border = `1px solid ${borderColor}`;
    span.addEventListener("mouseenter", function(event){
        span.style.backgroundColor = getRandomColor();
    })
}

for (const span of spans) {
    updateSpan(span);
}

const monitorDiv = document.querySelector("div#monitor");

for (let i = 0; i < 1000; i++) {
    const span = document.createElement("span");
    updateSpan(span);
    monitorDiv.appendChild(span);
}