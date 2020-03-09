// import { getEventData } from 'redux/reducers/eventReducer';

// Constants
const INITIALIZED_SUCCESS = 'event-frontend/appReducer/INITIALIZED_SUCCESS';
//------------

// InitialState
const initialState = {
  initialized: false
};
//------------

// Dispatch Actions
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};
//------------

// Action Creators
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS
});
//------------

// Thunk Creators
export const initializeApp = () => dispatch => {
  dispatch(initializedSuccess());
  // const promise = dispatch(getEventData());
  // Promise.all([promise]).then(() => {
  //   dispatch(initializedSuccess);
  // });
};
//------------

export default appReducer;
