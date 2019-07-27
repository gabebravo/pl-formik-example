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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: '15px 10px 10px 10px',
    width: 200
  }
}));

export default function Searchable({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, isValid }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  const classes = useStyles();
  const { label, isRequired = false, section = '' } = props;

  async function handleSearch(evt) {
    if (wasTouched(field.name, touched) && !isInvalid(field.name, errors)) {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/users?email=${field.value}`
      )
        .then(res => res.json())
        .then(json => json);
      console.log('result', result);
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
