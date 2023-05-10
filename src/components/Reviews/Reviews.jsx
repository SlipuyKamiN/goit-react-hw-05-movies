import { MovieAPI } from 'API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      setReviewsList(await MovieAPI.getMovieReviews(movieId));
    })();
  }, [movieId]);

  return (
    <ul>
      {reviewsList.length === 0
        ? 'We don`t have any reviews for this movie'
        : reviewsList.map(review => (
            <li key={review.id}>
              <h4>{review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
    </ul>
  );
};

export default Reviews;
