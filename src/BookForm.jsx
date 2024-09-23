import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const BookForm = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={values => {
        const errors = {};
        if (!values.title) errors.title = 'Title is required';
        if (!values.author) errors.author = 'Author is required';
        if (!values.isbn) errors.isbn = 'ISBN is required';
        else if (values.isbn.length !== 13) errors.isbn = 'ISBN must be 13 characters';
        if (!values.publicationDate) errors.publicationDate = 'Publication date is required';
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('Submitted Book:', values); // Log submitted values
        onSubmit(values); // Call the parent onSubmit function
        setSubmitting(false); // Reset the submitting state
      }}
    >
      {({ isSubmitting }) => (
        <Form className="mb-4">
          <h5>Add Book</h5>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <Field className="form-control" name="title" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label className="form-label">Author</label>
            <Field className="form-control" name="author" />
            <ErrorMessage name="author" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label className="form-label">ISBN</label>
            <Field className="form-control" name="isbn" />
            <ErrorMessage name="isbn" component="div" className="text-danger" />
          </div>
          <div className="mb-3">
            <label className="form-label">Publication Date</label>
            <Field className="form-control" type="date" name="publicationDate" />
            <ErrorMessage name="publicationDate" component="div" className="text-danger" />
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
