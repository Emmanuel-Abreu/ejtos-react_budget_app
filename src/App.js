import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';
// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';
import CurrencyDropdown from './components/CurrencyDropdown';
import store from './components/CurrencyDropdown';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider store={store}>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-4'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <CurrencyDropdown/>
                    </div>
                </div>
               
                    
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
        </AppProvider>
    );
};
export default App;
