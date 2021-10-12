import classes from "./Nav.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <h1>Crowdfund</h1>
      </div>
      <ul className={classes.navLinks}>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Discover</a>
        </li>
        <li>
          <a href="/">Get Started</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
