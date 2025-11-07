import React from "react";
import ContactForm from "../forms/ContactForm";

interface DataType {
  icon: string;
  title: string;
  info_1: string;
  info_2?: string;
}

const contact_data: DataType[] = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Address",
    info_1:
      "Ezylife Financial Services Pvt. Ltd.Office No. 74D, 7th Floor, Himalaya House,KG Marg, New Delhi –110001",
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Mail Us",
    info_1: "info@ezylife.in",
    // info_2: 'sara.cruz@example.com'
  },
  {
    icon: "fa-solid fa-phone",
    title: "Telephone",
    info_1: "(123) 456-7890",
    info_2: "(123) 456-7891",
  },
];

const ContactArea = ({ style }: any) => {
  return (
    <>
      <section
        id="contact-one-page"
        className={`tp-contact-breadcrumb-area ${
          style ? "pt-100" : "pt-120"
        } pb-120`}
      >
        <div className="container">
          <div className="tp-contact-breadcrumb-box">
            <div className="tp-contact-breadcrumb-social">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="tp-contact-breadcrumb-content">
                  <h3 className="tp-contact-breadcrumb-title">Get in touch</h3>
                  <p>
                    We are here for you! how can we help, We are here for you!{" "}
                  </p>

                  <ContactForm />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="tp-contact-breadcrumb-wrapper">
                  {contact_data.map((item, index) => (
                    <div
                      className={`tp-contact-breadcrumb-item d-flex ${
                        index !== contact_data.length - 1 ? "mb-40" : ""
                      }`}
                      key={index}
                    >
                      <div className="tp-contact-breadcrumb-item-icon">
                        <span
                          style={{
                            fontSize: "40px",
                            fontWeight: "900",
                            background:
                              "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          <i className={item.icon}></i>
                        </span>
                      </div>
                      <div className="tp-contact-breadcrumb-item-content">
                        <h3 className="tp-contact-breadcrumb-item-title">
                          {item.title}
                        </h3>
                        <a href={item.info_1} target="_blank">
                          {item.info_1}
                        </a>
                        {item.info_2 && (
                          <a href={item?.info_2} target="_blank">
                            {item.info_2}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactArea;
