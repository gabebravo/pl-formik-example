import React from 'react';
import { Formik } from 'formik';
import {
  UserSchema,
  CarSchema,
  CruiseSchema,
  FlightSchema,
  HotelSchema
} from '../sections/shared/schemas';
import { UserValidation } from '../sections/shared/validation';
import Header from './Header';
import User from '../sections/User';
import Car from '../sections/Car';
import Cruise from '../sections/Cruise';
import Flight from '../sections/Flight';
import Hotel from '../sections/Hotel';

export default function App() {
  return (
    <div>
      <Header headerText="PL Trip Planner" />
      <Formik
        initialValues={UserSchema}
        validationSchema={UserValidation}
        render={props => <User {...props} />}
      />
      <Formik initialValues={CarSchema} render={props => <Car {...props} />} />
      <Formik
        initialValues={CruiseSchema}
        render={props => <Cruise {...props} />}
      />
      <Formik
        initialValues={FlightSchema}
        render={props => <Flight {...props} />}
      />
      <Formik
        initialValues={HotelSchema}
        render={props => <Hotel {...props} />}
      />
    </div>
  );
}
