import React from "react";

const Loading = () => {
  return (
    <>
      <div style={{ margin: "6rem auto" }}>
        <div className="section">
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-dark" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <h4>Loading...</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
