import React from "react";
import useFunction from "../../Hooks/useFunction";

const AddService = () => {
  const { titleRef, imageRef, descriptionRef, priceRef, handleAddService } =
    useFunction();
  return (
    <>
      <div style={{ margin: "4rem auto" }}>
        <div className="section">
          <h1 className="text-center text-uppercase text-info-emphasis mt-4 mb-4">
            Add a New Service
          </h1>

          <div style={{ width: "70%", margin: "4rem auto", display: "block" }}>
            <form onSubmit={handleAddService}>
              <div className="form-floating mb-4 mt-4">
                <input
                  type="text"
                  className="form-control border border-info"
                  id="floatingInput"
                  placeholder="Service Title"
                  ref={titleRef}
                />
                <label for="floatingInput">Service Title</label>
              </div>
              <div className="form-floating mb-4 mt-4">
                <input
                  type="text"
                  className="form-control border border-info"
                  id="floatingInput"
                  placeholder="Image URL"
                  ref={imageRef}
                />
                <label for="floatingInput">Image URL</label>
              </div>

              <div className="form-floating mb-4 mt-4">
                <input
                  type="number"
                  className="form-control border border-info"
                  id="floatingInput"
                  placeholder="Package Price"
                  ref={priceRef}
                />
                <label for="floatingInput">Package Price</label>
              </div>

              <div className="form-floating mb-4 mt-4">
                <textarea
                  className="form-control border border-info"
                  placeholder="Short Description"
                  id="floatingTextarea2"
                  style={{ height: "150px" }}
                  ref={descriptionRef}
                ></textarea>
                <label for="floatingTextarea2">Short Description</label>
              </div>

              <div className="mb-4 mt-4">
                <button type="submit" className="btn btn-info">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddService;
