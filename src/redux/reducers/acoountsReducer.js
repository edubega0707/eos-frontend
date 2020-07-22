import  CONSTANTES from '../Constantes'

const initialStateDebitAccounts = {
    accounts:[],
    accountsStatus:{
        status:null,
        error:""
    }
}

export  function accountsCreditReducer(state = initialStateDebitAccounts, action) {
  switch (action.type) {
    case CONSTANTES.GET_ACCOUNTS_CREDIT_REQUEST:
        return {
            ...state,
            accountsStatus: {
                status:"success",
                error:""
            },
          };
      case CONSTANTES.GET_ACCOUNTS_CREDIT_SUCCESS:
          return {
              ...state,
              accounts: [...action.accounts],
              accountsStatus: {
                  status: "success",
                  error: ""
              },
          };
      case CONSTANTES.GET_ACCOUNTS_CREDIT_FAILED:
          return {
              ...state,
              accountsStatus: {
                  status: "error",
                  error: action.error
              },
          };

    default:
      return state
  }
}


const initialStateCreditAccounts = {
    accounts:[],
    accountsStatus:{
        status:null,
        error:""
    }
}

export  function accountsDebitReducer(state = initialStateCreditAccounts, action) {
  switch (action.type) {
    case CONSTANTES.GET_ACCOUNTS_DEBIT_REQUEST:
        return {
            ...state,
            accountsStatus: {
                status:"success",
                error:""
            },
          };
      case CONSTANTES.GET_ACCOUNTS_DEBIT_SUCCESS:
          return {
              ...state,
              accounts: [...action.accounts],
              accountsStatus: {
                  status: "success",
                  error: ""
              },
          };
      case CONSTANTES.GET_ACCOUNTS_DEBIT_FAILED:
          return {
              ...state,
              accountsStatus: {
                  status: "error",
                  error: action.error
              },
          };

    default:
      return state
  }
}




const initialStateTypeAccounts = {
    typeAcounts:[],
    typeAcountsStatus:{
        status:null,
        error:""
    }
}
export  function typeAccountsReducer(state = initialStateTypeAccounts, action) {
    switch (action.type) {
        case CONSTANTES.GET_TYPE_ACCOUNTS_REQUEST:
            return {
                ...state,
                accountsStatus: {
                    status: "loading",
                    error: ""
                },
            };
        case CONSTANTES.GET_TYPE_ACCOUNTS_SUCCESS:
            return {
                ...state,
                typeAcounts:[...action.typeAccounts],
                accountsStatus: {
                    status: "success",
                    error: ""
                },
            };
        case CONSTANTES.GET_TYPE_ACCOUNTS_FAILED:
            return {
                ...state,
                accountsStatus: {
                    status: "error",
                    error: action.error
                },
            };
      default:
        return state
    }
  }