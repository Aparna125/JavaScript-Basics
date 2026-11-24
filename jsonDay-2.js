// javascript object notation json format
let person={
    "name":"John",
    "age":45,
    "city":"Kannur"
}
// to convert an object to a json 
let student={
    name:"aparna",
    age:35
}
let jsondata=JSON.stringify(student);
console.log(jsondata);

// to convert back to js object
let object_data=JSON.parse(jsondata);
console.log(object_data); 

// conditional statements
// if else
// if else if else

let age=12;
if(age>18){
    console.log("Can vote");
}else if(age==18){
    console.log("Can also vote");
}
else{
    console.log("Can't vote");
}

// multiple conditional statements
let gender="female";

if( age>18 && gender=='male'){
    console.log('The men can vote');
}else{
    console.log('The women can vote');
}

let height=154;
if( age>18 || height<200){
    console.log('The person is an adult with height less than 200 ');
}else if(age>18 || height==200){
    console.log('The person is an adult and height is 200cm ');
}else{
    console.log('The person is not adult and height is less than 200');
}

// boolean
let agree=true;
if(agree){
    console.log('She agreed');
}else{
    console.log('She doesnt agree');
}

// Ternary operator
(agree)?console.log('She agreed'): console.log('She doesnt agree');

// control statements// loops
// for
for( let i=1;i<=10;i++){
    console.log(i);
}

// another two ways of for loop
// for of loop--> for extracting each element of an array or string
let a=['appu','ammu','kunju','kannan','suni','savi'];
for(const item of a){
    console.log(item);
}
// for each character in a string
let b='aparna';
for(let i of b){
    console.log(i);
}

// for in loop
// for fetching object properties
//  already defined an object  student above
for(let i in student){
    console.log(i);
}

// to print the values
for(let i in student){
    console.log(student[i]);
}

// while loop
let i=1;
while(i<=10){
    console.log(i);
    i++;
}

// do-while loop
let x=1;
do{
    console.log(x);
    x++;
}while(x<=10);