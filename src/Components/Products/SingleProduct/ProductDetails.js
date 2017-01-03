import React,{Component} from 'react';

export default class ProductDetails extends Component {
    render() {
        return (
            <div>
                <h1>This is product with id:{this.props.id}</h1>
                <p>`Name: ${this.props.name}`</p>
            </div>
        )
    }
}
