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
import _isEmpty from 'lodash/isEmpty';
import { UserSchema } from '../shared/schemas';
import { UserValidation } from '../shared/validation';
import TextField from '../Fields/Text';
import SearchableField from '../Fields/Searchable';
import DateField from '../Fields/Date';
import SelectField from '../Fields/Select';
import { STATES } from '../shared/constants';
import { useToggle } from '../../hooks';
import { connect } from 'react-redux';
import { setValidationFlag } from '../../redux/reducers';

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
  resetBtn: {
    margin: theme.spacing(1),
    backgroundColor: 'green',
    color: 'white'
  }
}));

function User({ setValidationFlag }) {
  const classes = useStyles();
  const { expanded, toggle } = useToggle(true);

  function resetHandler(props) {
    props.setValues(UserSchema);
    props.setTouched({});
  }

  return (
    <div>
      <Formik
        initialValues={UserSchema}
        validationSchema={UserValidation}
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
                    section="user"
                    isRequired
                  />
                  <Field
                    name="firstName"
                    label="First Name"
                    component={TextField}
                    section="user"
                    isRequired
                  />
                  <Field
                    name="lastName"
                    label="Last Name"
                    component={TextField}
                    section="user"
                    isRequired
                  />
                  <Field
                    name="address.line1"
                    label="Line 1"
                    component={TextField}
                    section="user"
                    isRequired
                  />
                  <Field
                    name="address.city"
                    label="City"
                    component={TextField}
                    section="user"
                    isRequired
                  />
                  <Field
                    name="address.state"
                    label="State"
                    list={STATES}
                    component={SelectField}
                    section="user"
                    isRequired
                  />
                  <Field
                    name="address.zip"
                    label="Zip"
                    component={TextField}
                    section="user"
                    isRequired
                  />
                  <Field
                    name="startDate"
                    label="Start Date"
                    component={DateField}
                    section="user"
                    isRequired
                  />
                  <Field
                    name="endDate"
                    label="End Date"
                    component={DateField}
                    section="user"
                    isRequired
                  />
                  <div>
                    {!_isEmpty(props.touched) && props.isValid && (
                      <Button
                        onClick={() => resetHandler(props)}
                        className={classes.resetBtn}
                      >
                        Reset
                      </Button>
                    )}
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

export default connect(
  null,
  { setValidationFlag }
)(User);
