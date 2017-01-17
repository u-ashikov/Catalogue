import React, {Component} from 'react';
import '../../../../styles/add-item-form.css';

export default class AddItemForm extends Component {
    render() {
        return (
            <div id="form-holder" className="container">
                <form className="add-item">
                    <h1 className="heading">Add item form</h1>
                    <hr/>
                    <div className="form-group">
                        <label>Name: </label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Code: </label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Size: </label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input className="form-control" type="number"/>
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input className="form-control" type="number"/>
                    </div>
                    <div>
                        <label>Category: </label>
                        <select className="form-control">
                            <option>Necklaces</option>
                            <option>Rings</option>
                            <option>Bracelets</option>
                            <option>Earrings</option>
                        </select>
                    </div>
                    <div>
                        <button className="btn btn-success" type="submit">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
}
