/*this is the file that will save the state to localStorage.  We
will add a listener to the store in order to save the state
*/

export const loadState = () => {
  try{
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  }
  catch(err){
    return undefined;
  }
};

export const saveState = (state) => {
  try{
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  }
  catch(err){
    console.error("We cannot write to the local storage");
  }
};
