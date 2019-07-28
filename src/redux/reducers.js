import { createAction, handleActions } from 'redux-actions';
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

// ACTIONS
export const setUserData = createAction('SET_USER_DATA');
export const setValidationFlag = createAction('SET_VALIDATION_FLAG');

// REDUCERS
export default handleActions(
  {
    // USER
    [setUserData]: (state, { payload }) => ({
      ...state,
      values: { ...state.values, user: payload.data }
    }),
    [setValidationFlag]: (state, { payload }) => ({
      ...state,
      valid: { ...state.valid, [payload.section]: payload.isValid }
    })
  },
  defaultState
);

// DUCKS/THUNKS
export const fetchUserData = ({
  email,
  formObj: { setValues, validateForm }
}) => (dispatch, getState) => {
  // Sincere@april.biz
  fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`)
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const [user] = data;
        const transformedUser = transformUser(user);
        dispatch(setUserData({ data: transformedUser }));
        setValues(transformedUser);
        validateForm();
      }
    })
    .catch(err => console.log('error', err));
};
