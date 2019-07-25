import * as Yup from 'yup';

// Form level validation for Cars Schema
export const CarsValidation = Yup.object().shape({
  make: Yup.string().required('Required'),
  model: Yup.string().required('Required'),
  year: Yup.string().required('Required')
});

// Form level validation for Cruises Schema
export const CruisesValidation = Yup.object().shape({
  line: Yup.string().required('Required'),
  port: Yup.string().required('Required'),
  days: Yup.string().required('Required')
});

// Form level validation for Flights Schema
export const FlightsValidation = Yup.object().shape({
  airline: Yup.string().required('Required'),
  departureDate: Yup.string().required('Required'),
  returnDate: Yup.string().required('Required'),
  fromCity: Yup.string().required('Required'),
  toCity: Yup.string().required('Required')
});

// Form level validation for Hotels Schema
export const HotelsValidation = Yup.object().shape({
  chain: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  days: Yup.string().required('Required'),
  arrivalDate: Yup.string().required('Required'),
  departureDate: Yup.string().required('Required')
});
