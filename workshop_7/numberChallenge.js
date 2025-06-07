let number = 1123123123;
let n = String(number).split("");
console.log(n);
n[Math.floor(n.length / 2)] = "5";
// n.splice(Math.floor(n.length / 2), 1, "5");
console.log(n);
n = n.join("");
console.log(n, typeof n);
n = Number(n);
console.log(n, typeof n);

// 2nd way
n = String(number);
console.log(n.slice(0, Math.floor(n.length / 2)));
let mid = Math.floor(n.length / 2);
n = n.slice(0, mid) + "5" + n.slice(mid + 1, n.length);
console.log(n);



