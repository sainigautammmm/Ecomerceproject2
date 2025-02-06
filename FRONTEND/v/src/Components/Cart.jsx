import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { decrementItemQuantityAction, deleteCartItemAction, fetchcartrequest, incrementItemQuantityAction } from "../REDUX/ACTION/cart";



function Cart() {
  const dispatch = useDispatch();
  const cartitems = useSelector((state) => state.mycart.cartitems);
  const isloading = useSelector((state)=>state.mycart.cartitems);
  const failure = useSelector((state)=>state.mycart.cartitems);

  const handleDelete = (productid)=>{
    dispatch(deleteCartItemAction(productid));
  }

  const handleIncrement = (productid)=>{
   dispatch(incrementItemQuantityAction(productid));
  }


  const handleDecrement = (productid)=>{
    dispatch(decrementItemQuantityAction(productid));
  }

  useEffect(() => {
    dispatch(fetchcartrequest());
  } , [])

const totalBill = cartitems.reduce((total,item)=>{
  return total  + item.productprice * item.productquantity;
},0);


  return (
    <div className="container my-4 p-5 ">
      <h1 className="text-center mb-4">SHOPPING CART</h1>
      {cartitems.length === 0 ? (
        <div className="alert alert-warning" role="alert">
          Cart is empty
        </div>
      ) : (
        <div className="row">
          {cartitems.map((item, index) => (
            <div className="col-lg-3" key={item.productid}>
              <div className="card m-3 shadow-sm">
                <img src={item.productthumbnail} className="card-img-top" alt={item.productname} />
                <div className="card-body">
                  <h5 className="card-title">{item.productname}</h5>
                  <p className="card-text">
                    Price: <strong>${item.productprice}</strong>
                  </p>
                  <p className="card-text">
                    Quantity: <strong>{item.productquantity}</strong>
                  </p>
                  <p className="card-text">
                    Rating: <strong>{item.productrating}</strong>
                  </p>
                  <p className="card-text">
                    Category: <strong>{item.productcategory}</strong>
                  </p>
                  <p className="card-text">
                     Location : <strong>{item.productLocation}</strong>
                  </p>
                  <div className="d-flex justify-content-between">
                  <button className="btn btn-success  btn-sm" onClick={()=>handleIncrement(item.productid)}>+ ADD</button>
              <button className="btn btn-warning  btn-sm" onClick={()=>handleDecrement(item.productid)}>- MINUS</button>
                  <button className="btn btn-danger  btn-sm" onClick={()=>handleDelete(item.productid)}>Remove</button>
                  </div>
            
                </div>
                <div className="card-footer">
                  <small className="text-muted">Item {index + 1}</small>
                </div>
              </div>
            </div>


          ))}

        <div className="boredr "> 
          <h3 className="text-center">
        Total Bill is :<strong> ${totalBill.toFixed()}  </strong>
          </h3>
        </div>

     

        </div>







      )}
    </div>



  );
}

export default Cart;
