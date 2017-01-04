import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart';
import ProductModel from '../../Models/ProductModel';
import ItemsManager from '../../utilities/ItemsManager';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';

export default class ShoppingCartController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'productsID': [],
            'products':[],
            'quantityValue':'1'
        }
    }

    componentDidMount() {
        let _self=this;
        let uriName=this.props.location.state.uri;
        let orderedProducts=ItemsManager.items;
        _self.setState({
            'productsID':[...orderedProducts]
        });
        let allOrderedProducts=[];
        for (let productId of orderedProducts) {
            ProductModel.getSingleProduct(uriName,productId)
                .then(function (product) {
                    console.dir(product);
                    allOrderedProducts.push(product);
                    _self.setState({
                        'products':[...allOrderedProducts]
                    })
                })
        }
    }

    render() {
        return (
            <ShoppingCart
                products={this.state.products}
                clearCart={this.clearCart.bind(this)}
                quantityValue={this.state.quantityValue}
                onChangeHandler={this.handleChange.bind(this)}
            />
        )
    }

    clearCart(event) {
        if (ItemsManager.items.length>0) {
            ItemsManager.items=[];
            this.setState({
                'productsID':[],
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

    handleChange(event) {
        event.preventDefault();
        let newState={};
        newState[event.target.name]=event.target.value;
        this.setState(newState);
    }
}
