import React, {Component} from 'react';
import ProductDetails from '../SingleProduct/ProductDetails';
import ProductModel from '../../../Models/ProductModel';
import {browserHistory} from 'react-router';
import ItemsManager from '../../../utilities/ItemsManager';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';


export default class ProductDetailsController extends Component {
    constructor(props) {
        super(props);
        this.state={
            'productInfo':'',
            disabled:false
        }
    }

    componentDidMount() {
        let _self=this;
        let uriName=this.props.location.pathname.split('/')[1];
        ProductModel.getSingleProduct(uriName,this.props.params.productID)
            .then(function (product) {
                if (Number(product.quantity)===0) {
                    _self.setState({
                        disabled:true
                    })
                } else {
                    _self.setState({
                        disabled:false
                    })
                }
                _self.setState({'productInfo':product});
            })
    }

    render() {
        if (!this.state.productInfo) {
            return null;
        }

        if (this.state.productInfo!=='') {
            return (
                <ProductDetails
                    id={this.props.params.productID}
                    name={this.state.productInfo.name}
                    code={this.state.productInfo.code}
                    description={this.state.productInfo.description}
                    price={this.state.productInfo.price}
                    size={this.state.productInfo.size}
                    quantity={this.state.productInfo.quantity}
                    picture={`/pictures/${this.props.location.pathname.split('/')[1]}/${this.state.productInfo.code}.jpg`}
                    disableButton={this.state.disabled}
                    handlePurchase={this.handlePurchase.bind(this,this.state.productInfo)}
                />
            )
        }
    }

    handlePurchase(product,event) {
        event.preventDefault();
        let category=this.props.location.pathname.split('/')[1];
        if (!Object.keys(ItemsManager.items[category]).includes(product._id)) {
            ItemsManager.items[category][product._id]={'product':product,'orderCount':1};
            ItemsManager.totalItems+=1;
            browserHistory.push('/shopping-cart');
        } else {
            Alert.info('This product is already in your cart!',
                {
                    position:'top-right',
                    effect:'flip',
                    timeout:3000,
                    offset:30
                }
            )
        }
    }
}
