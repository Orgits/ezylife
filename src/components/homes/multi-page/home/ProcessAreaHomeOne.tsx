"use client";
import React from "react";
import Image from "next/image";
import Count from "@/components/common/Count";

import process_icon_1 from "@/assets/img/process/business.png";
import process_icon_2 from "@/assets/img/process/growth.png";
import process_icon_3 from "@/assets/img/process/global-network.png";

import process_img_1 from "@/assets/img/process/img-1.jpg";
import process_img_2 from "@/assets/img/process/img-2.jpg";

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  features: {
    img: any;
    title: string;
    sm_des: string;
  }[];
}

const process_counter: DataType = {
  subtitle: "Our Investment Process",
  title: (
    <>
      Strategic planning drives <br /> financial success
    </>
  ),
  features: [
    {
      img: process_icon_2,
      title: "Client Assessment & Goal Analysis",
      sm_des:
        "We understand your financial requirements, life goals, and risk appetite. Our Chartered Accountants evaluate your current position to build a foundation for your personalized investment strategy.",
    },
    {
      img: process_icon_1,
      title: "Comprehensive Plan Development",
      sm_des:
        "We create a detailed financial plan covering investment strategies, risk management, tax planning, and wealth creation. Every aspect is discussed to ensure clarity and alignment with your objectives.",
    },
    {
      img: process_icon_3,
      title: "Strategic Implementation & Monitoring",
      sm_des:
        "We execute your plan through partnerships with IIFL Capital and other platforms. Our team continuously monitors your portfolio to ensure investments progress toward your defined goals.",
    },
  ],
};

const { subtitle, title, features } = process_counter;

const ProcessAreaHomeOne = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 991px) {
          .tp-process-arae {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
          }
          
          .tp-process-thumb-wrapper {
            margin-top: 40px;
          }
          
          .tp-process-title {
            text-align: center !important;
          }
          
          .tp-process-item {
            margin-bottom: 30px;
          }
          
          .tp-process-item-icon {
            border-left: none !important;
          }
          
          .tp-process-item-icon span img {
            width: 50px !important;
            height: 50px !important;
          }
          
          .tp-process-counter {
            position: relative !important;
            top: auto !important;
            right: auto !important;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          
          .tp-process-trusted {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            margin-top: 20px;
          }
        }
        
        @media (max-width: 767px) {
          .tp-process-arae {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }
          
          .tp-section-title {
            font-size: 28px !important;
            line-height: 1.4 !important;
            margin-bottom: 20px;
            letter-spacing: -0.3px;
          }
          
          .tp-process-item-content h4 {
            font-size: 20px !important;
            line-height: 1.4 !important;
            margin-bottom: 12px;
            letter-spacing: 0.1px;
          }
          
          .tp-process-item-content p {
            font-size: 16px !important;
            line-height: 1.7 !important;
            letter-spacing: 0.1px;
          }
          
          .tp-process-thumb-wrapper .main img {
            max-width: 100% !important;
            width: 100% !important;
            height: auto !important;
            object-fit: cover;
          }
          
          .tp-process-thumb img {
            max-width: 100% !important;
            width: 100% !important;
            height: auto !important;
            object-fit: cover;
          }
          
          .tp-process-thumb-wrapper .shape-1 {
            display: none;
          }
          
          .tp-process-counter-title {
            font-size: 24px !important;
          }
          
          .tp-process-thumb .main img {
            max-width: 350px !important;
            width: 350px !important;
            height: auto !important;
            object-fit: cover;
          }
          
          .tp-process-thumb .shape-1 img {
            max-width: 200px !important;
            width: 200px !important;
            height: auto !important;
          }
          
          .tp-process-counter p {
            font-size: 16px !important;
            line-height: 1.5 !important;
            letter-spacing: 0.1px;
          }
          
          .tp-process-trusted p {
            font-size: 16px !important;
            line-height: 1.5 !important;
            letter-spacing: 0.1px;
          }
          
          .tp-process-trusted span {
            font-size: 20px !important;
            letter-spacing: 0.2px;
          }
        }
        
        @media (max-width: 575px) {
          .tp-process-arae {
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
          
          .tp-process-item {
            flex-direction: column !important;
            text-align: center;
            margin-bottom: 25px;
          }
          
          .tp-process-item-icon {
            margin-bottom: 15px;
            margin-right: 0 !important;
          }
          
          .tp-process-item-content h4 {
            font-size: 16px !important;
          }
          
          .tp-process-item-content p {
            font-size: 13px !important;
            padding: 0 10px;
          }
          
          .tp-process-counter {
            display: none !important;
          }
          
          .tp-process-trusted {
            display: none !important;
          }
          
          .tp-process-thumb .main img {
            max-width: 280px !important;
            width: 280px !important;
            height: auto !important;
          }
          
          .tp-process-thumb .shape-1 img {
            max-width: 150px !important;
            width: 150px !important;
            height: auto !important;
          }
        }
      `}</style>
      <section
        className="tp-process-arae pt-120 pb-120"
        style={{ backgroundColor: "#F6F6F9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="tp-process-wrapper">
                <div className="tp-process-title mb-40">
                  <span
                    className="tp-section-title-pre"
                    style={{
                      background:
                        "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {subtitle}
                  </span>
                  <h3 className="tp-section-title">{title}</h3>
                </div>

                {features.map((item, index) => (
                  <div
                    className="tp-process-item d-flex align-items-center"
                    key={index}
                  >
                    <div className="tp-process-item-icon">
                      <span>
                        {/* <Image src={item.img} alt="image-title-here" /> */}
                        <Image
                          src={item.img}
                          alt="icon"
                          width={64}
                          height={64}
                        />
                      </span>
                    </div>
                    <div className="tp-process-item-content">
                      <h4 className="tp-process-item-title">{item.title}</h4>
                      <p>{item.sm_des}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="tp-process-thumb-wrapper p-relative wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                <div className="tp-process-thumb p-relative">
                  <div className="main">
                    <Image src={process_img_1} alt="image-title-here" />
                  </div>
                  <Image
                    className="shape-1"
                    src={process_img_2}
                    alt="image-title-here"
                  />
                </div>
                <div className="tp-process-counter d-flex align-items-center">
                  <div className="tp-process-counter-icon">
                    <span>
                      <Image src={'/assets/img/process/computer.png'} alt="icon" width={40} height={40} />
                    </span>
                  </div>
                  <div className="tp-process-content">
                    <h4 className="tp-process-counter-title d-flex">
                      <Count number={10} /> k+
                    </h4>
                    <p>Clients Served</p>
                  </div>
                </div>
                <div className="tp-process-trusted text-center">
                  <p>
                    Trusted By <br /> <span>2345+</span> Investors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProcessAreaHomeOne;
