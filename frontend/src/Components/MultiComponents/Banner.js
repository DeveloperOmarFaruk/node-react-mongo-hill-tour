import React from "react";

const Banner = () => {
  return (
    <>
      <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide ">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-travel-agency-webinar_23-2149591403.jpg?t=st=1716330054~exp=1716333654~hmac=18792dfa8f7b3cc8e41a13769abcc54228ed358673e324b842f602716b3c7164&w=996"
                className="d-block w-100"
                alt="banner_image"
                style={{ width: "auto", height: "90vh" }}
              />
              {/* <div className="carousel-caption d-none d-md-block text-light">
                <h3>Hill Tricks (Khagrachari, Bandarban, Rangamati)</h3>
                <p>
                  Hill Tricks Tour Service specializes in creating unforgettable
                  journeys to the breathtaking hill stations and scenic
                  landscapes of Bangladesh. Our tours are designed for adventure
                  seekers, nature lovers, and cultural enthusiasts, offering a
                  perfect blend of exploration, relaxation, and cultural
                  immersion.
                </p>
              </div> */}
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-travel-adventure-sale-banner_23-2150881312.jpg?t=st=1716330152~exp=1716333752~hmac=522f6dbc32e3172a5dba807bc64b5fdc57d778b40f14a245bfa53ba1b1c438d0&w=1060"
                className="d-block w-100"
                alt="banner_image"
                style={{ width: "auto", height: "90vh" }}
              />
              {/* <div className="carousel-caption d-none d-md-block text-light">
                <h3>
                  Sylhet (Ratargul Swamp Forest, Jaflong, Srimangal, Lalakhal,
                  Bisnakandi, Hazrat Shah Jalal Mazar Sharif, Pangthumai
                  Waterfall, Madhabkunda Waterfall)
                </h3>
                <p>
                  This tour description provides an enticing overview of some of
                  Sylhet’s most captivating tourist spots, offering a blend of
                  natural beauty, cultural experiences, and adventure.
                </p>
              </div> */}
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/free-psd/woman-holding-hands-air-banner-template_23-2148669219.jpg?t=st=1716330228~exp=1716333828~hmac=51929015efe1cbfa3365e95ee5f7601a034ac1e4a07039288e4cccf3d4b4573b&w=1060"
                className="d-block w-100"
                alt="banner_image"
                style={{ width: "auto", height: "90vh" }}
              />
              {/* <div className="carousel-caption d-none d-md-block text-light">
                <h3>Discover the Beauty of Cox's Bazar</h3>
                <p>
                  This tour itinerary provides a comprehensive and enjoyable
                  experience of Cox's Bazar, covering its beautiful beaches,
                  cultural sites, and natural attractions. It ensures a mix of
                  relaxation, adventure, and cultural exploration, making it an
                  ideal trip for all types of travelers.
                </p>
              </div> */}
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
