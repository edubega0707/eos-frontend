import CONSTANTES from '../Constantes';

export const TransactionActions = {
    transactionsRequest,
    transactionsSuccess,
    transactionsFailed,
    depositoRequest,
    depositoSuccess,
    depositoFailed,
    retiroRequest,
    retiroSuccess,
    retiroFailed
};


function transactionsRequest() {return { type: CONSTANTES.TRANSACTIONS_REQUEST}}
function transactionsSuccess(transactions) {return { type: CONSTANTES.TRANSACTIONS_SUCCESS, transactions }}
function transactionsFailed(error) {return { type: CONSTANTES.TRANSACTIONS_FAILED, error }}

function depositoRequest(data) {return { type: CONSTANTES.DEPOSITO_REQUEST, data}}
function depositoSuccess(transaction) {return { type: CONSTANTES.DEPOSITO_SUCCESS, transaction }}
function depositoFailed(error) {return { type: CONSTANTES.DEPOSITO_FAILED, error }}

function retiroRequest(data) {return { type: CONSTANTES.RETIRO_REQUEST, data}}
function retiroSuccess(transaction) {return { type: CONSTANTES.RETIRO_SUCCESS, transaction }}
function retiroFailed(error) {return { type: CONSTANTES.RETIRO_FAILED, error }}

