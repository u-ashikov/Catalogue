import React, {Component} from 'react';

export default class CompletedOrder extends Component {
    render() {
        return (
            <div className="container">
                <h2>My Orders</h2>
                <p>These are Stamat orders!</p>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Ordered</th>
                            <th>Address</th>
                            <th>Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.props.orders).map(order=><tr key={order._id}>
                            <td>{order.category}</td>
                            <td><img src={`/pictures/${order.category}/${order.code}.jpg`} width='92' height='92' alt={order.name}/></td>
                            <td>{order.name}</td>
                            <td>{Number(order.price).toFixed(2)}</td>
                            <td>{order.orderCount}</td>
                            <td>{order.deliveryAddress}</td>
                            <td>{(Number(order.price)*Number(order.orderCount)).toFixed(2)}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
