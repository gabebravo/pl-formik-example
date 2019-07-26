import React from 'react';
import moment from 'moment';
import MomentUtils from '@date-io/moment';
import { makeStyles } from '@material-ui/core/styles';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

const useStyles = makeStyles({
  root: {
    marginRight: '1rem',
    width: 200,
    marginLeft: 10
  }
});

export default function DatePickers({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const { label, isRequired = false, section = '' } = props;

  React.useEffect(() => {
    const dateAsString = moment(selectedDate).format('MM/DD/YYYY');
    setFieldValue(field.name, dateAsString, true);
  }, [selectedDate]);

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <KeyboardDatePicker
        className={classes.root}
        value={selectedDate}
        onChange={handleDateChange}
        section={section}
        margin="normal"
        id="mui-pickers-date"
        label={label}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
        required={isRequired}
      />
    </MuiPickersUtilsProvider>
  );
}
