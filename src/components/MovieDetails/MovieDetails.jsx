import { MovieAPI } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setMovieDetails(await MovieAPI.getMovieDetails(movieId));
    })();
  }, [movieId]);

  const { poster_path, title, vote_average, genres, overview } = movieDetails;

  return (
    <>
      <section>
        <img src={poster_path} alt={title} />
        <h2>{title}</h2>
        <p>Vote average: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
      </section>
      <h5>Additional information</h5>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
