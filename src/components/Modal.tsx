import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import tmdbTypes from '../interfaces/tmdbTypes';
import getMethod from '../api/getMethod';
// import { fetchData } from '../api/getResults';
import MovieModal from './MovieModal';
import TVModal from './TVModal';

interface ModalProps {
  result: tmdbTypes;
  closeModal: () => void;
  title: string;
  voteText: string;
}

const Modal = ({ result, closeModal }: ModalProps) => {
  const [details, setDetails] = useState<tmdbTypes | null>(null);

  let getWhichType: string = 'movie';
  if (result.name) {
    getWhichType = 'tv';
  }

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${getWhichType}/${result.id}?language=en-US`;

    const fetchData = async () => {
      const res = await fetch(url, getMethod);
      const json = await res.json();
      setDetails(json);
      console.log(json);
    };

    fetchData();
  }, [result.id, getWhichType]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className='fixed rounded-xl w-[70%] aspect-video max-lg:w-[90%] max-md:aspect-[3/4] max-md:w-[80%]   max-md:max-h-[90%] max-[480px]:w-[90%] max-[480px]:h-[80%] left-[50%] top-[50%] shadow-[0_20px_30px_4px_rgb(0,0,0,0.6)] z-50 bg-opacity-85 filter'
      style={{
        background: 'rgba(0, 0, 0, .50)',
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${result.backdrop_path})`,
        backgroundBlendMode: 'darken',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: 'translate(-50%, -50%)',
      }}
      onClick={closeModal}>


      {details && getWhichType === 'movie' && <MovieModal {...details} />}
      {details && getWhichType === 'tv' && <TVModal {...details} />}
    </motion.div>
  );
};

export default Modal;
