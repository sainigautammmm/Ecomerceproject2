
import axios from "axios";
import { USER_PROFILE_FAILURE, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from "../Constant/userprofile";

export const saveUserProfile = (profileData) => async (dispatch) => {
  dispatch({ type: USER_PROFILE_REQUEST });
  try {
    const response = await axios.post("http://localhost:8000/user/profile", profileData );
    dispatch({ type: USER_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: USER_PROFILE_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};
