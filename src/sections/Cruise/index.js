import React from 'react';
import { Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography
} from '@material-ui/core';
import { CruiseSchema } from '../shared/schemas';
import TextField from '../Fields/Text';
import { useToggle } from '../../hooks';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    flexBasis: '33.33%',
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1)
  }
}));

function Cruise({ userIsValid, resetForm, ...props }) {
  const classes = useStyles();
  const { expanded, toggle } = useToggle(false, userIsValid);
  const { setValues, setTouched } = props;

  React.useEffect(() => {
    setValues(CruiseSchema);
    setTouched({});
  }, [resetForm, setValues, setTouched]);

  return (
    <div>
      <ExpansionPanel expanded={userIsValid && expanded} onChange={toggle}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Cruises</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Field
              name="line"
              label="Line"
              component={TextField}
              section="cruise"
            />
            <Field
              name="ship"
              label="Ship"
              component={TextField}
              section="cruise"
            />
            <Field
              name="port"
              label="Port"
              component={TextField}
              section="cruise"
            />
            <Field
              name="days"
              label="Days"
              component={TextField}
              section="cruise"
            />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

const mapStateToProps = state => ({
  userIsValid: state.plTravel.valid.user,
  resetForm: state.plTravel.formSubmitted
});

export default connect(
  mapStateToProps,
  null
)(Cruise);
