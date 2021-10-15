import { useContext } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import BackingContext from "./store/backingContext/BackingContext";
import ModalContext from "./store/modalContext/ModalContext";
import Modal from "./components/UI/Modal/Modal";

function App() {
  const backingCtx = useContext(BackingContext);
  const modalCtx = useContext(ModalContext);

  return (
    <div className="App">
      {modalCtx.isOpen && backingCtx.backer === true && (
        <Modal onCloseModal={modalCtx.onCloseModal}>Success Component</Modal>
      )}
      {modalCtx.isOpen && backingCtx.backer === false && (
        <Modal onCloseModal={modalCtx.onCloseModal}>
          Pledge Select Component
        </Modal>
      )}
      <Header />
      <Main />
    </div>
  );
}

export default App;
