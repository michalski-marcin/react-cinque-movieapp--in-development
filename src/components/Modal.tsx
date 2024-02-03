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
      animate={{ opacity: 100 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className='fixed w-[400px] h-[300px] left-[50%] top-[50%] z-50 bg-opacity-85 filter'
      style={{
        background: 'rgba(0, 0, 0, .50)',
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${result.backdrop_path})`,
        backgroundBlendMode: 'darken',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        transform: 'translate(-50%, -50%)',
      }}
      onClick={closeModal}>
      {title}
    </motion.div>
  );
};

export default Modal;
