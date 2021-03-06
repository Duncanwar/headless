import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Books from "./component/Book";
import BookPage from "./component/BookPage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router basename="/php-training/duncan">
          <Fragment>
            <Route exact path="/book" component={Books} />
            <Route exact path="/book/:id" component={BookPage} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
