const nums = [10, -11, 17, -5, 8, 9];
const findNum = -5;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] === findNum) {
        console.log(`Found ${findNum} at ${i} position`);
        break;
    }
}

const positiveNums = [];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num < 0) {
        continue;
    }   

    positiveNums.push(num);
}

