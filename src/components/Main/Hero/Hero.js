import { useContext } from "react";
import ModalContext from "../../../store/modalContext/ModalContext";
import Card from "../../UI/Card";
import Logo from "./assets/logo-mastercraft.svg";
import Button from "../../UI/Button";
import BookmarkBtn from "./bookmarkButton/BookmarkBtn";
import classes from "./Hero.module.css";

const Hero = () => {
  const modalCtx = useContext(ModalContext);

  const openModalHandler = () => {
    modalCtx.onOpenModal();
  };

  return (
    <Card>
      <img src={Logo} className={classes.avatar} alt="Mastercraft avatar" />
      <div className={classes.titles}>
        <h1 className={classes.title}>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className={classes.buttons}>
        <Button onClick={openModalHandler} customStyle={{ minHeight: "56px" }}>
          Back this project
        </Button>
        <BookmarkBtn />
      </div>
    </Card>
  );
};

export default Hero;
