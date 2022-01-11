import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import "./App.css";
import Books from "./component/Book";
import BookPage from "./component/BookPage";

class App extends Component {
  render() {
    return (
      <Router>
        {/* <Fragment> */}
        {/* <Routes> */}
          <Route exact path="/" component={Books} />
          <Route exact path="/book/:id" component={BookPage} />
          {/* </Routes> */}
        {/* </Fragment> */}
          {/* <Books /> */}
      </Router>
    );
  }
}

export default App;
