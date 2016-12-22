import React, { Component } from 'react';
import '../../styles/categories.css';
import {browserHistory} from 'react-router';
import Category from '../Category/Category';

export default class HomeView extends Component{
    constructor(props) {
        super(props);
        this.categories=['rings','bracelets','earrings'];
    }

    render() {
        return (
        <div className="container">
                {!sessionStorage.getItem('username') ?
                    <div className="jumbotron">
                        <h1>Welcome to our Catalog Page!</h1>
                        <h2>Please login or register!</h2>
                    </div>
                    :
                    <div>
                        <h1>All Products</h1>
                        <div className="holder">
                            {this.categories.map((category,i)=><Category key={i} categoryName={category} onClickHandler={this.onClickHandler.bind(this)}
                            />)}
                        </div>
                    </div>
                }
            </div>
        )
    }

    onClickHandler(event) {
        let productType=event.target.innerText;
        browserHistory.push('/'+productType);
    }
}
