import React from "react";
import useFunction from "../../Hooks/useFunction";
import { useNavigate } from "react-router";
import ManageAllOrder from "../../Components/MultiComponents/ManageAllOrder";
import ManageAllServices from "../../Components/MultiComponents/ManageAllServices";

const Dashboard = () => {
  const { manageOrder, setManageOrder } = useFunction();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="section">
          <div style={{ margin: "3rem auto" }}>
            <button
              type="button"
              className="btn btn-info m-2"
              onClick={() => {
                navigate(`/add-service`);
              }}
            >
              Add Services
            </button>
            <button
              type="button"
              className={
                manageOrder === true
                  ? "btn btn-dark text-white m-2"
                  : "btn btn-info text-dark m-2"
              }
              onClick={() => {
                setManageOrder(true);
              }}
            >
              Manage All Services
            </button>

            <button
              type="button"
              className={
                manageOrder === false
                  ? "btn btn-dark text-white m-2"
                  : "btn btn-info text-dark m-2"
              }
              onClick={() => {
                setManageOrder(false);
              }}
            >
              Manage All Orders
            </button>
          </div>

          {manageOrder !== true ? (
            <>
              <ManageAllOrder />
            </>
          ) : (
            <>
              <ManageAllServices />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
