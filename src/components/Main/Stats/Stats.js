import { useState } from "react";
import Card from "../../UI/Card";
import classes from "./Stats.module.css";

const Stats = () => {
  const [barWidth, setBarWidth] = useState(75);
  // 100,000 total
  // 75,000 current
  // 75% on width (round to nearest whole number)

  const [totalBackers, setTotalBackers] = useState(5000);
  // update initial count by increments of 1 (easy!)

  return (
    <Card>
      <div className={classes.backingStats}>
        <div className="totalBacked">
          <h1>$89,914</h1>
          <p>of $100,000 backed</p>
        </div>
        <hr />
        <div className="totalBackers">
          <h1>5,007</h1>
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
          style={{ width: `${barWidth}%` }}
        ></div>
      </div>
    </Card>
  );
};

export default Stats;
