/*
  action types
*/
/*
  Actions are payloads of information that send data from your application to your store. They are the only source of
  information for the store.
*/
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOT_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/* action creators */
/* In the Redux world, action creators are functions that create actions and simply returns them. */

export function addTodo(text){
  return {
    type: ADD_TODO,
    text
  }
};

export function toggleTodo(id){
  return {
    type: TOGGLE_TODO,
    id
  }
};

export function setVisibilityFilter(filter){
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
};
