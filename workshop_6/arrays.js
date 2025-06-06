const temps = [25, 23, 25, 27, 28, 30, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 17, 29, 30];

console.log(temps);
console.log(`We recorded total of ${temps.length} temperatures`);
// console.log(`On the Day ${temps.length} of the recording it was: ${temps[0]}`);
// console.log(`On the Day ${temps.length - 1} of the recording it was: ${temps[1]}`);

for (let i = 0; i < temps.length; i++) {
    console.log(`${temps.length - i} Days ago: ${temps[i]}`);
}

temps[0]++;
// temps[0] = 26;

for (let i = 0; i < temps.length; i++) {
    console.log(`${temps.length - i} Days ago: ${temps[i]}`);
}

temps.push(27);
console.log(`I've been recording for past ${temps.length} days`);
console.log(`Today was ${temps[temps.length - 1]}`);
const removedItem = temps.pop();
console.log(`We have deleted incrorrect recording ${removedItem}`);
console.log(`I've been recording for past ${temps.length} days`);
console.log(`Today was ${temps[temps.length - 1]}`);

temps.unshift(18);
console.log(`I've been recording for past ${temps.length} days`);
console.log(`Newly added temp: ${temps[0]}`);

temps.shift();
console.log(`I've been recording for past ${temps.length} days`);
console.log(`Newly added temp: ${temps[0]}`);

temps.splice(Math.floor(temps.length / 2), 0, 5);
console.log(temps);

