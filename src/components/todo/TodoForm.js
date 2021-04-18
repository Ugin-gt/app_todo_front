import { Formik, Form, Field } from 'formik';
import { createTodoRequest } from '../../actions/todoCreators';
import { connect } from 'react-redux';

const TodoForm = props => {
  const { createTodoAction } = props;
  const values = {
    body: '',
    deadline: '',
    isDone: false,
  };

  const onSubmit = (values, formikBag) => {
    createTodoAction(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={values} onSubmit={onSubmit}>
      <Form>
        <Field name='body' />
        <Field name='deadline' type='date' />
        <button type='submit'>Create ToDo</button>
        <button type='reset'>Reset ToDo</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createTodoAction: values => dispatch(createTodoRequest(values)),
});

export default connect(null, mapDispatchToProps)(TodoForm);
