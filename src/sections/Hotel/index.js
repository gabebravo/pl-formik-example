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
import { HotelSchema } from '../shared/schemas';
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

export default function Hotel({ userIsValid, resetForm, ...props }) {
  const classes = useStyles();
  const { expanded, toggle } = useToggle(false, userIsValid);
  const { setValues, setTouched } = props;

  React.useEffect(() => {
    setValues(HotelSchema);
    setTouched({});
  }, [resetForm, setValues, setTouched]);

  return (
    <div>
      <ExpansionPanel expanded={userIsValid && expanded} onChange={toggle}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>Hotels</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Field
              name="chain"
              label="Chain"
              component={TextField}
              section="hotel"
            />
            <Field
              name="city"
              label="City"
              component={TextField}
              section="hotel"
            />
            <Field
              name="checkInDate"
              label="Start Date"
              component={DateField}
            />
            <Field name="leaveDate" label="End Date" component={DateField} />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
