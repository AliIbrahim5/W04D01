import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Footar from "./componts/footar";
import Headr from "./componts/headr";
import Todo from "./componts/todo";

import react from "react";

class App extends react.Component {
  render() {
    return (
      <>
        <Headr />
        <Todo />
        <Footar />
      </>
    );
  }
}

export default App;
