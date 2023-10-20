/*
function fixedExpences() {
   const totalExpences = 
    model.data.expenses.car +
    model.data.expenses.electricalBill +
    model.data.expenses.food + 
    model.data.expenses.incuranse +
    model.data.expenses.loan + 
    model.data.expenses.phone;

    return totalExpences.toFixed;
}

const fixedExpensesValue = document.getElementById("fixedExpensesValue");
fixedExpensesValue.textContent = fixedExpences();

function getInputs() {
    loan = model.inputs.expenseInput.loan;
    incuranse = model.inputs.expenseInput.incuranse;
    food = model.inputs.expenseInput.food;
    electricalBill = model.inputs.expenseInput.electricalBill;
    phone = model.inputs.expenseInput.phone;
}

function getInput() {
    const userInput = document.getElementById('loan').value;

    if( userInput === ""){
        alert("fill in a number")
        return
    }

    const newInputValue = {
        loan: userInput
    };

    model.inputs.expenseInput.push('newInputValue')

    updateView();
}

*/
function getExpenses(expenseType) {

    const userInput = (document.getElementById(expenseType).value);

    if (userInput === "") {
        alert("fyll inn et tall")
        return
    }

    model.data.expenses[expenseType] = userInput;

    updateView();
}
