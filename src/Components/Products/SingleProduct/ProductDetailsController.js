import React, {Component} from 'react';
import ProductDetails from '../SingleProduct/ProductDetails';

export default class ProductDetailsController extends Component {
    render() {
        return (
            <ProductDetails
                id={this.props.params.ringID}
            />
        )
    }
}
