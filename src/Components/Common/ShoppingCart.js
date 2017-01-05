import React, {Component} from 'react';
import  '../../styles/shopping-cart.css';

export default class ShoppingCart extends Component {
    render() {
        return (
        <div>
            <div className="folderTab clearfix">
                <h3>Shopping cart</h3>
            </div>
            {this.props.products.length===0 ?
                <div className="empty-cart">
                    Your shopping cart is empty!
                </div>
                :
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
                        {this.props.products.map(item=>
                            <tr key={item._id}>
                                <td>
                                    {item.name} - {item.description}
                                </td>
                                <td className="numCell">
                                    {item.price}
                                </td>
                                <td className="center">
                                    <input
                                        name={item.name}
                                        min="1"
                                        max={item.quantity}
                                        type="number"
                                        className="qty"
                                        onChange={this.props.onChangeHandler}
                                    />
                                </td>
                                <td>
                                    <div className="button remove">
                                        X
                                    </div>
                                </td>
                                <td className="numCell">
                                    ${Number(item.price)}
                                </td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                    <div className="wrap">
                        <div className="button clear fleft" onClick={this.props.clearCart}>Clear Cart</div>
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
                        <div className="button add fright">Check out</div>
                    </div>
                </div>
            }

        </div>
        )
    }
}
