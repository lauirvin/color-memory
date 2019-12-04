import React, { Fragment } from "react";
import "./styles/styles.scss";
import Header from "./components/Header";
import Board from "./components/Board";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Board />
    </Fragment>
  );
};

export default App;
