"use client";
import React from "react";
import service_img_1 from "@/assets/img/service/img-1.jpg";
import service_img_2 from "@/assets/img/service/img-2.jpg";
import service_img_3 from "@/assets/img/service/img-3.jpg";
import ServiceIconOne from "@/svg/home-1/ServiceIconOne";
import ServiceIconTwo from "@/svg/home-1/ServiceIconTwo";
import ServiceIconThree from "@/svg/home-1/ServiceIconThree";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface DataType {
  id: number;
  img: StaticImageData;
  icon: React.JSX.Element;
  title: string;
  sm_des: string;
}
[];
const service_data: DataType[] = [
  {
    id: 1,
    img: service_img_1,
    icon: <ServiceIconOne />,
    title: "Equity & Derivatives Trading",
    sm_des:
      "Ezylife provides seamless access to the Indian stock marketthrough NSE and BSE, offering both equity and derivatives tradingsolutions tailored for beginners andseasoned investors.",
  },
  {
    id: 2,
    img: service_img_2,
    icon: <ServiceIconTwo />,
    title: "Mutual Funds & SIPs",
    sm_des:
      "Ezylife helps you invest in mutual fundsand systematic investment plans (SIPs)to build wealth steadily and efficiently.",
  },
  {
    id: 3,
    img: service_img_3,
    icon: <ServiceIconThree />,
    title: "IPO Investments",
    sm_des:
      "Ezylife provides end-to-end support for Initial Public Offerings (IPOs), helping you participate in new and emerging opportunities in the stock market.",
  },
  // for swiper
  {
    id: 4,
    img: service_img_1,
    icon: <ServiceIconOne />,
    title: "Bonds & Debentures",
    sm_des:
      "Ezylife offers fixed-income investment optionsfor conservative investors seeking predictable returns and portfolio diversification.",
  },
  {
    id: 5,
    img: service_img_2,
    icon: <ServiceIconTwo />,
    title: "Portfolio Advisory",
    sm_des:
      "Ezylife’s Portfolio Advisory serviceshelp clients design, monitor, and optimize their investments to achieve financial goals with confidence.",
  },
  {
    id: 6,
    img: service_img_3,
    icon: <ServiceIconThree />,
    title: "Financial Planning",
    sm_des:
      "At Ezylife, we help you make informed decisions to achieve your financial goals through comprehensive Financial Planning services, backed by expert advice from our Chartered Accountants (CAs).",
  },
  {
    id: 7,
    img: service_img_1,
    icon: <ServiceIconOne />,
    title: "Retirement Planning",
    sm_des:
      "Our Retirement Planning serviceshelp you build a financially independent and comfortable life after retirement.",
  },
  {
    id: 8,
    img: service_img_2,
    icon: <ServiceIconTwo />,
    title: "Portfolio Management Services (PMS)",
    sm_des:
      "Ezylife offers professional Portfolio Management Services (PMS)for investors seeking customized investment strategies and superior portfolio growth.",
  },
  {
    id: 9,
    img: service_img_3,
    icon: <ServiceIconThree />,
    title: "Insurance Services",
    sm_des:
      "Ezylife provides comprehensive insurance solutionsto protect you and your family against uncertainties.",
  },
  {
    id: 10,
    img: service_img_2,
    icon: <ServiceIconOne />,
    title: "Tax Planning",
    sm_des:
      "Ezylife helps you optimize your taxes legally and efficientlywith expert guidance from our Chartered Accountants (CAs). Our goal is to minimize your tax liability while ensuring compliance with all laws and regulations.",
  },
];

const setting = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
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
                <span className="tp-section-title-pre">Our services</span>
                <h3 className="tp-section-title">
                  Innovate to dominate <br /> with us
                </h3>
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
              modules={[Navigation]}
              className="tp-service-active swiper-container wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay=".3s"
            >
              {service_data.map((item, index) => (
                <SwiperSlide key={index} className="swiper-slide mb-30 mt-40">
                  <div className="tp-service-item-wrapper p-relative d-flex flex-column" style={{ height: '475px' }}>
                    <div className="tp-service-item-icon">
                      <span>{item.icon}</span>
                    </div>
                    <div className="tp-service-item-content flex-grow-1 d-flex flex-column">
                      <h4 className="tp-service-item-title">
                        <Link href={`/services-details/${item.id}`}>{item.title}</Link>
                      </h4>
                      <p className="mb-3" style={{ minHeight: '80px', maxHeight: '150px', overflow: 'hidden' }}>{item.sm_des}</p>
                    </div>
                    <div className="tp-service-item-thumb">
                      <Link href={`/services-details/${item.id}`}>
                        <Image src={item.img} alt="image-title-here" />
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
