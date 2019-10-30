import React, { Component } from "react";
// import SearchBook from "../components/SearchInput";
import SearchDetails from "../components/SearchDetails";
import API from "../utils/API";
import { Container, Jumbotron } from "react-bootstrap";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    book: {}
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1 className="text-center">Google Book Search!</h1>
        </Jumbotron>

        <Container
          className="rounded"
          style={{ backgroundColor: "#e9e9e9", padding: "2px" }}
        >
          <SearchDetails />
        </Container>
      </Container>
    );
  }
}

export default Books;
