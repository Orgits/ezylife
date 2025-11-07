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
