import CONSTANTES from '../Constantes';


//----------------------------------------------------------------------//
//--------------------------ACTIONS ACCOUNTS----------------------------//
//----------------------------------------------------------------------//

export const AccountDebitActions = {
    accountsRequest,
    accountsSuccess,
    accountsFailed,
    accountDebitCreateRequest,
    accountDebitCreateSuccess,
    accountDebitCreateFailed,
    updateAccountDebitRequest,
    getDetailAccountRequest,
    getDetailAccountSuccess,
    getDetailAccountFailed
};


function accountsRequest(idTypeAccount) {return { type: CONSTANTES.GET_ACCOUNTS_DEBIT_REQUEST, idTypeAccount}}
function accountsSuccess(accounts) {return { type: CONSTANTES.GET_ACCOUNTS_DEBIT_SUCCESS, accounts }}
function accountsFailed(error) {return { type: CONSTANTES.GET_ACCOUNTS_DEBIT_FAILED, error }}

function accountDebitCreateRequest(data) {return { type: CONSTANTES.CREATE_ACCOUNT_DEBIT_REQUEST, data}}
function accountDebitCreateSuccess(account) {return { type: CONSTANTES.CREATE_ACCOUNT_DEBIT_SUCCESS, account }}
function accountDebitCreateFailed(error) {return { type: CONSTANTES.CREATE_ACCOUNT_DEBIT_FAILED, error }}

function updateAccountDebitRequest(account){return { type: CONSTANTES.UPDATE_ACCOUNT_DEBIT, account}}

function getDetailAccountRequest(idAccount) {return { type: CONSTANTES.GET_DETAIL_ACCOUNT_REQUEST, idAccount}}
function getDetailAccountSuccess(account) {return { type: CONSTANTES.GET_DETAIL_ACCOUNT_SUCCESS, account}}
function getDetailAccountFailed(error){return { type: CONSTANTES.GET_DETAIL_ACCOUNT_FAILED, error}}


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

