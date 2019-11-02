import React, { Component } from "react";
import SearchDetails from "../components/SearchDetails";
import API from "../utils/API";
import {
  Container,
  FormControl,
  InputGroup,
  Button,
  Jumbotron
} from "react-bootstrap";

class Detail extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    image: "",
    link: "",
    saved: false
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.title);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      console.log("SEARCHING BOOKS: " + this.state.title);
      API.getBook(this.state.title)
        .then(res => {
          this.setState({
            books: res.data.items,
            title: "",
            authors: "",
            description: "",
            image: "",
            link: ""
          });
          console.log(this.state.books);
        })
        .catch(err => console.log(err));
    }
  };

  handleBtnSave = book => {
    API.saveBook({
      title: book.title,
      authors: book.authors,
      description: book.description,
      image: book.imageLinks.smallThumbnail,
      link: book.previewLink
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <InputGroup>
            <FormControl
              value={this.state.title}
              onChange={this.handleInputChange}
              name="title"
              placeholder="Search book here"
              aria-label="Search book here"
              aria-describedby="basic-addon2"
            />

            <InputGroup.Append>
              <Button
                onClick={this.handleFormSubmit}
                disabled={!this.state.title}
                variant="outline-secondary"
              >
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Jumbotron>

        <Container
          className="rounded"
          style={{ backgroundColor: "#e9e9e9", padding: "2px" }}
        >
          {this.state.books.length ? (
            <>
              {this.state.books.map((book, index) => (
                <SearchDetails
                  key={index}
                  books={book.volumeInfo}
                  showModal={this.showModal}
                  handleBtnSave={this.handleBtnSave}
                  saved={this.state.saved}
                />
              ))}
            </>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Container>
      </Container>
    );
  }
}

export default Detail;
