import CONSTANTES from '../Constantes';


//----------------------------------------------------------------------//
//--------------------------ACTIONS ACCOUNTS----------------------------//
//----------------------------------------------------------------------//

export const AccountActions = {
    accountsRequest,
};

function accountsRequest(accounts) {return { type: CONSTANTES.GET_ACCOUNTS_REQUEST, accounts }}
