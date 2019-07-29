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
import { CruisesSchema } from '../shared/schemas';
import { CruisesValidation } from '../shared/validation';
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

export default function Cruise({ userIsValid }) {
  const classes = useStyles();
  const { expanded, toggle } = useToggle(false, userIsValid);

  return (
    <div>
      <Formik
        initialValues={CruisesSchema}
        validationSchema={CruisesValidation}
        render={props => {
          // console.log('cruises:', props);
          return (
            <ExpansionPanel
              expanded={userIsValid && expanded}
              onChange={toggle}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>Cruises</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div>
                  <Field
                    name="line"
                    label="Line"
                    component={TextField}
                    section="cruise"
                    isRequired
                  />
                  <Field
                    name="ship"
                    label="Ship"
                    component={TextField}
                    section="cruise"
                    isRequired
                  />
                  <Field
                    name="port"
                    label="Port"
                    component={TextField}
                    section="cruise"
                    isRequired
                  />
                  <Field
                    name="days"
                    label="Days"
                    component={TextField}
                    section="cruise"
                    isRequired
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
