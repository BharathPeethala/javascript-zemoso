function add(a,b){
    return a+b;
}

function add_multiple(...args) {
    let sum = 0;
    for(let i of args){
        sum+=i
    }
    return sum
}


function area({ width, height },multi=2) {
  return width * height*multi;
}

console.log(area({ width: 20, height: 30 }));
console.log(add(1000,1919191))
console.log(add_multiple(1,2,22,2,2,2,2,2,2,2,10101,10101.1082829,10))