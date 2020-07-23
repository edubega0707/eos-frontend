import { takeEvery, call, put} from 'redux-saga/effects';
import CONSTANTES from '../Constantes';
import { notification } from 'antd';
import { ProfileActions } from '../actions/actionsProfile';
import { AccountTypeActions, AccountDebitActions, AccountCreditActions } from '../actions/actionsAccounts';

const getTypeAccounts=(user)=> fetch(`${CONSTANTES.URLAPI}/eos/admin/type_accounts/`,
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


function* sagaGetTypeAccounts(values){
  try { 
    const user = localStorage.getItem('user');
    const typeAccounts= yield call (getTypeAccounts, user)
    yield put (AccountTypeActions.typeAccountsSuccess(typeAccounts)) 
  } catch (error) {
    notification.error({
        message: 'Error',
        duration:2
      });
    yield put (ProfileActions.getProfileFailed(error))
  }
}

const getAccounts=(user,idType)=> fetch(`${CONSTANTES.URLAPI}/eos/my_accounts/?search=${idType}`,
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


function* sagaGetDebitAccounts(values){
    try { 
      const user = localStorage.getItem('user');
      const idType= values.idTypeAccount
      const accounts= yield call (getAccounts, user, idType)
      yield put (AccountDebitActions.accountsSuccess(accounts)) 
    } catch (error) {
      notification.error({
          message: 'Error',
          duration:2
        });
      yield put (AccountDebitActions.accountsFailed(error))
    }
  }


function* sagaGetCreditAccounts(values){
    try { 
      const user = localStorage.getItem('user');
      const idType= values.idTypeAccount
      const accounts= yield call (getAccounts, user, idType)
      yield put (AccountCreditActions.accountsCreditSuccess(accounts)) 
    } catch (error) {
      notification.error({
          message: 'Error',
          duration:2
        });
      yield put (AccountCreditActions.accountsCreditFailed(error))
    }
  }
  
const createAccount=(user,datos)=> fetch(`${CONSTANTES.URLAPI}/eos/my_accounts/`,
  {
    method: 'POST',
    body:JSON.stringify(datos),
    headers: new Headers({
      'Authorization':'Token '+user,
      'Content-Type': 'application/json'
  })
  })
  .then(response=>{
    return response.json()
  })
  .catch(e=>{
    console.log(e)
  })

function* sagaCreateAccount(values) {
    try {
      const user = localStorage.getItem('user');
      const newAccount=yield call (createAccount, user, values.data)
      
      yield put(AccountDebitActions.accountDebitCreateSuccess(newAccount))
    } catch (error) 
    {
      notification.error({
        message: 'Error',
        duration:2
      });
      yield put (AccountDebitActions.accountDebitCreateFailed(error))
    }
  }


export default function* sagasAccounts() {
  yield takeEvery(CONSTANTES.GET_TYPE_ACCOUNTS_REQUEST, sagaGetTypeAccounts)
  yield takeEvery(CONSTANTES.GET_ACCOUNTS_DEBIT_REQUEST, sagaGetDebitAccounts)
  yield takeEvery(CONSTANTES.GET_ACCOUNTS_CREDIT_REQUEST, sagaGetCreditAccounts)
  yield takeEvery(CONSTANTES.CREATE_ACCOUNT_DEBIT_REQUEST, sagaCreateAccount)

  

}