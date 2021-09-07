const buttonCtr = document.querySelector("#btnCounter");
const headingEl = document.querySelector("#headingTotal");
const inputDescEl = document.querySelector("#inputDesc");
const userInput = document.getElementById("userInput");
const expenseTableEl = document.querySelector("#expenseTable");

buttonCtr.addEventListener("click", addExpenseToTotal, false);

let totalExpense = 0;

headingEl.textContent = totalExpense;

const allExpenses = [];

function addExpenseToTotal () {
    const expenseItem = {};
    const inputAmount = userInput.value;
    const inputDesc = inputDescEl.value;
    const expense = parseInt(inputAmount, 10);
    expenseItem.desc = inputDesc;
    expenseItem.amount = expense;
    allExpenses.push(expenseItem);
    totalExpense = totalExpense + expense;
    const someText = `The expense is : ${totalExpense}`
    headingEl.textContent = someText;

//    const data1 = allExpenses[0];
//    const data2 = allExpenses[1];

//    const data1Text = `Expense : ${data1.amount}   Desc: ${data1.desc}`;
//   const data2Text =  `Expense  :  ${data2.amount} Desc: ${data2.desc}`;

//    const tableText = `
//       <div>${data1Text}</div>
//       <div>${data2Text}</div>
//    `

     const allExpenseHTML = allExpenses.map(expense => {
        return `<div>${expense.amount} :: ${expense.desc}</div>`

    });
    
    const joinedAllExpenseHTML = allExpenseHTML.join("")

    console.log(joinedAllExpenseHTML);

   expenseTableEl.innerHTML = joinedAllExpenseHTML;

}


