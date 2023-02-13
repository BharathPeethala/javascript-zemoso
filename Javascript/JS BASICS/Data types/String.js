let first = 'Bharath';
let last = 'Peethala'
let name = first+last;
let name_rev = last.concat(first)

console.log(name,name_rev);
for(let i in name){
    console.log(name_rev[i])
}
console.log(`Hello ${name_rev}`);
console.log(name_rev.split(''))
console.log(name_rev.replaceAll('a','i'));
console.log(name_rev.indexOf('a'));
console.log(name_rev.substring(1,5));
