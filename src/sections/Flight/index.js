import React from 'react';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import { FlightSchema } from '../shared/schemas';
import TextField from '../Fields/Text';
import DateField from '../Fields/Date';
import { useToggle } from '../../hooks';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Flight({ userIsValid, resetForm, ...props }) {
  const classes = useStyles();
  const { expanded, toggle } = useToggle(false, userIsValid);
  const { setValues, setTouched } = props;

  React.useEffect(() => {
    setValues(FlightSchema);
    setTouched({});
  }, [resetForm, setValues, setTouched]);

  return (
    <div>
      <ExpansionPanel expanded={userIsValid && expanded} onChange={toggle}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Flights</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Field
              name="airline"
              label="Airline"
              component={TextField}
              section="flight"
            />
            <Field
              name="fromCity"
              label="From City"
              component={TextField}
              section="flight"
            />
            <Field
              name="toCity"
              label="To City"
              component={TextField}
              section="flight"
            />
            <Field
              name="departureDate"
              label="Departure Date"
              component={DateField}
            />
            <Field
              name="returnDate"
              label="Return Date"
              component={DateField}
            />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
