import React, {Component} from 'react';
import ProductDetails from '../SingleProduct/ProductDetails';
import ProductModel from '../../../Models/ProductModel';

export default class ProductDetailsController extends Component {
    constructor(props) {
        super(props);
        this.state={
            'productInfo':''
        }
    }

    componentDidMount() {
        let _self=this;
        let uriName=this.props.location.pathname.split('/')[1];
        ProductModel.getSingleProduct(uriName,this.props.params.productID)
            .then(function (product) {
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
                    picture={`/pictures/${this.props.location.pathname.split('/')[1]}/${this.state.productInfo.code}.jpg`}
                    handlePurchase={this.handlePurchase.bind(this,this.props.params.productID)}
                />
            )
        }
    }

    handlePurchase(id,event) {
        event.preventDefault();
        alert('Purchased!'+id);
    }
}
