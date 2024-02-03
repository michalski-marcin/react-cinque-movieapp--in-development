import Modal from './Modal';
import useModal from '../hooks/useModal';
import { AnimatePresence } from 'framer-motion';



interface MovieTrendResult {
  vote_average: number;
  poster_path: string;
  title: string;
  name: string;
}

const MovieTrendCard = (result: MovieTrendResult) => {
  const { modalOpen, openModal, closeModal, Backdrop } = useModal();

  const voteText = result.vote_average ? result.vote_average.toFixed(1) : 'N/A';
  const title = result.title ? result.title : result.name;
  return (
    <div>
      <div
        className=' relative text-sm cursor-pointer'
        onClick={openModal}>
        <img
          src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
          alt='poster'
        />
        <div className='h-[30px] w-[100%] absolute bottom-[0] bg-opacity-75 bg-slate-900 flex items-center justify-between text-indigo-200'>
          <p className='px-1 overflow-hidden text-ellipsis whitespace-nowrap'>
            {title}
          </p>
          <p className='px-1'>{voteText}</p>
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
};

export default MovieTrendCard;
