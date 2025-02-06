import React from 'react'

function Slider() {
  return (
    <>


<div id="carouselExample" className="carousel slide  mt-5 vh-200  "   >
  <div className="carousel-inner container-fluid  ">
    <div className="carousel-item active " style={{height:"250px"}} >
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" style={{height:"250px"}}>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" style={{height:"250px"}}>
      <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a6e3e8335d6e7d9b.jpg?q=20" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</>
    
  )
}

export default Slider