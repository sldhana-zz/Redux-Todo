import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import todoApp from './reducers';
import { saveState, loadState } from './localStorage';

/* the first argument is the main reducer, the second argument is the
  initial state of what we want to display.  It will overwrite any default
  in the state.  If we don't pass the initial state value, it will be undefined.
*/
/*
const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome Back!',
    completed: false
  },
  {
    id: '1',
    text: 'Honey Boo!',
    completed: true
  }],
  visibilityFilter: 'SHOW_COMPLETED'

};
*/

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(todoApp, persistedState);
  console.info(store);

  /* call saveState when store is updated, add a listener
    throttle it so that it only gets callled once per second.
  */
  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 1000));

  return store;
}

export default configureStore;
