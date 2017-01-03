import React, { Component } from 'react';
import '../../Products/Rings/rings.css';

export default class SingleProduct extends Component {
    render() {
        return (
            <figure>
                <img className="product-pic" src={this.props.picture} alt="product" width='190' height='280' onClick={this.props.onClickHandler}/>
                <figcaption>{this.props.title}</figcaption>
                    <span className="price">
                        {this.props.price}
                    </span>
                    <a className="button" onClick={this.props.onClickHandler}>More Info</a>
            </figure>
        )
    }
}
