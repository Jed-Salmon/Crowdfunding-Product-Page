import { useContext } from "react";
import ModalContext from "../../../store/modalContext/ModalContext";
import BackingContext from "../../../store/backingContext/BackingContext";
import Reward from "./Reward/Reward";
import Button from "../../UI/Button";
import classes from "./PledgeSelect.module.css";

const PledgeSelect = () => {
  const modalCtx = useContext(ModalContext);
  const backingCtx = useContext(BackingContext);

  const pledgeSubmitHandler = () => {
    backingCtx.pledgeSupport();
  };

  const pledgeRewardSubmitHandler = (pledge) => {
    backingCtx.pledgeReward(pledge);
  };

  return (
    <div className={classes.pledgeSelect}>
      <span className={classes.closeBtn} onClick={modalCtx.onCloseModal}>
        <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
            fill="#000"
            fillRule="evenodd"
            opacity=".4"
          />
        </svg>
      </span>
      <div className={classes.headings}>
        <h2>Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
      </div>
      <div className={classes.rewardOptions}>
        <label htmlFor="no reward">
          <div className={classes.pledgeContent}>
            <div className={classes.row}>
              <span>
                <input
                  type="radio"
                  id="no reward"
                  name="radio-select"
                  className={classes.radioBtn}
                />
                <span className={classes.checkmark}></span>
                <div className={classes.titles}>
                  <h4>Pledge with no reward</h4>
                </div>
              </span>
            </div>
            <p className={classes.desc}>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>
          {/* check if checkbox/radio is selected */}
          <div className={classes.pledgeSelected}>
            <div>
              <p>Confirm your pledge</p>
            </div>
            <div className={classes.pledgeControls}>
              <Button type="submit" onClick={pledgeSubmitHandler}>
                Continue
              </Button>
            </div>
          </div>
        </label>
        {backingCtx.rewards.map((reward) => {
          return (
            <Reward
              reward={reward}
              submitPledge={pledgeRewardSubmitHandler}
              key={reward.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PledgeSelect;
