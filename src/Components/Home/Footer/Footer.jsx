import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


import './Footer.css';

const Footer = () => {
    return (
        <section className='footer d-flex justify-content-center'>
                <Container className='footer-container'>
                    <Row className="justify-content-center vh-80 d-flex align-items-center mt-5">
                        <Col xs={12} md={6}>
                        <h1 className="text-center mb-4 text-white">Contact Us</h1>
                        <Form>
                            <Form.Group controlId="formName">
                            <Form.Label style={{color:'white'}}>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                            <Form.Label style={{color:'white'}}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>
                            <Form.Group controlId="formMessage">
                            <Form.Label style={{color:'white'}}>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                            </Form.Group>
                            <Button  style={{position: 'absolute', width: '120px', height: '48px', left: '659px'}} className='submit-button' variant="primary" type="submit">
                            Submit
                            </Button>
                        </Form>
                        </Col>
                    </Row>
                </Container>

 </section>

        
    );
};

export default Footer;