import { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import BackingContext from "./store/backingContext/BackingContext";
import ModalContext from "./store/modalContext/ModalContext";
import Modal from "./components/UI/Modal";
import PledgeSelect from "./components/Modal/PledgeSelect/PledgeSelect";
import SuccessConfirmation from "./components/Modal/Confirmation/SuccessConfirmation";

function App() {
  const backingCtx = useContext(BackingContext);
  const modalCtx = useContext(ModalContext);

  const { isOpen } = modalCtx;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="App">
      {isOpen && backingCtx.backer === true && (
        <Modal onCloseModal={modalCtx.onCloseModal}>
          <SuccessConfirmation />
        </Modal>
      )}
      {isOpen && backingCtx.backer === false && (
        <Modal onCloseModal={modalCtx.onCloseModal}>
          <PledgeSelect />
        </Modal>
      )}
      <Header />
      <Main />
    </div>
  );
}

export default App;
