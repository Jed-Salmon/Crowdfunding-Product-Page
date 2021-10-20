import { defaultBackingState } from "./BackingProvider";

const backingReducer = (state, action) => {
  if (action.type === "PLEDGE_SUPPORT") {
    const updatedTotalBackers = state.totalBackers + 1;
    return { ...state, backer: true, totalBackers: updatedTotalBackers };
  }

  if (action.type === "PLEDGE_REWARD") {
    const { amount, id } = action.pledge;
    const rewardIndex = id - 1;
    const updatedAmountBacked = state.amountBacked + amount;
    const updatedTotalBackers = state.totalBackers + 1;
    // reduce reward quantity
    const selectedReward = state.rewards[rewardIndex];
    const updatedReward = {
      ...selectedReward,
      quantity: selectedReward.quantity - 1,
    };
    // replace state reward with updated reward
    state.rewards[rewardIndex] = updatedReward;
    return {
      ...state,
      backer: true,
      amountBacked: updatedAmountBacked,
      totalBackers: updatedTotalBackers,
      rewards: state.rewards,
    };
  }
  return defaultBackingState;
};

export default backingReducer;
