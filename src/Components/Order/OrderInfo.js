import React, {Component} from 'react';
import '../../styles/order-info.css';

export default class OrderInfo extends Component {
    render() {
        return (
            <form className="cf" onSubmit={this.props.onSubmitHandler}>
                <div className="header">
                    Delivery info
                </div>
                <div className="half left cf">
                    <input
                        name="fullName"
                        id="input-name"
                        type="text"
                        value={this.props.fullName}
                        onChange={this.props.onChangeHandler}
                        placeholder="Full name*"
                        required
                    />
                    <input
                        name="email"
                        id="input-email"
                        type="email"
                        value={this.props.email}
                        onChange={this.props.onChangeHandler}
                        placeholder="Email*"
                        required
                    />
                    <input
                        name="phone"
                        id="input-phone"
                        type="text"
                        value={this.props.phone}
                        onChange={this.props.onChangeHandler}
                        placeholder="Phone number*"
                        required
                    />
                    <br/>
                    <span className="require-info">
                        The fields market with * are required!
                    </span>
                </div>
                <div className="half right cf">
                    <textarea
                        name="address"
                        type="text"
                        id="input-message"
                        value={this.props.address}
                        onChange={this.props.onChangeHandler}
                        placeholder="Delivery address*"
                        required
                    >
                    </textarea>
                </div>
                <input type="submit" value="CONFIRM ORDER" id="input-submit"/>
            </form>
            )
    }
}
