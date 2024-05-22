import React from "react";
import "./MultiComponents.css";

const AboutUs = () => {
  return (
    <>
      <div className="container-div">
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section_title_all text-center">
                  <h2 className="font-weight-bold">
                    Welcome To <span className="text-custom">Hill Tour</span>
                  </h2>
                  <p className="section_subtitle mx-auto text-muted">
                    the essence of a travel agency's mission to provide
                    enriching and memorable travel experiences,
                    <br /> encouraging clients to explore new places, discover
                    unique cultures, and experience the world in a meaningful
                    way.
                  </p>
                  <div className="">
                    <i className=""></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="row vertical_content_manage mt-5">
              <div className="col-lg-6">
                <div className="about_header_main mt-3">
                  <div className="about_icon_box">
                    <p className="text_custom font-weight-bold">
                      This title and motto together highlight
                    </p>
                  </div>
                  <h4 className="about_heading text-capitalize font-weight-bold mt-4">
                    The Hill Tour agency's commitment to offering transformative
                    travel experiences that go beyond the ordinary.
                  </h4>
                  <p className="text-muted mt-3">
                    Global Adventures Travel Agency is your gateway to the
                    world's most stunning destinations and unforgettable
                    experiences. Specializing in customized travel itineraries,
                    we offer a wide range of tour packages that cater to every
                    type of traveler.
                  </p>

                  <p className="text-muted mt-3">
                    {" "}
                    Whether you seek the thrill of adventure, the serenity of
                    nature, the richness of culture, or the relaxation of
                    luxury, we have the perfect trip for you.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="img_about mt-3">
                  <img
                    src="https://dkavqk5moymop.cloudfront.net/Global/Gallery/Bandarban:AFull-DayofAdventure/GalleryImages/06cb811b80ed4f5bb1a0924d9cff71c9_14107817_10210611121819895_4892453893708197527_o.jpg"
                    alt="about_image"
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-4">
                <div className="about_content_box_all mt-3">
                  <div className="about_detail text-center">
                    <div className="about_icon">
                      <i className="fas fa-pencil-alt"></i>
                    </div>
                    <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                      Adventure Tours
                    </h5>
                    <p className="edu_desc mt-3 mb-0 text-muted">
                      For those seeking excitement and adrenaline, we offer
                      adventure tours that include activities such as trekking,
                      mountain climbing, scuba diving, and wildlife safaris. Our
                      adventure packages are designed to provide thrilling
                      experiences while ensuring safety and comfort.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="about_content_box_all mt-3">
                  <div className="about_detail text-center">
                    <div className="about_icon">
                      <i className="fa-solid fa-bus"></i>
                    </div>
                    <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                      Luxury Travel
                    </h5>
                    <p className="edu_desc mb-0 mt-3 text-muted">
                      Indulge in the finest experiences with our luxury travel
                      packages. Enjoy five-star accommodations, gourmet dining,
                      private tours, and exclusive access to some of the world’s
                      most sought-after destinations. Our luxury packages are
                      designed to provide the utmost in comfort and
                      sophistication.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="about_content_box_all mt-3">
                  <div className="about_detail text-center">
                    <div className="about_icon">
                      <i className="fas fa-paper-plane"></i>
                    </div>
                    <h5 className="text-dark text-capitalize mt-3 font-weight-bold">
                      Tourist Guide
                    </h5>
                    <p className="edu_desc mb-0 mt-3 text-muted">
                      Welcome to Global Adventures, where our expert tourist
                      guides are dedicated to providing you with an enriching
                      and unforgettable travel experience. Our guides are
                      passionate about their destinations and committed to
                      making your journey as informative, enjoyable, and
                      seamless as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
