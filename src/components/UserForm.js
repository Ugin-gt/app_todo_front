import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as UserActionCreators from '../actions/userCreators';

const UserForm = props => {
  const { createUserAction } = props;
  const onSubmit = (values, formikBag) => {
    createUserAction(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        isMale: '',
      }}
    >
      <Form>
        <Field name='firstName' placeholder='firstName' />
        <Field name='lastName' placeholder='lastName' />
        <Field name='email' placeholder='email' />
        <Field name='isMale' placeholder='isMale' />

        <button type='submit'>Create New User</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createUserAction: values =>
    dispatch(UserActionCreators.createUserRequest(values)),
});

export default connect(null, mapDispatchToProps)(UserForm);
