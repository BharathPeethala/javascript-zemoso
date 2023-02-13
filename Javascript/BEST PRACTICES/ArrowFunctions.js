// 2 Arrow functions

let arr = [1, 2, 3, 4, 5];

let top = (arr) => arr[arr.length - 1];
let last = () => arr[0];
let mid = () => arr[parseInt(arr.length / 2)];

console.log(top([1, 2, 3]), last(), mid());
