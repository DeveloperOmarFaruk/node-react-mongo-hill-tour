import React from "react";
import Banner from "../../Components/MultiComponents/Banner";
import Services from "../Services/Services";
import AboutUs from "../../Components/MultiComponents/AboutUs";
import ContactUs from "../../Components/MultiComponents/ContactUs";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <div className="section text-center mt-4 mb-4">
        <h2 className="font-weight-bold">
          Our <span className="text-custom">Services</span>
        </h2>
      </div>
      <Services />
      <div className="section text-center mt-4 mb-4">
        <h2
          className="font-weight-bold"
          style={{ margin: "8rem 0.1rem 5rem 0.1rem" }}
        >
          Contact <span className="text-custom">Us</span>
        </h2>
      </div>
      <ContactUs />
    </>
  );
};

export default Home;
