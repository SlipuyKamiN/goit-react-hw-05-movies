import { MovieAPI } from 'API/API';
import { useEffect, useRef, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {
  AdditionalInfo,
  AdditionalList,
  AdditionalListItem,
  MovieDetailsInfo,
  MovieDetailsSection,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const previousPage = useRef(location.state?.from ?? '/');

  useEffect(() => {
    (async () => {
      setMovieDetails(await MovieAPI.getMovieDetails(movieId));
    })();
  }, [movieId]);

  const { poster_path, title, vote_average, genres, overview } = movieDetails;

  return (
    <>
      <Link to={previousPage.current}>{'<='} Go back</Link>
      <MovieDetailsSection>
        <img src={poster_path} alt={title} width="200px" />
        <MovieDetailsInfo>
          <h2>{title}</h2>
          <p>Vote average: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </MovieDetailsInfo>
        <AdditionalInfo>
          <h5>Additional information</h5>
          <AdditionalList>
            <AdditionalListItem>
              <Link to="cast">Cast</Link>
            </AdditionalListItem>
            <AdditionalListItem>
              <Link to="reviews">Reviews</Link>
            </AdditionalListItem>
          </AdditionalList>
        </AdditionalInfo>
        <Suspense fallback={<div>Please wait...</div>}>
          <Outlet />
        </Suspense>
      </MovieDetailsSection>
    </>
  );
};

export default MovieDetails;
