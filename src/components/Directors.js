import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors' Page</h1>
        {directors.map((director) => (
          <div>
            <h2 key={director.name}>Name: {director.name}</h2>
            <h3>Movies:</h3>
              <ul> 
                {director.movies.map((mov, index) => (
                  <li key={index}>{mov}</li>
                ))}
              </ul>
          </div>
        ))}
    </div>
  )
  
}

export default Directors;
