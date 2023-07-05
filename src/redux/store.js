import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

export const deposit = value => {
  return {
    type: 'account/deposit',
    payload: value,
  };
};

export const withdraw = value => {
  return {
    type: 'account/withdraw',
    payload: value,
  };
};

const initialState = {
  preview: {},
  account: {
    length: 20,
    height: 35,
    width: 10,
    balance: 1000,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        account: {
          ...state.account,
          balance: state.account.balance + action.payload,
        },
      };

    case 'account/withdraw':
      return {
        ...state,
        account: {
          ...state.account,
          balance: state.account.balance - action.payload,
        },
      };

    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
