
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {dispatch, currencySymbol} = useContext(AppContext);
    
    const changeBudget = (newBudget) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    }

    const handleChange = (event) => {
        const newBudget = event.target.value;
        changeBudget(newBudget)
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: </span>
            {currencySymbol}
            <input type='number' onChange={handleChange}></input>
        </div>
    );
};
export default Budget;