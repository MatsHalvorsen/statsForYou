updateView() 
    function updateView() {
        let html = /* HTML */ `
        <div id="expences">
            <h1>Utgifter</h1>
            <ul>
                <li><input id="loan" type="number" placeholder="lån" value="${model.data.expenses.loan}" onchange="getExpenses('loan')"></li>
                <li><input id="incuranse" type="number" placeholder="forsikringer" value="${model.data.expenses.incuranse}" onchange="getExpences('incuranse')"></li>
                <li><input id="food" type="number" placeholder="mat" value="${model.data.expenses.food}" onchange="getExpences('food')"></li>
                <li><input id="electricalBill" type="number" placeholder="strøm" value="${model.data.expenses.electricalBill}" onchange="getExpences('electricalBill')"></li>
                <li><input id="phone" type="number" placeholder="mobil" value="${model.data.expenses.phone}" onchange="getExpences('phone')"></li>
                <button>Legg til ny utgift</button>
            <ul>
        </div>

        <div id="incomes">
            <h1>Inntekt</h1>
            <ul>
                <li><input type="text" placeholder="bigInt">${model.data.income.paycheck}</li>
            </ul>
        </div>

        <div id="summary">
            <h1>Oppsummering</h1>
                <ul>
                    <li>Faste kostnader: ${model.data.expenses.electricalBill}</li>
                    <li>Faste kostnader: <span id="fixedExpensesValue"></span> </li>
                </ul>
        </div> 

        `
        app.innerHTML = html
    }
