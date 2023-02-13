let re = /(\d{4})-(\d{2})-(\d{2})/;
let result = re.exec("Pi day this year falls on 2021-03-14!");
console.log(result[0], result[1], result[2], result[3]);

re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

result = re.exec("Pi day this year falls on 2021-03-14!");
let { year, month, day } = result.groups;

console.log(day, month, year);
