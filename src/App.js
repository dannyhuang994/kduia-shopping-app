import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the AppProvider from your custom context file.
import { AppProvider } from './context/AppContext';

// Import your custom components.
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

const App = () => {
    return (
        // Wrap the entire application with the AppProvider to provide context.
        <AppProvider>
            <div className='container'>

                <h1 className='mt-3'>Shopping App</h1>
                
                <div className='row mt-3'> 
                    <div className='col-sm'>
                        {/* Render the CartValue component. */}
                        <CartValue />
                    </div>
                    <div className='col-sm'>
                        {/* Render the Location component. */}
                        <Location />
                    </div>
                </div>

                <h3 className='mt-3'>Shopping Cart</h3>
                <div className='row '>
                    <div className='col-sm'>
                        {/* Render the ExpenseList component. */}
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Add Items</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        {/* Render the ItemSelected component. */}
                        <ItemSelected/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
