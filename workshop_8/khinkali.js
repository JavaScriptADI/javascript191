function makeKhinkali(isKalakuri) {
    console.log("Prepare dough");
    console.log("Prepare meat");
    console.log("Season meat");
    if (isKalakuri) {
        console.log("Add herbs");
    }
    console.log("place meat on dough");
    console.log("Wrap dough");
}

function makeBatchOfKhinali(count, isKalakuri) {
    for (let i = 0; i < count; i++) {
        makeKhinkali(isKalakuri);
        console.log("-".repeat(10));
    }
}

// function call
makeKhinkali(false);
console.log("-".repeat(10));

for (let i = 0; i < 10; i++) {
    makeKhinkali(true);
    console.log("-".repeat(10));
}

makeBatchOfKhinali(10, true);
makeBatchOfKhinali(5, false);
makeBatchOfKhinali(5, true);