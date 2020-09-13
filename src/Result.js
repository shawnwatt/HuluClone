import React, { useState, useEffect } from "react";
import "./Result.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";

function Result({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(selectedOption);
      console.log(requests);
      setMovies(requests.data.results);
      return requests;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="result">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Result;
