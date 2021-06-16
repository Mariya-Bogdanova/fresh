import {
  AUTHENTICATED_SUCCESSFULLY, LOGOUT,
} from '../action-types/authAction-types';

export function authentication() {
  return {
    type: AUTHENTICATED_SUCCESSFULLY,
  };
}
export function logout() {
  return {
    type: LOGOUT,
  };
}
