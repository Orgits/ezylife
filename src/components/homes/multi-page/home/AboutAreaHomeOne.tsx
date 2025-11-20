"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import about_img from "@/assets/img/about/img-1.png";
import about_shape from "@/assets/img/about/shape-3.png";

import about_shape_1 from "@/assets/img/about/img-2.png";
import about_shape_2 from "@/assets/img/about/shape-1.png";
import about_shape_3 from "@/assets/img/about/shape-2.png";
import about_shape_4 from "@/assets/img/about/10years.jpg";

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
      <style jsx>{`
        @media (max-width: 991px) {
          .tp-about-area {
            padding-top: 80px !important;
            padding-bottom: 120px !important;
          }

          .tp-about-thumb-wrapper {
            margin-bottom: 40px;
          }

          .tp-about-thumb-wrapper .main img {
            max-width: 100% !important;
            width: 100% !important;
            height: auto !important;
            object-fit: cover;
          }

          .tp-about-thumb-wrapper .shape-1,
          .tp-about-thumb-wrapper .shape-2,
          .tp-about-thumb-wrapper .shape-3,
          .tp-about-thumb-wrapper .shape-4 {
            display: none;
          }
        }

        @media (max-width: 767px) {
          .tp-about-area {
            padding-top: 60px !important;
            padding-bottom: 80px !important;
          }

          .tp-section-title {
            font-size: 28px !important;
            line-height: 1.4 !important;
            margin-bottom: 20px;
            letter-spacing: -0.3px;
          }

          .tp-about-wrapper p {
            font-size: 16px !important;
            line-height: 1.7 !important;
            margin-bottom: 20px;
            letter-spacing: 0.2px;
          }

          .tp-about-mission h4 {
            font-size: 20px !important;
            margin-bottom: 12px !important;
            letter-spacing: 0.2px;
          }

          .tp-about-wrapper-list ul li {
            font-size: 16px !important;
            line-height: 1.6 !important;
            margin-bottom: 10px;
            letter-spacing: 0.1px;
          }

          .tp-about-thumb-wrapper .main img {
            max-width: 300px !important;
            width: 300px !important;
            height: auto !important;
            margin: 0 auto;
            display: block;
            object-fit: cover;
          }
        }

        @media (max-width: 575px) {
          .tp-about-area {
            padding-top: 50px !important;
            padding-bottom: 60px !important;
          }

          .tp-section-title {
            font-size: 24px !important;
            line-height: 1.5 !important;
            letter-spacing: -0.2px;
          }

          .tp-section-title-pre {
            font-size: 14px !important;
            margin-bottom: 10px;
            letter-spacing: 0.3px;
          }

          .tp-about-wrapper p {
            font-size: 15px !important;
            line-height: 1.6 !important;
            padding: 0 10px;
            letter-spacing: 0.1px;
          }

          .tp-about-mission {
            margin-top: 20px !important;
            margin-bottom: 25px !important;
          }

          .tp-about-mission h4 {
            font-size: 18px !important;
            letter-spacing: 0.1px;
          }

          .tp-about-wrapper-list ul li {
            font-size: 15px !important;
            line-height: 1.5 !important;
            letter-spacing: 0.1px;
          }

          .tp-about-thumb-wrapper .main img {
            max-width: 250px !important;
            width: 250px !important;
            height: auto !important;
            object-fit: cover;
          }

          .tp-btn {
            padding: 12px 25px !important;
            font-size: 16px !important;
            letter-spacing: 0.2px;
          }
        }
      `}</style>
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
                  <Image
                    src={about_img}
                    alt="image-title-here"
                    width={450}
                    height={350}
                    style={{ width: "100%", height: "auto", maxWidth: "450px" }}
                  />
                </div>
                <Image
                  className="shape-1"
                  src={about_shape_1}
                  alt="image-title-here"
                  width={280}
                  height={200}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "300px",
                    position: "absolute",
                    bottom: "-100px",
                    right: "50px",
                    border: "8px solid white",
                    borderRadius: "20px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
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
                {/* <Image
                  className="shape-4"
                  src={about_shape_4}
                  alt="image-title-here"
                  quality={100}
                /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-about-wrapper">
                <div className="tp-about-title-wrapper">
                  <span
                    className="tp-section-title-pre"
                    style={{
                      background:
                        "linear-gradient(90deg,  #4CAF50 0%, #89e550ff 100%)",
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
