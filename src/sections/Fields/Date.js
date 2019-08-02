import React from 'react';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { makeStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { wasTouched, isInvalid, getErrorString } from '../shared/helpers';
import { setValidationFlag, setSectionValues } from '../../redux/reducers';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    marginRight: '1rem',
    width: 200,
    marginLeft: 10
  }
});

function DatePickers({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue, isValid, values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  setValidationFlag,
  setSectionValues,
  ...props
}) {
  const classes = useStyles();
  const { label, isRequired = false, section = '' } = props;

  function handleChange(event) {
    const dateAsString = moment(event, 'MM/DD/YYYY');
    setFieldValue(field.name, dateAsString);
    setSectionValues({ section, values });
    setValidationFlag({ section, isValid });
  }

  function handleBlur(event) {
    if (props.name === field.name) {
      const dateAsString = moment(event, 'MM/DD/YYYY');
      setFieldValue(props.name, dateAsString);
      setSectionValues({ section, values });
      setValidationFlag({ section, isValid });
    }
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        {...field}
        allowKeyboardControl
        className={classes.root}
        onChange={handleChange}
        onBlur={handleBlur}
        margin="normal"
        id="mui-pickers-date"
        label={label}
        required={isRequired}
        error={
          (wasTouched(field.name, touched) && isInvalid(field.name, errors)) ||
          false
        }
        helperText={
          (wasTouched(field.name, touched) &&
            isInvalid(field.name, errors) &&
            getErrorString(field.name, errors)) ||
          ''
        }
      />
    </MuiPickersUtilsProvider>
  );
}

export default connect(
  null,
  { setValidationFlag, setSectionValues }
)(DatePickers);
