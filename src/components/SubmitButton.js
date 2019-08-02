import React from 'react';
import { styled } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { resetFormSubmitFlag } from '../redux/reducers';
import { connect } from 'react-redux';
import moment from 'moment';

// ALT STYLING FORMAT : similar to StyledComponents
const StyledButton = styled(Button)({
  margin: '1rem'
});

const ButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end'
});

const RootWrapper = styled('div')({
  flex: '1'
});

function SubmitButton({ valid, values, resetFormSubmitFlag }) {
  function subitHandler() {
    const { user, car, cruise, flight, hotel } = values;
    const JSONpayload = {
      user: {
        ...user,
        startDate: moment(user.startDate).format('MM/DD/YYYY'),
        endDate: moment(user.endDate).format('MM/DD/YYYY')
      },
      car,
      cruise,
      flight: {
        ...flight,
        departureDate: moment(flight.departureDate).format('MM/DD/YYYY'),
        returnDate: moment(flight.returnDate).format('MM/DD/YYYY')
      },
      hotel: {
        ...hotel,
        checkInDate: moment(hotel.checkInDate).format('MM/DD/YYYY'),
        leaveDate: moment(hotel.leaveDate).format('MM/DD/YYYY')
      }
    };
    console.log('JSONpayload:', JSONpayload);
    resetFormSubmitFlag();
  }

  return (
    <RootWrapper>
      <ButtonWrapper>
        <StyledButton
          disabled={
            !(
              valid.user &&
              (valid.car || valid.cruise || valid.flight || valid.hotel)
            )
          }
          onClick={subitHandler}
          variant="contained"
          color="primary"
        >
          Submit
        </StyledButton>
      </ButtonWrapper>
    </RootWrapper>
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
