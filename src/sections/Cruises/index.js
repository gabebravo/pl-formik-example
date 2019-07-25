import React from 'react';
import { Formik } from 'formik';
import { CruisesSchema } from '../Schemas';
import { CruisesValidation } from '../Validation';

export default function Cruises() {
  return (
    <div>
      <h1>Cruises</h1>
      <Formik
        initialValues={CruisesSchema}
        validationSchema={CruisesValidation}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => {
          console.log('props', props);
          return (
            <form onSubmit={props.handleSubmit}>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="line"
              />
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="port"
              />
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="days"
              />
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <button type="submit">Submit</button>
            </form>
          );
        }}
      />
    </div>
  );
}
