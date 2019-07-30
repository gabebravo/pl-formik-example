import React from 'react';
import { Formik } from 'formik';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { UserSchema } from '../sections/shared/schemas';
import { UserValidation } from '../sections/shared/validation';
import Header from './Header';
import User from '../sections/User';
import Car from '../sections/Car';
import Cruise from '../sections/Cruise';
import Flight from '../sections/Flight';
import Hotel from '../sections/Hotel';
import { resetFormSubmitFlag } from '../redux/reducers';

function App({ valid, values, resetFormSubmitFlag, formSubmitted }) {
  function subitHandler() {
    const { user, car, cruise, flight, hotel } = values;
    const JSONpayload = { user, car, cruise, flight, hotel };
    alert(JSON.stringify(JSONpayload, null, 2));
    resetFormSubmitFlag();
  }

  return (
    <div>
      <Header headerText="PL Trip Planner" />
      <Formik
        initialValues={UserSchema}
        validationSchema={UserValidation}
        render={props => <User {...props} resetForm={formSubmitted} />}
      />
      <Car userIsValid={valid.user} />
      <Cruise userIsValid={valid.user} />
      <Flight userIsValid={valid.user} />
      <Hotel userIsValid={valid.user} />
      <div style={{ flex: '1' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            disabled={
              !(
                valid.user &&
                (valid.car || valid.cruise || valid.flight || valid.hotel)
              )
            }
            onClick={subitHandler}
            variant="contained"
            color="primary"
            style={{ margin: '1rem' }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  valid: state.plTravel.valid,
  values: state.plTravel.values,
  formSubmitted: state.plTravel.formSubmitted
});

export default connect(
  mapStateToProps,
  { resetFormSubmitFlag }
)(App);
