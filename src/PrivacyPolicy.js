import React from 'react';
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4 text-center">Privacy Policy</h1>

      <section className="mb-4">
        <h4>1. Introduction</h4>
        <p>
          This Privacy Policy outlines how BookMyShow collects, uses, shares, and protects your personal information. By using our platform, you consent to the practices described here.
        </p>
      </section>

      <section className="mb-4">
        <h4>2. Information We Collect</h4>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Personal details (name, email, phone number)</li>
          <li>Payment information (masked card details, UPI ID)</li>
          <li>Location and device information</li>
          <li>Booking and browsing history</li>
        </ul>
      </section>

      <section className="mb-4">
        <h4>3. How We Use Your Information</h4>
        <p>We use your data to:</p>
        <ul>
          <li>Process bookings and transactions</li>
          <li>Improve our services and user experience</li>
          <li>Send updates, offers, and notifications</li>
          <li>Prevent fraud and unauthorized access</li>
        </ul>
      </section>

      <section className="mb-4">
        <h4>4. Sharing of Information</h4>
        <p>
          We do not sell your personal information. We may share your data with:
        </p>
        <ul>
          <li>Service providers (payment gateways, email services)</li>
          <li>Legal or regulatory authorities (when required by law)</li>
          <li>Partners or affiliates for marketing (with your consent)</li>
        </ul>
      </section>

      <section className="mb-4">
        <h4>5. Data Security</h4>
        <p>
          We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure.
        </p>
      </section>

      <section className="mb-4">
        <h4>6. Cookies and Tracking</h4>
        <p>
          Our website uses cookies to personalize content and analyze traffic. You can manage your cookie preferences through your browser settings.
        </p>
      </section>

      <section className="mb-4">
        <h4>7. User Rights</h4>
        <p>
          You have the right to access, update, or delete your personal information by contacting us. You can also unsubscribe from marketing communications at any time.
        </p>
      </section>

      <section className="mb-4">
        <h4>8. Children’s Privacy</h4>
        <p>
          Our services are not intended for individuals under the age of 13. We do not knowingly collect data from children without parental consent.
        </p>
      </section>

      <section className="mb-4">
        <h4>9. Updates to This Policy</h4>
        <p>
          We may update this policy from time to time. Any changes will be reflected on this page with a revised effective date.
        </p>
      </section>

      <section>
        <h4>10. Contact Us</h4>
        <p>
          If you have any questions regarding this policy, please contact us at <strong>privacy@bookmyshow.com</strong>.
        </p>
        <p><em>Last updated: June 19, 2025</em></p>
      </section>
    </Container>
  );
};

export default PrivacyPolicy;
