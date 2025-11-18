"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import testimonial_quot from "@/assets/img/testimonial/quot.png";
import testimonial_shape from "@/assets/img/testimonial/bg-shape.png";

interface DataType {
  id: number;
  title: string;
  sm_des: string;
  name: string;
  designation: string;
}

const testimonial_data: DataType[] = [
  {
    id: 1,
    title: "They truly make life easy!",
    sm_des:
      "Ezylife helped me organize my finances and guided me in creating a diversified investment portfolio. Their Chartered Accountant-led team explained every step clearly and made investing simple and stress-free.",
    name: "Ajay Sarswat",
    designation: "IT Professional, Pune",
  },
  {
    id: 2,
    title: "Two years of consistent excellence",
    sm_des:
      "I've been investing through Ezylife for over two years now. Their transparency, regular updates, and tax-efficient advice have really helped me optimize my returns. Highly recommended for anyone serious about financial planning.",
    name: "Arun Kumar Mohata",
    designation: "Business Person, Delhi",
  },
  {
    id: 3,
    title: "Everything under one roof",
    sm_des:
      "From tax planning to insurance and mutual funds — everything is handled under one roof. The team's professionalism and detailed approach make them stand out.",
    name: "Gunjan Grover",
    designation: "Gurgaon",
  },
  {
    id: 4,
    title: "Partnership built on trust",
    sm_des:
      "What I love about Ezylife is the personal attention I get. Their team takes time to understand my goals and regularly reviews my portfolio to ensure I'm on track. It's truly a partnership built on trust.",
    name: "Nafisa Ahmad",
    designation: "Senior Executive, Guwahati",
  },
  {
    id: 5,
    title: "Confidence in retirement planning",
    sm_des:
      "The Ezylife team helped me with my retirement planning and SIP investments. Their process is smooth, transparent, and backed by solid expertise. I feel confident that my future is in safe hands.",
    name: "Upendra Kumar",
    designation: "Retired Government Officer, New Delhi",
  },
  {
    id: 6,
    title: "Data-driven results",
    sm_des:
      "Ezylife's team helped me restructure my entire portfolio and guided me in shifting from low-performing assets to well-researched mutual funds and equity investments. Their disciplined, data-driven approach has improved my returns significantly.",
    name: "Prabha Rai",
    designation: "Home Maker, New Delhi",
  },
  {
    id: 7,
    title: "Clear roadmap for wealth creation",
    sm_des:
      "What impressed me most about Ezylife is their unbiased advisory. The Chartered Accountants here really take time to understand your risk appetite and goals before suggesting investments. I now have a clear roadmap for my long-term wealth creation.",
    name: "Rashish Raturi",
    designation: "Pilot, Dehradun",
  },
  {
    id: 8,
    title: "From random to systematic",
    sm_des:
      "Before connecting with Ezylife, I used to invest randomly without a plan. Their team drafted a clear, goal-based strategy aligned with my retirement and tax objectives. Now, my investments are well-diversified and systematically reviewed.",
    name: "Dr. Nishant Kumar Jha",
    designation: "New Delhi",
  },
  {
    id: 9,
    title: "Expert hands managing my wealth",
    sm_des:
      "I've been using Ezylife's Portfolio Management Services (PMS) for the past year. Their research-backed decisions and proactive communication make me feel confident that my investments are in expert hands.",
    name: "Rahul Bhardwaj",
    designation: "Company Secretary, New Delhi",
  },
  {
    id: 10,
    title: "Tax savings and wealth growth",
    sm_des:
      "The combination of financial expertise and Chartered Accountants at Ezylife is rare. Their integrated investment and tax planning approach helped me save taxes and grow my wealth efficiently.",
    name: "Harsh Mohan",
    designation: "Entrepreneur, Dubai",
  },
  {
    id: 11,
    title: "Peace of mind in volatility",
    sm_des:
      "Ezylife designed a balanced investment portfolio for me, combining equity, debt, and SIPs to match my risk profile. Even in market volatility, their proactive guidance and review meetings gave me peace of mind.",
    name: "Radha Lohiya",
    designation: "Kolkata",
  },
  {
    id: 12,
    title: "One-stop financial partner",
    sm_des:
      "From mutual funds and IPOs to retirement planning, Ezylife has been my one-stop financial partner. Their advice is always practical, transparent, and aligned with my goals.",
    name: "Neeraj Bansal",
    designation: "Software Engineer, Faridabad",
  },
];

const setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoHeight: false,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".testimonial-button-next-1",
    prevEl: ".testimonial-button-prev-1",
  },
};

const TestimonialAreaHomeOne = () => {
  return (
    <>
      <section
        className="tp-testimonial-area p-relative pt-80 pb-50"
        style={{
          backgroundColor: "#F6F6F9",
          position: "relative",
        }}
      >
        <style jsx>{`
          .tp-testimonial-area::after {
            position: absolute;
            content: "";
            top: 0;
            right: 0;
            z-index: 0;
            width: 49%;
            height: 100%;
            background: #37A042;
            opacity: 0.9;
            clip-path: polygon(42% 1%, 100% -159%, 100% 100%, 0% 100%);
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            .tp-testimonial-area::after {
              width: 42%;
            }
          }

          @media only screen and (min-width: 576px) and (max-width: 767px),
            (max-width: 575px) {
            .tp-testimonial-area::after {
              display: none;
            }
          }

          @media (max-width: 991px) {
            .tp-testimonial-area {
              padding-top: 60px !important;
              padding-bottom: 40px !important;
            }

            .tp-testimonial-title {
              margin-bottom: 30px !important;
              text-align: center;
            }

            .tp-testimonial-item-content {
              padding: 20px !important;
            }
          }

          @media (max-width: 767px) {
            .tp-testimonial-area {
              padding-top: 50px !important;
              padding-bottom: 30px !important;
            }

            .tp-section-title {
              font-size: 24px !important;
              line-height: 1.3 !important;
              margin-bottom: 20px;
            }

            .tp-testimonial-item-content {
              padding: 15px !important;
            }

            .tp-testimonial-item-content h5 {
              font-size: 16px !important;
              margin-bottom: 10px !important;
            }

            .testimonial-description {
              font-size: 13px !important;
              line-height: 1.6 !important;
              margin-bottom: 15px !important;
            }

            .tp-testimonial-item-title {
              font-size: 14px !important;
            }

            .tp-testimonial-nav {
              margin-top: 20px;
              text-align: center !important;
            }

            .tp-testimonial-nav button {
              width: 35px !important;
              height: 35px !important;
              font-size: 12px !important;
              margin: 0 5px;
            }
          }

          @media (max-width: 575px) {
            .tp-testimonial-area {
              padding-top: 40px !important;
              padding-bottom: 25px !important;
            }

            .tp-section-title {
              font-size: 20px !important;
              line-height: 1.4 !important;
            }

            .tp-section-title-pre {
              font-size: 12px !important;
              margin-bottom: 10px;
            }

            .tp-testimonial-title {
              margin-bottom: 25px !important;
            }

            .tp-testimonial-item-content {
              padding: 12px !important;
            }

            .tp-testimonial-item-content h5 {
              font-size: 15px !important;
            }

            .testimonial-description {
              font-size: 12px !important;
              margin-bottom: 12px !important;
            }

            .tp-testimonial-item-title {
              font-size: 13px !important;
            }

            .tp-testimonial-nav button {
              width: 30px !important;
              height: 30px !important;
              font-size: 10px !important;
            }

            .swiper-container {
              padding-bottom: 20px !important;
            }
          }
        `}</style>
        <div
          className="tp-testimonial-bg"
        >
          <Image
            src={testimonial_shape || "/placeholder.svg"}
            alt="Testimonial background shape"
            priority={false}
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-testimonial-title">
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
                  Client Testimonials
                </span>
                <h3 className="tp-section-title">
                  Unleashing the power of <br /> your business
                </h3>
              </div>
            </div>
            <div className="col-12">
              <Swiper
                {...setting}
                loop={true}
                modules={[Navigation]}
                className="tp-testimonial-active swiper-container"
                style={{ paddingBottom: "30px" }}
              >
                {testimonial_data.map((item, index) => (
                  <SwiperSlide
                    key={item.id}
                    className="swiper-slide"
                    style={{ height: "auto", display: "flex" }}
                  >
                    <div className="tp-testimonial-item-wrapper d-flex flex-column w-100 h-100">
                      <div className="tp-testimonial-item-content p-relative d-flex flex-column justify-content-between flex-grow-1 p-3 p-md-4 p-lg-4">
                        <div className="flex-grow-1">
                          <h5 className="font-semibold text-gray-800 mb-2 mb-md-3 fs-6 fs-md-5">
                            {item.title}
                          </h5>
                          <p className="mb-2 mb-lg-4 testimonial-description">
                            {item.sm_des}
                          </p>
                        </div>
                        <div className="mt-auto pt-1 lg:pt-3">
                          <h4 className="tp-testimonial-item-title mb-1 fs-6">
                            {item.name}
                          </h4>
                          <span className="text-muted small">
                            {item.designation}
                          </span>
                        </div>
                        <div className="tp-testimonial-item-quot position-absolute">
                          <Image
                            src={testimonial_quot || "/placeholder.svg"}
                            alt="Quote icon"
                            width={40}
                            height={40}
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="tp-testimonial-nav text-end">
              <button type="button" className="testimonial-button-prev-1">
                <i className="fa-regular fa-arrow-left"></i>
              </button>
              <button type="button" className="testimonial-button-next-1">
                <i className="fa-regular fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialAreaHomeOne;
