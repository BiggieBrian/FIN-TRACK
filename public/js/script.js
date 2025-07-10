let balance = 0;
let income = 0;
let expenses = 0;

//
const balanceEl = document.querySelector("#balance");
const incomeEl = document.querySelector("#income");
const expensesEl = document.querySelector("#expenses");

const addRecordForm = document.querySelector("#trxform");
const addRecordButton = document.querySelector("#addRecord");

const amountInput = document.querySelector("#amountInput");
const transactionSelection = document.querySelector("#transactionSelection");
const descriptionInput = document.querySelector("#descriptionInput");

//
const setValues = () => {
  balanceEl.textContent = balance;
  incomeEl.textContent = income;
  expensesEl.textContent = expenses;
};

///
const formSubmit = (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  amount = parseInt(amountInput.value);
  trxType = transactionSelection.value;
  description = descriptionInput.value.trim();

  if (amount < 0 || typeof amount != "number") {
    alert("Enter a valid amount.");
    return;
  }

  if (trxType == "0") {
    alert("Chose a transaction type.");
    return;
  }

  if (description == "") {
    alert("Enter a description.");
    return;
  }

  if (trxType == "income") {
    income += amount;
    balance += amount;
  } else {
    if (balance < amount) {
      alert("You have no money.");
      return;
    }
    expenses += amount;
    balance -= amount;
  }
  setValues();
};

window.onload = setValues;
addRecordForm.onsubmit = formSubmit;
