import axios from "axios";
import React, { Component } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
const url =
  "http://os7.techaffinity.us/php-training/duncan/wp_headless/index.php/wp-json/wp/v2/books";

class BookPage extends Component {
  state = {
    book: {},
    isLoaded: false,
  };
  componentDidMount() {
    axios
      .get(`${url}/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          book: res.data,
          isLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { book, isLoaded } = this.state;
    console.log(book);
    if (isLoaded) {
      return (
        <Fragment>
          <Link to="/">Go Back</Link>
          <hr />
          <br />
          <h3>{book.title}</h3>
          <div
            dangerouslySetInnerHTML={{ __html: book.content.rendered }}
          ></div>
          <h4>Publisher: {book.acf.publisher}</h4>
        </Fragment>
      );
    }
    return <h3>Loading...</h3>;
  }
}

export default BookPage;
