import React from 'react';
import MovieItems from './MovieItems.jsx';


const MovieList = (props) => (
  <ul>
    {props.movieList.map((movieItem, index) =>
        <MovieItems movieItem={movieItem} key={index}/>
    )}
  </ul>
)

export default MovieList;