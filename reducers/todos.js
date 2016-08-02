var uniqid = require('uniqid');

// single todo object
const todo = (state, action) => {
  switch(action.type){
    case 'ADD_TODO':
      return {
        id: uniqid(),
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      // if the object doesn't match, just return current state
      if(state.id !== action.id){
        return state;
      }

      // if it matches, we now return a new object with the old state
      // data and just the completed field modified. The method below
      // is an ES6 way of creating a new object.  First argument is
      // an empty {} that will be returned, second and third arguments
      // are the values that should be copied into the new object.
      return Object.assign(
        {},
        state, {
          completed: !state.completed
        }
      );
      default:
        return state;

  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // this is ES6 syntax to append a new item into an array
      // we pass undefined as its first argument (state) because
      // this is a new object
      return [
        ...state, todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      // use the map function to go through each item and apply the
      // todo method.
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
