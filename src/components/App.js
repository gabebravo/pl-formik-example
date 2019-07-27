import React from 'react';
import Header from './Header';
import User from '../sections/User';
import Cars from '../sections/Cars';
import Cruises from '../sections/Cruises';
import Flights from '../sections/Flights';
import Hotels from '../sections/Hotels';
import { Button } from '@material-ui/core';

function App() {
  return (
    <div>
      <Header headerText="PL Trip Planner" />
      <User />
      <Cars />
      <Cruises />
      <Flights />
      <Hotels />
      <div style={{ flex: '1' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
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

export default App;
