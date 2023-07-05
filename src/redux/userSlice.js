const initialStateUser = {
  length: 5,
  height: 60,
  width: 30,
  userBalance: 100,
};

export const userReducer = (state = initialStateUser, action) => {
  switch (action.type) {
    case 'user/deposit':
      return {
        ...state,
        userBalance: state.userBalance + action.payload,
      };
    case 'user/withdraw':
      return {
        ...state,
        userBalance: state.userBalance - action.payload,
      };
    default:
      return state;
  }
};

export const userDeposit = value => {
  return { type: 'user/deposit', payload: value };
};

export const userWithdraw = value => {
  return {
    type: 'user/withdraw',
    payload: value,
  };
};
