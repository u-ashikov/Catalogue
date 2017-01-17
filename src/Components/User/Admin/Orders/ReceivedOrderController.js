import React, {Component} from 'react';
import ReceivedOrder from './ReceivedOrder';
import OrderModel from '../../../../Models/OrderModel';
import {browserHistory} from 'react-router';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';

export default class ReceivedOrderController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'orders': {},
            'loaded':false
        }
    }

    componentDidMount() {
        let _self=this;
        OrderModel.getAllOrders()
            .then(function (orders) {
                _self.setState({
                    'loaded':true
                });
                let ordersByCustomers={};
                for (let order of orders) {
                    if (order.status==='processed') {
                        continue;
                    }
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
            });
    }

    render() {
        if (this.state.loaded) {
            if (Object.keys(this.state.orders).length===0) {
                return (
                    <div id="no-orders" className="container">
                        <p>There are no unprocessed orders!</p>
                    </div>
                )
            }
            return (
                <ReceivedOrder
                    orders={this.state.orders}
                    onClickHandler={this.processOrder.bind(this)}
                />
            )
        }
        return null;
    }

    processOrder(event) {
        let _self=this;
        let customerId=event.target.name;
        let allOrders=this.state.orders;
        let processedOrders=allOrders[customerId];
        delete allOrders[customerId];
        _self.setState({
            'orders':allOrders
        });
        for (let order of processedOrders) {
            let data={
                category:order.category,
                productId:order.productId,
                name:order.name,
                code:order.code,
                description:order.description,
                price:order.price,
                orderCount:order.orderCount,
                totalPrice:order.totalPrice,
                customerName:order.customerName,
                customerId:order.customerId,
                customerEmail:order.customerEmail,
                customerPhone:order.customerPhone,
                deliveryAddress:order.deliveryAddress,
                status:'processed'
            };
            OrderModel.updateOrderStatus(order._id,data);
        }
        browserHistory.push('/all-orders');
        Alert.success("The order was processed successfully!",{
            position:'top-right',
            effect:'flip',
            offset:50,
            timeout:3000
        });
    }
}
