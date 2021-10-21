import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Categories from "./components/Categories";
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Categories />
      <Footer />
    </React.Fragment>

  );
}

export default App;
