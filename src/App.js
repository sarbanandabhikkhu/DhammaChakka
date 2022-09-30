import React from "react";
import { hot } from "react-hot-loader/root";
import Navbar from "./components/navbar";
import Accordion from "./components/accordion";
import Tabs from "./components/tabs";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accordion />
      <Tabs />
      <Footer />
    </div>
  );
}

export default hot(App);
