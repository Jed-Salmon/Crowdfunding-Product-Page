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
      <div className={classes.hamburger}>
        <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
          <g fill="#FFF" fill-rule="evenodd">
            <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
          </g>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
