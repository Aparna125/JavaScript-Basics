const name='Aparna R';
let monIncome=30000;
var month='November 2026';

let expenseCategory=['House Rent','Food','Transportation','Electricity','Entertainment','Shopping'];

function expenseObj(category,amount){
    return{
        category,
        amount
    }
}

let expense=[
    {category:'House Rent',amount:12000},
    {category:'Food',amount:6000},
    {category:'Transportation',amount:2500},
    {category:'Electricity',amount:1500},
    {category:'Entertainment',amount:3000},
    {category:'Shopping',amount:4000},
]

// totalMonthlyExpense
let totalMonthlyExpense=0;
for(let expenses of expense){
    totalMonthlyExpense+=expenses.amount;
}
console.log(totalMonthlyExpense);

//remainingBalance
let remainingBalance=0;
remainingBalance=monIncome-totalMonthlyExpense;
console.log(remainingBalance);

//percentageOfIncomeSpent
let percentageOfIncomeSpent=0;
percentageOfIncomeSpent=(totalMonthlyExpense/monIncome)*100;
console.log(percentageOfIncomeSpent);

// averageExpenseAmount
let averageExpenseAmount=0;
averageExpenseAmount=totalMonthlyExpense/6;
console.log(averageExpenseAmount);

// remaining balace positive or negative
if(remainingBalance>0){
    console.log('Remaining Balace is Positive');
    balance.style.color='green';
}else{
    console.log('Remaining Balance is Negative');
    balance.style.color='red';
}

// display good savings
let statuss='';
if(remainingBalance>10000){
    console.log('Good Savings');
    statuss='Good Savings';
}else if(0<remainingBalance<10000){
    console.log('Moderate Savings');
    statuss='Moderate Savings';
}else if(remainingBalance==0){
    console.log('No Savings');
    statuss='No Savings';
}else if(remainingBalance<0){
    console.log('Overspending');
    statuss='Overspending';
}


// loops
let totalExpense=0;
for(let expenses of expense){
    totalExpense+=expenses.amount;
}
console.log(totalExpense);

// highest and lowest categories
let highestCat='';
let lowestCat='';
let highExpense=0;
let lowExpense=Infinity;
for(let expenses of expense){
    if(expenses.amount>highExpense){
        highExpense=expenses.amount;
        highestCat=expenses.category;
    }
    if(expenses.amount<lowExpense){
        lowExpense=expenses.amount;
        lowestCat=expenses.category;
    }
}
console.log(highestCat);
console.log(lowestCat);

// Display
for(let expenses of expense){
    console.log(`Expense Category:${expenses.category} Amount:${expenses.amount}`);
}

// functions total and remaining
let totalEx=0;
let reamining=0;
function total(expenses){
    totalEx+=expenses.amount;
}
function remainingBal(expenses){
    reamining=monIncome-totalEx;
}
for(let expenses of expense){
    total(expenses);
    remainingBal(expenses);
}
console.log(totalEx);
console.log(reamining);

//average expense
let averageEx=0;
function average(){
    averageEx=totalEx/6;
}
average();
console.log(averageEx);

// highest and lowest
let high=0;
let low=Infinity;
let highCa='';
let lowCa='';
function highLow(expenses){
    if(expenses.amount>high){
        high=expenses.amount;
        highCa=expenses.category;
    }
    if(expenses.amount<low){
        low=expenses.amount;
        lowCa=expenses.category;
    }
}
for(let expenses of expense){
    highLow(expenses);
}
console.log(highCa);
console.log(lowCa);

// percentageIncomeSpent
let per=0;
function percentage(){
    per=(totalEx/monIncome)*100;
}
percentage();
console.log(per);


var head1=document.getElementById('head1');
head1.textContent='PERSONAL EXPENSE DASHBOARD';

var balances=document.querySelector('#balance');
balances.textContent=reamining;


var expenseCat=document.getElementsByClassName('expensecat');
expenseCat[0].style.color='Red';
expenseCat[1].style.color='Red';
expenseCat[2].style.color='Red';
expenseCat[3].style.color='Red';
expenseCat[4].style.color='Red';
expenseCat[5].style.color='Red';

var personName=document.getElementById('name');
personName.textContent=name;

var monInc=document.getElementById('monthlyIn');
monInc.textContent=monIncome;

var totals=document.getElementById('total');
totals.innerHTML='<td>Total</td>';

var amount=document.getElementById('amount');
amount.innerHTML=`<td>${totalExpense}</td>`;


var finance=document.querySelector('#financialStatus').innerText;
document.getElementById('summery').innerText= 
finance + ` is ${statuss}`;

var monExp=document.getElementById('monExp');
monExp.textContent=`${totalMonthlyExpense}`;
monExp.style.fontSize='30px';

var highcat=document.getElementById('highCat')
highcat.textContent=`${highestCat}`;
highcat.style.backgroundColor='red';

var lowcat=document.getElementById('lowCat')
lowcat.textContent=`${lowestCat}`;

var perc=document.getElementById('perc');
perc.textContent=`${per}%`;

let header = document.querySelector("#dashboardHeader");
header.style.backgroundColor = "lightblue";