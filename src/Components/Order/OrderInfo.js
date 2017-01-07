import React, {Component} from 'react';
import '../../styles/order-info.css';

export default class OrderInfo extends Component {
    render() {
        return (
            <form className="cf">
                <div className="header">
                    Delivery info
                </div>
                <div className="half left cf">
                    <input
                        id="input-name"
                        type="text"
                        placeholder="Full name"
                    />
                    <input
                        id="input-email"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        id="input-phone"
                        type="text"
                        placeholder="Phone number"
                    />
                </div>
                <div className="half right cf">
                    <textarea name="message" type="text" id="input-message" placeholder="Delivery address"></textarea>
                </div>
                <input type="submit" value="CONFIRM ORDER" id="input-submit"/>
            </form>
            )
    }
}
