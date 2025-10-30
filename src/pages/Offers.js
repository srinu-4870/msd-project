// Offers.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Offers = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Exciting Offers</h1>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>HDFC Bank Offer</Card.Title>
              <Card.Text>Get 20% off on all movie tickets when paid with HDFC Credit Cards.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>ICICI Debit Card</Card.Title>
              <Card.Text>Flat ₹100 off on your first transaction of the month.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <img src="https://via.placeholder.com/400x250" alt="Offer Banner" className="img-fluid rounded" />
        </Col>
      </Row>
    </Container>
  );
};

export default Offers;