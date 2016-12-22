import React, { Component } from 'react';

export default class SingleProduct extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}
