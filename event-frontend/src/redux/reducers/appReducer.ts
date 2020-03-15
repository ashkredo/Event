import { appAPI } from 'api';
import { AppStateType } from 'redux/reducers';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

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
const appReducer = (
  state = initialState,
  action: ActionsTypes
): InitialStateType => {
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

// ActionsTypes
type ActionsTypes = InitializedSuccessActionType;
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

// Thunk Creators Type
type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  ActionsTypes
>;
//------------

// Thunk Creators
export const initializeApp = (): ThunkType => async (
  dispatch: DispatchType
) => {
  const response = await appAPI.connectAPI();
  Promise.all([response]).then(() => {
    if (response) {
      dispatch(initializedSuccess());
    }
  });
};
//------------

export default appReducer;
