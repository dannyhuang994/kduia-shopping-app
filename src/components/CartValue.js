import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    // Access the 'expenses' and 'Location' values from the AppContext using useContext
    const { expenses, Location } = useContext(AppContext);

    // Calculate the total cart value by iterating through 'expenses'
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.unitprice * item.quantity);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Cart Value: {Location}{totalExpenses}</span>
        </div>
    );
};

export default CartValue;
