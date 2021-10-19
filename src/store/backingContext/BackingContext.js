import React from "react";

const BackingContext = React.createContext({
  backer: false,
  amountBacked: 89914,
  totalBackers: 5204,
  rewards: [
    {
      type: "Bamboo Stand",
      cost: 25,
      maxCost: 74,
      desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      quantity: 101,
      id: 1,
    },
    {
      type: "Black Edition Stand",
      cost: 75,
      maxCost: 199,
      desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      quantity: 64,
      id: 2,
    },
    {
      type: "Mahogany Special Edition",
      cost: 200,
      maxCost: 100000, // minus amount backed
      desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      quantity: 1,
      id: 3,
    },
  ],
  pledgeSupport: () => {},
  pledgeReward: (pledge) => {},
});

export default BackingContext;
