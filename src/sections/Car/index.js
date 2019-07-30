import React from 'react';
import { Formik, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import { CarSchema } from '../shared/schemas';
import TextField from '../Fields/Text';
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

export default function Car({ userIsValid }) {
  const classes = useStyles();
  const { expanded, toggle } = useToggle(false, userIsValid);

  return (
    <div>
      <Formik
        initialValues={CarSchema}
        render={props => {
          return (
            <ExpansionPanel
              expanded={userIsValid && expanded}
              onChange={toggle}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>Cars</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div>
                  <Field
                    name="make"
                    label="Make"
                    component={TextField}
                    section="car"
                  />
                  <Field
                    name="model"
                    label="Model"
                    component={TextField}
                    section="car"
                  />
                  <Field
                    name="year"
                    label="Year"
                    component={TextField}
                    section="car"
                  />
                  <Field
                    name="color"
                    label="Color"
                    component={TextField}
                    section="car"
                  />
                  <Field
                    name="pickupCity"
                    label="Pickup City"
                    component={TextField}
                    section="car"
                  />
                  <Field
                    name="dropoffCity"
                    label="Dropoff City"
                    component={TextField}
                    section="car"
                  />
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        }}
      />
    </div>
  );
}
