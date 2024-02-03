import useModal from "../hooks/useModal";
import { motion } from "framer-motion";

interface Result {}

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
        transition={{ duration: .2 }}
      className='fixed w-[200px] h-[300px] bg-white left-[50%] top-[50%] z-50 bg-opacity-85'
      onClick={closeModal}>
      {title}
    </motion.div>
  );
};

export default Modal;
