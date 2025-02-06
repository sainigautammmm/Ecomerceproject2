import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS,  DECREMENT_ITEM_QUANTITY,  DELETE_CART_FAILURE,  DELETE_CART_REQUEST,  DELETE_CART_SUCCESS,  FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, INCREMENT_ITEM_QUANTITY } from "../Constant/constants";

const initialstate = {
    cartitems:[],
    isloading:false,
    success:null,
    failure:null,
};

export  const cartreducer = (state=initialstate,action)=>{

     switch (action.type) {
        case ADD_TO_CART_REQUEST:
            return{
                ...state,
                isloading:true,
                success:null,
                failure:null
            }
            
            case ADD_TO_CART_SUCCESS:
                return{
                    ...state,
                    isloading:false,
                    cartitems: action.payload,
                    success:"products added to cart successfully"
                }
     
             case ADD_TO_CART_FAILURE:
                return{
                    ...state,
                    isloading:false,
                    failure:action.payload,
                }
          

              case FETCH_CART_REQUEST:
                return{
                    ...state,
                    isloading:true,
                }


            case FETCH_CART_SUCCESS:{
                return{
                    ...state,
                    isloading:false,
                    cartitems:action.payload,
                    failure:null
                }
            }

            case FETCH_CART_FAILURE:{
                return{
                    ...state,
                    isloading:false,
                    failure:null
                    
                }
            }

            case DELETE_CART_REQUEST:{
                return{
                    ...state,
                    isloading:true,
                }
            }

            case DELETE_CART_SUCCESS:{
                return{
                    ...state,
                    isloading:false,
                    cartitems:state.cartitems.filter((item)=>item.productid !== action.payload),
                }
            }
  
            case DELETE_CART_FAILURE:{
                return{
                    ...state,
                    isloading:false,
                    failure:action.payload
                }
            }


        case INCREMENT_ITEM_QUANTITY:
            return{
                ...state,
                cartitems: state.cartitems.map((item) =>
                    item.productid === action.payload
                      ? { ...item, productquantity: item.productquantity + 1 }
                      : item
                  ),
            }

            case DECREMENT_ITEM_QUANTITY:
                return{
                    ...state,
                    cartitems: state.cartitems.map((item) =>
                        item.productid === action.payload && item.productquantity > 1
                          ? { ...item, productquantity: item.productquantity - 1 }
                          : item
                      ),
                }



        default:
            return state;
     }

}