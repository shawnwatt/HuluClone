import React, { useState } from "react";
import "./app.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Result from "./Result";
import request from "./request";
function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);
  return (
    <div className="app">
      <Header />
      <Navbar setSelectedOption={setSelectedOption} />
      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
