const headingEl = document.querySelector("#headingTotal");
const inputDescEl = document.querySelector("#inputDesc");
const inputElement = document.querySelector("#inputAmount");
const expenseTableEl = document.querySelector("#expenseTable");
let totalExpense = 0;

headingEl.textContent = totalExpense;

let allExpenses = [];

function addExpenseToTotal() {
  const expenseItem = {};
  const textAmount = inputElement.value;
  const textDesc = inputDescEl.value;
  const expense = parseInt(textAmount, 10);
  if (textDesc !== "" && !isNaN(expense) && expense > 0) {
    expenseItem.desc = textDesc;
    expenseItem.amount = expense;
    expenseItem.moment = new Date();

    totalExpense += expense;
    updateTotal();
    allExpenses.push(expenseItem);

    renderlist(allExpenses);
    inputElement.value = "";
    inputDescEl.value = "";
  }
}
const element = document.querySelector("#btnAddExpense");
element.addEventListener("click", addExpenseToTotal, false);
document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 || event.which === 13) {
    addExpenseToTotal();
  }
});

function getDateString(momento) {
  return momento.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function updateTotal() {
  let someText = `Total: ${totalExpense}`;
  headingEl.textContent = someText;
}

function deleteItem(dateValue, amount) {
  const newArr = allExpenses.filter(
    expense => expense.moment.valueOf() !== dateValue
  );
  renderlist(newArr);
  totalExpense -= amount;
  updateTotal();
}

function renderlist(arrOfList) {
  const allExpensesHTML = arrOfList.map(expense =>
    createListItem(expense)
  );
  const joinedAllExpenseHTML = allExpensesHTML.join("");
  expenseTableEl.innerHTML = joinedAllExpenseHTML;
  allExpenses = arrOfList;
}

function createListItem({
  desc,
  amount,
  moment
}) {
  return `
            <li class="list-group-item d-flex justify-content-between">
                    <div class="d-flex flex-column">
                            ${desc}
                        <small class="text-muted">${getDateString(
                          moment
                        )}</small>
                    </div>
                    <div>
                        <span class="px-5">
                                ${amount}
                        </span>
                        <button type="button" class="btn btn-outline-danger btn-sm" onclick="deleteItem(${moment.valueOf()}, ${amount})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </li>
            `;
}