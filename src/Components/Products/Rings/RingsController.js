import React, { Component } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';

export default class RingsController extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
        <div className="content">
            <div id="wrap">
                <div id="columns" className="columns_4">
                    <SingleProduct
                        title="Ring 1"
                        picture='/pictures/rings/ring1.jpg'
                        price="10.99"
                        onClickHandler={this.onClickHandler.bind(this)}
                    >
                    </SingleProduct>
                    <SingleProduct
                        title="Ring 1"
                        picture='/pictures/rings/ring4.jpg'
                        price="10.99"
                        onClickHandler={this.onClickHandler.bind(this)}
                    >
                    </SingleProduct>
                    <SingleProduct
                        title="Ring 1"
                        picture='/pictures/rings/ring3.jpg'
                        price="10.99"
                        onClickHandler={this.onClickHandler.bind(this)}
                    >
                    </SingleProduct>
                    <SingleProduct
                        title="Ring 1"
                        picture='/pictures/rings/ring5.jpg'
                        price="10.99"
                        onClickHandler={this.onClickHandler.bind(this)}
                    >
                    </SingleProduct>
                    <SingleProduct
                        title="Ring 1"
                        picture='/pictures/rings/ring5.jpg'
                        price="10.99"
                        onClickHandler={this.onClickHandler.bind(this)}
                    >
                    </SingleProduct>
                </div>
            </div>
        </div>
        )
    }

    onClickHandler(event) {
        event.preventDefault();
        alert('clicked');
    }
}
