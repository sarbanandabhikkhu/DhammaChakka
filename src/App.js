import React from "react";
import { hot } from "react-hot-loader/root";
import Welcome from "./components/welcome";
import data from "../public/manifest.json";

function App() {
  const { short_name, name } = data;
  return (
    <div className="App">
      <Welcome label={short_name} value={name} />
    </div>
  );
}

export default hot(App);
