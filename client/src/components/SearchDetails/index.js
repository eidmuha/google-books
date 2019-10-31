import React from "react";

import {
  Modal,
  Card,
  Row,
  Image,
  Col,
  Button,
  Container
} from "react-bootstrap";

function SearchDetails(props) {
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Card className="m-3">
        <Card.Body>
          <Row>
            <Col xs={4} md={4}>
              <Card.Title>{props.books.title}</Card.Title>
            </Col>
            <Col xs={4} md={4}></Col>
            <Col xs={4} md={4}>
              <Button
                variant="warning"
                className="float-right "
                value={props.books}
                onClick={handleShow}
              >
                View
              </Button>

              <Button
                variant="success"
                className="float-right ml-5"
                value={props.books}
                onClick={() => props.handleBtnSave(props.books)}
              >
                Save
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card.Text>{props.books.description}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
        <br />
      </Card>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.books.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={4}>
                <p>
                  <b>Author: </b> {props.books.authors}
                </p>
              </Col>
              <Col xs={6} md={4}>
                <Image
                  src={props.books.imageLinks.smallThumbnail}
                  className="pull-right"
                  thumbnail
                />
              </Col>
            </Row>
            <Row>
              <p>{props.books.description}</p>
              <a href={props.books.previewLink}>Display on Google Books</a>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SearchDetails;
