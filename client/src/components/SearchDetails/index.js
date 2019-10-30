import React from "react";
import { Card, Row, Image, Col, Button } from "react-bootstrap";

function DearchDetails({ children }) {
  return (
    <Card className="m-3">
      <Card.Body>
        <Row>
          <Col xs={4} md={4}>
            <Card.Title>Card Title</Card.Title>
          </Col>
          <Col xs={4} md={4}></Col>
          <Col xs={4} md={4}>
            <Button variant="warning" className="float-right ">
              View
            </Button>

            <Button variant="success" className="float-right ml-5">
              Save
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <br />
    </Card>
  );
}

export default DearchDetails;
