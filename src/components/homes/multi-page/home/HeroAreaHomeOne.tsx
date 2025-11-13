"use client";
import React from "react";
import hero_bg_1 from "@/assets/img/hero/img-1.jpg";
import hero_bg_2 from "@/assets/img/hero/img-2.jpg";
import hero_bg_3 from "@/assets/img/hero/img-3.jpg";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import bg_img from "@/assets/img/hero/shape-bg.png";

import hero_shape_1 from "@/assets/img/hero/shape-2.png";
import hero_shape_2 from "@/assets/img/hero/shape-1.png";
import hero_shape_3 from "@/assets/img/hero/shape-1.png";
import Link from "next/link";

interface DataType {
  id: number;
  img: StaticImageData;
  subtitle: string;
  title: string;
  sm_des: string;
  phone: string;
}
[];

const hero_data: DataType[] = [
  {
    id: 1,
    img: hero_bg_1,
    subtitle: "Welcome to Ezylife",
    title: "Makes Your Life Easy Your trusted partner in financial growth",
    sm_des:
      "At Ezylife, we empower individuals, families, and businesses to achieve their financial goals with expert guidance, innovative solutions, and transparent practices. As a registered sub-broker with IIFL Capitaland AMFI distributor, we bring you the best of investments, trading, and advisory services under one roof.",
    phone: "+91 9899829830",
  },
  {
    id: 2,
    img: hero_bg_2,
    subtitle: "Welcome to Ezylife",
    title: "Where your financial dreams become reality",
    sm_des:
      "And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.",
    phone: "+91 9899829830",
  },
  {
    id: 3,
    img: hero_bg_3,
    subtitle: "Welcome to Ezylife",
    title: "Our mission is your financial success",
    sm_des:
      "And In Order To Make A Business, Brand Advertising And Marketing Plays An Important Role. Similarly, In Making Cultivation Business A Brand, Good Slogans Are Necessary.",
    phone: "+91 9899829830",
  },
];

const setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true, // Enable crossfade for smoother transitions
  },
  // Navigation arrows
  navigation: {
    nextEl: ".hero-button-next-1",
    prevEl: ".hero-button-prev-1",
  },
  pagination: {
    el: ".tp-hero-pagination",
    clickable: true,
  },
  speed: 800, // Control transition speed
  allowTouchMove: true,
  watchSlidesProgress: true,
};
const HeroAreaHomeOne = () => {
  return (
    <>
      <style jsx>{`
        .tp-promises-title {
          color: #fff;
          font-size: 20px;
          font-weight: 600;
        }

        .tp-promise-circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #388E3C;
          flex-shrink: 0;
        }

        .tp-promise-item p {
          color: #fff;
          font-size: 14px;
        }

        .tp-promises-list {
          flex-wrap: wrap;
        }

        .animate-title {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-item-1 {
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.3s;
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-item-2 {
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.6s;
          opacity: 0;
          transform: translateY(20px);
        }

        .animate-item-3 {
          animation: fadeInUp 0.8s ease forwards;
          animation-delay: 0.9s;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 991px) {
          .tp-promise-item {
            width: 100%;
            margin-right: 0 !important;
            margin-bottom: 15px;
          }
          
          .tp-promises-list {
            flex-direction: column;
          }
          
          .tp-hero-content {
            text-align: center;
          }
          
          .tp-hero-button-wrapper {
            justify-content: center;
            flex-direction: column;
            gap: 20px;
          }
          
          .tp-hero-btn {
            margin-right: 0 !important;
          }
          
          .tp-hero-call {
            justify-content: center;
          }
        }
        
        @media (max-width: 767px) {
          .swiper-slide {
            padding-top: 100px !important;
            padding-bottom: 80px !important;
          }
          
          .tp-hero-title {
            font-size: 32px !important;
            line-height: 1.3 !important;
            margin-bottom: 20px;
            letter-spacing: -0.5px;
          }
          
          .tp-hero-subtitle {
            font-size: 16px !important;
            margin-bottom: 15px;
            letter-spacing: 0.5px;
          }
          
          .tp-hero-content p {
            font-size: 16px !important;
            line-height: 1.6 !important;
            margin-bottom: 25px;
            letter-spacing: 0.3px;
          }
          
          .tp-promises-title {
            font-size: 20px !important;
            margin-bottom: 12px !important;
            letter-spacing: 0.3px;
          }
          
          .tp-promise-item p {
            font-size: 15px !important;
            line-height: 1.5 !important;
            letter-spacing: 0.2px;
          }
          
          .tp-hero-thumb {
            display: none !important;
          }
          
          .tp-hero-thumb-shape .shape-1,
          .tp-hero-thumb-shape .shape-2,
          .tp-hero-thumb-shape .shape-3 {
            display: none;
          }
        }
        
        @media (max-width: 575px) {
          .swiper-slide {
            padding-top: 80px !important;
            padding-bottom: 60px !important;
          }
          
          .tp-hero-title {
            font-size: 28px !important;
            line-height: 1.4 !important;
            letter-spacing: -0.3px;
          }
          
          .tp-hero-content p {
            font-size: 15px !important;
            line-height: 1.6 !important;
            padding: 0 10px;
            letter-spacing: 0.2px;
          }
          
          .tp-promises-title {
            font-size: 18px !important;
            letter-spacing: 0.2px;
          }
          
          .tp-promise-item p {
            font-size: 14px !important;
            line-height: 1.4 !important;
            letter-spacing: 0.1px;
          }
          
          .tp-hero-thumb img {
            max-width: 240px !important;
            width: 240px !important;
            height: auto !important;
          }
          
          .tp-hero-call-inner p {
            font-size: 14px !important;
            line-height: 1.4 !important;
          }
          
          .tp-hero-call-inner span a {
            font-size: 16px !important;
            letter-spacing: 0.2px;
          }
        }
      `}</style>
      <section className="tp-hero-area p-relative">
        <div className="tp-hero-wrapper-slider">
          <Swiper
            {...setting}
            modules={[Navigation, EffectFade]}
            effect="fade"
            className="tp-hero-active swiper-container"
            style={{
              overflow: "hidden",
              position: "relative",
              width: "100%",
              height: "auto",
            }}
            onSlideChangeTransitionStart={() => {
              // Reset animations by removing and re-adding animation classes
              const titles = document.querySelectorAll(".tp-promises-title");
              const items = document.querySelectorAll(".tp-promise-item");

              titles.forEach((title) => {
                title.classList.remove("animate-title");
                setTimeout(() => title.classList.add("animate-title"), 50);
              });

              items.forEach((item, index) => {
                const animClass = `animate-item-${index + 1}`;
                item.classList.remove(animClass);
                setTimeout(() => item.classList.add(animClass), 50);
              });
            }}
          >
            {hero_data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="swiper-slide pt-160 pb-115"
                style={{
                  background: "linear-gradient(rgba(0,0,0,0.5) 90%, #4ad353ff ), url(/assets/img/hero/ai.jpg) no-repeat center center/cover",
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  overflow: "hidden",
                }}
              >
                <div className="tp-hero-bg relative w-full h-[100vh] overflow-hidden">
{/* Background video
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover"
>
  <source src="/assets/img/hero/hero-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
</div>

                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="tp-hero-content p-relative">
                        <div className="tp-hero-title-wrapper">
                          <span className="tp-hero-subtitle">
                            {item.subtitle}
                          </span>
                          <h2 className="tp-hero-title">{item.title}</h2>
                          <p>{item.sm_des}</p>
                        </div>

                        {/* Our Promises Section */}
                        <div className="tp-hero-promises mb-30">
                          <h4 className="tp-promises-title animate-title mb-15">
                            Our Promises
                          </h4>
                          <div className="tp-promises-list d-flex flex-wrap">
                            <div className="tp-promise-item animate-item-1 d-flex align-items-center mr-30 mb-10">
                              <div className="tp-promise-circle mr-10"></div>
                              <p className="mb-0">
                                Trusted by clients across India
                              </p>
                            </div>
                            <div className="tp-promise-item animate-item-2 d-flex align-items-center mr-30 mb-10">
                              <div className="tp-promise-circle mr-10"></div>
                              <p className="mb-0">
                                Backed by IIFL's robust technology & research
                              </p>
                            </div>
                            <div className="tp-promise-item animate-item-3 d-flex align-items-center mb-10">
                              <div className="tp-promise-circle mr-10"></div>
                              <p className="mb-0">
                                Tailored financial solutions for every stage of
                                life
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="tp-hero-button-wrapper d-flex flex-wrap align-items-center">
                          <div className="tp-hero-btn mr-30">
                            <Link className="tp-btn" href="/contact">
                              Get Started
                              <span>
                                <i className="fa-regular fa-plus"></i>
                              </span>
                            </Link>
                          </div>
                          <div className="tp-hero-call d-flex align-items-center">
                            <span>
                              <svg
                                width="37"
                                height="36"
                                viewBox="0 0 37 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M29.6887 13.0168H25.1079C25.1079 13.0168 27.5332 8.62052 27.9335 8.12946C28.3382 7.63298 28.7214 7.94264 28.758 8.38069C28.7945 8.81866 28.7397 15.1698 28.7397 15.1698M22.9387 15.2699C22.9387 15.2699 19.4019 15.3144 19.2343 15.2585C19.0667 15.2027 19.503 14.9077 21.8218 11.5945C22.2549 10.9757 22.4932 10.4537 22.5947 10.0163L22.6306 9.73512C22.6306 8.70778 21.7978 7.875 20.7705 7.875C19.8665 7.875 19.1132 8.51977 18.9453 9.37455"
                                  stroke="url(#paint0_linear_3043_11)"
                                  strokeWidth="2.10938"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M32.7861 26.6714L29.7163 23.6016C28.7645 22.6497 27.2212 22.6497 26.2694 23.6016L23.6842 26.1867C21.5426 28.3284 18.0577 27.4539 13.7745 23.1708C9.49123 18.8875 8.61683 15.4026 10.7585 13.2611L13.3436 10.6759C14.2954 9.72406 14.2954 8.18084 13.3436 7.22902L10.2737 4.15918C9.32192 3.20736 7.7787 3.20736 6.82688 4.15918L4.24177 6.74429C-0.279393 11.2655 2.32723 20.3406 9.46592 27.4793C16.6046 34.618 25.6798 37.2246 30.201 32.7035L32.7862 30.1183C33.7379 29.1665 33.7379 27.6233 32.7861 26.6714Z"
                                  stroke="url(#paint1_linear_3043_11)"
                                  strokeWidth="2.10938"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M34.2298 21.7512C35.2892 19.7749 35.8906 17.5164 35.8906 15.1172C35.8906 7.35068 29.5946 1.05469 21.8281 1.05469C19.4289 1.05469 17.1704 1.65614 15.1941 2.71554M32.7861 26.6715L29.7163 23.6017C28.7645 22.6498 27.2212 22.6498 26.2694 23.6017L23.6842 26.1868C21.5426 28.3285 18.0577 27.454 13.7745 23.1709C9.49123 18.8876 8.61683 15.4027 10.7585 13.2611L13.3436 10.676C14.2954 9.72415 14.2954 8.18093 13.3436 7.22911L10.2737 4.15927C9.32192 3.20745 7.7787 3.20745 6.82688 4.15927L4.24177 6.74437C-0.279393 11.2655 2.32723 20.3407 9.46592 27.4794C16.6046 34.6181 25.6798 37.2247 30.201 32.7035L32.7862 30.1184C33.7379 29.1665 33.7379 27.6234 32.7861 26.6715Z"
                                  stroke="url(#paint2_linear_3043_11)"
                                  strokeWidth="2.10938"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <defs>
                                  <linearGradient
                                    id="paint0_linear_3043_11"
                                    x1="18.9453"
                                    y1="11.5808"
                                    x2="29.6887"
                                    y2="11.5808"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#2E7D32" />
                                    <stop offset="1" stopColor="#388E3C" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint1_linear_3043_11"
                                    x1="2"
                                    y1="19.1953"
                                    x2="33.5"
                                    y2="19.1953"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#2E7D32" />
                                    <stop offset="1" stopColor="#388E3C" />
                                  </linearGradient>
                                  <linearGradient
                                    id="paint2_linear_3043_11"
                                    x1="2"
                                    y1="18"
                                    x2="35.8906"
                                    y2="18"
                                    gradientUnits="userSpaceOnUse"
                                  >
                                    <stop stopColor="#2E7D32" />
                                    <stop offset="1" stopColor="#388E3C" />
                                  </linearGradient>
                                </defs>
                              </svg>
                            </span>
                            <div className="tp-hero-call-inner">
                              <p>Need help?</p>
                              <span>
                                <a href="tel:5550111">{item.phone}</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-lg-5">
                      <div className="tp-hero-thumb p-relative">
                        <div className="tp-hero-thumb-shape">
                          <Image
                            className="shape-1"
                            src={hero_shape_1}
                            alt="image-title-here"
                          />
                          <Image
                            className="shape-2"
                            src={hero_shape_2}
                            alt="image-title-here"
                          />
                          <Image
                            className="shape-3"
                            src={hero_shape_3}
                            alt="image-title-here"
                          />
                        </div>
                        <Image src={item.img} alt="image-title-here" />
                      </div>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="tp-hero-nav">
            <button type="button" className="hero-button-prev-1">
              <i className="fa-regular fa-arrow-left"></i>
            </button>
            <button type="button" className="hero-button-next-1">
              <i className="fa-regular fa-arrow-right"></i>
            </button>
          </div>
          <div className="tp-hero-pagination"></div>
        </div>
      </section>
    </>
  );
};

export default HeroAreaHomeOne;
