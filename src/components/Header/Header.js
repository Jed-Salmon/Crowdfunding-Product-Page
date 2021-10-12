import Navbar from "./Navbar/Nav";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Navbar />
    </header>
  );
};

export default Header;
