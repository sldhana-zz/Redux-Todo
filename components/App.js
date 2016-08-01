/*
These are all normal React components, so we won’t examine them in detail. We write functional stateless components
unless we need to use local state or the lifecycle methods. This doesn’t mean that presentational components have to be
functions—it’s just easier to define them this way. If and when you need to add local state, lifecycle methods, or
performance optimizations, you can convert them to classes.
*/


import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
