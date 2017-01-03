import React,{Component} from 'react';

export default class ProductDetails extends Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Code: {this.props.code}</p>
                <p>Description: {this.props.description}</p>
                <p>Price: {this.props.price}</p>
                <p>Size: {this.props.size}</p>
            </div>
        )
    }
}
