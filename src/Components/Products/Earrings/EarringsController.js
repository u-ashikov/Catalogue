import React, { Component } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import ProductModel from '../../../Models/ProductModel';
import {browserHistory} from 'react-router';
import '../../../styles/products.css';

export default class EarringsController extends Component {
    constructor(props) {
        super(props);
        this.state={
            'earrings':[]
        }
    }

    componentDidMount() {
        let _self=this;
        ProductModel.getAllProducts('earrings')
            .then(function (earrings) {
                let allEarrings=[];
                for (let earring of earrings) {
                    allEarrings.push(
                        <SingleProduct
                            key={earring._id}
                            id={earring._id}
                            picture={`/pictures/earrings/${earring.code}.jpg`}
                            title={earring.name}
                            price={Number(earring.price).toFixed(2)}
                            onClickHandler={_self.onClickHandler.bind(this,earring._id)}
                        />
                    )
                }
                _self.setState({
                    'earrings':allEarrings
                });
            });
    }

    render() {
        return (
            <div className="content">
                <div className="section-title">
                    <span className="tag tag-colored">Earrings</span>
                </div>
                <div id="wrap">
                    <div id="columns" className="columns_4">
                        {this.state.earrings}
                    </div>
                </div>
            </div>
        )
    }

    onClickHandler(id,event) {
        browserHistory.push('/earrings/'+id);
    }
}
