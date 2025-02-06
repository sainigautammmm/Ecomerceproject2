// actions/cart.js
import axios from "axios";
import { ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE , FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, DELETE_CART_FAILURE} from "../Constant/constants";

// export const addtocartaction = (productId, productquantity, productprice,) => async (dispatch) => {
//   dispatch({ type: ADD_TO_CART_REQUEST });

//   try {
//     const response = await axios.post("http://localhost:8000/api/cart/addtocart", {
//       productid: productId,
//       productquantity: productquantity,
//       productprice: productprice,
     
     
     
//     });
//     console.log(response);
  
//     if (response.data.success) {
//       dispatch({
//         type: ADD_TO_CART_SUCCESS,
//         payload: response.data.cartitem,
//       });
//     } else {
//       throw new Error("Unexpected response format");
//     }
//   } catch (error) {
//     console.error("Error details:", error);
//     const message = error.response?.data?.message || "An error occurred while adding to cart.";
//     dispatch({ type: ADD_TO_CART_FAILURE, payload: message });
//   }
  
// };

export const addtocartaction = (productId, productquantity, productprice, productthumbnail,productrating,productcategory) => async (dispatch) => {
  dispatch({ type: ADD_TO_CART_REQUEST });

  try {
      const response = await axios.post("http://localhost:8000/api/cart/addtocart", {
          productid: productId,
          productquantity: productquantity,
          productprice: productprice,
          productthumbnail: productthumbnail,
          productrating:productrating,
          productcategory:productcategory
        
      });

      if (response.data.success) {
          dispatch({
              type: ADD_TO_CART_SUCCESS,
              payload: response.data.cartItems,
          });
      } else {
          throw new Error("Unexpected response format");
      }
  } catch (error) {
      const message = error.response?.data?.message || "An error occurred while adding to cart.";
      dispatch({ type: ADD_TO_CART_FAILURE, payload: message });
  }
};


export const fetchcartrequest =  ()=> async(dispatch)=>{
     dispatch({type:FETCH_CART_REQUEST})
try {
  const response = await axios.get("http://localhost:8000/showcart")
        console.log(response);
      dispatch({type:FETCH_CART_SUCCESS,payload:response.data.cartItems})
} catch (error) {
     const message = error.response?.data?.message
     dispatch({type:FETCH_CART_FAILURE,payload:message});
}


}

export const deleteCartItemAction = (productId) => async (dispatch) => {
    dispatch({ type: DELETE_CART_REQUEST });

    try {
        
        const response = await axios.delete(`http://localhost:8000/deletecart/${productId}`);

        
        if (response.data.success) {
            dispatch({
                type: DELETE_CART_SUCCESS,
                payload: productId,
            });
        } else {
            throw new Error("Unexpected response format");
        }
    } catch (error) {
        const message = error.response?.data?.message || "An error occurred while deleting the item.";
        dispatch({ type: DELETE_CART_FAILURE, payload: message });
    }
};


export const incrementItemQuantityAction = (productId)=>({type:"INCREMENT_ITEM_QUANTITY",payload:productId});
export const decrementItemQuantityAction  = (productId)=>({type:"DECREMENT_ITEM_QUANTITY",payload:productId});