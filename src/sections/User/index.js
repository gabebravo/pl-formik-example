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
import { UserSchema } from '../shared/schemas';
import { UserValidation } from '../shared/validation';
import TextField from '../Fields/Text';
import SearchableField from '../Fields/Searchable';
import DateField from '../Fields/Date';
import SelectField from '../Fields/Select';
import { STATES } from '../shared/constants';
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
  activeBtn: {
    margin: theme.spacing(1)
  },
  validBtn: {
    margin: theme.spacing(1),
    backgroundColor: 'green',
    color: 'white'
  }
}));

export default function User() {
  const classes = useStyles();
  const { expanded, toggle } = useToggle(true);

  const validateForm = props => {
    const { isValid, submitForm, values } = props;
    submitForm();
    if (isValid) {
      console.log('values:', values);
    } else {
      console.log('values:', values);
    }
  };

  return (
    <div>
      <Formik
        initialValues={UserSchema}
        validationSchema={UserValidation}
        onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        render={props => {
          console.log('user:', props);
          return (
            <ExpansionPanel expanded={expanded} onChange={toggle}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>User</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div>
                  <Field
                    name="email"
                    label="Email"
                    component={SearchableField}
                  />
                  <Field
                    name="firstName"
                    label="First Name"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="lastName"
                    label="Last Name"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="address.line1"
                    label="Line 1"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="address.city"
                    label="City"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="address.state"
                    label="State"
                    list={STATES}
                    component={SelectField}
                    isRequired
                  />
                  <Field
                    name="address.zip"
                    label="Zip"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="startDate"
                    label="Start Date"
                    component={DateField}
                    isRequired
                  />
                  <Field
                    name="endDate"
                    label="End Date"
                    component={DateField}
                    isRequired
                  />
                  <div>
                    <Button
                      onClick={() => validateForm(props)}
                      variant="outlined"
                      color="primary"
                      className={classes.activeBtn}
                    >
                      Confirm
                    </Button>
                    {/* {props.dirty && props.isValid ? (
                      <Button className={classes.validBtn}>Valid</Button>
                    ) : (
                    )} */}
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
