
import React, { useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { saveUserProfile } from '../REDUX/ACTION/userProfile';

const Userprofile = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state)=>state.userprofile.loading);
  const success = useSelector((state)=>state.userprofile.success);
  const error = useSelector((state)=>state.userprofile.error);
  

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobileno: '',
    address: { street: '', city: '', state: '', pincode: '' },
    profilePicture:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData({ ...formData, address: { ...formData.address, [field]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUserProfile(formData));
  };
  const handleImageUpload = (e) => {
         const file = e.target.files[0];
         if (file) {
           const reader = new FileReader();
           reader.onloadend = () => {
             setFormData({ ...formData, profilePicture: reader.result });
           };
           reader.readAsDataURL(file);
         }
       };
  return (
    // <div className="container mt-5">
    //   <h2 className="text-center mb-4">User Profile</h2>
    //   <form onSubmit={handleSubmit}>
    //   <div className="row mb-3">
    //           <div className="col-md-6">
    //             <label className="form-label" htmlFor="profilePicture">
    //               Profile Picture
    //             </label>
    //             <input
    //               type="file"
    //               id="profilePicture"
    //               className="form-control"
    //               onChange={handleImageUpload}
    //             />
    //           </div>
    //           <div className="col-md-6 text-center">
    //             {formData.profilePicture && (
    //               <img
    //                 src={formData.profilePicture}
    //                 alt="Profile Preview"
    //                 className="img-thumbnail"
    //                 width="150"
    //                 height="150"
    //               />
    //             )}
    //           </div>
    //          </div>

    //     <div className="row">
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="username"
    //           placeholder="Username"
    //           value={formData.username}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="email"
    //           className="form-control"
    //           name="email"
    //           placeholder="Email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //     </div>
    //     <div className="row">
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
    //     <h4 className="mt-4 mb-3">Address</h4>
    //     <div className="row">
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="address.street"
    //           placeholder="Street"
    //           value={formData.address.street}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="address.city"
    //           placeholder="City"
    //           value={formData.address.city}
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
    //           name="address.state"
    //           placeholder="State"
    //           value={formData.address.state}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>
    //       <div className="col-md-6 mb-3">
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="address.pincode"
    //           placeholder="Pincode"
    //           value={formData.address.pincode}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>   
    //       {/* <div className="row mb-3">
    //           <div className="col-md-6">
    //             <label className="form-label" htmlFor="profilePicture">
    //               Profile Picture
    //             </label>
    //             <input
    //               type="file"
    //               id="profilePicture"
    //               className="form-control"
    //               onChange={handleImageUpload}
    //             />
    //           </div>
    //           <div className="col-md-6 text-center">
    //             {formData.profilePicture && (
    //               <img
    //                 src={formData.profilePicture}
    //                 alt="Profile Preview"
    //                 className="img-thumbnail"
    //                 width="150"
    //                 height="150"
    //               />
    //             )}
    //           </div>
    //          </div> */}
    //     </div>
    //     <button type="submit" className="btn btn-primary" disabled={loading}>
    //       {loading ? "Saving Profile..." : "Save Profile"}
    //     </button>
    //   </form>
    //   {error && <div className="alert alert-danger mt-3">Error: {error}</div>}
    //   {success && <div className="alert alert-success mt-3">Profile saved successfully!</div>}
    // </div>
    <div className="container mt-5 p-5">
  <div className="card shadow-lg">
    <div className="card-header bg-primary text-white text-center">
      <h2>USER PROFILE</h2>
    </div>
    <div className="card-body p-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="col-md-6">
            <label className="form-label" htmlFor="profilePicture">
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              className="form-control"
              onChange={handleImageUpload}
            />
          </div>
          <div className="col-md-6 text-center">
            {formData.profilePicture && (
              <img
                src={formData.profilePicture}
                alt="Profile Preview"
                className="img-thumbnail mt-2"
                width="150"
                height="150"
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label" htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label" htmlFor="mobileno">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="mobileno"
              name="mobileno"
              placeholder="Enter your mobile number"
              value={formData.mobileno}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <h4 className="mt-4">Address</h4>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label" htmlFor="street">Street</label>
            <input
              type="text"
              className="form-control"
              id="street"
              name="address.street"
              placeholder="Enter street"
              value={formData.address.street}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label" htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="address.city"
              placeholder="Enter city"
              value={formData.address.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label" htmlFor="state">State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              name="address.state"
              placeholder="Enter state"
              value={formData.address.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label" htmlFor="pincode">Pincode</label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              name="address.pincode"
              placeholder="Enter pincode"
              value={formData.address.pincode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
            {loading ? "Saving Profile..." : "Save Profile"}
          </button>
        </div>
      </form>

      {error && (
        <div className="alert alert-danger mt-3 text-center">
          Error: {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success mt-3 text-center">
          Profile saved successfully!
        </div>
      )}
    </div>
  </div>
</div>

  );
};

export default Userprofile;
