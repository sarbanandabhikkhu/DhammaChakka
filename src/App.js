import React from "react";
import { hot } from "react-hot-loader/root";
import appData from "../src/data/app-data.json";
import logo from "./logo.svg";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

const App = () => {
  const { title, details } = appData;
  return (
    <div className="App">
      <Nav />
      <img className="Logo" src={logo} alt={title} />
      <h1>{title}</h1>
      <h3>{details}</h3>
      <Footer />
    </div>
  );
};

export default hot(App);
