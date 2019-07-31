import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { setValidationFlag, setSectionValues } from '../../redux/reducers';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: '15px 10px 10px 10px',
    width: 200
  }
}));

function SimpleSelect({
  field, // { name, value, onChange, onBlur }
  form: { values, isValid, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  setValidationFlag,
  setSectionValues,
  ...props
}) {
  const classes = useStyles();
  const [value, setValues] = React.useState({
    state: 'FL',
    name: 'Florida'
  });
  const { label, list, readOnly = false, section = '' } = props;

  React.useEffect(() => {
    const newValues = {
      ...values,
      address: { ...values.address, state: value.state }
    };
    setSectionValues({ section, values: newValues });
    setFieldValue(field.name, value.state);
  }, [
    field.name,
    value.state,
    values,
    section,
    setFieldValue,
    setSectionValues
  ]);

  React.useEffect(() => {
    setValidationFlag({ section, isValid });
  }, [isValid, section, setValidationFlag]);

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

export default connect(
  null,
  { setValidationFlag, setSectionValues }
)(SimpleSelect);
