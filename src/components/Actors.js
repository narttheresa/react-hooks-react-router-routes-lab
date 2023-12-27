import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors' Page</h1>
      {actors.map((actor) => (
        <div>
          <h2 key={actor.name}>Name: {actor.name}</h2>
          <h3>Movies:</h3>
          <ul>
            {actor.movies.map((mov, index) => (
              <li key={index}>{mov}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
  
  
}

export default Actors;
