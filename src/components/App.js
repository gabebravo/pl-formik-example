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
      <Car />
      <Cruise />
      <Flight />
      <Hotel />
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

const mapStateToProps = state => ({ ...state.plTravel });

export default connect(
  mapStateToProps,
  null
)(App);
