import BackingContext from "../../../../store/backingContext/BackingContext";
import { useContext } from "react/cjs/react.development";
import Reward from "./Reward/Reward";

const Rewards = () => {
  const backingCtx = useContext(BackingContext);
  console.log(backingCtx);

  return (
    <div className="rewards">
      {backingCtx.rewards.map((reward) => {
        return (
          <Reward
            key={reward.id}
            title={reward.title}
            desc={reward.desc}
            amount={reward.amount}
            cost={reward.cost}
            quantity={reward.quantity}
          />
        );
      })}
    </div>
  );
};

export default Rewards;
