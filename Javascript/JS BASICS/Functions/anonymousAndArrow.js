const avg = function (...args) {
	let sum = 0;
	for (let i = 0; i < args.length; i++) {
		sum += args[i];
	}
	return sum / args.length;
};

const max = (...args) => {
	let maxi = args[0];
	for (let i = 1; i < args.length; i++) {
		if (maxi < args[i]) {
			maxi = args[i];
		}
	}
	return maxi;
};

console.log(avg(1, 2, 3, 4, 5, 6, 7));
console.log(max(1,2,3,3,4,5,6,20,19,12))