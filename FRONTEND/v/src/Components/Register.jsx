import React, { Suspense, useEffect, useState } from "react";
import {  useDispatch, useSelector,  } from "react-redux";
import { registerUseraction } from "../REDUX/ACTION/user";
import { toast, Toaster } from "sonner";
import { useNavigate } from "react-router-dom";
import { EMPTY_USER_FAILURE_MESSAGE, EMPTY_USER_SUCESS_MESSAGE } from "../REDUX/Constant/user";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const user = useSelector((state) => state.myuser.user);
  const isloading = useSelector((state) => state.myuser.isloading);
  const sucess = useSelector((state) => state.myuser.sucess);
  const failure = useSelector((state) => state.myuser.failure);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUseraction(formData, navigate));
  };

  useEffect(() => {
    if (sucess) {
      toast.success(sucess);
      dispatch({ type: EMPTY_USER_SUCESS_MESSAGE });
    }
  }, [sucess]);

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: EMPTY_USER_FAILURE_MESSAGE });
    }
  }, [failure]);

  return (
    <>
      <Toaster richColors position="bottom-right"></Toaster>
 
      <div className="w-100 vh-100 bg-danger-subtle d-flex flex-column justify-content-center align-items-center">
  <div className="p-5 bg-white rounded shadow">
    <h1 className="text-danger text-center mb-4">REGISTER</h1>
    <form
      className="d-flex flex-column gap-3"
      onSubmit={handleFormSubmit}
    >
      <input
        type="text"
        placeholder="Enter name"
        className="form-control"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Enter email"
        className="form-control"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Enter password"
        className="form-control"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />
      <button className="btn btn-primary mt-3">
        {isloading ? (
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          "REGISTER"
        )}
      </button>
    </form>
  </div>
</div>

    </>
  );
}

export default Register;
