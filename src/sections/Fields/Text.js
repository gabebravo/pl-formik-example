import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { wasTouched, isInvalid, getErrorString } from '../shared/helpers';
import { connect } from 'react-redux';
import { setValidationFlag, setSectionValues } from '../../redux/reducers';

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
  form: { touched, errors, isValid, values }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  const classes = useStyles();
  const {
    label,
    isRequired = false,
    section = '',
    setValidationFlag,
    setSectionValues,
    readOnly = false
  } = props;

  React.useEffect(() => {
    // NOTE : this useEffect will trigger at the form-level
    section && setValidationFlag({ section, isValid });
  }, [isValid, section, setValidationFlag]);

  React.useEffect(() => {
    // NOTE : this useEffect will trigger at the form-level
    section && setSectionValues({ section, values });
  }, [values, section, setSectionValues]);

  return (
    <TextField
      {...field}
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
