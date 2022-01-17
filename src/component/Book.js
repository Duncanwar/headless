import React, { Component } from "react";
import axios from "axios";
import BookItems from "./BookItems";

const url =
  "http://os7.techaffinity.us/php-training/duncan/wp_headless/index.php/wp-json/wp/v2/books";

export class Books extends Component {
  state = {
    books: [],
    isLoaded: false,
  };
  componentDidMount() {
    axios
      .get(`${url}`)
      .then((res) => {
        this.setState({
          books: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { books, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div className="card-group">
          {books.map((book) => (
            <BookItems key={book.id} book={book} />
          ))}
        </div>
      );
    }
    return <h3>Loading...</h3>;
  }
}
export default Books;
