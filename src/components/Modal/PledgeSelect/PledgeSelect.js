import classes from "./PledgeSelect.module.css";
import Rewards from "./Rewards/Rewards";

const PledgeSelect = () => {
  return (
    <div className={classes.pledgeSelect}>
      <div className={classes.headings}>
        <h2>Back this project</h2>
        <p>
          Back this project Want to support us in bringing Mastercraft Bamboo
          Monitor Riser out in the world?
        </p>
      </div>
      <div className={classes.rewardOptions}>
        <label htmlFor="no reward">
          <input
            type="radio"
            id="no reward"
            name="radio-select"
            className={classes.pledgeSelect}
          />
          <div className={classes.pledgeContent}>
            <h4>Pledge with no reward</h4>
            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>
        </label>
        <Rewards />
      </div>
    </div>
  );
};

export default PledgeSelect;
