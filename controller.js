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
