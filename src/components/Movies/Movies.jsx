import { MovieAPI } from 'API/API';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [resultsList, setResultsList] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }

    (async () => {
      setResultsList(await MovieAPI.getMovieByName(query));
    })();
  });

  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = data => {
    setQuery(data.searchQuery);
    reset({ searchQuery: '' });
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="text" {...register('searchQuery')} />
        <input type="submit" />
      </form>
      {resultsList.length !== 0 && (
        <ul>
          {resultsList.map(film => (
            <li key={film.id}>
              <Link to=":movieId">{film.title || film.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;
