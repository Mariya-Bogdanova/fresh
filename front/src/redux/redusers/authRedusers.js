/* eslint-disable no-underscore-dangle */
import {
  AUTHENTICATED_SUCCESSFULLY, LOGOUT,
} from '../action-types/authAction-types';

const inicialAuth = false;
export function authReduser(state = inicialAuth, action) {
  switch (action.type) {
    case AUTHENTICATED_SUCCESSFULLY:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
}

export default authReduser;
