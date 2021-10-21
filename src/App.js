import FormLogin from "./components/Forms/FormLogin"
import FormCreate from "./components/Forms/FormCreate";
import React from "react";
import LayoutPrincipal from "./layout/LayoutPrincipal";

import { Router, Route, browserHistory } from "react-router-3";

import './App.css';

function App() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={LayoutPrincipal}>
        <Route path="/login" component={FormLogin}/>
        <Route path="/create" component={FormCreate}/>
      </Route>
    </Router>
  );
}

export default App;
