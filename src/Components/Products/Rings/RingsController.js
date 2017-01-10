import React, { Component } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import '../../../styles/products.css';
import {browserHistory} from 'react-router';

import ProductModel from '../../../Models/ProductModel';

export default class RingsController extends Component {
    constructor(props) {
        super(props);
        this.state={
            rings:[]
        }
    }

    componentDidMount() {
        let _self=this;
        ProductModel.getAllProducts('rings')
            .then(function (rings) {
                let allRings=[];
                for (let ring of rings) {
                    allRings.push(<SingleProduct
                        key={ring._id}
                        id={ring._id}
                        title={ring.name}
                        picture={`/pictures/rings/${ring.code}.jpg`}
                        price={ring.price}
                        onClickHandler={_self.onClickHandler.bind(this,ring._id)}
                    />)
                }
                _self.setState({rings:allRings});
            })
    }

    render() {
        return (
        <div className="content">
            <div className="section-title">
                <span className="tag tag-colored">Rings</span>
            </div>
            <div id="wrap">
                <div id="columns" className="columns_4">
                    {this.state.rings}
                </div>
            </div>
        </div>
        )
    }

    onClickHandler(id,event) {
        event.preventDefault();
        browserHistory.push('/rings/'+id);
    }
}
