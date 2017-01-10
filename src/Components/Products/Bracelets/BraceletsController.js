import React, { Component } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import ProductModel from '../../../Models/ProductModel';
import {browserHistory} from 'react-router';
import '../../../styles/products.css';

export default class BraceletsController extends Component {
    constructor(props) {
        super(props);
        this.state={
            'bracelets':[]
        }
    }

    componentDidMount() {
        let _self=this;
        ProductModel.getAllProducts('bracelets')
            .then(function (bracelets) {
                let allBracelets=[];
                for (let bracelet of bracelets) {
                    allBracelets.push(
                        <SingleProduct
                            key={bracelet._id}
                            id={bracelet._id}
                            picture={`/pictures/bracelets/${bracelet.code}.jpg`}
                            title={bracelet.name}
                            price={Number(bracelet.price).toFixed(2)}
                            onClickHandler={_self.onClickHandler.bind(this,bracelet._id)}
                        />
                    )
                }
                _self.setState({
                    'bracelets':allBracelets
                })
            })
    }

    render() {
        return (
            <div className="content">
                <div className="section-title">
                    <span className="tag tag-colored">Bracelets</span>
                </div>
                <div id="wrap">
                    <div id="columns" className="columns_4">
                        {this.state.bracelets}
                    </div>
                </div>
            </div>
        )
    }

    onClickHandler(id,event) {
        browserHistory.push('/bracelets/'+id);
    }
}