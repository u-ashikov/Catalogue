import React, {Component} from 'react';

export default class AddItemForm extends Component {
    render() {
        return (
            <form>
                <label>Name</label>
                <input className="form-control"/>
            </form>
        )
    }
}
