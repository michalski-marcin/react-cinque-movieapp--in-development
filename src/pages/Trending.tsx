import { useState, useEffect } from 'react';
import MovieTrendCard from '../components/MovieTrendCard';
import { fetchData } from '../api/fetch';

function Trending() {
  const [movieResults, setMovieResults] = useState([]);
  const [tvShowResults, setTvShowResults] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const movies = await fetchData(
        'https://api.themoviedb.org/3/trending/movie/week?language=en-US'
      );
      const tvShows = await fetchData(
        'https://api.themoviedb.org/3/trending/tv/week?language=en-US'
      );

      setMovieResults(movies);
      setTvShowResults(tvShows);
    };

    fetchAllData();
  }, []);

  return (
    <div className='page-wrap'>
      <div>
        <h2>Movies</h2>
        {movieResults.slice(0, 10).map((movie) => (
          <MovieTrendCard
            key={movie.id}
            {...movie}
          />
        ))}
        <h2>TV Shows</h2>
        {tvShowResults.map((tvShow) => (
          <MovieTrendCard
            key={tvShow.id}
            {...tvShow}
          />
        ))}
      </div>
    </div>
  );
}

export default Trending;
