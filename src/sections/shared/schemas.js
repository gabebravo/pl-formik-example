import moment from 'moment';

// Initial Values for User Schema
export const UserSchema = {
  firstName: '',
  lastName: '',
  email: '',
  address: {
    line1: '',
    city: '',
    state: 'FL',
    zip: ''
  },
  startDate: moment(new Date()).format('MM/DD/YYYY'),
  endDate: moment(new Date()).format('MM/DD/YYYY')
};

// Initial Values for Cars Schema
export const CarSchema = {
  make: '',
  model: '',
  year: '',
  color: '',
  pickupCity: '',
  dropoffCity: ''
};

// Initial Values for Cruises Schema
export const CruiseSchema = {
  line: '',
  ship: '',
  port: '',
  days: ''
};

// Initial Values for Flights Schema
export const FlightSchema = {
  airline: '',
  departureDate: '',
  returnDate: '',
  fromCity: '',
  toCity: ''
};

// Initial Values for Hotels Schema
export const HotelSchema = {
  chain: '',
  city: '',
  days: '',
  checkInDate: '',
  leaveDate: ''
};
