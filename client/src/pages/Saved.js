import React, { Component } from "react";
import SearchDetails from "../components/SearchDetails";
import API from "../utils/API";
import { Container, Jumbotron } from "react-bootstrap";

class Books extends Component {
  state = {
    books: [],
    saved: true
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.books);
    return (
      <Container>
        <Jumbotron>
          <h1 className="text-center">Google Book Search!</h1>
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
                  books={book}
                  showModal={this.showModal}
                  handleBtnSave={this.handleBtnSave}
                  handleBtnDelete={this.deleteBook}
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

export default Books;
