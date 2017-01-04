import React, {Component} from 'react';

export default class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <p>This is my shopping cart!</p>
                {this.props.products.map(item=><p key={item}>{item}</p>)}
            </div>
        )
    }
}
