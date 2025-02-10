import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Home.css"; // Import CSS for styling

function Home() {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Welcome to Our Store</h1>
      <Row className="justify-content-center">
        <Col md={4} className="mb-3">
          <Card className="custom-card">
            <Card.Img variant="top" src="/nonveg/veg.jpg" className="custom-img" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Vegetables</Card.Title>
              <Card.Text>Fresh and organic vegetables available.</Card.Text>
              <Link to="/VegItems" className="mt-auto">
                <Button variant="primary">Shop Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="custom-card">
            <Card.Img variant="top" src="/nonveg/nonveg.webp" className="custom-img" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Non-Veg</Card.Title>
              <Card.Text>High-quality meat and seafood selection.</Card.Text>
              <Link to="/NonVegItems" className="mt-auto">
                <Button variant="primary">Shop Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3">
          <Card className="custom-card">
            <Card.Img variant="top" src="nonveg/milk.jpg" className="custom-img" />
            <Card.Body className="d-flex flex-column">
              <Card.Title>Dairy Products</Card.Title>
              <Card.Text>Fresh milk and dairy products.</Card.Text>
              <Link to="/MilkItems" className="mt-auto">
                <Button variant="primary">Shop Now</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
