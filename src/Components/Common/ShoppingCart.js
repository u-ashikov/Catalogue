import React, {Component} from 'react';
import  '../../styles/shopping-cart.css';
import ItemsManager from '../../utilities/ItemsManager';

export default class ShoppingCart extends Component {
    render() {
        let _self=this;
        return (
        <div>
            <div className="folderTab clearfix">
                <h3>Shopping cart</h3>
            </div>
            {ItemsManager.totalItems===0 ?
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
                        {Object.keys(this.props.products).map(category=>Object.keys(this.props.products[category]).map(itemID=>
                                <tr key={itemID}>
                                    <td>
                                        {this.props.products[category][itemID].product.name} - {this.props.products[category][itemID].product.description}
                                    </td>
                                    <td className="numCell">
                                        {Number(this.props.products[category][itemID].product.price).toFixed(2)}
                                    </td>
                                    <td className="center">
                                        <input
                                            name={itemID.concat('-').concat(category)}
                                            min="1"
                                            max={this.props.products[category][itemID].product.quantity}
                                            type="number"
                                            className="qty"
                                            value={Number(this.props.products[category][itemID].orderCount)}
                                            onChange={this.props.onChangeHandler}
                                        />
                                    </td>
                                    <td>
                                        <div className="button remove">
                                            X
                                        </div>
                                    </td>
                                    <td className="numCell">
                                        ${Number(this.props.products[category][itemID].product.price)*Number(this.props.products[category][itemID].orderCount)}
                                    </td>
                                </tr>
                        )
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
