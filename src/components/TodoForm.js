import { Formik, Form, Field } from 'formik';
import { createTodo } from '../actions/todoCreators';
import { connect } from 'react-redux';

const TodoForm = props => {
  const { createTodoAction } = props;

  const onSubmit = (values, formikBag) => {
    createTodoAction(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={{
        body: '',
        isDone: false,
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name='body' />
        <button type='submit'>Create ToDo</button>
        <button type='reset'>Reset ToDo</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  createTodoAction: values => dispatch(createTodo(values)),
});

export default connect(null, mapDispatchToProps)(TodoForm);