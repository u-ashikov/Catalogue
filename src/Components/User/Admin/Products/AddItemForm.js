import React, {Component} from 'react';

export default class AddItemForm extends Component {
    render() {
        return (
            <form>
                <div>
                    <label>Name: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Description: </label>
                    <textarea type="text"/>
                </div>
                <div>
                    <label>Code: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Size: </label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Quantity: </label>
                    <input type="number"/>
                </div>
                <div>
                    <label>Price: </label>
                    <input type="number"/>
                </div>
                <div>
                    <label>Category: </label>
                    <select>
                        <option>Necklaces</option>
                        <option>Rings</option>
                        <option>Bracelets</option>
                        <option>Earrings</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Add Item</button>
                </div>
            </form>
        )
    }
}
