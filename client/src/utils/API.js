import axios from "axios";
require("dotenv").config();

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(name) {
    return axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=" +
        name +
        "&printType=books&key=AIzaSyBbBHoJWSyQGhqVHyEdh8_icLo7v0liYbU"
    );
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
