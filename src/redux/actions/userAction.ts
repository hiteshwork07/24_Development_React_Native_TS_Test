import {
  GET_USER_REQUEST,
  RESET_FLAGS,
} from '../reducers/userReducer';

export const getUser = payload => ({
  type: GET_USER_REQUEST,
  payload,
});

export const resetFlags = () => ({
  type: RESET_FLAGS,
});
