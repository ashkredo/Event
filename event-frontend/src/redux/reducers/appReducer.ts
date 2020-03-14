import { appAPI } from 'api';

// Constants
const INITIALIZED_SUCCESS = 'event-frontend/appReducer/INITIALIZED_SUCCESS';
//------------

// InitialStateType
export type InitialStateType = {
  initialized: boolean;
};
//------------

// InitialState
const initialState: InitialStateType = {
  initialized: false
};
//------------

// Dispatch Actions
const appReducer = (state = initialState, action: any): InitialStateType => {
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

// Action Creators Type
type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS;
};
//------------

// Action Creators
export const initializedSuccess = (): InitializedSuccessActionType => ({
  type: INITIALIZED_SUCCESS
});
//------------

// Thunk Creators
export const initializeApp = () => async (dispatch: any) => {
  const response = await appAPI.connectAPI();
  Promise.all([response]).then(() => {
    if (response) {
      dispatch(initializedSuccess());
    }
  });
};
//------------

export default appReducer;
