import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Contact Us</h1>
      <Row>
        <Col md={6}>
          <h4>Get in Touch</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Your message..."
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h4>Our Office</h4>
          <p>
            <strong>BookMyShow HQ</strong>
          </p>
          <p>
            123 Movie Avenue, Andheri West
            <br />
            Mumbai, Maharashtra - 400053
            <br />
            India
          </p>
          <p>
            Email: support@bookmyshow.com
            <br />
            Phone: +91 98765 43210
          </p>

          <div className="mt-4">
            <iframe
              title="Google Map - Guntur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61504.30785976928!2d80.4016266!3d16.3066528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75bc7b9efea3%3A0x3c6ee0f65b1d1271!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1718784040000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
