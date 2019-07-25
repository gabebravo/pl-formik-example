import React from 'react';
import { Formik, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Typography,
  Button
} from '@material-ui/core';
import { CruisesSchema } from '../shared/schemas';
import { CruisesValidation } from '../shared/validation';
import TextField from '../Fields/Text';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
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

export default function Cruises() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const validateForm = props => {
    const { isValid, submitForm, values } = props;
    submitForm();
    if (isValid) {
      // console.log('values:', values);
    }
  };

  return (
    <div>
      <Formik
        initialValues={CruisesSchema}
        validationSchema={CruisesValidation}
        onSubmit={values => console.log(JSON.stringify(values, null, 2))}
        render={props => {
          console.log('cruises:', props);
          return (
            <ExpansionPanel
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
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
                    isRequired
                  />
                  <Field
                    name="ship"
                    label="Ship"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="port"
                    label="Port"
                    component={TextField}
                    isRequired
                  />
                  <Field
                    name="days"
                    label="Days"
                    component={TextField}
                    isRequired
                  />
                  <div>
                    <Button
                      onClick={() => validateForm(props)}
                      variant="outlined"
                      color="primary"
                      className={classes.button}
                    >
                      Validate
                    </Button>
                  </div>
                </div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        }}
      />
    </div>
  );
}
