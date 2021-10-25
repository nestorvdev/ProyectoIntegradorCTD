import React, { useState } from "react";

import FormLogin from "./components/Forms/FormLogin.jsx"
import FormCreate from "./components/Forms/FormCreate.jsx";
import Home from "./components/Home/Home.jsx";
import LayoutPrincipal from "./layout/LayoutPrincipal";

import { Router, Route, browserHistory , IndexRoute} from "react-router-3";

import './App.css';


function App() {
  const [log, setLog] = useState(sessionStorage.getItem("log")==="true"?true:false)

  return (
    <Router history={browserHistory}>
      <Route path="/" component={LayoutPrincipal} isLogged = {log} >
        <IndexRoute component={Home}/>
        <Route path="/login" component={FormLogin} setLog = {setLog} />
        <Route path="/create" component={FormCreate} />
      </Route>
    </Router>
    
  );
}

export default App;
