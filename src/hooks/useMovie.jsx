import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieAPI } from 'API/API';

export const useMovie = type => {
  const [state, setState] = useState(type === 'Details' ? {} : []);
  const { movieId } = useParams();

  useEffect(() => {
    if (type === 'Cast') {
      (async () => {
        setState(await MovieAPI.getMovieCredits(movieId));
      })();
      return;
    }

    if (type === 'Reviews') {
      (async () => {
        setState(await MovieAPI.getMovieReviews(movieId));
      })();
      return;
    }

    if (type === 'Details') {
      (async () => {
        setState(await MovieAPI.getMovieDetails(movieId));
      })();
      return;
    }
  }, [movieId, type]);

  return [state];
};
