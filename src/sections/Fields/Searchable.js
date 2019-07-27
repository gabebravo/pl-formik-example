import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import { wasTouched, isInvalid, getErrorString } from '../shared/helpers';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: '15px 10px 10px 10px',
    width: 200
  }
}));

export default function Searchable({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  const classes = useStyles();
  const { label, isRequired = false, section = '' } = props;

  const handleSearch = event => {
    console.log('email', field.value);
    // setValues({ ...values, [prop]: event.target.value });
  };

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
          margin="normal"
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
