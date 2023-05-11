import { MovieAPI } from 'API/API';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeTitle, TrendingList, TrendingListItem } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    (async () => {
      setTrendingMovies(await MovieAPI.getTrending());
    })();
  }, []);
  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      <TrendingList>
        {trendingMovies.map(movie => (
          <TrendingListItem key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </TrendingListItem>
        ))}
      </TrendingList>
    </>
  );
};

export default Home;
