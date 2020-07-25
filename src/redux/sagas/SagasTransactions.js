import { takeEvery, call, put} from 'redux-saga/effects';
import CONSTANTES from '../Constantes';
import { notification } from 'antd';
import { ProfileActions } from '../actions/actionsProfile';
import { TransactionActions } from '../actions/actionsTransactions';
import { AccountDebitActions, AccountCreditActions } from '../actions/actionsAccounts';


const getTransactions=(user)=> fetch(`${CONSTANTES.URLAPI}/eos/admin/type_accounts/`,
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

function* sagaGetTransactions(values){
    try { 
      const user = localStorage.getItem('user');
      const transactions=yield call (getTransactions, user)
      yield put (TransactionActions.transactionsSuccess(transactions)) 
    } catch (error) {
      notification.error({
          message: 'Error',
          duration:2
        });
      yield put (ProfileActions.getProfileFailed(error))
    }
  }


const depositoRequest = (user, datos) => fetch(`${CONSTANTES.URLAPI}/eos/deposit/`,
  {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: new Headers({
      'Authorization': 'Token ' + user,
      'Content-Type': 'application/json'
    })
  })
  .then(response => {
    return response.json()
  })
  .catch(e => {
    console.log(e)
  })


function* sagaDeposito(values){
    try { 

      const user = localStorage.getItem('user');
      const deposito=yield call (depositoRequest, user, values.data)
      yield put(AccountDebitActions.updateAccountDebitRequest(deposito)) 

    } catch (error) {
      notification.error({
          message: 'Error',
          duration:2
        });
      yield put (TransactionActions.depositoFailed(error))
    }
  }


  const retiroRequest = (user, datos) => fetch(`${CONSTANTES.URLAPI}/eos/withdraw/`,
  {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: new Headers({
      'Authorization': 'Token ' + user,
      'Content-Type': 'application/json'
    })
  })
  .then(response => {
    return response.json()
  })
  .catch(e => {
    console.log(e)
  })

  function* sagasRetiro(values){
    try { 
      const user = localStorage.getItem('user');
      let RetiroData=values.data
      RetiroData.ammount=RetiroData.ammount*1.10
      const retiro=yield call (retiroRequest, user, RetiroData)
      yield put(AccountCreditActions.updateAccountCreditRequest(retiro)) 
    } catch (error) {
      notification.error({
          message: 'Error',
          duration:2
        });
      yield put (TransactionActions.retiroFailed(error))
    }
  }

  export default function* sagasTransactions() {
    yield takeEvery(CONSTANTES.TRANSACTIONS_REQUEST, sagaGetTransactions)
    yield takeEvery(CONSTANTES.DEPOSITO_REQUEST, sagaDeposito)
    yield takeEvery(CONSTANTES.RETIRO_REQUEST, sagasRetiro)
  }