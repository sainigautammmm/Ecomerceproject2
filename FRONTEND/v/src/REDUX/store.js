import {configureStore} from  "@reduxjs/toolkit";
import { productreducer } from "./REDUCER/products";
import { cartreducer } from "./REDUCER/cart";
import { userreducer } from "./REDUCER/user";
import { orderReducer } from "./REDUCER/order";
import { userProfileReducer } from "./REDUCER/userprofile";


const store =  new configureStore({
    reducer:{
        myproduct:productreducer,
        mycart:cartreducer,
        myuser:userreducer,
        order:orderReducer,
          userprofile:userProfileReducer
    }
})
export default store
