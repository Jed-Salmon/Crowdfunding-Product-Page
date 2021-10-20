import { useContext } from "react";
import ModalContext from "../../../store/modalContext/ModalContext";
import Button from "../../UI/Button";
import classes from "./SuccessConfirmation.module.css";

const SuccessConfirmation = () => {
  const modalCtx = useContext(ModalContext);

  return (
    <div className={classes.successModal}>
      <div className={classes.check}>
        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle fill="#3CB3AB" cx="32" cy="32" r="32" />
            <path stroke="#FFF" strokeWidth="5" d="M20 31.86L28.093 40 44 24" />
          </g>
        </svg>
      </div>
      <h3>Thanks for your support!</h3>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <Button onClick={modalCtx.onCloseModal}>Got it!</Button>
    </div>
  );
};

export default SuccessConfirmation;
