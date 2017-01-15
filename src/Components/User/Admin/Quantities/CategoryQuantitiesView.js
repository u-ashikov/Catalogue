import React, {Component} from 'react';
import '../../../../styles/category-quantites.css';

export default class CategoryQuantitiesView extends Component {
    render() {
            return (
                <div id="order" className="container">
                    <h2>{this.props.categoryName.toUpperCase()[0]+this.props.categoryName.slice(1)}</h2>
                    <table id="orders-table" className="table table-hover">
                        <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Code</th>
                            <th>Price</th>
                            <th>Quantity Left</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.products.map(product=>
                            <tr key={product._id}>
                                <td><img alt={product.name} src={`pictures/${this.props.categoryName}/${product.code}.jpg`} width='92' height='92'/></td>
                                <td>{product.name}</td>
                                <td>{product.code}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            )
        }
}
