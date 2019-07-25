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
import { UserSchema } from '../Schemas';
import { UserValidation } from '../Validation';
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

export default function User() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Formik
        initialValues={UserSchema}
        validationSchema={UserValidation}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => {
          console.log('user props:', props);
          return (
            <ExpansionPanel
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>User</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <form onSubmit={props.handleSubmit}>
                  <Field
                    name="firstName"
                    label="First Name"
                    component={TextField}
                  />
                  <Field
                    name="lastName"
                    label="Last Name"
                    component={TextField}
                  />
                  <Field name="email" label="Email" component={TextField} />
                  <Field
                    name="address.line1"
                    label="Line 1"
                    component={TextField}
                  />
                  <Field
                    name="address.city"
                    label="City"
                    component={TextField}
                  />
                  <Field
                    name="address.state"
                    label="State"
                    component={TextField}
                  />
                  <Field
                    name="address.zip"
                    label="State"
                    component={TextField}
                  />
                  {props.errors.name && (
                    <div id="feedback">{props.errors.name}</div>
                  )}
                  <div>
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                    >
                      Confirm
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
