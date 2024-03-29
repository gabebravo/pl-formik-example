import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import { wasTouched, isInvalid, getErrorString } from '../shared/helpers';
import {
  fetchUserData,
  setValidationFlag,
  setSectionValues
} from '../../redux/reducers';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: '15px 10px 10px 10px',
    width: 200
  }
}));

function Searchable({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setValues, validateForm, values, isValid }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
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

  function handleSearch(evt) {
    // Sincere@april.biz
    if (wasTouched(field.name, touched) && !isInvalid(field.name, errors)) {
      props.fetchUserData({
        email: field.value,
        formObj: { setValues, validateForm }
      });
    } else {
      console.log('invalid email');
    }
  }

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel
          error={
            (wasTouched(field.name, touched) &&
              isInvalid(field.name, errors)) ||
            false
          }
          htmlFor="adornment-email"
        >
          {label}
        </InputLabel>
        <Input
          {...field}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={readOnly}
          required={isRequired}
          error={
            (wasTouched(field.name, touched) &&
              isInvalid(field.name, errors)) ||
            false
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleSearch}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText style={{ color: 'red' }}>
          {(wasTouched(field.name, touched) &&
            isInvalid(field.name, errors) &&
            getErrorString(field.name, errors)) ||
            ''}
        </FormHelperText>
      </FormControl>
    </>
  );
}

export default connect(
  null,
  { fetchUserData, setValidationFlag, setSectionValues }
)(Searchable);
