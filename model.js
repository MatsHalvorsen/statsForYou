const model = {

    app: {
        pages: [
        'frontPage',
        'personalFinance',
        'factstastic',
        ],
    },

    inputs: {
        expenseInput: {
            loan: 'null',
            incuranse: 'null',
            food: 'null',
            electricalBill: 'null',
            phone: 'null',
            car: 'null',

        },

        incomeInput: {
            paycheck: 'bigInt',
            other: 'null',
        }
    },

    data: {
        expenses: {
            loan: 'null',
            incuranse: 'null',
            food: 'null',
            electricalBill: 'null',
            phone: 'null',
            car: 'null',

        },

        income: {
            paycheck: 'bigInt',
            other: 'null',
        }

    },

}