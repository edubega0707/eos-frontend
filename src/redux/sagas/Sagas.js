import { takeEvery, call, put} from 'redux-saga/effects';
import CONSTANTES from '../Constantes';
import { notification } from 'antd';
import { history } from '../../routes/history'
import { userActions } from '../actions/actionsAuth';

const loginDjango=(datos)=> fetch(`${CONSTANTES.URLAPI}/eos/api-token-auth/`,
{
  method: 'POST',
  body:JSON.stringify(datos),
  headers: new Headers({
    'Content-Type': 'application/json'
})
})
.then(response=>{
  return response.json()
})
.catch(e=>{
  //console.log(e)
})


function* sagaLogin(values){
  try {
    const user= yield call (loginDjango, values.datos)
    if(user.token){
      localStorage.setItem('user', user.token);
      yield put (userActions.loginSuccess(user))
      history.push('/account')
      notification.success({
        message: `Bienvenido ${user.username}`,
        duration:3
      });  
    }
    else{
      notification.error({
        message: 'Credenciales incorrectas',
        duration:2
      });
    }
   
  } catch (error) {
    notification.error({
        message: 'Error',
        duration:2
      });
    yield put (userActions.loginFailure(error))
  }
}


export default function* sagasPrimary() {
  yield takeEvery(CONSTANTES.LOGIN_REQUEST, sagaLogin)
  //yield takeEvery(CONSTANTES.GETUSUARIO, getUsario) 
}