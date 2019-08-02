import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { wasTouched, isInvalid, getErrorString } from '../shared/helpers';
import { setValidationFlag, setSectionValues } from '../../redux/reducers';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

function Text({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, values, isValid }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  setValidationFlag,
  setSectionValues,
  ...props
}) {
  const classes = useStyles();
  const { label, isRequired = false, readOnly = false, section = '' } = props;

  function handleChange(event) {
    field.onChange(event);
    setSectionValues({ section, values });
    setValidationFlag({ section, isValid });
  }

  function handleBlur(event) {
    field.onBlur(event);
    setSectionValues({ section, values });
    setValidationFlag({ section, isValid });
  }

  return (
    <TextField
      {...field}
      onChange={handleChange}
      onBlur={handleBlur}
      disabled={readOnly}
      label={label}
      className={classes.textField}
      margin="normal"
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
      required={isRequired}
    />
  );
}

export default connect(
  null,
  { setValidationFlag, setSectionValues }
)(Text);
