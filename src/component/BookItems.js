import React, { Component } from "react";
import {Link} from "react-router-dom"
import PropTypes from "prop-types";
import axios from "axios";
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
    const getImageUrl = axios.get(
      `http://localhost/php-duncan/headless/wp-json/wp/v2/media/${featured_media}`
    );
    const getAuthor = axios.get(
      `http://localhost/php-duncan/headless/wp-json/wp/v2/users/${author}`
    );

    Promise.all([getImageUrl, getAuthor]).then((res) => {
      console.log(res);
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.name,
        isLoaded: true,
      });
    });
  }

  render() {
    const { id,title, excerpt } = this.props.book;
    const { author, imgUrl, isLoaded } = this.state;
    if (isLoaded) {
      
      return (
        <div>
          <h2>{title.rendered}</h2>
          <img style={{ width: '100%'}} src={imgUrl} alt={title.rendered} />
          <small>
            Review By 
            <strong>{author}</strong>
          </small>
          <br />
          <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></div>
        <Link to={`/book/${id}`}>Read Review</Link>
        </div>
      );
    }
    return null
  }
}
export default BookItems;
