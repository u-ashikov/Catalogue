import React, {Component} from 'react';
import CategoryQuantitiesView from './CategoryQuantitiesView';
import ProductModel from '../../../../Models/ProductModel';

export default class NecklacesQuantitiesController extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
            category:''
        }
    }

    componentDidMount() {
        let _self=this;
        let category=this.props.location.pathname.split('-')[0].slice(1);
        _self.setState({
            category:category
        });
        ProductModel.getAllProducts(category)
            .then(function (products) {
                let allProducts=[...products];
                _self.setState({
                    'products':allProducts,
                });
            });
    }

    render() {
        return (
            <CategoryQuantitiesView
                products={this.state.products}
                categoryName={this.state.category}
            />
        )
    }
}
