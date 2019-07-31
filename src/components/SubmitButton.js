import React from 'react';
import { Button } from '@material-ui/core';
import { resetFormSubmitFlag } from '../redux/reducers';
import { connect } from 'react-redux';

function SubmitButton({ valid, values, resetFormSubmitFlag }) {
  function subitHandler() {
    const { user, car, cruise, flight, hotel } = values;
    const JSONpayload = { user, car, cruise, flight, hotel };
    console.log('JSONpayload:', JSONpayload);
    resetFormSubmitFlag();
  }
  console.log('render submit button');
  return (
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
  );
}

const mapStateToProps = state => ({
  valid: state.plTravel.valid,
  values: state.plTravel.values
});

export default connect(
  mapStateToProps,
  { resetFormSubmitFlag }
)(SubmitButton);
