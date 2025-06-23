function doSomething(a) {
    // higher order function is a function that receives or returns a function
    a();
}

function greet() {
    console.log("Gamarjoba")
}

doSomething(greet);

function filter(arr, conditional) {
    const filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (conditional(arr[i])) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 222, -129, 55, -99];
const names = ["Nika", "Morgan", "Goerge", "Micky", "Michael"];

// const numsFiltered = nums.filter(function(num) {
//     if (num > 3) {
//         return num;
//     }
// });

// const numsFiltered = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 3) {
//         numsFiltered.push(nums[i]);
//     }
// }

// const numsFiltered2 = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 2) {
//         numsFiltered2.push(nums[i]);
//     }
// }
// const numsFiltered3 = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > 2) {
//         numsFiltered3.push(nums[i]);
//     }
// }

console.log(
    filter(
        nums,
        function (num) {
            return num > 3;
        }
    )
);

console.log(filter(nums, function(num) {
    return num < 3;
}));

console.log(
    filter(
        names,
        function(name) {
            return name.toLowerCase().startsWith("m");
        }
    )
);


// console.log(numsFiltered);
// console.log(numsFiltered2)


/*
function filter(arr, conditional) {
    const filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (conditional(arr[i])) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}


*/




// 1, 2, 3, 4
map(
    arr,
    function(num) {
        return num + 2;
    }
)
// 3, 4, 5, 6