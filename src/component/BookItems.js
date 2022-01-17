import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const url =
  "http://os7.techaffinity.us/php-training/duncan/wp_headless/index.php/wp-json/wp/v2";
export class BookItems extends Component {
  state = {
    imgUrl: "",
    author: "",
    isLoaded: false,
  };
  static propTypes = {
    book: PropTypes.object.isRequired,
  };
  componentDidMount() {
    const { featured_media, author } = this.props.book;
    const getImageUrl = axios.get(`${url}/media/${featured_media}`);
    const getAuthor = axios.get(`${url}/users/${author}`);
    async function log() {
      const { data } = await axios.get(`${url}/books`);
      console.log(data);
    }
    log();
    Promise.all([getImageUrl, getAuthor]).then((res) => {
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.name,
        isLoaded: true,
      });
    });
  }

  render() {
    const { id, title } = this.props.book;
    const { author, imgUrl, isLoaded } = this.state;
    console.log(this.state);
    if (isLoaded) {
      return (
        <div className="row">
          <div className="card col-md-4" style={{ width: "12rem" }}>
            <img className="card-img-top" src={imgUrl} alt={title.rendered} />
            <br />
            <div className="card-body">
              <h2 className="card-title">{title.rendered}</h2>
              <small>
                Review By
                <strong> {author}</strong>
              </small>
              <br />
              <Link to={`/book/${id}`}>Read Review </Link>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
export default BookItems;
