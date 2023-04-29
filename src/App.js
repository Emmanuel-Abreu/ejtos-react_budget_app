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

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
<<<<<<< HEAD
                <div className='row mt-3'>
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
                        <ExpenseList />
                    </div>
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>
                    <div className='col-sm'>
                        <AllocationForm />
                    </div>
                </div>
=======
                    <div className='row mt-3'>
                        //Add Budget component here under
        
                        //Add Remaining component here under

                        //Add ExpenseTotal component here under

                        //Add ExpenseList component here under

                        //Add ExpenseItem component here under

                        //Add AllocationForm component here under
                    </div>
>>>>>>> parent of a76ae12e... Update App.js
            </div>
        </AppProvider>
    );
};
export default App;
