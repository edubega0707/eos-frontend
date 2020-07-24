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
    case CONSTANTES.CREATE_ACCOUNT_CREDIT_REQUEST:
          return {
              ...state,
              accountsStatus: {
                  status: "loading",
                  error: ""
              },
          }
    case CONSTANTES.CREATE_ACCOUNT_CREDIT_SUCCESS:
          return {
              ...state,
              accounts: [...state.accounts, action.account],
              accountsStatus: {
                  status: "success",
                  error: ""
              },
          }
    case CONSTANTES.CREATE_ACCOUNT_CREDIT_FAILED:
          return {
              ...state,
              accountsStatus: {
                  status: "error",
                  error: action.error
              },
          }
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
                  status: "loading",
                  error: ""
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
      case CONSTANTES.CREATE_ACCOUNT_DEBIT_REQUEST:
          return {
              ...state,
              accountsStatus: {
                  status: "loading",
                  error: ""
              },
          }
      case CONSTANTES.CREATE_ACCOUNT_DEBIT_SUCCESS:
          return {
              ...state,
              accounts: [...state.accounts, action.account],
              accountsStatus: {
                  status: "success",
                  error: ""
              },
          }
      case CONSTANTES.CREATE_ACCOUNT_DEBIT_FAILED:
          return {
              ...state,
              accountsStatus: {
                  status: "error",
                  error: action.error
              },
          }
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
                typeAcountsStatus: {
                    status: "loading",
                    error: ""
                },
            };
        case CONSTANTES.GET_TYPE_ACCOUNTS_SUCCESS:
            return {
                ...state,
                typeAcounts:[...action.typeAccounts],
                typeAcountsStatus: {
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


  const initialStateDetailCandidato= {
    account:{},
    accoundDetailStatus:{
        status:null,
        error:""
    }
}
export  function accountDetailReducer(state = initialStateDetailCandidato, action) {
    switch (action.type) {
        case CONSTANTES.GET_DETAIL_ACCOUNT_REQUEST:
            return {
                ...state,
                accoundDetailStatus: {
                    status: "loading",
                    error: ""
                },
            };
        case CONSTANTES.GET_DETAIL_ACCOUNT_SUCCESS:
            return {
                ...state,
                account:{...action.account},
                accoundDetailStatus: {
                    status: "success",
                    error: ""
                },
            };
        case CONSTANTES.GET_DETAIL_ACCOUNT_FAILED:
            return {
                ...state,
                accoundDetailStatus: {
                    status: "error",
                    error: action.error
                },
            };
        case CONSTANTES.UPDATE_ACCOUNT_DEBIT:
            console.log(action.account)
            return {
                ...state,
                account:{
                    ...state.account, 
                    ammount:state.account.ammount+action.account.ammount,
                    account_transaction:[...state.account.account_transaction, action.account]
                },
                accoundDetailStatus: {
                    status: "success",
                    error: ""
                },
            }


      default:
        return state
    }
  }



//   accounts: state.accounts.map((account) => {
//     if (account.id === action.account.id) {
//         console.log(action.account)
//         //account.ammount=account.ammount+action.account.ammount
//         return { ...account, ammount: account.ammount + action.account.ammount }
//     }
//     return account;
// }),