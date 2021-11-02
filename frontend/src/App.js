import React, { useState } from "react";

import FormLogin from "./components/Forms/FormLogin.jsx"
import FormCreate from "./components/Forms/FormCreate.jsx";
import Home from "./components/Home/Home.jsx";
import LayoutPrincipal from "./layout/LayoutPrincipal";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.module.css';
import NotFound from "./components/NotFound/NotFound.jsx";


function App() {
  const [log, setLog] = useState(sessionStorage.getItem("log") === "true" ? true : false)
  return ( 
    < BrowserRouter >
      <LayoutPrincipal isLogged = {log} >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login"  component={() => !log? <FormLogin setLog={setLog}/> : <Redirect to="/" />} />                  
          <Route exact path="/create" component={() => !log? <FormCreate /> : <Redirect to="/" />} />            
          <Route path="*"> <NotFound /> </Route>
        </Switch>
      </LayoutPrincipal>
    </BrowserRouter >
  );
}

export default App;
