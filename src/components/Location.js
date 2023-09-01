import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    // 1. Import the AppContext and access the dispatch function.
    const { dispatch } = useContext(AppContext);

    // 2. Function to handle location change.
    const changeLocation = (val) => {
        // Dispatch an action to update the location with the selected value.
        dispatch({
            type: 'CHG_LOCATION',
            payload: val,
        });
    }

    return (
        <div className='alert alert-secondary'>
            {/* Display the current location and provide a dropdown to change it. */}
            Location {
                <select name="Location" id="Location" onChange={event => changeLocation(event.target.value)}>
                    <option value="£">Uk(£)</option>
                    <option value="₹">India(₹)</option>
                    <option value="€">Europe(€)</option>
                    <option value="CAD">Canada(CAD)</option>
                </select>
            }
        </div>
    );
};

export default Location;
