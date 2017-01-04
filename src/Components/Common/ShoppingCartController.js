import React, {Component} from 'react';
import ShoppingCart from './ShoppingCart';
import ItemsManager from '../../utilities/ItemsManager';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';

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
                clearCart={this.clearCart.bind(this)}
            />
        )
    }

    clearCart(event) {
        if (ItemsManager.items.length>0) {
            ItemsManager.items=[];
            this.setState({
                'productsID':[]
            });
            Alert.success('Item removed from cart!',{
                position:'top-right',
                effect:'flip',
                timeout:3000,
                offset:30
            })
        }
    }
}
