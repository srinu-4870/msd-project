import React from "react";
import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap";
import Faqs from "./Faqs";

const Help = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Help Center</h1>
      <Row className="mb-4">
        <Col>
          <Form.Control type="text" placeholder="Search for help..." />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h3>Frequently Asked Questions</h3>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>How do I cancel my ticket?</Accordion.Header>
              <Accordion.Body>
                You can cancel your ticket from the 'My Bookings' section before
                the showtime.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How do I get a refund?</Accordion.Header>
              <Accordion.Body>
                Refunds are processed automatically upon ticket cancellation
                based on eligibility.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                How can I contact customer support?
              </Accordion.Header>
              <Accordion.Body>
                You can contact us via email, phone, or raise a ticket using the
                form below.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col md={6}>
          <h3>Raise a Ticket</h3>
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
              <Form.Label>Issue</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      <Faqs />
    </Container>
  );
};

export default Help;
