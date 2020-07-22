import CONSTANTES from '../Constantes';


//----------------------------------------------------------------------//
//--------------------------ACTIONS ACCOUNTS----------------------------//
//----------------------------------------------------------------------//

export const AccountDebitActions = {
    accountsRequest,
    accountsSuccess,
    accountsFailed
};


function accountsRequest(idTypeAccount) {return { type: CONSTANTES.GET_ACCOUNTS_DEBIT_REQUEST, idTypeAccount}}
function accountsSuccess(accounts) {return { type: CONSTANTES.GET_ACCOUNTS_DEBIT_SUCCESS, accounts }}
function accountsFailed(error) {return { type: CONSTANTES.GET_ACCOUNTS_DEBIT_FAILED, error }}


export const AccountCreditActions = {
    accountsCreditRequest,
    accountsCreditSuccess,
    accountsCreditFailed
};


function accountsCreditRequest(idTypeAccount) {return { type: CONSTANTES.GET_ACCOUNTS_CREDIT_REQUEST, idTypeAccount}}
function accountsCreditSuccess(accounts) {return { type: CONSTANTES.GET_ACCOUNTS_CREDIT_SUCCESS, accounts }}
function accountsCreditFailed(error) {return { type: CONSTANTES.GET_ACCOUNTS_CREDIT_FAILED, error }}


export const AccountTypeActions={
    typeAccountsRequest,
    typeAccountsSuccess,
    typeAccountsRequestFailed
}

function typeAccountsRequest() {return { type: CONSTANTES.GET_TYPE_ACCOUNTS_REQUEST }}
function typeAccountsSuccess(typeAccounts) {return { type: CONSTANTES.GET_TYPE_ACCOUNTS_SUCCESS,typeAccounts }}
function typeAccountsRequestFailed(error) {return { type: CONSTANTES.GET_TYPE_ACCOUNTS_FAILED, error }}