






import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeorderaction } from '../REDUX/ACTION/order'; // Import corrected action

const Placeorder = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.order);

  const [formData, setFormData] = useState({
    customername: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    mobileno: '',
    items: [{ productID: '', productname: '', productprice: 0, productquantity: 1 }],
  });

  // Handle change for regular form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle change for items within the order
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];
    updatedItems[index][field] = value;
    setFormData({ ...formData, items: updatedItems });
  };

  // Calculate total amount when submitting
  const handleSubmit = (e) => {
    e.preventDefault();
    const totalAmount = formData.items.reduce(
      (total, item) => total + item.productprice * item.productquantity,
      0
    );

    dispatch(placeorderaction({ ...formData, totalAmount }));
  };

  return (
    // <div className="container mt-5">
    //   <h2 className="text-center mb-4">Place an Order</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="row">
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="customername"
    //           placeholder="Customer Name"
    //           value={formData.customername}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="tel"
    //           className="form-control"
    //           name="mobileno"
    //           placeholder="Mobile Number"
    //           value={formData.mobileno}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="address"
    //           placeholder="Address"
    //           value={formData.address}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="city"
    //           placeholder="City"
    //           value={formData.city}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //     </div>

    //     <div className="row">
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="state"
    //           placeholder="State"
    //           value={formData.state}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="pincode"
    //           placeholder="Pincode"
    //           value={formData.pincode}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //     </div>

    //     <h4 className="mt-4">Items</h4>
    //     {formData.items.map((item, index) => (
    //       <div className="row mb-3" key={index}>
    //         <div className="col-md-3">
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Product ID"
    //             value={item.productID}
    //             onChange={(e) => handleItemChange(index, 'productID', e.target.value)}
    //             required
    //           />
    //         </div>
    //         <div className="col-md-3">
    //           <input
    //             type="text"
    //             className="form-control"
    //             placeholder="Product Name"
    //             value={item.productname}
    //             onChange={(e) => handleItemChange(index, 'productname', e.target.value)}
    //             required
    //           />
    //         </div>
    //         <div className="col-md-3">
    //           <input
    //             type="number"
    //             className="form-control"
    //             placeholder="Price"
    //             value={item.productprice}
    //             onChange={(e) => handleItemChange(index, 'productprice', parseFloat(e.target.value))}
    //             required
    //           />
    //         </div>
    //         <div className="col-md-3">
    //           <input
    //             type="number"
    //             className="form-control"
    //             placeholder="Quantity"
    //             value={item.productquantity}
    //             onChange={(e) => handleItemChange(index, 'productquantity', parseInt(e.target.value))}
    //             required
    //           />
    //         </div>
    //       </div>
    //     ))}
    //     <button type="submit" className="btn btn-primary" disabled={loading}>
    //       {loading ? 'Placing Order...' : 'Place Order'}
    //     </button>
    //   </form>

    //   {error && <div className="alert alert-danger mt-3">Error: {error}</div>}
    //   {success && <div className="alert alert-success mt-3">Order placed successfully!</div>}
    // </div>


  //   <div className='bg-primary-subtle' style={{height:"1900px"}}>
  // <div className="container mt-5  pt-5 ">
  //   <h2 className="text-center mb-4 ">PLACE AN ORDER</h2>
  //   <form onSubmit={handleSubmit}>
  //     {/* Customer Information */}
  //     <div className="card mb-4">
  //       <div className="card-header">
  //         <h5>Customer Information</h5>
  //       </div>
  //       <div className="card-body">
  //         <div className="row">
  //           <div className="col-md-6 mb-3">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="customername"
  //               placeholder="Customer Name"
  //               value={formData.customername}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>
  //           <div className="col-md-6 mb-3">
  //             <input
  //               type="tel"
  //               className="form-control"
  //               name="mobileno"
  //               placeholder="Mobile Number"
  //               value={formData.mobileno}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-6 mb-3">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="address"
  //               placeholder="Address"
  //               value={formData.address}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>
  //           <div className="col-md-6 mb-3">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="city"
  //               placeholder="City"
  //               value={formData.city}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>
  //         </div>
  //         <div className="row">
  //           <div className="col-md-6 mb-3">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="state"
  //               placeholder="State"
  //               value={formData.state}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>
  //           <div className="col-md-6 mb-3">
  //             <input
  //               type="text"
  //               className="form-control"
  //               name="pincode"
  //               placeholder="Pincode"
  //               value={formData.pincode}
  //               onChange={handleChange}
  //               required
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Items Information */}
  //     <h4 className="mt-4 mb-3">Items</h4>
  //     {formData.items.map((item, index) => (
  //       <div className="card mb-3" key={index}>
  //         <div className="card-body">
  //           <div className="row">
  //             <div className="col-md-3 mb-3">
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 placeholder="Product ID"
  //                 value={item.productID}
  //                 onChange={(e) => handleItemChange(index, 'productID', e.target.value)}
  //                 required
  //               />
  //             </div>
  //             <div className="col-md-3 mb-3">
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 placeholder="Product Name"
  //                 value={item.productname}
  //                 onChange={(e) => handleItemChange(index, 'productname', e.target.value)}
  //                 required
  //               />
  //             </div>
  //             <div className="col-md-3 mb-3">
  //               <input
  //                 type="number"
  //                 className="form-control"
  //                 placeholder="Price"
  //                 value={item.productprice}
  //                 onChange={(e) => handleItemChange(index, 'productprice', parseFloat(e.target.value))}
  //                 required
  //               />
  //             </div>
  //             <div className="col-md-3 mb-3">
  //               <input
  //                 type="number"
  //                 className="form-control"
  //                 placeholder="Quantity"
  //                 value={item.productquantity}
  //                 onChange={(e) => handleItemChange(index, 'productquantity', parseInt(e.target.value))}
  //                 required
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}

  //     {/* Submit Button */}
  //     <div className="text-center">
  //       <button type="submit" className="btn btn-primary" disabled={loading}>
  //         {loading ? 'Placing Order...' : 'Place Order'}
  //       </button>
  //     </div>
  //   </form>

  //   {/* Error and Success Messages */}
  //   {error && <div className="alert alert-danger mt-3">Error: {error}</div>}
  //   {success && <div className="alert alert-success mt-3">Order placed successfully!</div>}
  // </div>

  //   </div>

  <div className="bg-light p-5" style={{ minHeight: "1900px" }}>
  <div className="container py-5">
    <div className="card shadow-lg">
      <div className="card-header bg-warning text-dark text-center">
        <h2>Place an Order</h2>
      </div>
      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          {/* Customer Information Section */}
          <div className="card mb-4">
            <div className="card-header bg-secondary text-white">
              <h5>Customer Information</h5>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="customername">
                    Customer Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="customername"
                    name="customername"
                    placeholder="Enter customer name"
                    value={formData.customername}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="mobileno">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="mobileno"
                    name="mobileno"
                    placeholder="Enter mobile number"
                    value={formData.mobileno}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="address">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="city">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    placeholder="Enter city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="state">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    placeholder="Enter state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="pincode">
                    Pincode
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    name="pincode"
                    placeholder="Enter pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Items Information Section */}
          <div className="card mb-4">
            <div className="card-header bg-secondary text-white">
              <h5>Items</h5>
            </div>
            <div className="card-body">
              {formData.items.map((item, index) => (
                <div className="row mb-3" key={index}>
                  <div className="col-md-3">
                    <label className="form-label" htmlFor={`productID-${index}`}>
                      Product ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`productID-${index}`}
                      placeholder="Enter product ID"
                      value={item.productID}
                      onChange={(e) => handleItemChange(index, "productID", e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" htmlFor={`productName-${index}`}>
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`productName-${index}`}
                      placeholder="Enter product name"
                      value={item.productname}
                      onChange={(e) => handleItemChange(index, "productname", e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" htmlFor={`productPrice-${index}`}>
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id={`productPrice-${index}`}
                      placeholder="Enter price"
                      value={item.productprice}
                      onChange={(e) => handleItemChange(index, "productprice", parseFloat(e.target.value))}
                      required
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label" htmlFor={`productQuantity-${index}`}>
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id={`productQuantity-${index}`}
                      placeholder="Enter quantity"
                      value={item.productquantity}
                      onChange={(e) => handleItemChange(index, "productquantity", parseInt(e.target.value))}
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
              {loading ? "Placing Order..." : "Place Order"}
            </button>
          </div>
        </form>

        {/* Error and Success Messages */}
        {error && (
          <div className="alert alert-danger mt-4 text-center">
            <strong>Error:</strong> {error}
          </div>
        )}
        {success && (
          <div className="alert alert-success mt-4 text-center">
            <strong>Success!</strong> Order placed successfully!
          </div>
        )}
      </div>
    </div>
  </div>
</div>

  );
};

export default Placeorder;

