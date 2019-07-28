import React from 'react';
import Header from './Header';
import User from '../sections/User';
import Car from '../sections/Car';
import Cruise from '../sections/Cruise';
import Flight from '../sections/Flight';
import Hotel from '../sections/Hotel';
import { Button } from '@material-ui/core';

function App() {
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
