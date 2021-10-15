import React, { useReducer } from "react";
import BackingContext from "./BackingContext";
import backingReducer from "./backingReducer";

export const defaultBackingState = {
  backer: false,
  amountBacked: 89914,
  totalBackers: 5204,
  rewards: [
    {
      title: "Bamboo Stand",
      cost: 25,
      desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      quantity: 101,
      id: 1,
    },
    {
      title: "Black Edition Stand",
      cost: 75,
      desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      quantity: 64,
      id: 2,
    },
    {
      title: "Mahogany Special Edition",
      cost: 200,
      desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      quantity: 1,
      id: 3,
    },
  ],
};

const BackingProvider = (props) => {
  const [backingState, dispatchBackingAction] = useReducer(
    backingReducer,
    defaultBackingState
  );

  const onEnableBacker = () => {};
  const onIncreaseBackedAmount = () => {};
  const onIncreaseTotalBackers = () => {};
  const onReduceRewardQuantity = (quantity) => {};

  const backingContext = {
    backer: backingState.backer,
    amountBacked: backingState.amountBacked,
    totalBackers: backingState.totalBackers,
    rewards: backingState.rewards,

    enableBacker: onEnableBacker,
    // update amount backed by x
    increaseAmountBacked: onIncreaseBackedAmount,
    // update total backers by 1
    increaseTotalBackers: onIncreaseTotalBackers,
    // reduce reward amount by 1
    reduceRewardQuantity: onReduceRewardQuantity,
  };

  return (
    <BackingContext.Provider value={backingContext}>
      {props.children}
    </BackingContext.Provider>
  );
};

export default BackingProvider;
