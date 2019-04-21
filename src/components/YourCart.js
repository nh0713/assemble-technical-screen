import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link} from 'react-router-dom';

class YourCart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          subtotal: 0,
        };
      }

    render() {
        const cart = [{ sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }]
        let items = cart.map((item, i) =>
            <Row key={i} className='rowContent'>
                <Col xs={3} sm={3} md={3} lg={3}>
                    <div className='imgPlaceholder'></div>
                </Col>
                <Col xs={5} sm={5} md={5} lg={5}>
                    <Row> 
                        <Col lg={12}>
                            {item.name}
                        </Col>
                        <Col lg={12} className="sku">
                            SKU# {item.sku}
                        </Col>
                    </Row>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                    {item.quantity}
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                    ${(item.quantity * item.unitPrice).toFixed(2)}
                </Col>
            </Row>
        );
        let number = 0;
        let subtotal = cart.map((item) => {
            number += (item.unitPrice * item.quantity);

        });
        console.log(number);
        return (
            <Container>
                <Row className='rowContentLabelsTop'>
                    <Col xs={8} sm={8} md={8} lg={8}>
                        <h1>Your Cart</h1>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                        <p>Quantity</p>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                        <p>Price</p>
                    </Col>
                </Row>
                <hr></hr>
                {items}
                <hr></hr>
                <Row>
                    <Col xs={8} sm={8} md={8} lg={8}>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                        <p>Subtotal</p>
                    </Col>
                    <Col xs={2} sm={2} md={2} lg={2}>
                        <p>${number.toFixed(2)}</p>
                    </Col>
                </Row>
                <Link to='/CheckOut'>
                    <Button className='btnToCheckOut' type='submit'>Check Out</Button>
                </Link>
            </Container>
        );
    }
}

export default YourCart;