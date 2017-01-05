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
            'allOrderedProducts':{}
        }
    }

    componentDidMount() {
        let _self=this;
        console.dir(ItemsManager);
        let uriName=ItemsManager.uri;
        let orderedProducts=ItemsManager.items;
        _self.setState({
            'productsID':[...orderedProducts]
        });
        let allOrderedProducts=[];
        for (let productId of orderedProducts) {
                ProductModel.getSingleProduct(uriName,productId)
                    .then(function (product) {
                        allOrderedProducts.push(product);
                        _self.setState({
                            'products':[...allOrderedProducts]
                        });
                        console.dir(_self.state);
                    })
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

    onChangeHandler(event) {
        event.preventDefault();
        let currentChosenProducts=this.state.allOrderedProducts;
        currentChosenProducts[event.target.name]=event.target.value;
        this.setState({
            'allOrderedProducts':currentChosenProducts
        });
        console.dir(this.state);
    }
}
