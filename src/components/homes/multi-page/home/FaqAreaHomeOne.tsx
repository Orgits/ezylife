"use client";
import React from "react";
import Count from "@/components/common/Count";
import accordion_data from "@/data/AccordionData";
import faq_icon_1 from "@/assets/img/faq/icon-1.svg";
import faq_icon_2 from "@/assets/img/faq/icon-2.svg";
import Image from "next/image";

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  sm_des: string;
}

const faq_content: DataType = {
  subtitle: "Have Questions?",
  title: (
    <>
      Get expert answers to <br /> your financial queries
    </>
  ),
  sm_des:
    "Our team of Chartered Accountants and financial experts are here to address all your investment and financial planning questions. We believe in transparency and are committed to helping you make informed decisions.",
};
const { subtitle, title, sm_des } = faq_content;

const FaqAreaHomeOne = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 991px) {
          .tp-faq-area {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }

          .tp-faq-wrapper {
            margin-bottom: 40px;
            text-align: center;
          }

          .tp-faq-counter-wrapper {
            justify-content: center !important;
            flex-wrap: wrap;
          }

          .tp-faq-counter {
            margin-right: 30px !important;
            margin-bottom: 20px !important;
          }
        }

        @media (max-width: 767px) {
          .tp-faq-area {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }

          .tp-section-title {
            font-size: 24px !important;
            line-height: 1.3 !important;
            margin-bottom: 20px;
            color: white !important;
          }

          .tp-faq-wrapper p {
            font-size: 14px !important;
            line-height: 1.6 !important;
            color: rgba(255, 255, 255, 0.9) !important;
          }

          .tp-faq-counter {
            margin-right: 15px !important;
            margin-bottom: 15px !important;
            display: flex !important;
            align-items: center !important;
          }

          .tp-faq-counter-content {
            display: block !important;
            flex-grow: 1;
          }

          .tp-faq-counter-title {
            font-size: 20px !important;
            color: white !important;
            display: flex !important;
            align-items: center !important;
            margin-bottom: 5px !important;
          }
          
          .tp-faq-counter-title .count-wrapper span {
            color: white !important;
          }

          .tp-faq-counter p {
            font-size: 13px !important;
            color: rgba(255, 255, 255, 0.8) !important;
            margin-bottom: 0 !important;
          }

          .accordion-button {
            font-size: 14px !important;
            padding: 12px 15px !important;
          }

          .accordion-body p {
            font-size: 13px !important;
            line-height: 1.6 !important;
          }
        }

        @media (max-width: 575px) {
          .tp-faq-area {
            padding-top: 50px !important;
            padding-bottom: 50px !important;
          }

          .tp-section-title {
            font-size: 20px !important;
            line-height: 1.4 !important;
          }

          .tp-section-title-pre {
            font-size: 12px !important;
            margin-bottom: 10px;
          }

          .tp-faq-wrapper p {
            font-size: 13px !important;
            padding: 0 10px;
          }

          .tp-faq-counter-wrapper {
            flex-direction: column !important;
            align-items: center;
          }

          .tp-faq-counter {
            margin-right: 0 !important;
            margin-bottom: 20px !important;
            width: 100%;
            max-width: 250px;
            justify-content: center !important;
            display: flex !important;
            align-items: center !important;
          }

          .tp-faq-counter-icon {
            margin-right: 15px !important;
            flex-shrink: 0;
          }

          .tp-faq-counter-content {
            display: block !important;
            flex-grow: 1;
          }

          .tp-faq-counter-title {
            font-size: 18px !important;
            display: flex !important;
            align-items: center !important;
            color: black !important;
            margin-bottom: 5px !important;
          }
          
          .tp-faq-counter-title .count-wrapper span {
            color: white !important;
          }

          .tp-faq-counter p {
            font-size: 14px !important;
            color: black !important;
            margin-bottom: 0 !important;
          }

          .accordion-button {
            font-size: 13px !important;
            padding: 10px 12px !important;
          }

          .accordion-body p {
            font-size: 12px !important;
            padding: 0 5px;
          }
        }
      `}</style>
      <section
        className="tp-faq-area p-relative pt-120 pb-120"
        style={{
          backgroundImage: "url(/assets/img/faq/bg-shape.png)",
          background: "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
        }}
      >
        <div className="tp-faq-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tp-faq-wrapper">
                <div className="tp-faq-title-wrapper">
                  <span
                    className="tp-section-title-pre"
                    style={{
                      background:
                        "linear-gradient(90deg, #81C784 0%, #66BB6A 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {subtitle}
                  </span>
                  <h3 className="tp-section-title"> {title} </h3>
                  <p> {sm_des}</p>
                </div>
                <div className="tp-faq-counter-wrapper d-flex">
                  <div className="tp-faq-counter d-flex align-items-center mr-20 mb-30">
                    <div className="tp-faq-counter-icon">
                      <span>
                        <Image src={faq_icon_1} alt="image-title-here" />
                      </span>
                    </div>
                    <div className="tp-faq-counter-content">
                      <h4 className="tp-faq-counter-title d-flex">
                        <Count number={10} /> +
                      </h4>
                      <p>Years Experience</p>
                    </div>
                  </div>
                  <div className="tp-faq-counter d-flex align-items-center mb-30">
                    <div className="tp-faq-counter-icon">
                      <span>
                        <Image src={faq_icon_2} alt="image-title-here" />
                      </span>
                    </div>
                    <div className="tp-faq-counter-content">
                      <h4 className="tp-faq-counter-title d-flex">
                        <Count number={500} /> +
                      </h4>
                      <p>Satisfied Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div
                className="tp-faq-tab-content tp-accordion wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="accordion" id="general_accordion">
                  {accordion_data.map((item, index) => (
                    <div
                      className={`accordion-item ${
                        index === 0 ? "tp-faq-active" : ""
                      }`}
                      key={index}
                    >
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`accordion-button ${
                            index === 0 ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded={index === 0 ? true : false}
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${
                          index === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#general_accordion"
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
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

export default FaqAreaHomeOne;
