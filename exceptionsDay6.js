// Exceptions
// exception is an error occurs at run times
// try,catch,throw,finally
// throw-->to give custome error to the user
// finally-->will execute anyway
// try-->test a block of code
// 

function verify(){
    let x=document.getElementById('num');
    let num=x.value;
    let errorval=document.getElementById('error');

    try{
        if(num<5) throw 'Number is too small';
        if(num>10) throw 'Number is too large'; 
    }catch(error){
        console.log(`The error is ${error}`);
        errorval.textContent=`${error}`;
        errorval.style.color='red';
    }
}

// github
