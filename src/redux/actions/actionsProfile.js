import CONSTANTES from '../Constantes';
//----------------------------------------------------------------------//
//--------------------------ACTIONS USER------------------------------//
//----------------------------------------------------------------------//

export const ProfileActions = {
    getProfileRequest,
    getProfileSuccess,
    getProfileFailed
};


function getProfileRequest() {return { type: CONSTANTES.GET_PROFILE_REQUEST }}
function getProfileSuccess(profile) { return { type: CONSTANTES.GET_PROFILE_SUCCESS, profile } }
function getProfileFailed(error) { return { type: CONSTANTES.GET_PROFILE_FAILED, error } }