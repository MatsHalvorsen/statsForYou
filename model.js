const app = document.getElementById("app");

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
            loan: '8000',
            incuranse: '600',
            food: '2500',
            electricalBill: '300',
            phone: '400',
            car: '1500',

        },

        income: {
            paycheck: '30 000',
            other: 'null',
        }

    },
}