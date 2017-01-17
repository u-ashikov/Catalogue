import React, {Component} from 'react';
import AddItemForm from './AddItemForm';
import ProductModel from '../../../../Models/ProductModel';
import {browserHistory} from 'react-router';
import Alert from 'react-s-alert';

export default class AddItemController extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            description:'',
            code:'',
            size:'',
            quantity:'',
            price:'',
            category:''
        }
    }


    render() {
        if (sessionStorage.getItem('authToken') && sessionStorage.getItem('userId')==='5877a8ee350958684b335a93')
            return (
                <AddItemForm
                    onSubmitHandler={this.onFormSubmit.bind(this)}
                    onChangeHandler={this.onChangeHandler.bind(this)}
                />
            );
        return <h2>You don't have permission to view this section!</h2>
    }

    onChangeHandler(event) {
        let self=this;
        let newState={};
        if (event.target.name==='category') {
            newState[event.target.name]=event.target.value.toLowerCase();
        } else {
            newState[event.target.name]=event.target.value;
        }
        self.setState(newState);
    }


    onFormSubmit(event) {
        event.preventDefault();
        let productData={
            name:this.state.name,
            description:this.state.description,
            code:this.state.code,
            size:this.state.size,
            quantity:Number(this.state.quantity),
            price:Number(this.state.price).toFixed(2),
            orderCount:0
        };
        ProductModel.addProduct(this.state.category,productData)
            .then(function (response) {
                browserHistory.push('/home');
                Alert.success("Item added successfully!",{
                    position:'top-right',
                    effect:'flip',
                    offset:50,
                    timeout:3000
                });
            });
    }
}
