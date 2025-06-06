let number = 0;
for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        number += i;
    }

};
console.log(number)


number = 0;
for (i = 0; i < 10 ** 100; i += 15) {
    number = number + i;
};
console.log(number)