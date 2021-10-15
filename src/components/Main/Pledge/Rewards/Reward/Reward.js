import { useContext } from "react";
import ModalContext from "../../../../../store/modalContext/ModalContext";
import Button from "../../../../UI/Button";
import classes from "./Reward.module.css";

const Reward = (props) => {
  const modalCtx = useContext(ModalContext);

  const openModalHandler = () => {
    modalCtx.onOpenModal();
  };

  return (
    <div className={classes.card}>
      <div className={classes.r1}>
        <h3>{props.title}</h3>
        <p>{`Pledge $${props.cost} or more`}</p>
      </div>
      <div className={classes.r2}>
        <p>{props.desc}</p>
      </div>
      <div className={classes.r3}>
        <span className={classes.quantity}>
          <h1>{props.quantity}</h1>
          <p>left</p>
        </span>
        <Button
          onClick={openModalHandler}
          disabled={props.quantity ? false : true}
        >
          {props.quantity ? "Select Reward" : "Out of stock"}
        </Button>
      </div>
    </div>
  );
};

export default Reward;
