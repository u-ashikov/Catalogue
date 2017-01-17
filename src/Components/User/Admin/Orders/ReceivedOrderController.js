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
                let sortedOrders={};
                let sortedKeys=Object.keys(ordersByCustomers).sort(function (customerA,customerB) {
                    let dateA=new Date(ordersByCustomers[customerA][0]._kmd.ect);
                    let dateB=new Date(ordersByCustomers[customerB][0]._kmd.ect);
                    return dateA-dateB;
                });
                for (let key of sortedKeys) {
                    sortedOrders[key]=ordersByCustomers[key];
                }
                _self.setState({
                    'orders':sortedOrders
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
