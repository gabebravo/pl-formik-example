import * as Yup from 'yup';
import { dateRegexCheck } from './helpers';

// Form level validation for Cars Schema
export const UserValidation = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  address: Yup.object().shape({
    line1: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.string().required('Required')
  }),
  startDate: Yup.string()
    .required('Required')
    .test('date-regex', 'Incorrect Date Format', val => dateRegexCheck(val)),
  endDate: Yup.string()
    .required('Required')
    .test('date-regex', 'Incorrect Date Format', val => dateRegexCheck(val))
});

// Form level validation for Cars Schema
export const CarsValidation = Yup.object().shape({
  make: Yup.string().required('Required'),
  model: Yup.string().required('Required'),
  year: Yup.string().required('Required'),
  color: Yup.string().required('Required'),
  pickupCity: Yup.string().required('Required'),
  dropoffCity: Yup.string().required('Required')
});

// Form level validation for Cruises Schema
export const CruisesValidation = Yup.object().shape({
  line: Yup.string().required('Required'),
  ship: Yup.string().required('Required'),
  port: Yup.string().required('Required'),
  days: Yup.string().required('Required')
});

// Form level validation for Flights Schema
export const FlightsValidation = Yup.object().shape({
  airline: Yup.string().required('Required'),
  departureDate: Yup.string()
    .required('Required')
    .test('date-regex', 'Incorrect Date Format', val => dateRegexCheck(val)),
  returnDate: Yup.string()
    .required('Required')
    .test('date-regex', 'Incorrect Date Format', val => dateRegexCheck(val)),
  fromCity: Yup.string().required('Required'),
  toCity: Yup.string().required('Required')
});

// Form level validation for Hotels Schema
export const HotelsValidation = Yup.object().shape({
  chain: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  days: Yup.string().required('Required'),
  startDate: Yup.string()
    .required('Required')
    .test('date-regex', 'Incorrect Date Format', val => dateRegexCheck(val)),
  endDate: Yup.string()
    .required('Required')
    .test('date-regex', 'Incorrect Date Format', val => dateRegexCheck(val))
});
