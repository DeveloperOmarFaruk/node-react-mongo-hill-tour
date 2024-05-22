import React from "react";
import useFunction from "../../Hooks/useFunction";
import { useNavigate } from "react-router";

const Services = () => {
  const { services } = useFunction();
  const navigate = useNavigate();

  return (
    <>
      <div style={{ margin: "4rem auto" }}>
        <div className="section">
          <div className="container overflow-hidden text-center">
            <div className="row gx-5 gy-5">
              {services.map((service) => (
                <div
                  className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                  key={service._id}
                >
                  <div
                    className="card"
                    style={{
                      width: "100%",
                      boxShadow:
                        "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                    }}
                  >
                    <img
                      src={service.image}
                      className="card-img-top"
                      alt="service_image"
                      style={{ width: "100%", height: "200px" }}
                    />
                    <div className="card-body">
                      <h4 className="card-title text-info-emphasis">
                        {service.title}
                      </h4>
                      <h5>Package Price: {service.price} /-</h5>
                      <p
                        className="card-text"
                        style={{
                          display: "-webkit-box",
                          webkitLineClamp: "3",
                          webkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {service.description}
                      </p>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          navigate(`/order/${service._id}`);
                        }}
                      >
                        Booking Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
