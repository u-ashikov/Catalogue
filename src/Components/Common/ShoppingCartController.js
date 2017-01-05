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
            'orderedProducts':{}
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
                    allOrderedProducts.push(product);
                    //console.dir(allOrderedProducts);
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
        let newState={};
        let currentChosenProducts=this.state.orderedProducts;
        currentChosenProducts[event.target.name]=event.target.value;
        this.setState({
            'orderedProducts':currentChosenProducts
        });
        console.dir(this.state);
    }
}
