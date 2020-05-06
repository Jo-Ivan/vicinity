import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/layout/Header";
import Routes from "./components/routing/Routes";

// styles/fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

// redux
import { loadUser } from "./actions/authActions";
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";

library.add(fas);

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

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
