import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AuthorForm = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {};
        if (!values.name) errors.name = 'Author name is required';
        if (!values.birthDate) errors.birthDate = 'Birth date is required';
        if (!values.biography) errors.biography = 'Biography is required';
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Submitted Author:', values); // Log submitted values
        onSubmit(values); // Call the parent onSubmit function
        setSubmitting(false); // Reset the submitting state
      }}
    >
      {({ isSubmitting }) => (
        <Form className="mb-4">
          <h5>Add Author</h5>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <Field className="form-control" name="name" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label className="form-label">Birth Date</label>
            <Field className="form-control" type="date" name="birthDate" />
            <ErrorMessage name="birthDate" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label className="form-label">Biography</label>
            <Field as="textarea" className="form-control" name="biography" />
            <ErrorMessage name="biography" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
