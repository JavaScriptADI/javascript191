function random(a = 0, b = 256) {
    return Math.floor((Math.random() * (b - a)) + a);
}

function getRandomColor() {
    const color = random();
    return `rgb(${color}, ${color}, ${color})`;
}

function updateSpan(span) {
    span.style.display = "block";
    span.style.width = "20px";
    span.style.height = "20px";
    span.style.background = getRandomColor();
    const borderColor = getRandomColor();
    span.style.border = `1px solid ${borderColor}`;
    span.addEventListener("mouseenter", function(event){
        span.style.backgroundColor = getRandomColor();
    })
}
const monitorDiv = document.querySelector("div#monitor");

for (let i = 0; i < 1000; i++) {
    const span = document.createElement("span");
    updateSpan(span);
    monitorDiv.appendChild(span);
}


const spans = document.querySelectorAll("span");
let whitestSpan = spans[0];
let darkestSpan = spans[0];


for (const span of spans) {
    console.log(span.style.backgroundColor);
    let whitestSpanGreen = whitestSpan.style.backgroundColor.split(",")[1];
    let darkestSpanGreen = darkestSpan.style.backgroundColor.split(",")[1];
    let spanGreen = span.style.backgroundColor.split(",")[1];
    spanGreen = Number(spanGreen);
    whitestSpanGreen = Number(whitestSpanGreen);
    if (whitestSpanGreen < spanGreen) {
        whitestSpan = span;
    }
    if (darkestSpan > spanGreen) {
        darkestSpan = span;
    }
    console.log(whitestSpanGreen);
    // const whitestValue = 
    // if (whitestSpan)
}

console.log(whitestSpan);
whitestSpan.style.backgroundColor = "red";
darkestSpan.style.backgroundColor = "blue";
