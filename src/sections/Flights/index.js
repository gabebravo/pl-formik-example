import React from 'react';
import { Formik, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Button
} from '@material-ui/core';
import { FlightsSchema } from '../shared/schemas';
import { FlightsValidation } from '../shared/validation';
import TextField from '../Fields/Text';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
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

export default function Cruises() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const validateForm = props => {
    const { isValid, submitForm, values } = props;
    submitForm();
    if (isValid) {
      // console.log('values:', values);
    }
  };

  return (
    <div>
      <Formik
        initialValues={FlightsSchema}
        validationSchema={FlightsValidation}
        onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        render={props => {
          console.log('flights:', props);
          return (
            <ExpansionPanel
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
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
                    isRequired
                  />
                  <Field
                    name="departureDate"
                    label="Departure Date"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="returnDate"
                    label="Return Date"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="fromCity"
                    label="From City"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="toCity"
                    label="To City"
                    component={TextField}
                    isRequired
                  />
                  <div>
                    <Button
                      onClick={() => validateForm(props)}
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                    >
                      Validate
                    </Button>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        }}
      />
    </div>
  );
}
