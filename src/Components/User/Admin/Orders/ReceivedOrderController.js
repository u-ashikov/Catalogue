import React, {Component} from 'react';
import ReceivedOrder from './ReceivedOrder';
import OrderModel from '../../../../Models/OrderModel';

export default class ReceivedOrderController extends Component {
    constructor(props) {
        super(props);
        this.state={
            'orders':{}
        }
    }

    componentDidMount() {
        let _self=this;
        OrderModel.getAllOrders()
            .then(function (orders) {
                let ordersByCustomers={};
                for (let order of orders) {
                    if (!Object.keys(ordersByCustomers).includes(order.customerId)) {
                        ordersByCustomers[order.customerId]=[];
                    }
                    ordersByCustomers[order.customerId].push(order);
                }
                _self.setState({
                    'orders':ordersByCustomers
                });
                console.dir(_self.state);
            });
    }

    render() {
        return (
            <ReceivedOrder
                orders={this.state.orders}
            />
        )
    }
}
