import React, {Component} from 'react';
import  '../../styles/shopping-cart.css';

export default class ShoppingCart extends Component {
    render() {
        return (
        <div>
            <div className="folderTab clearfix">
                <h3>Shopping cart</h3>
            </div>
            <div className="botBorder clearfix">
                <table className="cart">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th className="numCell">Price</th>
                            <th>Quantity</th>
                            <th className="numCell">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(item=><tr key={item}>{item}</tr>)}
                    </tbody>
                </table>
                <div className="wrap">
                    <div className="button clear fleft">Clear Cart</div>
                    <div className="button wish fright">Update Cart</div>
                </div>
                <div className="totals">
                    <table className="totaler">
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>$0.00</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$0.00</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>$0.00</td>
                            </tr>
                            <tr>
                                <td>Grand total</td>
                                <td>$0.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="button add fright">
                        Check out
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
