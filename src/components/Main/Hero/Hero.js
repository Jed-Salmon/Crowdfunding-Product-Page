import Card from "../../UI/Card";
import Logo from "./assets/logo-mastercraft.svg";
import Button from "../../UI/Button";
import BookmarkBtn from "./BookmarkBtn/BookmarkBtn";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <Card>
      <img src={Logo} className={classes.avatar} alt="Mastercraft avatar" />
      <div className={classes.titles}>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
      </div>
      <div className={classes.buttons}>
        <Button>Back this project</Button>
        <BookmarkBtn />
      </div>
    </Card>
  );
};

export default Hero;
