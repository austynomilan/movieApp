import React, {useState, useEffect} from 'react';
import './topMovie.scss'

export default function topMovie() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWVmY2Y5ZGM0YjhmMmVlY2NhNjBmNjBiY2UzMGNjZCIsInN1YiI6IjY0ZmU0NDQzMmRmZmQ4MDBlM2QyZTdiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1M5SfEsYLs9aDG2yREHP1lRC4rL0NAehY2Xc6OJYKo4',
      },
    };

    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      options
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));

      
  }, []);
  console.log(movies)
  return (
    <div className='movieContainer'>
      {movies.map((movie) => (
        <div key={movie.id} >
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <p>{movie.title}</p>
          </div>
      ))}
    </div>
  );
}