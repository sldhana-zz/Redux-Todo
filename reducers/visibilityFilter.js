const visibilityFilter = (state='SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBILITY_FILTER':
      // we just want to return the new filter action
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
