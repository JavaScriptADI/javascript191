// 10.3574545 -> 10.36

let number = 10.3574545;
// number = number * 100;
number = Math.round(number * 100) / 100;
// number *= 100; // 1035.1

// number = Math.round(number); // 1036

// number /= 100; 10.36
console.log(number);
