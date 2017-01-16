import React, {Component} from 'react';
import '../../../../styles/customers-orders.css';

export default class ReceivedOrder extends Component {
    render() {
        return (
            <div id="orders-view" className="container">
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
                    {Object.keys(this.props.orders).map(key=>this.props.orders[key].map(singleOrder=><tr key={singleOrder._id}>
                        <td>Image</td>
                        <td>{singleOrder.category}</td>
                        <td>{singleOrder.name}</td>
                        <td>{singleOrder.code}</td>
                        <td>{singleOrder.orderCount}</td>
                        <td>{Number(singleOrder.price).toFixed(2)}</td>
                        <td>{Number(singleOrder.totalPrice).toFixed(2)}</td>
                        <td>{singleOrder.customerName}</td>
                        <td>{singleOrder.deliveryAddress}</td>
                        <td>{singleOrder.customerEmail}</td>
                        <td>{singleOrder.customerPhone}</td>
                        <td><button>Process</button></td>
                    </tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}
