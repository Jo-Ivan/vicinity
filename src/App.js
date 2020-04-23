import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layout/Header";
import Routes from "./Routes";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
