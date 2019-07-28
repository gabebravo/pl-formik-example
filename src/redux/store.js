import { createActions, handleActions } from 'redux-actions';
import { transformUser } from '../sections/shared/helpers';

const defaultState = {
  values: {
    user: null,
    car: null,
    cruise: null,
    flight: null,
    hotel: null
  },
  valid: {
    user: false,
    car: false,
    cruise: false,
    flight: false,
    hotel: false
  }
};

// USER
export const setUserData = createActions('SET_USER_DATA');

const reducers = handleActions(
  {
    // USER
    [setUserData]: (state, { payload }) => {
      console.log('payload', payload);
      return { ...state, userData: payload.data };
    }
  },
  defaultState
);

export const fetchUserData = ({ email, callback }) => (dispatch, getState) => {
  // Sincere@april.biz
  fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const [user] = data;
        const transformedUser = transformUser(user);
        dispatch(setUserData({ data: transformedUser }));
        callback(transformedUser);
      }
    })
    .catch(err => console.log('error', err));
};

export default reducers;
