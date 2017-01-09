import React, {Component} from 'react';
import OrderInfo from '../Order/OrderInfo';
import ItemsManager from '../../utilities/ItemsManager';
import OrderModel from '../../Models/OrderModel';
import ProductModel from '../../Models/ProductModel';

import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';

import {browserHistory} from 'react-router';

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
        for (let category of Object.keys(ItemsManager.items)) {
            let itemsByCategory=Object.keys(ItemsManager.items[category]);
            for (let itemID of itemsByCategory) {
                let productInfo=ItemsManager.items[category][itemID].product;
                let orderCount=ItemsManager.items[category][itemID].orderCount;
                let data={
                    category:category,
                    productId:productInfo._id,
                    name:productInfo.name,
                    code:productInfo.code,
                    description:productInfo.description,
                    price:productInfo.price,
                    orderCount:orderCount,
                    totalPrice:(Number(productInfo.price)*Number(orderCount)).toFixed(2),
                    customerName:this.state.fullName,
                    customerId:sessionStorage.getItem('userId'),
                    customerEmail:this.state.email,
                    customerPhone:this.state.phone,
                    deliveryAddress:this.state.address
                };
                let updatedProduct={
                    name:productInfo.name,
                    price:productInfo.price,
                    description:productInfo.description,
                    code:productInfo.code,
                    size:productInfo.size,
                    quantity:Number(productInfo.quantity)-Number(orderCount),
                    orderCount:Number(orderCount)
                };
                OrderModel.postOrder(data)
                    .then(function (response) {
                        Alert.success('Your order has been sent successfully! We will contact you for confirmation!',{
                            position:'top',
                            effect:'flip',
                            timeout:4000
                        });
                        browserHistory.push('/home');
                    });
                ProductModel.updateSingleProducts(category,productInfo._id,updatedProduct)
                    .then(function (response) {
                    });
            }
        }
    }
}
