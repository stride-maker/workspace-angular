import { User } from '../user.model';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const intialState = {
  user: null,
  authError: null,
  loading: false,
};

export function authReducer(
  state = intialState,
  action: AuthActions.LIST_ACTIONS
) {
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS: {
      const newUser = action.payload;
      return {
        ...state,
        user: newUser,
        authError: null,
        loading: false,
      };
    }
    case AuthActions.LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    case AuthActions.LOGIN_START:
    case AuthActions.SIGNUP_START: {
      return {
        ...state,
        authError: null,
        loading: true,
      };
    }
    case AuthActions.AUTHENTICATE_FAIL: {
      return {
        ...state,
        authError: action.payload,
        loading: false,
      };
    }
    case AuthActions.CLEAR_ERROR: {
      return {
        ...state,
        authError: null,
      };
    }
    default:
      return state;
  }
}
