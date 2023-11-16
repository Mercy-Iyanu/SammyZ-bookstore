import React, { Component } from 'react';

export default class Product extends Component {
    state = { product: this.props.product }

    render() {
        return (
            <div className='col-lg-6'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='text-muted'># {this.state.product.id}</div>
                        <h5>{this.state.product.productName}</h5>
                        <div>{this.state.product.author}</div>
                        <div>${this.state.product.price}</div>
                    </div>
                    <div className='card-footer'>
                        <div className='float-left'>
                            <span className='p-1'>{this.state.product.quantity}</span>
                            <div className='btn-group'>
                                <button className='btn btn-outline-success' onClick={() => { this.props.onIncrement(this.state.product) }}>+</button>
                                <button className='btn btn-outline-success' onClick={() => { this.props.onDecrement(this.state.product) }}>-</button>
                            </div>
                        </div>
                        <div className='float-right pt-3'>{this.props.children}</div>
                    </div>
                </div>
            </div>
        )
    }
}
