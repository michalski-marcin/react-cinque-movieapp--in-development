import tmdbTypes from '../interfaces/tmdbTypes';
import convertMinutesToHours from './functions/convertMinutesToHours';

const MovieModal = (details: tmdbTypes) => {
  const releaseDate = details.release_date
    ? details.release_date.split('-')
    : [];
  const movieDuration: string = convertMinutesToHours(details.runtime);
  return (
    <div className='p-12 max-sm:p-4 drop-shadow-xl'>
      <div className='text-3xl max-sm:text-xl font-semibold drop-shadow-2xl'>
        {details.title}
      </div>
      <div>
        {details.origin_country}
        {movieDuration}
        {releaseDate[0]}
        {/* {details.voteText} */}
      </div>
      <div className='p-8'>{details.overview}</div>
    </div>
  );
};

export default MovieModal;
