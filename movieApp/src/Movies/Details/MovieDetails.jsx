import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from '../../assets/icons/Logo.png';
import MovieBox from '../../assets/icons/MovieBox.png';
import './MovieDetails.scss';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [genreNames, setGenreNames] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          {
            headers: {
              accept: 'application/json',
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWVmY2Y5ZGM0YjhmMmVlY2NhNjBmNjBiY2UzMGNjZCIsInN1YiI6IjY0ZmU0NDQzMmRmZmQ4MDBlM2QyZTdiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1M5SfEsYLs9aDG2yREHP1lRC4rL0NAehY2Xc6OJYKo4',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }

        const data = await response.json();
        setMovie(data);

        // Extract genre names
        const genreIds = data.genres.map((genre) => genre.id);
        fetchGenres(genreIds);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  const fetchGenres = async (genreIds) => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/genre/movie/list?language=en'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch genres');
      }

      const data = await response.json();

      // Filter genres based on IDs
      const genres = data.genres.filter((genre) => genreIds.includes(genre.id));

      // Extract genre names
      const genreNames = genres.map((genre) => genre.name);

      setGenreNames(genreNames);
    } catch (error) {
      console.error(error);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  const releaseDate = new Date(movie.release_date);

  const options = { timeZone: 'UTC' };
  const formattedDate = releaseDate.toLocaleString('en-US', options);

  const runTime = movie.runtime;
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;

  const voteCount = movie.vote_count
  const count = Math.floor(voteCount / 1000)

  const rating = movie.vote_average
  const formatedRating = rating.toFixed(1)

  return (
    <div className='mvDetails'>
      <div className='sidebar'>
        <section className='logo'>
          <img  src={Logo} alt='logo' />
          <img className='logo1' src={MovieBox} alt='movieBox' />
        </section>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className='active'>Movies</li>
          <li>Tv Series</li>
          <li>Upcoming</li>
        </ul>
        <section className='quiz'>
          <h5>Play movie quizes and earn free tickets</h5>
          <p>50k people are now playing now</p>
          <button>start playing</button>
        </section>

        <section className='Logout'>
          <button>Logout</button>
        </section>
      </div>
      <div className='movieDetails'>
        <div className='imageContainer'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            width={'100%'}
            height={'140%'}
          />
        </div>

        <div className='movieText'>
          <section className='eventTime'>
            <span>
              <h4 data-testid:movie-title>{movie.title}</h4>
              <ul>
                <li data-testid:movie-release-date>{formattedDate}</li>
                <li data-testid:movie-runtime>{`${hours}h ${minutes}m`}</li>
                
              </ul>
              {genreNames.map((genre, index) => (
                <ul className='genreStle'>
                    <li key={index}>{genre}</li>
                </ul>
                ))}
                <section className='rating'>
                <p>{formatedRating}</p> | 
                <p>{`${count}k`}</p>
            </section>
            </span>
            
            <p data-testid:movie-overview>{movie.overview}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
