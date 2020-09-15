import React, { useState } from "react";

import "./App.css";

import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import requests from "./request";
import Results from "./Results/Results";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
