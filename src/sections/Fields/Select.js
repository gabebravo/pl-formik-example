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
  const { label, list, readOnly = false, section = '' } = props;
  const newValues = {
    ...values,
    address: { ...values.address, state: field.value }
  };

  React.useEffect(() => {
    setSectionValues({ section, values: newValues });
  }, [field.value, newValues, section, setSectionValues]);

  React.useEffect(() => {
    setValidationFlag({ section, isValid });
  }, [isValid, section, setValidationFlag]);

  // have to manually set field value because of setFieldValue using field.name
  function handleChange(event) {
    const { value } = event.target;

    setFieldValue(field.name, value);
    field.onBlur(event);
  }

  const renderMenuItems = objArr =>
    objArr.map(stateObj => (
      <MenuItem key={stateObj.label} value={stateObj.value}>
        {stateObj.label}
      </MenuItem>
    ));

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="state-simple">{label}</InputLabel>
        <Select
          value={field.value}
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
