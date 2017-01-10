import React, { Component } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import ProductModel from '../../../Models/ProductModel';
import '../../../styles/products.css';

export default class NecklacesController extends Component {
    constructor(props) {
        super(props);
        this.state={
            'necklaces':[]
        }
    }

    componentDidMount() {
        let _self=this;
        ProductModel.getAllProducts('necklaces')
            .then(function (necklaces) {
                console.dir(necklaces);
            })
    }

    render() {
        return (
            <SingleProduct
                title="Necklaces"
            >
                <p>Necklaces</p>
            </SingleProduct>
        )
    }
}
