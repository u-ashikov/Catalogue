import React, {Component} from 'react';

export default class CategoryQuantitiesView extends Component {
    render() {
        return (
            <ul>
                {this.props.products.map(product=><li>{product.name}</li>)}
            </ul>
        )
    }
}
