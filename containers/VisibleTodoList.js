import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

/*
To use connect(), you need to define a special function called mapStateToProps
that tells how to transform the current Redux store state into the props you want
 to pass to a presentational component you are wrapping.
*/

const mapStateToProps = (state) => ({
  // if you're just returning an object, return this way and ignore the return statement
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch) => ({
  //concise return statement inside an object
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  }
});

 const VisibleTodoList = connect(
   mapStateToProps,
   mapDispatchToProps
 )(TodoList);

 export default VisibleTodoList;
