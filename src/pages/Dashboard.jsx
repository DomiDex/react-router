import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

function Dashboard() {
  return (
    <Container>
      <h1 className='my-3'>Dashboard</h1>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Sigma School Analaytics</Card.Title>
              <Card.Text>People who graduate: 80%</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
