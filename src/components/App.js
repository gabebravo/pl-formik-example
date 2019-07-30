import React from 'react';
import Header from './Header';
import User from '../sections/User';
import Car from '../sections/Car';
import Cruise from '../sections/Cruise';
import Flight from '../sections/Flight';
import Hotel from '../sections/Hotel';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

function App({ valid, values }) {
  function subitHandler() {
    const { user, car, cruise, flight, hotel } = values;
    const JSONpayload = { user, car, cruise, flight, hotel };
    console.log('JSONpayload:', JSONpayload);
  }

  return (
    <div>
      <Header headerText="PL Trip Planner" />
      <User />
      <Car userIsValid={valid.user} />
      <Cruise userIsValid={valid.user} />
      <Flight
        userIsValid={valid.user}
        // userStartDate={(values.user && values.user.startDate) || ''}
        // userEndDate={(values.user && values.user.endDate) || ''}
      />
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
  values: state.plTravel.values
});

export default connect(
  mapStateToProps,
  null
)(App);
