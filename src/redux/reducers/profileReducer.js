import  CONSTANTES from '../Constantes'

const initialState = {
    profile:{},
    profileStatus:{
        status:null,
        error:""
    }
}

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case CONSTANTES.GET_PROFILE_REQUEST:
        return {
            ...state,
            profileStatus: {
                status:"loading",
                error:""
            },
          };
    case CONSTANTES.GET_PROFILE_SUCCESS:
        return {
            ...state,
            profile:{...action.profile},
            profileStatus: {
                status:"success",
                error:""
            },
          };
    case CONSTANTES.GET_PROFILE_FAILED:
        return {
            ...state,
            profileStatus: {
                status:"error",
                error:action.error
            },
          };
    default:
      return state
  }
}