import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col, Button, FormGroup, FormControl, FormLabel, FormCheck } from "react-bootstrap";
import { Link} from 'react-router-dom';

class CheckOut extends Component {
    render() {
        return (
            <Container>
                <h1>Check Out</h1>
                <hr></hr>
                <Row>
                    <Col>
                        <h2>Payment Information</h2>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        Name of Card
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                    <FormControl
                                        type="text"
                                        name="Name of Card"
                                        placeholder="Name of Card"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        Card Number
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                    <FormControl
                                        type="text"
                                        name="Card Number"
                                        placeholder="XXXX XXXX XXXX XXXX"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        Expiration Date
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                <Row>
                                    <Col>
                                        <FormControl
                                            as='select'
                                            name="MM">
                                            <option>MM</option>
                                        </FormControl>
                                    </Col>
                                    <Col>
                                    <FormControl
                                            as='select'
                                            name="YY">
                                            <option>YY</option>
                                        </FormControl>
                                    </Col>
                                </Row>
      
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        CVV
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                    <FormControl
                                        type="text"
                                        name="CVV"
                                        placeholder="CVV"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                    <Col>
                        <h2>Shipping Address</h2>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        Full Name
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                    <FormControl
                                        type="text"
                                        name="Full Name"
                                        placeholder="Full Name"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        Address
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                    <FormControl
                                        type="text"
                                        name="Address"
                                        placeholder="Address"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        Apt/suite/etc
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                    <FormControl
                                        type="text"
                                        name="Apt/suite/etc"
                                        placeholder="Apt/suite/etc"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        City
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                    <FormControl
                                        type="text"
                                        name="City"
                                        placeholder="City"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        Country
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                    <FormControl
                                        as='select'
                                        name="Country">
                                        <option>Country</option>
                                    </FormControl>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        State
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                    <FormControl
                                        as='select'
                                        name="State">
                                        <option>State</option>
                                    </FormControl>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col lg={5}>
                                    <FormLabel>
                                        Zip Code
                                    </FormLabel>
                                </Col>
                                <Col lg={7}>
                                    <FormControl
                                        type="text"
                                        name="Zip Code"
                                        placeholder="Zip Code"
                                    />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup className="checkbox">
                            <Row>
                                <Col lg={5}>

                                </Col>
                                <Col lg={7}>
                                    <FormCheck 
                                        type="checkbox"
                                        label="Billing address same as shipping"/>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Row>
                <hr></hr>
                <Link to='/OrderComplete'>
                    <Button className='btnToCheckOut' type='submit'>Place Order</Button>
                </Link>
            </Container>
        );
    }
}

export default CheckOut;