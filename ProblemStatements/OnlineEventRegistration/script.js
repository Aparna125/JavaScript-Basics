let fname=document.getElementById('input1');
let nameError=document.getElementById('namerror');
function validateName(){
    if(fname.value.trim().length>=3){
        nameError.textContent="";
        return true;
    }else{
        nameError.textContent='Enter a valid name!';
        nameError.style.color='red';
        return false;
    }
}
fname.addEventListener('input',()=>{
    validateName();
});

let email=document.getElementById('input2');
let emailerror=document.getElementById('emailerror');
let regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
function validateEmail(){
    if(regex.test(email.value)){
        emailerror.textContent="";
        return true;
    }else{
        emailerror.textContent='Email invalid!';
        emailerror.style.color='red';
        return false;
    }
}
email.addEventListener('input',()=>{
    validateEmail();
});

let mobile=document.getElementById('input3');
let phonerror=document.getElementById('phonerror');
function validateMobile(){
    if(mobile.value.trim().length===10){
        phonerror.textContent="";
        return true;
    }else{
        phonerror.textContent='Mobile no must contain exactly 10 digits!';
        phonerror.style.color='red';
        return false;
    }
}
mobile.addEventListener('input',()=>{
    validateMobile();
});

let dob=document.getElementById('dob');
let doberror=document.getElementById('doberror');
function validateDob(){
    if(dob.value===""){
        doberror.textContent='Enter a valid DOB!';
        doberror.style.color='red';
        return false;
    }else{
        doberror.textContent="";
        return true;
    }
}
dob.addEventListener('input',()=>{
    validateDob();
});


let genderInputs = document.querySelectorAll('input[name="gender"]');
let gendererror = document.getElementById('gendererror');
function validateGender(){
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    if (!selectedGender) {
        gendererror.textContent = "Please select your gender.";
        gendererror.style.color = "red";
        return false;
    } else {
        gendererror.textContent = "";
        return true;
    }
}
genderInputs.forEach(function(gender){
    gender.addEventListener('change', () => {
        validateGender();
    });
});


let workshop = document.getElementById('workshop');
let workshopError = document.getElementById('workshoperror');

function validateWorkshop() {
    if (workshop.value === "") {
        workshopError.textContent = "Please select a workshop!";
        return false;
    } else {
        workshopError.textContent = "";
        return true;
    }
}

workshop.addEventListener('change', () => {
    validateWorkshop();
});

let skills = document.getElementsByName('skills');
let skillError = document.getElementById('skilerror');
function validateSkills() {
    let selected = false;
    for (let skill of skills) {
        if (skill.checked) {
            selected = true;
        }
    }
    if (selected) {
        skillError.textContent = "";
        return true;
    } else {
        skillError.textContent = "Please select at least one skill!";
        return false;
    }
}
for (let skill of skills) {
    skill.addEventListener('change', () => {
        validateSkills();
    });
}

let terms = document.getElementById('terms');
let termsError = document.getElementById('termserror');
function validateTerms() {
    if (terms.checked) {
        termsError.textContent = "";
        return true;
    } else {
        termsError.textContent = "Please accept the terms and conditions!";
        termsError.style.color='red';
        return false;
    }
}
terms.addEventListener('change', () => {
    validateTerms();
});


let form = document.getElementById('regform');

form.addEventListener('submit', (event) => {

    let nameValid = validateName();
    let emailValid = validateEmail();
    let mobileValid = validateMobile();
    let dobValid = validateDob();
    let genderValid = validateGender();
    let workshopValid = validateWorkshop();
    let skillsValid = validateSkills();
    let termsValid = validateTerms();

    if (!nameValid || !emailValid || !mobileValid || !dobValid || !genderValid || !workshopValid || !skillsValid || !termsValid) {
        event.preventDefault();
    }else{
        alert('Form Submitted!!!');
    }
});