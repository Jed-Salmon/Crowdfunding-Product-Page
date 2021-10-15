import Card from "../../UI/Card";
import About from "./About/About";
import Rewards from "./Rewards/Rewards";

const Pledge = () => {
  return (
    <Card style={{ marginBottom: "calc(1.5rem + 80px)" }}>
      <About />
      <Rewards />
    </Card>
  );
};

export default Pledge;
