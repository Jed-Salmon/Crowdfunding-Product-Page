import classes from "./Nav.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <h1>Crowdfund</h1>
      </div>
      <ul className={classes.navLinks}>
        <li>About</li>
        <li>Discover</li>
        <li>Get Started</li>
      </ul>
    </nav>
  );
};

export default Navbar;
