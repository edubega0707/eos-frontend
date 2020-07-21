import { takeEvery, call, put} from 'redux-saga/effects';
import CONSTANTES from '../Constantes';
import { notification } from 'antd';
import { userActions } from '../actions/actionsAuth';
//import { history } from '../../Components/routes/history';

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
  console.log(e)
})


function* sagaLogin(values){
  try {
    const user= yield call (loginDjango, values.datos)   
    localStorage.setItem('user', JSON.stringify(user.token));
    yield put (userActions.loginSuccess(user))
    //history.push('/dashboard')
    notification.success({
      message: 'Bienvenido',
      duration:3
    });

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