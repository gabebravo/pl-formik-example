import { createAction, handleActions } from 'redux-actions';
import { transformUser } from '../sections/shared/helpers';
import {
  UserSchema,
  CarSchema,
  CruiseSchema,
  FlightSchema,
  HotelSchema
} from '../sections/shared/schemas';
import { userAPI } from '../sections/shared/constants';

const defaultState = {
  values: {
    user: UserSchema,
    car: CarSchema,
    cruise: CruiseSchema,
    flight: FlightSchema,
    hotel: HotelSchema
  },
  valid: {
    user: false,
    car: false,
    cruise: false,
    flight: false,
    hotel: false
  },
  readOnly: false,
  formSubmitted: false
};

// ACTIONS
export const setUserData = createAction('SET_USER_DATA');
export const resetReadOnlyFlag = createAction('RESET_READ_ONLY_FLAG');
export const setSectionValues = createAction('SET_SECTION_VALUES');
export const setValidationFlag = createAction('SET_VALIDATION_FLAG');
export const resetFormSubmitFlag = createAction('RESET_FORM_SUBMIT_FLAG');

// REDUCERS
export default handleActions(
  {
    // USER
    [setUserData]: (state, { payload }) => ({
      ...state,
      values: { ...state.values, user: payload.data },
      readOnly: true
    }),
    [resetReadOnlyFlag]: state => ({
      ...state,
      readOnly: defaultState.readOnly
    }),
    [setSectionValues]: (state, { payload }) => ({
      ...state,
      values: { ...state.values, [payload.section]: payload.values }
    }),
    [setValidationFlag]: (state, { payload }) => ({
      ...state,
      valid: { ...state.valid, [payload.section]: payload.isValid }
    }),
    [resetFormSubmitFlag]: state => ({
      ...defaultState,
      formSubmitted: !state.formSubmitted
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
  fetch(`${userAPI}=${email}`)
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

export const resetReadOnly = ({
  UserSchema,
  formObj: { setValues, setTouched }
}) => (dispatch, getState) => {
  setValues(UserSchema);
  setTouched({});
  dispatch(resetReadOnlyFlag());
};
