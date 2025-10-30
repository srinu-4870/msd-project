import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Faqs from './Faqs';

const Gifts = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Gift Cards</h1>
      <p>Send your loved ones the perfect gift for every occasion.</p>
      <Row className="g-4">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
            <Card.Body>
              <Card.Title>₹500 Gift Card</Card.Title>
              <Card.Text>Perfect for movie lovers and weekend entertainment.</Card.Text>
              <Button variant="success">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/400x200" />
            <Card.Body>
              <Card.Title>₹1000 Gift Card</Card.Title>
              <Card.Text>Ideal for birthdays, anniversaries, and special events.</Card.Text>
              <Button variant="success">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Faqs/>
    </Container>
  );
};

export default Gifts;