import {
  PLACE_ORDER_FAILURE,
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
} from "../Constant/order";

// const initialstate = {
//   loading: false,
//   success: false,
//   error: null,
//   oredrID: null,
//   cartItems: [], 
// };

// export const orderReducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case PLACE_ORDER_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         success: false,
//         error: null,
//       };
//     case PLACE_ORDER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         success: true,
//         orderId: action.payload.orderId,
//       };

//     case PLACE_ORDER_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         success: false,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };




const initialState = {
  loading: false,
  success: false,
  error: null,
  orderId: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLACE_ORDER_REQUEST:
      return { ...state, loading: true, success: false, error: null };
    case PLACE_ORDER_SUCCESS:
      return { ...state, loading: false, success: true, orderId: action.payload.orderID };
    case PLACE_ORDER_FAILURE:
      return { ...state, loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
