import React from "react";
import "./MultiComponents.css";

const ContactUs = () => {
  return (
    <>
      <div className="section">
        <div className="contact container">
          <form>
            <div className="form">
              <div className="form-txt">
                <span>
                  As you might expect of a company that began as a high-end
                  interiors contractor, we pay strict attention.
                </span>
                <h3>Our USA Office</h3>
                <p>
                  195 E Parker Square Dr, Parker, CO 801
                  <br />
                  +43 982-314-0958
                </p>
                <h3>Our India Office</h3>
                <p>
                  HW95+C9C, Mhada Colony, Viman Nagar, Pune, Maharashtra
                  <br />
                  411014
                </p>
              </div>
              <div className="form-details">
                <div className="row gx-3 gy-3">
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                      style={{ border: "1px solid black", width: "100%" }}
                    />
                  </div>

                  <div className="col-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      style={{ border: "1px solid black", width: "100%" }}
                    />
                  </div>
                </div>
                <textarea
                  name="message"
                  id="message"
                  cols="52"
                  rows="7"
                  placeholder="Message"
                  required
                  style={{ border: "1px solid black", width: "100%" }}
                ></textarea>
                <button>SEND MESSAGE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
