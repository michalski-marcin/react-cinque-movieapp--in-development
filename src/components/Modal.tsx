import { motion } from 'framer-motion';

interface Result {
  backdrop_path: string;
}

interface ModalProps {
  result: Result;
  closeModal: () => void;
  title: string;
}

const Modal = ({ result, closeModal, title }: ModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 100}}
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
      {/* <img className='' src={`https://image.tmdb.org/t/p/w1280${result.backdrop_path}`} />  */}
      {title}
    </motion.div>
  );
};

export default Modal;
