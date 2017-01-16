import React, {Component} from 'react';
import '../../../../styles/customers-orders.css';

export default class ReceivedOrder extends Component {
    render() {
        return (
            <div id="orders-view" className="container">
                    {Object.keys(this.props.orders).map(key=>
                    <div>
                        <div className="order-info">
                            <span>Customer: {this.props.orders[key][0].customerName}</span>
                            <span>Address: {this.props.orders[key][0].deliveryAddress}</span>
                            <span>Phone :{this.props.orders[key][0].customerPhone}</span>
                            <span>Email :{this.props.orders[key][0].customerEmail}</span>
                            <span><button className="process-button">Process</button></span>
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
                                <td>Image</td>
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
