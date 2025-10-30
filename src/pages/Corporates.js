import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Corporates = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">BookMyShow for Corporates</h1>
      <Row className="mb-4">
        <Col md={6}>
          <p>Engage your employees or clients with exclusive movie experiences, corporate gifting, and cinema advertising.</p>
        </Col>
        <Col md={6}>
          <img src="https://via.placeholder.com/400x250" alt="Corporate Banner" className="img-fluid rounded" />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <h3>Our Corporate Services</h3>
          <ul>
            <li>Bulk Ticket Booking</li>
            <li>Customized Movie Nights</li>
            <li>Corporate Gifting Solutions</li>
            <li>Cinema Advertising</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <h3>Contact Us</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your query" />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Corporates;