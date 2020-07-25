import  CONSTANTES from '../Constantes'

const initialStateTransactions = {
    transactions:[],
    transactionsStatus:{
        status:null,
        error:""
    }
}

export  function transactionsReducer(state = initialStateTransactions, action) {
    switch (action.type) {
        case CONSTANTES.TRANSACTIONS_REQUEST:
            return {
                ...state,
                transactionsStatus: {
                    status: "loading",
                    error: ""
                },
            };
        case CONSTANTES.TRANSACTIONS_SUCCESS:
            return {
                ...state,
                transactions: [...action.transactions],
                transactionsStatus: {
                    status: "success",
                    error: ""
                },
            };
        case CONSTANTES.TRANSACTIONS_FAILED:
            return {
                ...state,
                transactionsStatus: {
                    status: "error",
                    error: action.error
                },
            };
        case CONSTANTES.DEPOSITO_REQUEST:
            return {
                ...state,
                transactionsStatus: {
                    status: "loading",
                    error: ""
        }}
        case CONSTANTES.DEPOSITO_SUCCESS:
            return {
                ...state,
                transactions: [...state.transactions, action.transaction],
                transactionsStatus: {
                    status: "success",
                    error: ""
                },
            }
        case CONSTANTES.DEPOSITO_FAILED:
            return {
                ...state,
                transactionsStatus: {
                    status: "error",
                    error: action.error
                },
            }
        case CONSTANTES.RETIRO_REQUEST:
            return {
                ...state,
                transactionsStatus: {
                    status: "loading",
                    error: ""
                },
            }
        case CONSTANTES.RETIRO_SUCCESS:
            return {
                ...state,
                transactions: [...state.transactions, action.transaction],
                transactionsStatus: {
                    status: "success",
                    error: ""
                },
            }
        case CONSTANTES.RETIRO_FAILED:
            return {
                ...state,
                transactionsStatus: {
                    status: "error",
                    error: action.error
                },
            }

  
      default:
        return state
    }
  }