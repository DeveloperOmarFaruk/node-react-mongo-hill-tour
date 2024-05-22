import React from "react";
import useFunction from "../../Hooks/useFunction";
import { useNavigate } from "react-router";

const ManageAllServices = () => {
  const { services, handleDeleteService } = useFunction();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1 className="text-center text-capitalize text-info-emphasis mt-4 mb-4">
          Manage All Services List
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
              <th scope="col">Package ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((item) => (
              <tr key={item._id}>
                <td scope="row" className="align-middle">
                  {item._id}
                </td>
                <td className="align-middle text-left">{item.title}</td>

                <td className="align-middle text-left">{item.description}</td>
                <td className="align-middle text-left">{item.price}/-</td>
                <td className="align-middle">
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src={item.image}
                    alt="order_image"
                  />
                </td>

                <td className="align-middle">
                  <button
                    type="button"
                    className="btn btn-success ps-2 pe-2 pt-1 pb-1 m-2"
                    onClick={() => {
                      navigate(`/update-service/${item._id}`);
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger ps-2 pe-2 pt-1 pb-1 m-2"
                    onClick={() => {
                      handleDeleteService(item._id);
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

export default ManageAllServices;
