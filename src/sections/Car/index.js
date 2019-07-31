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
import { CarSchema } from '../shared/schemas';
import TextField from '../Fields/Text';
import { useToggle } from '../../hooks';
import { connect } from 'react-redux';
import { setValidationFlag, setSectionValues } from '../../redux/reducers';

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

function Car({
  userIsValid,
  resetForm,
  setValidationFlag,
  setSectionValues,
  ...props
}) {
  const classes = useStyles();
  const { expanded, toggle } = useToggle(false, userIsValid);
  const { setValues, setTouched, isValid, values } = props;

  React.useEffect(() => {
    setValues(CarSchema);
    setTouched({});
  }, [resetForm, setValues, setTouched]);

  React.useEffect(() => {
    // NOTE : this useEffect will trigger at the form-level
    setValidationFlag({ section: 'car', isValid });
  }, [isValid, setValidationFlag]);

  React.useEffect(() => {
    // NOTE : this useEffect will trigger at the form-level
    setSectionValues({ section: 'car', values });
  }, [values, setSectionValues]);

  console.log('render car');

  return (
    <div>
      <ExpansionPanel expanded={userIsValid && expanded} onChange={toggle}>
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
    </div>
  );
}

const mapStateToProps = state => ({
  userIsValid: state.plTravel.valid.user,
  resetForm: state.plTravel.formSubmitted
});

export default connect(
  mapStateToProps,
  { setValidationFlag, setSectionValues }
)(Car);
