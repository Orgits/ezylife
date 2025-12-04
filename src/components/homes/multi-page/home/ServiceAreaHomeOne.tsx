"use client";
import React from "react";
import ServiceIconOne from "@/svg/home-1/ServiceIconOne";
import ServiceIconTwo from "@/svg/home-1/ServiceIconTwo";
import ServiceIconThree from "@/svg/home-1/ServiceIconThree";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

interface DataType {
  id: number;
  img: string;
  icon: React.JSX.Element;
  title: string;
  sm_des: string;
}

const service_data: DataType[] = [
  {
    id: 1,
    img: "/services/equity_and_derivatives_trading.png",
    icon: <ServiceIconOne />,
    title: "Equity & Derivatives Trading",
    sm_des:
      "Ezylife provides seamless access to the Indian stock market through NSE and BSE, offering both equity and derivatives trading solutions tailored for beginners and seasoned investors.",
  },
  {
    id: 2,
    img: "/services/mutualfunds_and_sips.png",
    icon: <ServiceIconTwo />,
    title: "Mutual Funds & SIPs",
    sm_des:
      "Ezylife helps you invest in mutual funds and systematic investment plans (SIPs) to build wealth steadily and efficiently.",
  },
  {
    id: 3,
    img: "/services/ipo_investments.png",
    icon: <ServiceIconThree />,
    title: "IPO Investments",
    sm_des:
      "Ezylife provides end-to-end support for Initial Public Offerings (IPOs), helping you participate in new and emerging opportunities in the stock market.",
  },
  // for swiper
  {
    id: 4,
    img: "/services/bonds_and_debentures.png",
    icon: <ServiceIconOne />,
    title: "Bonds & Debentures",
    sm_des:
      "Ezylife offers fixed-income investment options for conservative investors seeking predictable returns and portfolio diversification.",
  },
  {
    id: 5,
    img: "/services/portfolio_advisory.png",
    icon: <ServiceIconTwo />,
    title: "Portfolio Advisory",
    sm_des:
      "Ezylife's Portfolio Advisory services help clients design, monitor, and optimize their investments to achieve financial goals with confidence.",
  },
  {
    id: 6,
    img: "/services/financial_planning.jpg",
    icon: <ServiceIconThree />,
    title: "Financial Planning",
    sm_des:
      "At Ezylife, we help you make informed decisions to achieve your financial goals through comprehensive Financial Planning services, backed by expert advice from our Chartered Accountants (CAs).",
  },
  {
    id: 7,
    img: "/services/retirement_planning.jpg",
    icon: <ServiceIconOne />,
    title: "Retirement Planning",
    sm_des:
      "Our Retirement Planning services help you build a financially independent and comfortable life after retirement.",
  },
  {
    id: 8,
    img: "/services/portfolio_management_services.jpg",
    icon: <ServiceIconTwo />,
    title: "Portfolio Management Services (PMS)",
    sm_des:
      "Ezylife offers professional Portfolio Management Services (PMS) for investors seeking customized investment strategies and superior portfolio growth.",
  },
  {
    id: 9,
    img: "/services/insurance_services.jpg",
    icon: <ServiceIconThree />,
    title: "Insurance Services",
    sm_des:
      "Ezylife provides comprehensive insurance solutions to protect you and your family against uncertainties.",
  },
  {
    id: 10,
    img: "/services/tax_planning.jpg",
    icon: <ServiceIconOne />,
    title: "Tax Planning",
    sm_des:
      "Ezylife helps you optimize your taxes legally and efficiently with expert guidance from our Chartered Accountants (CAs). Our goal is to minimize your tax liability while ensuring compliance with all laws and regulations.",
  },
];

const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "1700": {
      slidesPerView: 3,
    },
    "1400": {
      slidesPerView: 3,
    },
    "1200": {
      slidesPerView: 3,
    },
    "767": {
      slidesPerView: 2,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".service-button-next-1",
    prevEl: ".service-button-prev-1",
  },
};

const ServiceAreaHomeOne = () => {
  return (
    <>
      <section
        id="services-one-page"
        className="tp-service-area pt-120 pb-90"
        style={{ backgroundColor: "#F6F6F9" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <div className="tp-service-title-wrapper mb-40">
                <span
                  className="tp-section-title-pre"
                  style={{
                    background:
                      "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    marginBottom: "40px",
                  }}
                >
                  Our services
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-4">
              <div className="tp-service-nav text-end">
                <button type="button" className="service-button-prev-1">
                  <i className="fa-regular fa-arrow-left"></i>
                </button>
                <button type="button" className="service-button-next-1">
                  <i className="fa-regular fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <Swiper
              {...setting}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="tp-service-active swiper-container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              {service_data.map((item, index) => (
                <SwiperSlide key={index} className="swiper-slide mb-30 mt-40">
                  <div
                    className="tp-service-item-wrapper p-relative d-flex flex-column"
                    style={{ height: "550px" }}
                  >
                    <div className="tp-service-item-icon">
                      <span>{item.icon}</span>
                    </div>
                    <div className="tp-service-item-content flex-grow-1 d-flex flex-column">
                      <h4 className="tp-service-item-title">
                        <Link href={`/services-details/${item.id}`}>
                          {item.title}
                        </Link>
                      </h4>
                      <p
                        className="mb-3"
                        style={{
                          minHeight: "80px",
                          maxHeight: "150px",
                          overflow: "hidden",
                          textAlign: 'justify'
                        }}
                      >
                        {item.sm_des}
                      </p>
                    </div>
                    <div className="tp-service-item-thumb">
                      <Link href={`/services-details/${item.id}`}>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={300}
                          height={200}
                          style={{objectFit: 'cover'}}
                        />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceAreaHomeOne;
