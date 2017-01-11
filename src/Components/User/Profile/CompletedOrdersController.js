import React, {Component} from 'react';
import CompletedOrder from '../Profile/CompletedOrder';
import OrderModel from '../../../Models/OrderModel';

export default class CompletedOrdersController extends Component {
    constructor(props) {
        super(props);
        this.state={
            orders:[]
        }
    }

    componentDidMount() {
        let _self=this;
        let queryData={
            "customerId":sessionStorage.getItem('userId')
        };
        OrderModel.getAllOrdersByUser(queryData)
            .then(function (orders) {
                console.dir(orders);
                let allOrders=[];
                for (let order of orders) {
                    allOrders.push(order);
                }
                _self.setState({
                    'orders':allOrders
                })
            })
    }

    render() {
        return (
            <CompletedOrder
                orders={this.state.orders}
            />
        )
    }
}
