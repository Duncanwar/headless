import React, { Component } from "react";
import axios from "axios";
import BookItems from "./BookItems";
export class Books extends Component {
  state = {
    books: [],
    isLoaded: false,
  };
  componentDidMount() {
    axios
      .get("http://localhost/php-duncan/headless/wp-json/wp/v2/books/")
        .then((res) => {
            this.setState({
                books: res.data,
                isLoaded: true,
            })
        })
      .catch((err) => console.log(err));
  }
  render() {
    const { books, isLoaded } = this.state;
    console.log(books);
    if (isLoaded) {
      return (
        <div>
          {books.map((book) => (
              <BookItems key={book.id} book={book}/>
          ))}
        </div>
      );
    }
    return <h3>Loading...</h3>;
  }
}
export default Books;
