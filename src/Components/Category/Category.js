import React, { Component } from 'react';

export default class Category extends Component {
    render() {
        return (
            <div className='category'
                 onClick={this.props.onClickHandler}
            >
                <h1>{this.props.categoryName}</h1>
            </div>
        )
    }
}
