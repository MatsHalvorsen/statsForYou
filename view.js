updateView() 
    function updateView() {
        let html = /* HTML */ `
        <div id="expences">
            <h1>Utgifter</h1>
            <ul>
                <li><input type="number" placeholder="lån"></li>
                <li><input type="number" placeholder="forsikringer"></li>
                <li><input type="number" placeholder="mat"></li>
                <li><input type="number" placeholder="strøm"></li>
                <li><input type="number" placeholder="mobil"></li>
                <button>Legg til ny utgift</button>
            <ul>
        </div>

        <div id="incomes">
            <h1>Inntekt</h1>
            <ul>
                <li><input type="text" placeholder="bigInt"></li>
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
