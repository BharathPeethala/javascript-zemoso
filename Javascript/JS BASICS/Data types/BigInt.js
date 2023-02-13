// BigInts are used to store and operate on large integers even beyond the safe integer limit
let x = BigInt(Number.MAX_SAFE_INTEGER)
console.log(x);
console.log(x==Number.MAX_SAFE_INTEGER);
console.log(x+1n)
try{
    x+=1
}
catch(err){
    console.log(err.message);
}