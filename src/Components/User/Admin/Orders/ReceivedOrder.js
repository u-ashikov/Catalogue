import React, {Component} from 'react';
import '../../../../styles/customers-orders.css';

export default class ReceivedOrder extends Component {
    render() {
        return (
            <div id="orders-view" className="container">
                    {Object.keys(this.props.orders).map(key=>
                    <div className="order-holder">
                        <div className="order-info">
                            <br/>
                            <span><b>Customer:</b> {this.props.orders[key][0].customerName}</span>
                            <span><b>Address:</b> {this.props.orders[key][0].deliveryAddress}</span>
                            <span><b>Phone:</b> {this.props.orders[key][0].customerPhone}</span>
                            <span><b>Email:</b> {this.props.orders[key][0].customerEmail}</span>
                            <span><button id="process-button" className="btn btn-success">Process Order</button></span>
                        </div>
                        <table id="customer-orders" className="table table-hover">
                            <thead>
                            <tr>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Code</th>
                                <th>Order Count</th>
                                <th>Price</th>
                                <th>Total</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.orders[key].map(order=>
                            <tr key={order._id}>
                                <td><img alt={order.name} width='90' height='90' src={`/pictures/${order.category}/${order.code}.jpg`}/></td>
                                <td>{order.category}</td>
                                <td>{order.name}</td>
                                <td>{order.code}</td>
                                <td>{order.orderCount}</td>
                                <td>{order.price}</td>
                                <td>{order.totalPrice}</td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    )}
            </div>
        )
    }
}
