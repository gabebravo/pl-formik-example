import { createActions, handleActions } from 'redux-actions';

const defaultState = {
  userData: null
};

const prefix = 'USER_STORE/';

// USER
export const setUserData = createActions(`${prefix}SET_USER_DATA`);

const reducers = handleActions(
  {
    // USER
    [setUserData]: (state, { payload }) => ({
      ...state,
      userData: payload.data
    })
  },
  defaultState
);

export default reducers;
