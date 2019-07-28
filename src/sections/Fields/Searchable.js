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
import { fetchUserData, setValidationFlag } from '../../redux/reducers';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: '15px 10px 10px 10px',
    width: 200
  }
}));

function Searchable({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setValues, validateForm, isValid }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  const classes = useStyles();
  const { label, isRequired = false, section = '' } = props;

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

const mapStateToProps = ({ values, valid }) => ({ values, valid });

export default connect(
  mapStateToProps,
  { fetchUserData }
)(Searchable);
