import React from "react";

const ModalContext = React.createContext({
  isOpen: false,
  onOpenModal: () => {},
  onCloseModal: () => {},
});

export default ModalContext;
