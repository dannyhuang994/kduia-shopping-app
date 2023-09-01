import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    // 1. Import necessary dependencies and context.
    const { dispatch } = useContext(AppContext);

    // 2. Define component states using useState.
    const [name, setName] = useState(''); // Stores the selected item's name.
    const [quantity, setQuantity] = useState(''); // Stores the quantity of the item.
    const [action, setAction] = useState(''); // Stores the selected action (Add or Reduce).

    // 3. Function to handle form submission.
    const submitEvent = () => {
        // Create an item object with the selected name and quantity.
        const item = {
            name: name,
            quantity: parseInt(quantity), // Parse quantity as an integer.
        };

        // Check the selected action and dispatch the appropriate action.
        if (action === "Reduce") {
            dispatch({
                type: 'RED_QUANTITY',
                payload: item,
            });
        } else {
            dispatch({
                type: 'ADD_QUANTITY',
                payload: item,
            });
        }
    };

    return (
        <div>
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Items</label>
                    </div>
                    {/* Dropdown for selecting an item */}
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Shirt" name="Shirt">Shirt</option>
                        <option value="Dress" name="Dress">Dress</option>
                        <option value="Jeans" name="Jeans">Jeans</option>
                        <option value="Dinner set" name="Dinner set">Dinner set</option>
                        <option value="Bags" name="Bags">Bags</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Quantity</label>
                    </div>
                    {/* Dropdown for selecting an action (Add or Reduce) */}
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <span className="eco" style={{ marginLeft: '2rem', marginRight: '8px' }}></span>

                    {/* Input field for entering quantity */}
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={quantity}
                        style={{ size: 10 }}
                        onChange={(event) => setQuantity(event.target.value)}>
                    </input>

                    {/* Button to submit the form */}
                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ItemSelected;
