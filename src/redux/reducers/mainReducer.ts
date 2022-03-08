import {combineReducers} from 'redux';
import {SystemReducer} from './systemReducer';
import {UserReducer} from './userReducer';

const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) {
      state = [];
    }
    return state;
  },
  user: UserReducer,
  system: SystemReducer,
});

export const createRootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return combinedReducers(state, action);
};
