import { useState, useEffect } from 'react';
import MovieTrendCard from '../components/MovieTrendCard';
import { fetchData } from '../api/getResults';
import tmdbTypes from '../interfaces/tmdbTypes';

function Trending() {
  const [movieResults, setMovieResults] = useState<tmdbTypes[]>([]);
  const [tvShowResults, setTvShowResults] = useState<tmdbTypes[]>([]);

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
        <div className='w-[80%] max-md:w-[90%] max-sm:w=[95%] m-auto mb-3'>
          <p className='text-3xl mb-4'>Trending this week</p>
          <p className='text-2xl'>Movies</p>
        </div>
        <div className='grid gap-3 grid-cols-5 max-sm:grid-cols-2 w-[80%] max-md:w-[90%] max-sm:w=[95%] m-auto'>
          {movieResults.slice(0, 10).map((movie) => (
            <MovieTrendCard
              key={movie.id}
              {...movie}
            />
          ))}
        </div>

        <div className='w-[80%] max-md:w-[90%] max-sm:w=[95%] m-auto mb-3 mt-10 text-2xl'>
          TV Series
        </div>
        <div className='grid gap-3 grid-cols-5 max-sm:grid-cols-2 w-[80%] max-md:w-[90%] max-sm:w=[95%] m-auto'>
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
