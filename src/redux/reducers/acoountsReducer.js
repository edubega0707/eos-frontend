import  CONSTANTES from '../Constantes'

const initialState = {
    accounts:[],
    accountsStatus:{
        status:null,
        error:""
    }
}

export default function accountsReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTES.GET_ACCOUNTS_REQUEST:
        return {
            ...state,
            accounts:[...action.accounts],
            accountsStatus: {
                status:"success",
                error:""
            },
          };
  
    default:
      return state
  }
}