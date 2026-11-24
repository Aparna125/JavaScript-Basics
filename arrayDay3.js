// Reference datatypes
// arrays,functions,object

// arrays-->no need to be same datatypes. can have multiple datatypes.
let array=[1,2,3,4,5,'apple','orange'];
console.log(array);
// length
console.log(array.length);
// indexposition
console.log(array[2]);
// to add an element push to delete pop from last position
array.push('mango');
console.log(array);
// pop remove the last element
array.pop();
console.log(array);

// add an element in the beginning use unshift()
array.unshift('grape');
console.log(array);

// delete from first position shift
array.shift();
console.log(array);
// slice function
let array1=array.slice(1,5);
console.log(array1);
// extraction and replacement function splice only for array
// replacement happens there
array.splice(2,3,'man','lan');
console.log(array);


// object 
// collection of properties-->key value pairs
let person={
    fname:'APARNA',
    age:22,
    place:'Kasaragod'
}
console.log(person);
// only name
console.log(person.fname);
// or
console.log(person['fname']);

let student={
    name:'Kannan',
    age:27,
    place:'aluva',
    stream:'cs'
}
console.log(student);


// anotherway of creating an object

let student1=new Object();
student1.name='Appu';
student1.age=22;
console.log(student1);

// classes
// constructor is a default functiojn inside a class
class Car{
    constructor(model,year){
        // this is a keyword used to take the value of that instance
        this.model=model;
        this.year=year;
    }
}
let car1= new Car('x4',2003);
let car2=new Car('X7',2010);
console.log(car1);
console.log(car2);

// array of objects
let students=[{fname:'Aparna',age:25}, {fname:'Athul',age:26}]
console.log(students[0]);
console.log(students[1].age);
console.log(students);

// object inside object
let person2={
    address:{
        street:'thampanoor',
        city:'tvm'
    }
}
console.log(person2.address.city);

// functions
function add(a,b){
    var sum=a+b;
    console.log(`Sum is:${sum}`);
    // another wayy
    return sum;
}

// function call
var value=add(10,12);
console.log(`Sum value is ${value}`);

function mul(a,b){
    return a*b;
}
var result=mul(2,5);
console.log(`The product is ${result}`);

// arrow function-->no function keyword is used
let addnum=(a,b)=>{
    var sumval=a+b;
    return sumval;
}
let res=addnum(2,3);
console.log(`Sum is ${res}`);

let subnum=(a,b)=>{
    var subval=a-b;
    return subval;
}
let res1=subnum(5,3);
console.log(`Difference is ${res1}`);

// functions inside object called methods
let person3={
    fname:'Aparna',
    lname:'Ramesh',
    fullname:()=>{
        // return person3.fname + " " + person3.lname;
        return `${person3.fname} ${person3.lname}`;
    }
}
console.log(person3.fullname());

// array foreach,map,filter
let ar=[1,2,3,4,5];
// item is elements ind is index and num is an array (both are temp variables)
// ar.forEach(function(item,ind,num){

// });

// using arrow function
ar.forEach((item,ind,num)=>{
    num[ind]=item>2;
})
// ar modified with new values
console.log(ar);


// filterfunction-->filter does not modify the original array
let ages=[12,18,34,23,55,67]
let adult=ages.filter((age)=>{
    return age>=18;
})
console.log(ages);  //array doesnt modified 
console.log(adult); // we will get the values

// map also doesnt affect the original array

// spread operator is doing concatination
let a=[1,2,3];
let b=[4,5,6];
let c=[...a,...b];
console.log(c);