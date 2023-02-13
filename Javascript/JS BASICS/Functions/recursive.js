
const fib = (n)=>{
    if(n==0 || n==1){
        return 1;
    }
    return fib(n-1)+fib(n-2)
}

console.log(fib(10));


function parentFunc() {
	const a = 5;

	function nestedFunc() {
		const b = 4; // parentFunc can't use this
		return a + b;
	}
	return nestedFunc(); // 5
}
console.log(parentFunc())