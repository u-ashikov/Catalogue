import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart';
import ItemsManager from '../../utilities/ItemsManager';
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
                clearCart={this.clearCart.bind(this)}
                onChangeHandler={this.onChangeHandler.bind(this)}
            />
        )
    }

    clearCart(event) {
        if (ItemsManager.totalItems>0) {
            this.clearItemManager();
            this.setState({
                'products':[]
            });
            Alert.success('Items removed from cart!',{
                position:'top-right',
                effect:'flip',
                timeout:3000,
                offset:30
            })
        }
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
}
