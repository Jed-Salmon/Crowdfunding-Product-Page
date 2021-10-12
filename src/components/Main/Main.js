import Hero from "./Hero/Hero";
import Stats from "./Stats/Stats";
import Pledge from "./Pledge/Pledge";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <Hero />
      <Stats />
      <Pledge />
    </main>
  );
};

export default Main;
