const dairy = [
    [25, "sunny"],
    [18, "Rainy"],
];

// first day's note
for (let i = 0; i < dairy.length; i++) {
    const deatils = dairy[i];
    console.log(`Temp: ${deatils[0]} | note: ${deatils[1]}`);
}
// console.log(dairy[0]);
