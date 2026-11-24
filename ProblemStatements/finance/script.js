function user(userId,username,monIncome,monSaveGol,expenses){
    return{
        userId,
        username,
        monIncome,
        monSaveGol,
        expenses,
        totalexpenses:null,
        saving:null,
        savingsGoal:false,
        expenseper:null,
        categoryuser:null
    };
}


let anuExpenses = [
    { expenseId: 1, expenseCat: "Rent", expenseAmo: 12000, paymode: "UPI" },
    { expenseId: 2, expenseCat: "Food", expenseAmo: 5000, paymode: "UPI" },
    { expenseId: 3, expenseCat: "Transportation", expenseAmo: 3000, paymode: "Cash" },
    { expenseId: 4, expenseCat: "Shopping", expenseAmo: 8000, paymode: "Debit Card" }
];

let rahulExpenses = [
    { expenseId: 5, expenseCat: "Rent", expenseAmo: 10000, paymode: "UPI" },
    { expenseId: 6, expenseCat: "Food", expenseAmo: 6000, paymode: "Cash" },
    { expenseId: 7, expenseCat: "Entertainment", expenseAmo: 5000, paymode: "Credit Card" },
    { expenseId: 8, expenseCat: "Transportation", expenseAmo: 3000, paymode: "UPI" }
];

let meeraExpenses = [
    { expenseId: 9, expenseCat: "Rent", expenseAmo: 15000, paymode: "UPI" },
    { expenseId: 10, expenseCat: "Food", expenseAmo: 7000, paymode: "UPI" },
    { expenseId: 11, expenseCat: "Healthcare", expenseAmo: 4000, paymode: "Debit Card" },
    { expenseId: 12, expenseCat: "Shopping", expenseAmo: 9000, paymode: "Credit Card" }
];

let arunExpenses = [
    { expenseId: 13, expenseCat: "Rent", expenseAmo: 10000, paymode: "UPI" },
    { expenseId: 14, expenseCat: "Food", expenseAmo: 5000, paymode: "Cash" },
    { expenseId: 15, expenseCat: "Shopping", expenseAmo: 8000, paymode: "Credit Card" },
    { expenseId: 16, expenseCat: "Entertainment", expenseAmo: 4000, paymode: "UPI" }
];

let nehaExpenses = [
    { expenseId: 17, expenseCat: "Rent", expenseAmo: 18000, paymode: "UPI" },
    { expenseId: 18, expenseCat: "Food", expenseAmo: 8000, paymode: "UPI" },
    { expenseId: 19, expenseCat: "Transportation", expenseAmo: 4000, paymode: "Cash" },
    { expenseId: 20, expenseCat: "Shopping", expenseAmo: 10000, paymode: "Debit Card" }
];

const users=[
    user(101,"Anu",50000,15000,anuExpenses),
    user(102,"Rahul",40000,10000,rahulExpenses),
    user(103,"Meera",60000,20000,meeraExpenses),
    user(104,"Arun",35000,12000,arunExpenses),
    user(105,"Neha",75000,25000,nehaExpenses)
]



// display
console.log(`------------------Display--------------------`);
function displayExpenses(user){
    console.log("User ID:", user.userId);
    console.log("User Name:", user.username);

    for (let expense of user.expenses) {
        console.log("Expense ID:", expense.expenseId);
        console.log("Category:", expense.expenseCat);
        console.log("Amount:", expense.expenseAmo);
        console.log("Payment Mode:", expense.paymode);
    }
}
for(let user of users){
    displayExpenses(user);
}

// monthly expenses
console.log(`-----------------Monthly Expense-----------------`);
function calculateTotalExpenses(user){
    let totalexpense=0;
    for(let expense of user.expenses){
        totalexpense+=expense.expenseAmo;
    }
    user.totalexpenses=totalexpense;
    return totalexpense;
}
for(let user of users){
    console.log(calculateTotalExpenses(user));
}

// savings
console.log(`-----------------Savings------------------`);
function calculateSavings(user){
    let savings=0;
    savings=user.monIncome-user.totalexpenses;
    user.saving=savings;
    console.log(`For user:${user.userId}-Monthly Income:${user.monIncome},Savings:${user.saving},Total Expense:${user.totalexpenses}`);
} 
for(let user of users){
    calculateSavings(user);
}

// savings Goal
console.log(`------------------Savings Goal----------------`);
function checkSavingsGoal(user){
    if(user.saving>=user.monSaveGol){
        console.log(`For user ${user.userId} Savings Goal Achieved`);   
        user.savingsGoal=true;
    }else if(user.saving<user.monSaveGol){
        console.log(`For user ${user.userId} Savings Goal Not Achieved`);
    }else if(user.saving<0){
        console.log(`For user ${user.userId} Overspending Alert`);
    }
}
for(let user of users){
    checkSavingsGoal(user);
}

// high expense
console.log(`------------High Expense----------------`);
function findHighestExpenseCategory(users){
    let categoryExpense={};
    for(let user of users){
        for(let expense of user.expenses){
            let category = expense.expenseCat;
            let amount = expense.expenseAmo;

            if (categoryExpense[category]) {
                categoryExpense[category] += amount;
            }else {
                categoryExpense[category] = amount;
            }
        }  
        
    }
    for (let category in categoryExpense) {
        console.log(`${category}: ${categoryExpense[category]}`);
    }

} 
findHighestExpenseCategory(users);

// highspending user
console.log(`-----------------High Spending User----------------`);
function identifyHighSpendingUsers(user){
    let expensePercent=0;
    expensePercent=(user.totalexpenses/user.monIncome)*100;
    user.expenseper=expensePercent;
    if(expensePercent>70){
        console.log(`The user ${user.userId} having expence percentage ${expensePercent} spending high`);
    }
} 
for(let user of users){
    identifyHighSpendingUsers(user);
}

// searchexpense category
console.log(`--------------Expense Category-------------------`);
function filterExpensesByCategory(user, category) {
    let totalAmount = 0;
    let found = false;
    console.log(`User: ${user.username}`);
    console.log(`Selected Category: ${category}`);
    for (let expense of user.expenses) {
        if (expense.expenseCat.toLowerCase() === category.toLowerCase()) {
            console.log("Expense ID:", expense.expenseId);
            console.log("Expense Amount:", expense.expenseAmo);
            totalAmount += expense.expenseAmo;
            found = true;
        }
    }
    if (found) {
        console.log(`Total amount spent on ${category}: ₹${totalAmount}`);
    }
    else {
        console.log(`No expenses found for category: ${category}`);
    }
}
for(let user of users){
    filterExpensesByCategory(user,"Rent");
    filterExpensesByCategory(user,"Food");
    filterExpensesByCategory(user,"Shopping");
    filterExpensesByCategory(user,"Healthcare");
}

function highestExpenseCategory(user){
    let highest=0;
    let catUser="";
    for(expense of user.expenses){
        if(highest<expense.expenseAmo){
            highest=expense.expenseAmo;
            catUser=expense.expenseCat;
        }
    }
    user.categoryuser=catUser;
}
for(let user of users){
    highestExpenseCategory(user);
}
// finance report
console.log(`-------Financial Report------------`);
function generateFinancialReport(user){
    console.log(`User ${user.userId} `);
    console.log(`UserName:${user.username}`);
    console.log(`Monthly Income:${user.monIncome}`);
    console.log(`Total Expense:${user.totalexpenses}`);
    console.log(`Remaining Savings:${user.saving}`);
    console.log(`Expense Percentage:${user.expenseper}`);
    console.log(`Savings Goal Status:${user.savingsGoal}`);
    console.log(`Highest Expense Category:${user.categoryuser}`);
} 
for(let user of users){
    generateFinancialReport(user);
}