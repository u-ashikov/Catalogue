import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart';
import ItemsManager from '../../utilities/ItemsManager';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';

export default class ShoppingCartController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'products':[]
        }
    }

    componentDidMount() {
        let _self=this;
        let allUriNames=Object.keys(ItemsManager.items);
        let allOrderedProducts=[];
        for (let category of allUriNames) {
            let allProductsId=Object.keys(ItemsManager.items[category]);
            for (let productID of allProductsId) {
                allOrderedProducts.push(ItemsManager.items[category][productID]);
                _self.setState({
                    'products':[...allOrderedProducts]
                });
            }
        }
    }

    render() {
        return (
            <ShoppingCart
                products={this.state.products}
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
        let currentChosenProducts=this.state.products;
        currentChosenProducts[event.target.name]=event.target.value;
        this.setState({
            'allOrderedProducts':currentChosenProducts
        });
        console.dir(this.state);
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
