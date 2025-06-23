function prepareBaseKhachapuri() {
    // (in parantheses we write parameters)
    console.log("Prepare Dough");
    console.log("Prepare Cheese");
    console.log("Place cheese on a dough");
}


function makeAdjaruliKhachapuri() {
    prepareBaseKhachapuri();
    console.log("Make boat");
}

function makeMegruliKhachapuri() {
    prepareBaseKhachapuri();
    console.log("Make boat");
}


function makeKhachapuri(type = "Adjaruli") {
    if (type === "Adjaruli") {
        makeAdjaruliKhachapuri();
    } else if (type === "Megruli") {
        makeMegruliKhachapuri();
    } else {
        console.log("Please specify type");
    }
}


makeKhachapuri("Adjaruli");
makeKhachapuri("Megruli");
makeKhachapuri();

