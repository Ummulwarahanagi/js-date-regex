//Creating Date
let date=new Date()
let specific_date=new Date('2025-04-03');//specific date(YY-MM-DD)
let date_with_time=new Date('2025,3,4,14,30,0')//(YYYY,MM-1,DD,HH,MM,SS)

//fetching date components
console.log("Current date:",date.toDateString());
console.log("Current time:",date.getTime());
console.log("Current Day:",date.getDay());
console.log("Current Month:",date.getMonth())
console.log("current year:",date.getFullYear());
console.log("Current Hour:",date.getHours())
console.log("Current minutes:",date.getMinutes())
console.log("Current sec:",date.getSeconds())
console.log("Current milliseconds:",date.getMilliseconds())

//Formatting Dates
console.log("ISO String:",date.toISOString());
console.log("Locale string:",date.toLocaleString())

//Regular expressions
let regex1=/hello/;//literal character
console.log(regex1.test("hello world"));
console.log(regex1.test("hi world"));
//character classes
let regex2=/[aeiou]/;
console.log(regex2.test("hello world"));
console.log(regex2.test("Javascript"));
//Quantifiers
let regex3=/\d{3}/;
console.log(regex3.test(123));
console.log(regex3.test(12));
//anchors
let regex4=/^start/;

console.log(regex4.test("start here"));
console.log(regex4.test("begin here"))
let regex5=/end$/;

console.log(regex5.test("end here"));
console.log(regex5.test("this is end"))

//modifiers
let regex6=/hello/g;//global-match
let string="hello Hello world";
console.log(string.match(regex6));