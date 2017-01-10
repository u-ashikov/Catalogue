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
                            <th></th>
                            <th className="numCell">Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.keys(this.props.products).map(category=>Object.keys(this.props.products[category]).map(itemID=>
                                <tr key={itemID}>
                                    <td><img src={`/pictures/${category[0].toUpperCase()+category.slice(1)}/${this.props.products[category][itemID].product.code}.jpg`} width='92' height='92' alt={this.props.products[category][itemID].product.name}/></td>
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
                                        <div className="button remove"
                                                id={itemID.concat('-').concat(category)}
                                                onClick={this.props.onRemoveHandler}
                                        >
                                            X
                                        </div>
                                    </td>
                                    <td className="numCell">
                                        ${(Number(this.props.products[category][itemID].product.price)*Number(this.props.products[category][itemID].orderCount)).toFixed(2)}
                                    </td>
                                </tr>
                        )
                        )}
                        </tbody>
                    </table>
                    <div className="wrap">
                        <div className="button clear fleft" onClick={this.props.clearCart}>Clear Cart</div>
                    </div>
                    <div className="totals">
                        <table className="totaler">
                            <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>${this.props.calculateTotal}</td>
                            </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>${Number(this.props.shippingTax).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td>Grand total</td>
                                <td>${(Number(this.props.calculateTotal)+Number(this.props.shippingTax)).toFixed(2)}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div
                            className="button add fright"
                            onClick={this.props.onConfirmHandler}
                        >
                            Check out
                        </div>
                    </div>
                </div>
            }
        </div>
        )
    }
}
