import React, {Component} from 'react';
import '../../../../styles/customers-orders.css';

export default class ReceivedOrder extends Component {
    render() {
        return (
            <div id="orders-view" className="container">
                    {Object.keys(this.props.orders).map(key=>
                    <div>
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
                                <th>Customer</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
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
                                <td>{order.customerName}</td>
                                <td>{order.deliveryAddress}</td>
                                <td>{order.customerEmail}</td>
                                <td>{order.customerPhone}</td>
                                <td><button>Process</button></td>
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
