// console.log('Hello, world!');

// variables

//types of variables
// var, let, const
// var has global scope and function scope can change from anywhere in the program
var fname='Arun'; 
console.log(fname);

{
    var fname='Arun Kumar';
    console.log(fname);
}

console.log(fname);

// let is a block scope variable and can be changed within the block inside {} and out side {} are 2 blocks
let lname='Kumar';
console.log(lname);

{
    let lname='Arun Kumar';
    console.log(lname);
}
    console.log(lname); 

// const is a block scope variable and cannot be changed once assigned inside a block
const age=25;
console.log(age);
{
    const age=30;
    console.log(typeof(age)); 
}

console.log(age);

// boolean datatype
let ifname=true;
console.log(typeof(ifname));
 
//undefined
let address;
console.log(address);
// null
let city=null;
console.log(city);

// object --> its a bug of javascript that typeof null is object
console.log(typeof(city));

// js variables name can start with a letter, underscore, or dollar sign but cannot start with a number
// cannot contain white spaces,cannot use reserved keywords, use meaningful names, use camelCase for variable names(firstName)
// js is case sensitive

// datatypes--> primitive --> string, number, boolean, null, undefined, symbol
// typeof() will give the datatype of the variable

// string properties
// .length gives the no of chacters in the string including white spaces
let str='Hello world';
console.log(str.length);
// index of a particular element in the string can be found using indexOf() method--> index starts at 0th location 
console.log(str.indexOf('o'));
//  from where the world starts
console.log(str.indexOf('world'));
// uppercase
console.log(str.toLocaleUpperCase());
//split() inside braces give the seperator
console.log(str.split('e'));
// slice -> start to end indexes
console.log(str.slice(3,7));
//substring
console.log(str.substring(2,8));
// concatination using +
console.log(str + " is the first program runs in every language.");
//  another way of concatination called----> template literals
console.log(`This is the ${str}`);

//Operators
//assignment(=), arithmetic,string operators,comparison, logical,type operators, bitwise

// postfix increment
let a=1;
let b=a++;
// a=2 b=1 assigning to b takes place later
console.log(a);
console.log(b);

// prefix increment
let c=1;
let d=++c;
console.log(c);
console.log(d);
//  here value of c is increamented and assignend to d

let m=10;
let n='10';
console.log(m==n);
// here only checks the value not the datatypes
console.log(m===n);
// here it checks the datatypes also

// precedence is based on bodmas


// Reference datatypes
// arrays,functions,object

// arrays-->no need to be same datatypes. can have multiple datatypes.