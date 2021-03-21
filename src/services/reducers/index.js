import {combineReducers} from 'redux';

import products from './products';
import users from './users';
import transactions from './transactions';

const appReducer = combineReducers ({
  products,
  users,
  transactions
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;