import { useState } from "react";
import ModalContext from "./ModalContext";

const ModalProvider = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const onOpenModal = () => {
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };

  const modalContext = {
    isOpen: modalOpen,
    onOpenModal,
    onCloseModal,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
