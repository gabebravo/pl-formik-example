// Initial Values for User Schema
export const UserSchema = {
  firstName: '',
  lastName: '',
  email: '',
  address: {
    line1: '',
    city: '',
    state: '',
    zip: ''
  }
};

// Initial Values for Cars Schema
export const CarsSchema = {
  make: '',
  model: '',
  year: '',
  color: '',
  pickupCity: '',
  dropoffCity: ''
};

// Initial Values for Cruises Schema
export const CruisesSchema = {
  line: '',
  ship: '',
  port: '',
  days: ''
};

// Initial Values for Flights Schema
export const FlightsSchema = {
  airline: '',
  departureDate: '',
  returnDate: '',
  fromCity: '',
  toCity: ''
};

// Initial Values for Hotels Schema
export const HotelsSchema = {
  chain: '',
  city: '',
  days: '',
  startDate: '',
  endDate: ''
};
