import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const useModal = () => {
  const Backdrop = ({ closeModal }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .2 }}
        className='fixed inset-0 bg-black bg-opacity-60 z-40'
        onClick={closeModal}></motion.div>
    );
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    window.addEventListener('scroll', closeModal);

    return () => {
      window.removeEventListener('scroll', closeModal);
    };
  }, []);

  return { modalOpen, openModal, closeModal, Backdrop };
};

export default useModal;
