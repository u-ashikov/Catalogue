import React, {Component} from 'react';
import '../../../../styles/add-item-form.css';

export default class AddItemForm extends Component {
    render() {
        return (
            <div id="form-holder" className="container">
                <form
                    className="add-item"
                    onSubmit={this.props.onSubmitHandler}
                >
                    <h1 className="heading">Add item form</h1>
                    <hr/>
                    <div className="form-group">
                        <label>Name: </label>
                        <input
                            name='name'
                            className="form-control"
                            type="text"
                            onChange={this.props.onChangeHandler}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea
                            name="description"
                            className="form-control"
                            type="text"
                            onChange={this.props.onChangeHandler}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Code: </label>
                        <input
                            name="code"
                            className="form-control"
                            type="text"
                            onChange={this.props.onChangeHandler}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Size: </label>
                        <input
                            name="size"
                            className="form-control"
                            type="text"
                            onChange={this.props.onChangeHandler}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input
                            name="quantity"
                            className="form-control"
                            type="number"
                            onChange={this.props.onChangeHandler}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input
                            name="price"
                            className="form-control"
                            onChange={this.props.onChangeHandler}
                            required
                        />
                    </div>
                    <div>
                        <label>Category: </label>
                        <select
                            name="category"
                            className="form-control"
                            onChange={this.props.onChangeHandler}
                            required
                        >
                            <option>Necklaces</option>
                            <option>Rings</option>
                            <option>Bracelets</option>
                            <option>Earrings</option>
                        </select>
                    </div>
                    <div>
                        <button
                            type="submit"
                        >
                            Add Item
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
