const initialState = {
  length: 200,
  height: 15,
  width: 340,
  previewBalance: 10000,
};

export const previewReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'preview/deposit':
      return {
        ...state,
        previewBalance: state.previewBalance + action.payload,
      };
    case 'preview/withdraw':
      return {
        ...state,
        previewBalance: state.previewBalance + action.payload,
      };

    default:
      return state;
  }
};

export const previewDeposit = value => {
  return {
    type: 'preview/deposit',
    payload: value,
  };
};

export const previewWithdraw = value => {
  return {
    type: 'preview/withdraw',
    payload: value,
  };
};
