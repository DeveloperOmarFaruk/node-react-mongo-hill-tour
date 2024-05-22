import React, { useEffect, useState } from "react";
import useFirebase from "../../Hooks/useFirebase";
import { useParams } from "react-router";
import useFunction from "../../Hooks/useFunction";

const Order = () => {
  const { userInfo } = useFirebase();
  const {
    URL,
    service,
    setService,
    handleOrder,
    orderNameRef,
    orderEmailRef,
    orderPriceRef,
    orderAddressRef,
  } = useFunction();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${URL}/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [URL]);

  return (
    <>
      <div>
        <div className="section">
          <div style={{ width: "50%", margin: "4rem auto", display: "block" }}>
            <form onSubmit={handleOrder}>
              <div className=" mb-4 mt-4">
                <h3 className="text-info-emphasis">{service.title}</h3>
              </div>
              <div className=" mb-4 mt-4">
                <img
                  src={service.image}
                  alt="order_image"
                  style={{ width: "100%", height: "200px" }}
                />
              </div>

              <div className="form-floating mb-4 mt-4">
                <input
                  type="text"
                  className="form-control border border-info"
                  id="floatingInput"
                  placeholder="Name"
                  value={userInfo.displayName}
                  ref={orderNameRef}
                />
                <label for="floatingInput">Name</label>
              </div>
              <div className="form-floating mb-4 mt-4">
                <input
                  type="email"
                  className="form-control border border-info"
                  id="floatingInput"
                  placeholder="Email"
                  value={userInfo.email}
                  ref={orderEmailRef}
                />
                <label for="floatingInput">Email</label>
              </div>

              <div className="form-floating mb-4 mt-4">
                <input
                  type="number"
                  className="form-control border border-info"
                  id="floatingInput"
                  placeholder="Package Price"
                  value={service.price}
                  ref={orderPriceRef}
                />
                <label for="floatingInput">Package Price</label>
              </div>

              <div className="form-floating mb-4 mt-4">
                <input
                  type="text"
                  className="form-control border border-info"
                  id="floatingInput"
                  placeholder="Address"
                  ref={orderAddressRef}
                />
                <label for="floatingInput">Address</label>
              </div>

              <div className="mb-4 mt-4">
                <button type="submit" className="btn btn-info">
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
