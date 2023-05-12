
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import '../assets/styles/DecreaseBtn.css'
import '../assets/styles/IncreaseBtn.css'
import IncreaseBtn from './IncreaseBtn';
import DecreaseBtn from './DecreaseBtn';

const ExpenseItem = (props) => {
    const { dispatch, currencySymbol } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: props.cost + 10,
        };
        dispatch({
            type: 'INCREASE_EXPENSE',
            payload: {}
        });
    }

    const decreaseAllocation = (name) =>{
        const expense = {
            name: name,
            cost: 10,
        }
        dispatch({
            type: 'DECREASE_EXPENSE',
            payload: expense,
        })
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currencySymbol} {props.cost}</td>
        <td><IncreaseBtn onClick={event => increaseAllocation(props.name)}/></td>
        <td><DecreaseBtn onClick={event => decreaseAllocation(props.name)}/></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;