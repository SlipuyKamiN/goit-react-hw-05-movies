import { MovieAPI } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castList, setCastList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setCastList(await MovieAPI.getMovieCredits(movieId));
    })();
  }, [movieId]);

  return (
    <ul>
      {castList.length !== 0 &&
        castList.cast.map(cast => (
          <li key={cast.id}>
            <h4>{cast.name}</h4>
            <p>
              Character: {cast.original_name}/{cast.character}
            </p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;