
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchproductaction } from "../REDUX/ACTION/products";
import { toast, Toaster } from "sonner";
import { addtocartaction } from "../REDUX/ACTION/cart";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Products() {
  const dispatch = useDispatch();

  
  const products = useSelector((state) => state.myproduct.products);
  const isLoading = useSelector((state) => state.myproduct.isloading);
  const success = useSelector((state) => state.myproduct.success);
  const failure = useSelector((state) => state.myproduct.failure);

  
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  
  useEffect(() => {
    dispatch(fetchproductaction());
  }, [dispatch]);

  
  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.productname.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  
  useEffect(() => {
    if (success) {
      toast.success(success);
      dispatch({ type: "CLEAR_PRODUCT_SUCCESS" }); 
    }
  }, [success, dispatch]);

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: "CLEAR_PRODUCT_FAILURE" }); 
    }
  }, [failure, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(
      addtocartaction(
        product._id,
        1,
        product.productprice,
        product.productthumbnail,
        product.productrating,
        product.productcategory
      )
    );
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const performSearch = () => {
    const filtered = products.filter((product) =>
      product.productname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="ms-5 row p-5 mt-3">
      <Toaster richColors position="bottom-right" />

      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
          className="form-control"
          style={{ width: "300px", marginRight: "10px" }}
        />
        <button className="btn btn-primary bg-success" onClick={performSearch}>
          Search
        </button>
      </div>

      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row ">
          {filteredProducts.map((item) => (
            <div
              className="card m-3"
              style={{ width: "18rem" }}
              key={item.productid}
            >
              <img
                src={item.productthumbnail}
                className="card-img-top"
                alt={item.producttitle}
              />
              <div className="card-body">
                <h5 className="card-title">{item.productname}</h5>{" "}
                
                <p className="card-text">Price: ${item.productprice}</p>
                <p className="card-text">Rating: {item.productrating}</p>
                <p className="card-text">Category: {item.productcategory}</p>
                <Link to="Cart">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;
