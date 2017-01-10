import React, { Component } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import ProductModel from '../../../Models/ProductModel';
import {browserHistory} from 'react-router';
import '../../../styles/products.css';

export default class NecklacesController extends Component {
    constructor(props) {
        super(props);
        this.state={
            'necklaces':[]
        }
    }

    componentDidMount() {
        let _self=this;
        ProductModel.getAllProducts('necklaces')
            .then(function (necklaces) {
                let allNecklaces=[];
                for (let necklace of necklaces) {
                    allNecklaces.push(
                        <SingleProduct
                            key={necklace._id}
                            id={necklace._id}
                            picture={`/pictures/necklaces/${necklace.code}.jpg`}
                            price={Number(necklace.price).toFixed(2)}
                            title={necklace.title}
                            onClickHandler={_self.onClickHandler.bind(this,necklace._id)}
                        />
                    )
                }
                _self.setState({
                    'necklaces':allNecklaces
                });
            })
    }

    render() {
        return (
            <div className="content">
                <div className="section-title">
                    <span className="tag tag-colored">Necklaces</span>
                </div>
                <div id="wrap">
                    <div id="columns" className="columns_4">
                        {this.state.necklaces}
                    </div>
                </div>
            </div>
        )
    }

    onClickHandler(id,event) {
        event.preventDefault();
        browserHistory.push('/necklaces/'+id);
    }
}
