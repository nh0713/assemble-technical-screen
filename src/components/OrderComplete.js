import React, { Component } from 'react';
import '../App.css';

import { Container, Button } from "react-bootstrap";

import Header from './Header'

class OrderComplete extends Component {
    render() {
        const cart = [{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }]
        let items = cart.map((item) => {
            console.log(item.name);
            return item;
        });
        return (
            <Container className='orderComplete'>
                <h1>Order Complete</h1>
                <hr></hr>
                <div>
                    <p>
                        Hooray! Way to order those products.
                    </p>
                    <Button className='btnGoHome'>Go Home</Button>
                </div>
            </Container>
        );
    }
}

export default OrderComplete;