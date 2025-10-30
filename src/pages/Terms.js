import React from 'react';
import { Container } from 'react-bootstrap';

const Terms = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Terms and Conditions</h1>

      <section className="mb-4">
        <h4>1. Acceptance of Terms</h4>
        <p>
          By accessing or using the BookMyShow website or mobile app, you agree to be bound by these terms and conditions. If you do not agree to any part of these terms, you must not use our services.
        </p>
      </section>

      <section className="mb-4">
        <h4>2. User Responsibilities</h4>
        <p>
          You agree to use the platform only for lawful purposes. You must not misuse the services, tamper with other users' accounts, or attempt to breach system security.
        </p>
      </section>

      <section className="mb-4">
        <h4>3. Booking & Cancellations</h4>
        <p>
          All bookings are subject to availability and confirmation. Cancellations are allowed only within the cancellation window. Refunds will be processed as per our refund policy.
        </p>
      </section>

      <section className="mb-4">
        <h4>4. Payment Terms</h4>
        <p>
          We accept multiple payment methods. All transactions must be authorized by the card or wallet owner. Failed payments will not result in a confirmed booking.
        </p>
      </section>

      <section className="mb-4">
        <h4>5. Intellectual Property</h4>
        <p>
          All content, logos, images, and software are the property of BookMyShow and may not be copied, modified, or redistributed without prior written permission.
        </p>
      </section>

      <section className="mb-4">
        <h4>6. Limitation of Liability</h4>
        <p>
          BookMyShow shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the services.
        </p>
      </section>

      <section className="mb-4">
        <h4>7. Changes to Terms</h4>
        <p>
          We reserve the right to modify these terms at any time. Changes will be posted on the website and are effective immediately upon posting.
        </p>
      </section>

      <section>
        <h4>8. Contact Us</h4>
        <p>
          For any questions or concerns about these terms, you can contact us at <strong>support@bookmyshow.com</strong>.
        </p>
      </section>
    </Container>
  );
};

export default Terms;
