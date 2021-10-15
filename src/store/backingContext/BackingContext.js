import React from "react";

const BackingContext = React.createContext({
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
  // switch backer status to true
  onEnableBacker: () => {},
  // update amount backed by x
  onIncreaseBackedAmount: () => {},
  // update total backers by 1
  onIncreaseTotalBackers: () => {},
  // reduce reward amount by 1
  onReduceRewardAmount: (quantity) => {},
});

export default BackingContext;
