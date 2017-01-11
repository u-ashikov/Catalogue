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
        let queryData={
            "customerId":sessionStorage.getItem('userId')
        };
        OrderModel.getAllOrdersByUser(queryData)
            .then(function (response) {
                console.dir(response);
            })
    }

    render() {
        return (
            <CompletedOrder/>
        )
    }
}
