import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './topMovie.scss';
import MovieCard from '../../assets/icons/movieCard.png';
import { FaGreaterThan } from 'react-icons/fa';
import Footer from '../../Footer/footer';
import Fruit from '../../assets/icons/fruit.png';

export default function topMovie() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

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
      .then((data) => setMovies(data.results.slice(0, 10)))
      .catch((err) => console.error(err));

    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
      .then((response) => response.json())
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error(err));
  }, []);
 
  return (
    <div className='mainContainer'>
      <div className='intro'>
        <h1>Featured Movie</h1>
        <span>
          <p>See more</p>
          <FaGreaterThan color='#BE123C' className='greater'/>
        </span>
      </div>
      <div data-testid: movie-card className='card'>
        {movies.map((movie) => {
          const genreNames = movie.genre_ids.map((genreId) => {
            const genre = genres.find((genre) => genre.id === genreId);
            return genre ? genre.name : '';
          });
          const releaseYear = new Date(movie.release_date).getFullYear();
          return (
            <div key={movie.id} className='posterHolder'>
              <Link to={`/movies/${movie.id}`}>
               <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className='posterImage'
                data-testid: movie-poster
              />
              </Link>
            
              <span data-testid: movie-release-date className='yearRelease'>
                <p>USA,</p>
                <h4>{releaseYear}</h4>
              </span>
              <span>
              <p data-testid: movie-title>{movie.title}</p>
              </span>
              <div className='userGenerated'>
                <section className='avgCount'>
                  <img src={MovieCard} alt='IMDB' />
                  {movie.vote_count}
                </section>
                <section className='avgCount'>
                  <img src={Fruit} alt='fruit' />
                  {movie.vote_average}
                </section>
              </div>
              <span className='genre'>
                <p>{genreNames.join(', ')}</p>
              </span>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
