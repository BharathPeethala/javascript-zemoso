let k = [1,2,3]
try{
    console.log(k[10].name)
}
catch(error){
    console.error(error.message)
}

console.log("The code will still get executed");