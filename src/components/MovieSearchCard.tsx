import { AnimatePresence } from 'framer-motion';
import Modal from './Modal';
import useModal from '../hooks/useModal';

interface MovieSearchResult {
  original_title: string;
  title: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  overview: string;
}

const MovieSearchCard = (result: MovieSearchResult) => {
  console.log(result);
  const { modalOpen, openModal, closeModal, Backdrop } = useModal();

  const releaseDateOnlyYearVisible = result.release_date.split('-');
  const voteText = result.vote_average ? result.vote_average.toFixed(1) : 'N/A';
  const title =
    result.original_title == result.title
      ? result.original_title
      : `${result.original_title} (${result.title})`;
  if (result.poster_path) {
    return (
      <div>
        <div
          onClick={openModal}
          className='w-[100%] h-[180px] text-sm flex backdrop-blur hover:shadow-lg hover:scale-[1.02] rounded-lg transition-[0.3s] overflow-hidden'>
          <img
            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
            alt='poster'
            className='w-[120px] mr-2'
          />
          <div
            className='flex flex-col overflow-hidden'>
            <p className='overflow-hidden truncate text-indigo-200 font-medium'>
              {title}
            </p>
            <p className='my-[3px] text-indigo-300 text-[12px]'>
              Released: {releaseDateOnlyYearVisible[0]}
            </p>
            <p className='mb-1 text-[12px] text-indigo-300'>
              Score: {voteText}/10
            </p>
            <div className='mb-2 h-[5rem] overflow-hidden text-indigo-300 text-[14px]'>
              <p className=''>{result.overview}</p>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {modalOpen && (
            <div>
              <Backdrop closeModal={closeModal} />
              <Modal
                result={result}
                closeModal={closeModal}
                title={title}
              />
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }
};

export default MovieSearchCard;
