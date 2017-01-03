import React, {Component} from 'react';
import ProductDetails from '../SingleProduct/ProductDetails';
import ProductModel from '../../../Models/ProductModel';

export default class ProductDetailsController extends Component {
    constructor(props) {
        super(props);
        this.state={
            'product':''
        }
    }

    componentDidMount() {
        let uriName=this.props.location.pathname.split('/')[1];
        ProductModel.getSingleProduct(uriName,this.props.params.productID)
            .then(function (product) {
                console.dir(product);
            })
    }

    render() {
        return (
            <ProductDetails
                id={this.props.params.productID}
            />
        )
    }
}
