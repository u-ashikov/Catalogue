import React,{Component} from 'react';
import '../../../styles/product-details.css';

export default class ProductDetails extends Component {
    render() {
        return (
            <div className="container">
                <article className="item-pane">
                    <div className="item-preview">
                        <img className="product" src={this.props.picture} alt="product" width='190' height='280'/>
                        <span className="sale">SOLD OUT!</span>
                    </div>
                    <div className="item-details">
                        <h1>{this.props.name}</h1>
                        <div className="pane__section">
                            <p>
                                {this.props.description}
                            </p>
                        </div>
                        <div className="pane__section">
                            <dl>
                                <dt>Product name</dt>
                                <dd>{this.props.name}</dd>
                                <dt>Product code</dt>
                                <dd>{this.props.code}</dd>
                                <dt>Product size</dt>
                                <dd>{this.props.size}</dd>
                                <dt>Quantity left</dt>
                                <dd>{this.props.quantity}</dd>
                            </dl>
                        </div>
                        <div className="pane__section clearfix">
                            <span className="item-price">{this.props.price}<span className="item-price__units"> лв.</span></span>
                            <button
                                className="button buy-button"
                                disabled={this.props.disableButton}
                                onClick={this.props.handlePurchase}
                            >Purchase</button>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}
