export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';


export const RESET_FLAGS = 'RESET_FLAGS';
const initialState = {
  userData: {},
  errors: {
    userData: null,
  },
  flags: {
    userDataSuccess: false, 
  },
};
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        flags: {...state.flags, userDataSuccess: true},
        userData: action.data,
      };
    case GET_USER_ERROR:
      return {...state, errors: {...state.errors, userData: action.error}};
    case RESET_FLAGS:
      return {...state, errors: initialState.errors, flags: initialState.flags};
    default:
      return state;
  }
};
