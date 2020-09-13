import React from "react";
import "./Navbar.css";
import request from "./request";

function Navbar({ setSelectedOption }) {
  return (
    <div className="navbar">
      <h2 onClick={() => setSelectedOption(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2>Action</h2>
      <h2>Comedy</h2>
      <h2>Horro</h2>
      <h2>Romance</h2>
      <h2>Mystery</h2>
      <h2>Sci-fi</h2>
      <h2>Western</h2>
      <h2>Animation</h2>
      <h2>Tv Seasons</h2>
    </div>
  );
}

export default Navbar;
