/*
Create a function that will receive array and function as a parameter
creates new array that will include new elements that are processed by function that was given
in parameters
then return that array
*/

const nums = [1, 2, 3, 4, 5];
const nums2 = [];

for (let i = 0; i < nums.length; i++) {
    nums2.push(nums[i] * nums[i]);
}
console.log(nums2);

console.log(nums.map(function(num) { return num * num; }));
console.log(nums.map(function(num) { return num - 1; }));

/*
გვაქვს: 
arr მასივი (ორიგინალი)
func ფუნქცია
arr2 მასივი (სადაც შევინახავთ შეცვლილ ელემენტებს)
თითოეული ელემენიტისთვის (elem) რომელიც არის arr -ში:
    arr2-ში ჩავამატოთ func(elem) ფუნქციის მიერ დაბრუნებული მნიშვნელობა, რომელსაც გადავეცით elem

დავაბრუნოთ arr2
*/

// function map(arr, func) {
//     let arr2 = [];

// }
