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
import { CarsSchema } from '../shared/schemas';
import { CarsValidation } from '../shared/validation';
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

export default function Cars() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Formik
        initialValues={CarsSchema}
        validationSchema={CarsValidation}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => {
          console.log('cars:', props);
          return (
            <ExpansionPanel
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>Cars</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <form onSubmit={props.handleSubmit}>
                  <Field
                    name="make"
                    label="Make"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="model"
                    label="Model"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="year"
                    label="Year"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="color"
                    label="Color"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="pickupCity"
                    label="Pickup City"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="dropoffCity"
                    label="Dropoff City"
                    component={TextField}
                    isRequired
                  />
                  <div>
                    <Button
                      type="submit"
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                    >
                      Validate
                    </Button>
                  </div>
                </form>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        }}
      />
    </div>
  );
}
