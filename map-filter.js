const numbers = [2,8,6,4, 5, 9, 7, 6];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     console.log(result);
// }  
// this is the older way by some advanced way shown below

const square = element => element*element;

let result = numbers.map(square)

console.log(result);

//filter will return an array which match the condition 
result = numbers.filter(x => x % 2 != 0);
console.log(result);

//find will return the first element which match the condition 
result = numbers.find(x => x % 2 != 0);
console.log(result);