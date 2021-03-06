import CONSTANTES from '../Constantes';
import { history } from '../../routes/history';

//----------------------------------------------------------------------//
//--------------------------ACTIONS LOGIN------------------------------//
//----------------------------------------------------------------------//

export const userActions = {
    logout,
    loginRequest,
    loginSuccess,
    loginFailure,
    signInRequest
}

function logout() {
    localStorage.removeItem('user');
    history.push("/")
    return { type: CONSTANTES.LOGOUT };
}



function loginRequest(datos) {return { type: CONSTANTES.LOGIN_REQUEST, datos }}
function loginSuccess(user) { return { type: CONSTANTES.LOGIN_SUCCESS, user } }
function loginFailure(error) { return { type: CONSTANTES.LOGIN_FAILED, error } }

function signInRequest(data) { return { type: CONSTANTES.SIGN_UP_REQUEST, data }}