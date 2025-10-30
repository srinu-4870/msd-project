import React from 'react';
import { Container, Accordion, Form } from 'react-bootstrap';

const Faqs = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Frequently Asked Questions (FAQs)</h1>

      <Form className="mb-4">
        <Form.Control type="text" placeholder="Search FAQs..." />
      </Form>

      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How can I book a movie ticket?</Accordion.Header>
          <Accordion.Body>
            You can book a ticket by selecting the movie, choosing your preferred showtime and seats, and completing the payment through BookMyShow.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Can I cancel or reschedule my booking?</Accordion.Header>
          <Accordion.Body>
            Yes, tickets can be canceled before the cancellation deadline shown during booking. Rescheduling is not available for all cinemas.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>What payment methods are accepted?</Accordion.Header>
          <Accordion.Body>
            We accept credit/debit cards, UPI, net banking, wallets, and reward points from partner banks.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Where can I view my booking history?</Accordion.Header>
          <Accordion.Body>
            Go to the ‘My Bookings’ section under your profile to view past and upcoming bookings.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>How do I get a refund?</Accordion.Header>
          <Accordion.Body>
            If eligible, refunds are processed automatically to the original payment method within 5–7 working days after cancellation.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>What should I do if payment fails?</Accordion.Header>
          <Accordion.Body>
            If your payment failed but money was deducted, it will be refunded within 3–5 working days. You can also try booking again or contact support.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Faqs;
