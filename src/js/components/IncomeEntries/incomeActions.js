
export function updateIncomeDescription(description) {
    return{
        type: 'UPDATE_EXPENSE_DESCRIPTION',
        payload: { description }
    };
}

export function updateIncomeAmount(amount) {
    return {
        type: 'UPDATE_EXPENSE_AMOUNT',
        payload: { amount }
    };
}

export function addIncome(description, amount) {
    return {
        type: 'ADD_EXPENSE',
        payload: {
            description,
            amount: parseFloat(amount)
        }
    };
}