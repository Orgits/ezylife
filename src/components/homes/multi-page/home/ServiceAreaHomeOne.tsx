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
  [];
  const service_data: DataType[] = [
    {
      id: 1,
      img: "/services/Trading.jpg",
      icon: <ServiceIconOne />,
      title: "Equity & Derivatives Trading",
      sm_des:
        "Ezylife provides seamless access to the Indian stock marketthrough NSE and BSE, offering both equity and derivatives tradingsolutions tailored for beginners andseasoned investors.",
    },
    {
      id: 2,
      img: "/services/mutual-funds.png",
      icon: <ServiceIconTwo />,
      title: "Mutual Funds & SIPs",
      sm_des:
        "Ezylife helps you invest in mutual fundsand systematic investment plans (SIPs)to build wealth steadily and efficiently.",
    },
    {
      id: 3,
      img: "/services/ipo.avif",
      icon: <ServiceIconThree />,
      title: "IPO Investments",
      sm_des:
        "Ezylife provides end-to-end support for Initial Public Offerings (IPOs), helping you participate in new and emerging opportunities in the stock market.",
    },
    // for swiper
    {
      id: 4,
      img: "/services/bonds.jpg",
      icon: <ServiceIconOne />,
      title: "Bonds & Debentures",
      sm_des:
        "Ezylife offers fixed-income investment optionsfor conservative investors seeking predictable returns and portfolio diversification.",
    },
    {
      id: 5,
      img: "/services/portfolio_advisory.png",
      icon: <ServiceIconTwo />,
      title: "Portfolio Advisory",
      sm_des:
        "Ezylife's Portfolio Advisory serviceshelp clients design, monitor, and optimize their investments to achieve financial goals with confidence.",
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
        "Our Retirement Planning serviceshelp you build a financially independent and comfortable life after retirement.",
    },
    {
      id: 8,
      img: "/services/portfolio_management_services.jpg",
      icon: <ServiceIconTwo />,
      title: "Portfolio Management Services (PMS)",
      sm_des:
        "Ezylife offers professional Portfolio Management Services (PMS)for investors seeking customized investment strategies and superior portfolio growth.",
    },
    {
      id: 9,
      img: "/services/insurance_services.jpg",
      icon: <ServiceIconThree />,
      title: "Insurance Services",
      sm_des:
        "Ezylife provides comprehensive insurance solutionsto protect you and your family against uncertainties.",
    },
    {
      id: 10,
      img: "/services/tax_planning.jpg",
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
        <style jsx>{`
          @media (max-width: 991px) {
            .tp-service-area {
              padding-top: 80px !important;
              padding-bottom: 60px !important;
            }
            
            .tp-service-title-wrapper {
              margin-bottom: 30px !important;
            }
            
            .tp-service-item-wrapper {
              margin-bottom: 25px !important;
              height: auto !important;
            }
            
            .tp-service-item-thumb {
              height: 200px !important;
              overflow: hidden !important;
            }
            
            .tp-service-item-thumb img {
              width: 100% !important;
              height: 200px !important;
              max-width: 100% !important;
              object-fit: cover !important;
            }
          }
          
          @media (max-width: 767px) {
            .tp-service-area {
              padding-top: 60px !important;
              padding-bottom: 50px !important;
            }
            
            .tp-service-item-wrapper {
              margin-bottom: 20px !important;
              padding: 15px !important;
              height: auto !important;
            }
            
            .tp-service-item-title {
              font-size: 18px !important;
              line-height: 1.4 !important;
              margin-bottom: 12px;
              letter-spacing: 0.1px;
            }
            
            .tp-service-item-content p {
              font-size: 15px !important;
              line-height: 1.7 !important;
              min-height: auto !important;
              max-height: none !important;
              letter-spacing: 0.1px;
            }
            
            .tp-service-item-thumb {
              height: 200px !important;
              overflow: hidden !important;
            }
            
            .tp-service-item-thumb img {
              width: 100% !important;
              height: 200px !important;
              max-width: 100% !important;
              object-fit: cover !important;
            }
            
            .tp-service-nav {
              text-align: center !important;
              margin-bottom: 20px;
            }
          }
          
          @media (max-width: 575px) {
            .tp-service-area {
              padding-top: 50px !important;
              padding-bottom: 40px !important;
            }
            
            .tp-service-item-wrapper {
              margin-bottom: 15px !important;
              padding: 12px !important;
            }
            
            .tp-service-item-title {
              font-size: 17px !important;
              line-height: 1.4 !important;
              margin-bottom: 10px;
              letter-spacing: 0.1px;
            }
            
            .tp-service-item-content p {
              font-size: 14px !important;
              line-height: 1.6 !important;
              margin-bottom: 12px !important;
              letter-spacing: 0.1px;
            }
            
            .tp-service-item-thumb {
              height: 200px !important;
              overflow: hidden !important;
            }
            
            .tp-service-item-thumb img {
              width: 100% !important;
              height: 200px !important;
              max-width: 100% !important;
              object-fit: cover !important;
            }
            
            .tp-service-nav button {
              width: 35px !important;
              height: 35px !important;
              font-size: 12px !important;
              margin: 0 5px;
            }
          }
        `}</style>
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
                        "linear-gradient(90deg,  #4CAF50 0%, #89e550ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Our services
                  </span>
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
                modules={[Navigation, Autoplay]}
                className="tp-service-active swiper-container wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
              >
                {service_data.map((item, index) => (
                  <SwiperSlide key={index} className="swiper-slide mb-30 mt-40">
                    <div
                      className="tp-service-item-wrapper p-relative d-flex flex-column"
                      style={{ height: "525px" }}
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
                            width={400}
                            height={250}
                            style={{
                              width: '100%',
                              height: '200px',
                              objectFit: 'cover'
                            }}
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
