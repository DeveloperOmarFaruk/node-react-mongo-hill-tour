import React from "react";
import useFunction from "../../Hooks/useFunction";

const ManageAllOrder = () => {
  const { order, handleOrderDelete } = useFunction();
  return (
    <>
      <div>
        <h1 className="text-center text-capitalize text-info-emphasis mt-4 mb-4">
          Manage All order List
        </h1>
      </div>

      <div
        style={{
          width: "100%",
          margin: "4rem auto 18rem auto",
          display: "block",
        }}
      >
        <table className="table text-center table-info">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Tour Package</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => (
              <tr key={item._id}>
                <td scope="row" className="align-middle">
                  {item._id}
                </td>
                <td className="align-middle text-left">{item.orderTitle}</td>
                <td className="align-middle text-left">{item.orderName}</td>
                <td className="align-middle text-left">{item.orderEmail}</td>
                <td className="align-middle text-left">{item.orderAddress}</td>
                <td className="align-middle">{item.orderPrice}/-</td>
                <td className="align-middle">
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src={item.orderImage}
                    alt="order_image"
                  />
                </td>

                <td className="align-middle">
                  <button
                    type="button"
                    className="btn btn-danger ps-2 pe-2 pt-1 pb-1"
                    onClick={() => {
                      handleOrderDelete(item._id);
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageAllOrder;
