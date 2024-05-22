import React, { useEffect } from "react";
import useFunction from "../../Hooks/useFunction";
import { useNavigate, useParams } from "react-router";

const UpdateService = () => {
  const {
    URL,
    alert,
    service,
    setService,
    handleTitleChange,
    handleImageChange,
    handlePriceChange,
    handleDescriptionChange,
  } = useFunction();
  const { id } = useParams();
  const navigate = useNavigate();

  // Data Load
  useEffect(() => {
    fetch(`${URL}/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [URL, id, setService]);

  // Data Post
  const handleServiceUpdate = (e) => {
    e.preventDefault();
    fetch(`${URL}/services/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert.show(`Service Update Successful`);
          navigate(`/dashboard`);
        }
      });
  };

  return (
    <>
      <div style={{ margin: "4rem auto" }}>
        <div className="section">
          <h1 className="text-center text-uppercase text-info-emphasis mt-4 mb-4">
            Update The service
          </h1>

          <div style={{ width: "70%", margin: "4rem auto", display: "block" }}>
            <form onSubmit={handleServiceUpdate}>
              <div className="form-floating mb-4 mt-4">
                <input
                  type="text"
                  className="form-control border border-info"
                  id="floatingInput"
                  placeholder="Service Title"
                  value={service.title}
                  onChange={handleTitleChange}
                />
                <label for="floatingInput">Service Title</label>
              </div>
              <div className="form-floating mb-4 mt-4">
                <input
                  type="text"
                  className="form-control border border-info"
                  id="floatingInput"
                  placeholder="Image URL"
                  value={service.image}
                  onChange={handleImageChange}
                />
                <label for="floatingInput">Image URL</label>
              </div>

              <div className="form-floating mb-4 mt-4">
                <input
                  type="number"
                  className="form-control border border-info"
                  id="floatingInput"
                  placeholder="Package Price"
                  value={service.price}
                  onChange={handlePriceChange}
                />
                <label for="floatingInput">Package Price</label>
              </div>

              <div className="form-floating mb-4 mt-4">
                <textarea
                  className="form-control border border-info"
                  placeholder="Short Description"
                  id="floatingTextarea2"
                  style={{ height: "150px" }}
                  value={service.description}
                  onChange={handleDescriptionChange}
                ></textarea>
                <label for="floatingTextarea2">Short Description</label>
              </div>

              <div className="mb-4 mt-4">
                <button type="submit" className="btn btn-info">
                  Update Service
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateService;
