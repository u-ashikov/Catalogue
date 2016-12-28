import React, { Component } from 'react';
import '../../Products/Rings/rings.css';

export default class SingleProduct extends Component {
    render() {
        return (
            <figure>
                <img src={this.props.picture} alt="product"/>
                <figcaption>{this.props.title}</figcaption>
                    <span className="price">
                        {this.props.price}
                    </span>
                    <a className="button" onClick={this.props.onClickHandler}>Buy Now</a>
            </figure>
        )
    }
}
