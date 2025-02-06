import axios from "axios";

import {
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
} from "../Constant/order";


export const placeorderaction = (orderDetails) => async (dispatch) => {
  dispatch({ type: PLACE_ORDER_REQUEST });
  try {
    const response = await axios.post("http://localhost:8000/placeorder", orderDetails);
    dispatch({ type: PLACE_ORDER_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: PLACE_ORDER_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};




