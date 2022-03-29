const defaultState = {
  apiResponse: null
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case "SET_DATA":
     return {...state, apiResponse: action.payload}; 
    default:
      return state;
  }
}