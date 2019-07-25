import React from 'react';
import { Formik } from 'formik';
import { HotelsSchema } from '../Schemas';
import { HotelsValidation } from '../Validation';

export default function Hotels() {
  return (
    <div>
      <h1>Hotels</h1>
      <Formik
        initialValues={HotelsSchema}
        validationSchema={HotelsValidation}
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
                name="airline"
              />
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="departureDate"
              />
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="returnDate"
              />
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="fromCity"
              />
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
                name="toCity"
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
