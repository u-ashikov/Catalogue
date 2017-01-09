import React, {Component} from 'react';
import OrderInfo from '../Order/OrderInfo';
import ItemsManager from '../../utilities/ItemsManager';
import OrderModel from '../../Models/OrderModel';

export default class OrderInfoController extends Component {
    constructor(props) {
        super(props);
        this.state={
            fullName:'',
            email:'',
            phone:'',
            address:''
        }
    }
    render() {
        return (
            <OrderInfo
                fullName={this.state.fullName}
                email={this.state.email}
                phone={this.state.phone}
                address={this.state.address}
                onChangeHandler={this.onChangeHandler.bind(this)}
                onSubmitHandler={this.submitOrder.bind(this)}
            />
        )
    }

    onChangeHandler(event) {
        let newState={};
        newState[event.target.name]=event.target.value;
        this.setState(newState);
    }

    submitOrder(event) {
        event.preventDefault();
        console.dir(this.state);
    }
}
