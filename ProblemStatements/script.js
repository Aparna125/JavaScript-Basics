var fullName = "Aparna";
const age = 22;
var className = "Plus Two";


let address;
let remarks = null;

let mathmark = 75;
let scimark = 80;
let engmark = 90;

const max = 100;


console.log("Student Name: " + fullName);
console.log("Age: " + age);
console.log("Class: " + className);
console.log("Address: " + address);
console.log("Remarks: " + remarks);


console.log("Maths Mark = " + mathmark);
console.log("Science Mark = " + scimark);
console.log("English Mark = " + engmark);


let totalmark = mathmark + scimark + engmark;
console.log("Total Mark = " + totalmark);

let averagemark = totalmark / 3;
console.log("Average Mark = " + averagemark);

let percentage = (totalmark / (max * 3)) * 100;
console.log("Percentage = " + percentage + "%");


mathmark += 5;
console.log("Updated Maths Mark = " + mathmark);

let mathpass = mathmark >= 40;
let scipass = scimark >= 40;
let engpass = engmark >= 40;

console.log("Maths Pass = " + mathpass);
console.log("Science Pass = " + scipass);
console.log("English Pass = " + engpass);

let totalpass = averagemark >= 50;
console.log("Average above 50 = " + totalpass);


let passedOrFailed = mathpass && scipass && engpass;
console.log("Student Passed = " + passedOrFailed);


let totalpassed = (mathmark >= 40 && engmark >= 40 && scimark >= 40);
console.log("Passed all subjects = " + totalpassed);


let scoredHigh = (mathmark > 90 || engmark > 90 || scimark > 90);
console.log("Outstanding score = " + scoredHigh);


let makeFail = !totalpassed;
console.log("Student Failed = " + makeFail);

