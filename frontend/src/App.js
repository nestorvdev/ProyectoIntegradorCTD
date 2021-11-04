import React, { useState } from "react";
import FormLogin from "./components/Forms/FormLogin.jsx"
import FormCreate from "./components/Forms/FormCreate.jsx";
import Home from "./components/Home/Home.jsx";
import LayoutPrincipal from "./layout/LayoutPrincipal";
import Product from "./components/Product/product.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import './App.module.css';


function App() {
  const [log, setLog] = useState(sessionStorage.getItem("log") === "true" ? true : false)
  const[activeCreate, setActiveCreate] = useState()
  const[activeLogin, setActiveLogin] = useState()

  return ( 
    < BrowserRouter >      
      <LayoutPrincipal isLogged = {log} activeCreate ={activeCreate} activeLogin = {activeLogin}>
        <Switch>
          <Route exact path="/">
            <Home setActiveCreate = {setActiveCreate} setActiveLogin ={setActiveLogin}/>
          </Route>
          <Route exact path="/login"  component={() => !log? <FormLogin setLog={setLog} setActiveCreate = {setActiveCreate} setActiveLogin ={setActiveLogin}/> : <Redirect to="/" />} />                  
          <Route exact path="/create" component={() => !log? <FormCreate setActiveCreate = {setActiveCreate} setActiveLogin ={setActiveLogin}/> : <Redirect to="/" />} />
          <Route path={"/product/:id"} component={Product}/>           
          <Route path="*"> <NotFound /> </Route>
        </Switch>
      </LayoutPrincipal>
    </BrowserRouter >
  );
}

export default App;
