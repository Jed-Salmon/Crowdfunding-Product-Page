import { useContext } from "react";
import BackingContext from "../../../store/backingContext/BackingContext";
import Card from "../../UI/Card";
import classes from "./Stats.module.css";

const Stats = () => {
  const backingCtx = useContext(BackingContext);
  const barWidth = Math.round(backingCtx.amountBacked / 1000);

  return (
    <Card>
      <div className={classes.backingStats}>
        <div className="totalBacked">
          <h1>{backingCtx.amountBacked.toLocaleString("en-US")}</h1>
          <p>of $100,000 backed</p>
        </div>
        <hr />
        <div className="totalBackers">
          <h1>{backingCtx.totalBackers.toLocaleString("en-US")}</h1>
          <p>total backers</p>
        </div>
        <hr />
        <div className="duration">
          <h1>56</h1>
          <p>days left</p>
        </div>
      </div>
      <div className={classes.progress}>
        <div
          className={classes.progressBar}
          style={{ width: `${barWidth}%`, maxWidth: "100%" }}
        ></div>
      </div>
    </Card>
  );
};

export default Stats;

// source used to format numbers with commas:
// https://sebhastian.com/javascript-format-number-commas/
