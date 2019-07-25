import React from 'react';
import Header from './Header';
import User from '../sections/User';
import Cars from '../sections/Cars';
import Cruises from '../sections/Cruises';
import Flights from '../sections/Flights';
import Hotels from '../sections/Hotels';

function App() {
  return (
    <div>
      <Header />
      <User />
      <Cars />
      <Cruises />
      <Flights />
      <Hotels />
    </div>
  );
}

export default App;
