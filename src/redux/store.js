import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { userReducer } from './userSlice';
import { accountReducer } from './accountSlice';
import { previewReducer } from './previewSlice';

const rootReducer = combineReducers({
  user: userReducer,
  account: accountReducer,
  preview: previewReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
