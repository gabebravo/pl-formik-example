import React from 'react';
import { Formik } from 'formik';
import { CarsSchema } from '../Schemas';
import { CarsValidation } from '../Validation';

export default function Cars() {
  return (
    <div>
      <h1>Cars</h1>
      <Formik
        initialValues={CarsSchema}
        validationSchema={CarsValidation}
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
                name="make"
              />
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="model"
              />
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="year"
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
