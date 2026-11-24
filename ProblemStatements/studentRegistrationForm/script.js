let vaName=document.getElementById('input1');
let nameerror=document.getElementById('nameerror');
function validateName(){
    if(vaName.value.trim().length<=3){
        nameerror.textContent='Enter valid name!';
        nameerror.style.color='red';
        return false;
    }else{
        nameerror.textContent="";
        return true;
    }
}

vaName.addEventListener('input',()=>{
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
let regmobile=/^[6-9]\d{9}$/
function validateMobile(){
    if(regmobile.test(mobile.value)){
        phonerror.textContent="";
        return true;
    }else{
        phonerror.textContent='Mobile no must contain exactly 10 digits';
        phonerror.style.color='red';
        return false;
    }
}
mobile.addEventListener('input',()=>{
    validateMobile();
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


let cource=document.getElementById('cource');
let courceError=document.getElementById('courceError');
function validateCource(){
    if(cource.value===""){
        courceError.textContent="Please select a cource";
        courceError.style.color="red";
        return false;
    }else{
        courceError.textContent="";
        return true;
    }
}
cource.addEventListener('change',()=>{
    validateCource();
});


let regform=document.getElementById('regform');
regform.addEventListener("submit", function(event){

    let validnamee=validateName();
    let validemail=validateEmail();
    let validphone=validateMobile();
    let validgender=validateGender();
    let validcource=validateCource();
    if (!validnamee || !validemail || !validphone || !validgender || !validcource){
       event.preventDefault();
    }
    else {
        alert("Form Submitted Sucessfully!!!");
    }
});

