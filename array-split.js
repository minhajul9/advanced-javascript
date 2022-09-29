const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2, 5);

const removed = nums.splice(2, 3, 77,88,99,66); //1st parameter indicates start position 2nd one indicates number of elements

// console.log(removed);
// console.log(nums);

const together = nums.join("");
console.log(together);
const h = together.split("");
h.pop();
console.log(h);