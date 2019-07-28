import { createActions, handleActions } from 'redux-actions';
import { transformUser } from '../sections/shared/helpers';

const defaultState = {
  userData: null
};

const prefix = 'USER_STORE/';

// USER
export const setUserData = createActions(`${prefix}SET_USER_DATA`);
console.log('setUserData', setUserData);

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
