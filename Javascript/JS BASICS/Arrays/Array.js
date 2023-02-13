let arr1 = [1, 2, 3, 4, "Bharath", "Chaitanya"];
for (const i in arr1) {
	console.log(arr1[i]);
}

let nums= []
let rev_numbers=[]
for(let i=0;i<10;i++){
    nums.push(i)
    rev_numbers.unshift(i)
}
nums.splice(4,0,'10')
console.log(nums);
console.log(rev_numbers);

for (let i = 0; i < 5; i++) {
    console.log(nums.pop());
}
nums.splice(1,1)

console.log(nums)


// map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8]

// filter
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); // [2, 4]

// reduce
const sum = numbers.reduce(function (result, item) {
	return result + item;
}, 0);
console.log(sum);