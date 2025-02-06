
import { USER_PROFILE_FAILURE, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from "../Constant/userprofile";



const initialState = {
  loading: false,
  success: false,
  error: null,
  profile: null,
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case USER_PROFILE_SUCCESS:
      return { ...state, loading: false, success: true, profile: action.payload.profile };
    case USER_PROFILE_FAILURE:
      return { ...state, loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

