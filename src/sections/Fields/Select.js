import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: '15px 10px 10px 10px',
    width: 200
  }
}));

export default function SimpleSelect({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  const classes = useStyles();
  const [value, setValues] = React.useState({
    state: 'FL',
    name: 'Florida'
  });
  const {
    label,
    list,
    isRequired = false,
    section = '',
    readOnly = false
  } = props;

  React.useEffect(() => {
    setFieldValue(field.name, value.state, false);
  }, [value.state]);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  const renderMenuItems = objArr =>
    objArr.map(stateObj => (
      <MenuItem key={stateObj.state} value={stateObj.state}>
        {stateObj.name}
      </MenuItem>
    ));

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="state-simple">{label}</InputLabel>
        <Select
          value={value.state}
          onChange={handleChange}
          disabled={readOnly}
          inputProps={{
            name: 'state',
            id: 'state-simple'
          }}
        >
          {renderMenuItems(list)}
        </Select>
      </FormControl>
    </>
  );
}
