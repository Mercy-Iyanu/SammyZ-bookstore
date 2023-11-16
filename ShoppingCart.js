import React, { Component } from 'react';
import Product from './Product';

export default class ShoppingCart extends Component {

    state = {
        products: [
            {
                id: 1,
                productName: 'Atomic Habits',
                author: 'James Clear',
                price: 300,
                quantity: 0
            },
            {
                id: 2,
                productName: 'How to Infulence Others',
                author: 'Napoleon Hill',
                price: 255,
                quantity: 0
            },
            {
                id: 3,
                productName: 'Gifted Hands',
                author: 'Ben Carson',
                price: 170,
                quantity: 0
            },
            {
                id: 4,
                productName: 'Good Morning',
                author: 'Mandy Robertson',
                price: 100,
                quantity: 0
            },
            {
                id: 5,
                productName: 'Sell like Crazy',
                author: 'Timothy Cook',
                price: 300,
                quantity: 0
            },
            {
                id: 6,
                productName: 'Winning wins',
                author: 'Andrea Gomez',
                price: 350,
                quantity: 0
            },
            {
                id: 7,
                productName: 'Becoming',
                author: 'Michelle Obama',
                price: 140,
                quantity: 0
            },
            {
                id: 8,
                productName: 'Jewish Phenomenon',
                author: 'Jakob Benz',
                price: 450,
                quantity: 0
            },
            {
                id: 9,
                productName: 'Mr. President',
                author: 'George Bush',
                price: 230,
                quantity: 0
            },
            {
                id: 10,
                productName: 'Act Like You',
                author: 'Friendz Polly',
                price: 310,
                quantity: 0
            }
        ],
    };

    render() {
        return (
            <div className='container-fluid'>
                <h5>Shopping Cart</h5>

                <div className='row'>
                    {this.state.products.map((prod) => {
                        return (
                            <Product
                                key={prod.id}
                                product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDrecement}>
                                <button className='btn btn-primary'>Buy Now</button>
                            </Product>
                        );
                    })}
                </div>
            </div>
        )
    }
    handleIncrement = (product) => {
        console.log('handleIncrement', product);
    }

    handleDrecement = (product) => {
        console.log('handleDecrement', product);
    }
}
