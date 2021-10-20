import BackingContext from "../../../../store/backingContext/BackingContext";
import { useContext } from "react";
import Reward from "./Reward/Reward";

const Rewards = () => {
  const backingCtx = useContext(BackingContext);

  return (
    <div className="rewards">
      {backingCtx.rewards.map((reward) => {
        return (
          <Reward
            key={reward.id}
            type={reward.type}
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
