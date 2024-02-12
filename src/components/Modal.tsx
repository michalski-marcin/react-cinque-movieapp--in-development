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

const Modal = ({ result, closeModal, title, voteText }: ModalProps) => {
  const [details, setDetails] = useState<tmdbTypes>([]);

  let getWhichType: string;
  if (result.title) {
    getWhichType = 'movie';
  } else if (result.name) {
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
  }, [result.id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className='fixed w-[80%] aspect-video max-lg:w-[90%]  max-md:aspect-[3/4] max-md:w-[80%]   max-md:max-h-[90%] max-[480px]:w-[90%] max-[480px]:h-[80%] left-[50%] top-[50%] shadow-2xl z-50 bg-opacity-85 filter'
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
        {getWhichType == 'movie' && <MovieModal {...details} />}
        {getWhichType == 'tv' && <TVModal {...details} />}
      
    </motion.div>
  );
};

export default Modal;
