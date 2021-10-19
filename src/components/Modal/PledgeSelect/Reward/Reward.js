import { useRef, useState } from "react";
import Button from "../../../UI/Button";
import classes from "../PledgeSelect.module.css";

const Reward = (props) => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { reward } = props;
  const priceInputRef = useRef();

  const rewardSubmitHandler = (e) => {
    e.preventDefault();
    // the plus symbol converts from string to number
    const enteredPrice = +priceInputRef.current.value;

    if (enteredPrice < reward.cost) {
      setError(true);
      setErrorMsg("You haven't met the minimum cost for this reward");
      return;
    }
    if (isNaN(enteredPrice)) {
      setError(true);
      setErrorMsg("You must enter your amount as a number");
      return;
    }
    // call pledge handler function
    props.submitPledge({ id: reward.id, amount: enteredPrice });
    // pass in the amount backed and the reward id
    setError(false);
    setErrorMsg("");
  };

  return (
    <label htmlFor={reward.type}>
      <div className={classes.pledgeContent}>
        <div className={classes.row}>
          <span>
            <input
              type="radio"
              id={reward.type}
              name="radio-select"
              className={classes.radioBtn}
            />
            <span className={classes.checkmark}></span>

            <div className={classes.titles}>
              <h4 className={classes.title}>{reward.type}</h4>
              <h4 className={classes.cost}>Pledge ${reward.cost} or more</h4>
            </div>
          </span>
          <span className={classes.quantity}>
            <h4>{reward.quantity}</h4>
            <p>left</p>
          </span>
        </div>
        <p className={classes.desc}>{reward.desc}</p>
        <span className={classes.quantityMobile}>
          <h3>{reward.quantity} </h3>
          <p>left</p>
        </span>
      </div>
      {/* section reveals once checkbox/radio is selected */}
      <div className={classes.pledgeSelected}>
        {/* check for error in pledge submission */}
        <div>
          {error ? (
            <p style={{ color: "#c33939" }}>{errorMsg}</p>
          ) : (
            <p>Confirm your pledge</p>
          )}
        </div>
        <div className={classes.pledgeControls}>
          <input
            type="text"
            min={reward.cost}
            max={reward.maxCost}
            placeholder={reward.cost}
            ref={priceInputRef}
          />
          <Button type="submit" onClick={rewardSubmitHandler}>
            Continue
          </Button>
        </div>
      </div>
      {/* if rewardSelected then display pledgeInput */}
    </label>
  );
};

export default Reward;
