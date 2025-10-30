import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Buzz = () => {
  return (
    <Container className="my-5">
      <h1 className="mb-4">Buzz - Trending Entertainment</h1>
      <Row className="mb-5">
        <Col md={8}>
          <h3>Trending Now</h3>
          <p>Catch up with the latest gossip, celebrity interviews, and viral trailers from the world of entertainment.</p>
        </Col>
        <Col md={4}>
          <img src="https://via.placeholder.com/300x200" alt="Trending Buzz" className="img-fluid rounded" />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col>
          <h3>Latest Trailers</h3>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YoHD9XEInc0" title="YouTube trailer" allowFullScreen className="mb-3"></iframe>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Buzz Articles</h3>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Inside scoop on the latest Bollywood drama</Card.Title>
              <Card.Text>Read about all the behind-the-scenes happenings and exclusive leaks.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Hollywood's biggest blockbusters for 2025</Card.Title>
              <Card.Text>Check out what's coming to theatres and streaming services this year.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Buzz;