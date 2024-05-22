import React from "react";
import { useNavigate } from "react-router";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ margin: "16rem 0.1rem" }}>
        <div className="section">
          <h1 className="text-center">Error 404</h1>
          <h3 className="text-center">Your path is wrong.</h3>

          <div className="text-center">
            <button
              type="button"
              className="btn btn-info"
              onClick={() => navigate(`/`)}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
