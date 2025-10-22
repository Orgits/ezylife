"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import about_img from "@/assets/img/about/img-1.jpg";
import about_shape from "@/assets/img/about/shape-3.png";

import about_shape_1 from "@/assets/img/about/img-2.jpg";
import about_shape_2 from "@/assets/img/about/shape-1.png";
import about_shape_3 from "@/assets/img/about/shape-2.png";
import about_shape_4 from "@/assets/img/about/shape-4.png";

interface DataType {
  subtitle: string;
  title: string;
  sm_des: string;
  features: string[];
}

const about_content: DataType = {
  subtitle: "About Us",
  title: "A SEBI-registered sub-broker with IIFL Capital",
  sm_des:
    "We are also registered with AMFI, enabling us to distribute mutual funds and SIPs across all major asset management companies. Our team of Chartered Accountants, Financial Advisors, and Wealth Experts simplifies financial decisions for our clients, ensuring they get the right solutions at the right time — true to our tagline, 'Makes Your Life Easy.' Our Vision To simplify financial decisions and create wealth with trust, transparency, and innovation.",
  features: [
    "To make quality financial services accessible to all",
    "To provide unbiased advisory tailored to client needs",
    "To deliver growth-oriented and cost-efficient solutions",
  ],
};
const { subtitle, title, sm_des, features } = about_content;

const AboutAreaHomeOne = () => {
  return (
    <>
      <section
        id="about-one-page"
        className="tp-about-area p-relative pt-130 pb-210"
      >
        <div className="tp-about-shape">
          <Image src={about_shape} alt="image-title-here" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="tp-about-thumb-wrapper p-relative wow fadeInLeft"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="main">
                  <Image src={about_img} alt="image-title-here" />
                </div>
                <Image
                  className="shape-1"
                  src={about_shape_1}
                  alt="image-title-here"
                />
                <Image
                  className="shape-2"
                  src={about_shape_2}
                  alt="image-title-here"
                />
                <Image
                  className="shape-3"
                  src={about_shape_3}
                  alt="image-title-here"
                />
                <Image
                  className="shape-4"
                  src={about_shape_4}
                  alt="image-title-here"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-wrapper">
                <div className="tp-about-title-wrapper">
                  <span
                    className="tp-section-title-pre"
                    style={{
                      background:
                        "linear-gradient(90deg, #6af363 0%, #0dee36 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {subtitle}
                  </span>
                  <h3 className="tp-section-title">{title}</h3>
                </div>
                <p>{sm_des}</p>
                <div
                  className="tp-about-mission"
                  style={{ marginTop: "25px", marginBottom: "30px" }}
                >
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      marginBottom: "15px",
                    }}
                  >
                    Our Missions
                  </h4>
                  <div className="tp-about-wrapper-list">
                    <ul>
                      {features.map((item, index) => (
                        <li key={index} style={{ fontSize: "16px" }}>
                          <span>
                            <i className="fa-regular fa-circle"></i>
                          </span>{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="tp-about-btn">
                  <Link className="tp-btn" href="/about">
                    About Us{" "}
                    <span>
                      <i className="fa-regular fa-plus"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAreaHomeOne;
