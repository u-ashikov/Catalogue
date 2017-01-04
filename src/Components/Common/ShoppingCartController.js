import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart';
import ItemsManager from '../../utilities/ItemsManager';

export default class ShoppingCartController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'productsID': []
        }
    }

    componentDidMount() {
        let _self=this;
        let orderedProducts=ItemsManager.items;
        _self.setState({
            'productsID':[...orderedProducts]
        });
    }

    render() {
        return (
            <ShoppingCart
                products={this.state.productsID}
            />
        )
    }
}
