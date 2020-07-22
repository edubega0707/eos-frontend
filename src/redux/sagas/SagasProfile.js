import { takeEvery, call, put} from 'redux-saga/effects';
import CONSTANTES from '../Constantes';
import { notification } from 'antd';
import { ProfileActions } from '../actions/actionsProfile';
import { AccountActions } from '../actions/actionsAccounts';

const getProfile=(user)=> fetch(`${CONSTANTES.URLAPI}/eos/my_user/`,
{
  method: 'GET',
  headers: new Headers({
    'Authorization':'Token '+user,
    'Content-Type': 'application/json'
})
})
.then(response => response.json())
.catch(e=>{
  console.log(e)
})


function* sagaGetProfile(values){
  try { 
    const user = localStorage.getItem('user');
    const profile= yield call (getProfile, user)
    yield put (ProfileActions.getProfileSuccess(profile)) 
    yield put (AccountActions.accountsRequest(profile.accounts_user))
  } catch (error) {
    notification.error({
        message: 'Error',
        duration:2
      });
    yield put (ProfileActions.getProfileFailed(error))
  }
}


export default function* sagasProfile() {
  yield takeEvery(CONSTANTES.GET_PROFILE_REQUEST, sagaGetProfile)
}