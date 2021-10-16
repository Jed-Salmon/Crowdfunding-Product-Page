import { useContext } from "react";
import BackingContext from "../../../../store/backingContext/BackingContext";
import Button from "../../../UI/Button";
import classes from "../PledgeSelect.module.css";

const Rewards = () => {
  const backingCtx = useContext(BackingContext);

  const rewardItems = backingCtx.rewards.map((reward) => {
    return (
      <label htmlFor={reward.title} key={reward.id}>
        <div className={classes.pledgeContent}>
          <div className={classes.row}>
            <span>
              <input
                type="radio"
                id={reward.title}
                name="radio-select"
                className={classes.radioBtn}
              />
              <div className={classes.titles}>
                <h4 className={classes.title}>{reward.title}</h4>
                <h4 className={classes.cost}>Pledge {reward.cost} or more</h4>
              </div>
            </span>
            <span>
              <h4>{reward.quantity} </h4>
              <p>left</p>
            </span>
          </div>
          <p className={classes.desc}>{reward.desc}</p>
          {/* check if checkbox/radio is selected */}
          <div className={classes.pledgeSelected}>
            <p>Enter your pledge</p>
            <div className={classes.pledgeControls}>
              <input
                type="number"
                min={reward.cost}
                placeholder={reward.cost}
              />
              <Button>Continue</Button>
            </div>
          </div>
          {/* if rewardSelected then display pledgeInput */}
        </div>
      </label>
    );
  });

  return rewardItems;
};

export default Rewards;
