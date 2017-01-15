import React, {Component} from 'react';
import ReceivedOrder from './ReceivedOrder';
import OrderModel from '../../../../Models/OrderModel';

export default class ReceivedOrderController extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        OrderModel.getAllOrders()
            .then(function (response) {
                console.dir(response);
            });
    }

    render() {
        return (
            <ReceivedOrder/>
        )
    }
}
