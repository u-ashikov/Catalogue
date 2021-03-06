import React, { Component } from 'react';
import '../../styles/categories.css';

export default class Category extends Component {
    render() {
        return (
            <div className='category'
                 onClick={this.props.onClickHandler}
            >
                <img src={this.props.picture} alt={this.props.categoryName} className="image"/>
                <div className="overlay">
                    <div className="text">{this.props.categoryName.toUpperCase()}</div>
                </div>
            </div>
        )
    }
}
