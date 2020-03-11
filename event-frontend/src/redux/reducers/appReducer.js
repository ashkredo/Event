import { appAPI } from 'api';

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
export const initializeApp = () => async dispatch => {
  const response = await appAPI.connectAPI();
  Promise.all([response]).then(() => {
    if (response) {
      dispatch(initializedSuccess());
    }
  });
};

//------------

export default appReducer;
