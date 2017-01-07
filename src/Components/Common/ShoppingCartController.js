import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart';
import ItemsManager from '../../utilities/ItemsManager';
import {browserHistory} from 'react-router';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';

export default class ShoppingCartController extends Component {
    constructor(props) {
        super(props);
        this.state = {
                'rings':{},
                'earrings':{},
                'necklaces':{},
                'bracelets':{}
        }
    }

    componentDidMount() {
        let _self=this;
        let categories=Object.keys(ItemsManager.items);
        for (let category of categories) {
            let orderedByCategory={};
            let allProductsId=Object.keys(ItemsManager.items[category]);
            for (let productID of allProductsId) {
                orderedByCategory[productID]=ItemsManager.items[category][productID].orderCount;
            }
            let newState={};
            newState[category]=orderedByCategory;
            _self.setState(newState);
        }
    }

    render() {
        return (
            <ShoppingCart
                products={ItemsManager.items}
                shippingTax='5'
                clearCart={this.clearCart.bind(this)}
                onChangeHandler={this.onChangeHandler.bind(this)}
                onRemoveHandler={this.removeItemFromCart.bind(this)}
                calculateTotal={this.calculateTotalSum()}
            />
        )
    }

    clearCart(event) {
        if (ItemsManager.totalItems>0) {
            this.clearItemManager();
            this.setState({
                'rings':{},
                'earrings':{},
                'necklaces':{},
                'bracelets':{}
            });
            Alert.success('Items removed from cart!',{
                position:'top-right',
                effect:'flip',
                timeout:3000,
                offset:30
            });
        }
    }

    removeItemFromCart(event) {
        let productID=event.target.id.split('-')[0];
        let category=event.target.id.split('-')[1];
        delete ItemsManager.items[category][productID];
        delete this.state[category][productID];
        ItemsManager.totalItems--;
        browserHistory.push('shopping-cart');
    }

    onChangeHandler(event) {
        event.preventDefault();
        let _self=this;
        let category=event.target.name.split('-')[1];
        let productID=event.target.name.split('-')[0];
        let allProductsByCategory=_self.state[category];
        allProductsByCategory[productID]=Number(event.target.value);
        let newState={};
        newState[category]=allProductsByCategory;
        _self.setState(newState);
        ItemsManager.items[category][productID].orderCount=event.target.value;
    }

    clearItemManager() {
        ItemsManager.items= {
            'rings': {},
            'earrings': {},
            'necklaces': {},
            'bracelets': {}
        };
        ItemsManager.totalItems=0;
    }

    calculateTotalSum() {
        let sum=0;
        Object.keys(this.state).map(category=>Object.keys(ItemsManager.items[category]).map(itemID=>sum+=(Number(ItemsManager.items[category][itemID].orderCount)*Number(ItemsManager.items[category][itemID].product.price)
            )
        ));
        return sum.toFixed(2);
    }
}
