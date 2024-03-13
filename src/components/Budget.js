import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);

        const inputBudget = event.target.value;

        if (inputBudget > 20000) {
            alert("The budget cannot exceed £20.000 !");
            return;
        }

        if (inputBudget < totalExpenses) {
            alert("The budget cannot be lower thant the spending !");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
                </span>
        </div>
    );
};

export default Budget;