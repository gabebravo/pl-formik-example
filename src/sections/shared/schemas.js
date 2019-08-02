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
  startDate: moment(new Date(), 'MM/DD/YYYY'),
  endDate: moment(new Date(), 'MM/DD/YYYY')
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
  fromCity: '',
  toCity: '',
  departureDate: moment(new Date(), 'MM/DD/YYYY'),
  returnDate: moment(new Date(), 'MM/DD/YYYY')
};

// Initial Values for Hotels Schema
export const HotelSchema = {
  chain: '',
  city: '',
  checkInDate: moment(new Date(), 'MM/DD/YYYY'),
  leaveDate: moment(new Date(), 'MM/DD/YYYY')
};
