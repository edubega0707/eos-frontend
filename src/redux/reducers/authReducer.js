import  CONSTANTES from '../Constantes'

let user = localStorage.getItem('user');
console.log(user)
const initialState = user ? { loggedIn: true, user } : {};

export default function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTES.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case CONSTANTES.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case CONSTANTES.LOGIN_FAILED:
      return {};
    case CONSTANTES.LOGOUT:
      return {};
    default:
      return state
  }
}