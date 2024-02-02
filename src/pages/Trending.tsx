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
      <div className=''>
        <h2>Movies</h2>
        <div className='grid grid-cols-5 gap-2 w-[80%]  m-auto '>
          {movieResults.slice(0, 10).map((movie) => (
            <MovieTrendCard
              key={movie.id}
              {...movie}
            />
          ))}
        </div>

        <h2>TV Shows</h2>
        <div className='grid grid-cols-5 gap-1 m-auto'>
          {tvShowResults.slice(0, 10).map((tvShow) => (
            <MovieTrendCard
              key={tvShow.id}
              {...tvShow}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;
