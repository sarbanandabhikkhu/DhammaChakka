import React from "react";
import { hot } from "react-hot-loader/root";
import Navbar from "./components/navbar";
import Tabs from "./components/tabs";
import Footer from "./components/footer";
import AsideBar from "./components/asidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AsideBar />
      <Tabs />
      <Footer />
    </div>
  );
}

export default hot(App);
