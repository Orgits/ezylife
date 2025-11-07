"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import VideoPopup from "@/modals/VideoPopup";
import ReactPaginate from "react-paginate";
import article_data from "@/data/ArticleData";
import BlogSlidebar from "../blog-common";

const setting = {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    "1700": {
      slidesPerView: 1,
    },
    "1400": {
      slidesPerView: 1,
    },
    "1200": {
      slidesPerView: 1,
    },
    "767": {
      slidesPerView: 1,
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
    nextEl: ".tp-blog-next-1",
    prevEl: ".tp-blog-prev-1",
  },
};

const BlogPostboxArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  const articles = article_data;

  const itemsPerPage = 3;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = articles.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(articles.length / itemsPerPage);
  // click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % articles.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <style jsx>{`
        @media (max-width: 991px) {
          .tp-postbox-area {
            padding-top: 80px !important;
            padding-bottom: 60px !important;
          }
          
          .tp-postbox-item {
            margin-bottom: 40px !important;
          }
          
          .tp-postbox-thumb img {
            width: 100% !important;
            height: 250px !important;
            object-fit: cover;
          }
          
          .tp-postbox-content {
            padding: 20px !important;
          }
          
          .tp-postbox-pagination ul {
            justify-content: center !important;
            flex-wrap: wrap;
          }
          
          .tp-postbox-pagination li {
            margin: 4px !important;
          }
          
          .tp-postbox-pagination li a {
            padding: 10px 14px !important;
            font-size: 15px !important;
            min-width: 40px !important;
            height: 40px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
        
        @media (max-width: 767px) {
          .tp-postbox-area {
            padding-top: 60px !important;
            padding-bottom: 50px !important;
          }
          
          .tp-postbox-item {
            margin-bottom: 30px !important;
          }
          
          .tp-postbox-thumb img {
            height: 200px !important;
          }
          
          .tp-postbox-title {
            font-size: 20px !important;
            line-height: 1.3 !important;
            margin-bottom: 15px;
          }
          
          .tp-postbox-text p {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
          
          .tp-postbox-meta span {
            font-size: 13px !important;
            margin-right: 15px !important;
          }
          
          .tp-postbox-btn {
            font-size: 14px !important;
          }
          
          .tp-postbox-thumb-date {
            padding: 8px 12px !important;
          }
          
          .tp-postbox-thumb-date span {
            font-size: 16px !important;
          }
          
          .tp-postbox-thumb-date p {
            font-size: 11px !important;
          }
          
          .col-xxl-8.col-xl-8.col-lg-8 {
            margin-bottom: 30px;
          }
          
          .tp-postbox-pagination ul {
            justify-content: center !important;
            flex-wrap: wrap;
          }
          
          .tp-postbox-pagination li {
            margin: 3px !important;
          }
          
          .tp-postbox-pagination li a {
            padding: 8px 12px !important;
            font-size: 14px !important;
            min-width: 36px !important;
            height: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
        
        @media (max-width: 575px) {
          .tp-postbox-area {
            padding-top: 50px !important;
            padding-bottom: 40px !important;
          }
          
          .tp-postbox-item {
            margin-bottom: 25px !important;
          }
          
          .tp-postbox-thumb img {
            height: 180px !important;
          }
          
          .tp-postbox-content {
            padding: 15px !important;
          }
          
          .tp-postbox-title {
            font-size: 18px !important;
            margin-bottom: 12px;
          }
          
          .tp-postbox-text p {
            font-size: 13px !important;
            margin-bottom: 15px;
          }
          
          .tp-postbox-meta {
            margin-bottom: 15px !important;
            flex-wrap: wrap;
          }
          
          .tp-postbox-meta span {
            font-size: 12px !important;
            margin-right: 10px !important;
            margin-bottom: 5px;
          }
          
          .tp-postbox-btn {
            font-size: 13px !important;
          }
          
          .tp-postbox-thumb-date {
            padding: 6px 10px !important;
          }
          
          .tp-postbox-thumb-date span {
            font-size: 14px !important;
          }
          
          .tp-postbox-thumb-date p {
            font-size: 10px !important;
          }
          
          .tp-postbox-nav button {
            width: 30px !important;
            height: 30px !important;
            font-size: 12px !important;
          }
          
          .tp-postbox-pagination {
            margin-top: 20px;
          }
          
          .tp-postbox-pagination ul {
            justify-content: center !important;
            flex-wrap: wrap;
          }
          
          .tp-postbox-pagination li {
            margin: 2px !important;
          }
          
          .tp-postbox-pagination li a {
            padding: 6px 10px !important;
            font-size: 12px !important;
            min-width: 32px !important;
            height: 32px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
          
          .tp-postbox-pagination li.selected a {
            font-size: 12px !important;
          }
          
          .tp-postbox-pagination li.previous a,
          .tp-postbox-pagination li.next a {
            padding: 6px 8px !important;
            font-size: 10px !important;
          }
        }
      `}</style>
      <section className="tp-postbox-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="tp-postbox-wrapper">
                {currentItems.map((item, i) => (
                  <article key={i} className="tp-postbox-item mb-50">
                    {item.post_with_img && (
                      <div className="tp-postbox-thumb p-relative">
                        <Link href="/blog-details">
                          <Image
                            style={{ width: "100%", height: "100%" }}
                            src={item.img}
                            alt="image-title-here"
                          />
                        </Link>
                        <div className="tp-postbox-thumb-date text-center">
                          <span
                            style={{
                              background:
                                "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            {item.date}
                          </span>
                          <p>{item.month}</p>
                        </div>
                      </div>
                    )}
                    {item.post_with_video && (
                      <div className="tp-postbox-thumb p-relative">
                        <Link href="/blog-details">
                          <Image
                            style={{ width: "100%", height: "100%" }}
                            src={item.img}
                            alt="image-title-here"
                          />
                        </Link>
                        <div className="tp-postbox-thumb-btn">
                          <a
                            className="play-btn popup-video"
                            onClick={() => setIsVideoOpen(true)}
                            style={{ cursor: "pointer" }}
                          >
                            <i className="fa-solid fa-play"></i>
                          </a>
                        </div>
                        <div className="tp-postbox-thumb-date text-center">
                          <span
                            style={{
                              background:
                                "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            {item.date}
                          </span>
                          <p>{item.month}</p>
                        </div>
                      </div>
                    )}

                    {item.post_with_slider && (
                      <div className="tp-postbox-thumb p-relative">
                        <Swiper
                          {...setting}
                          modules={[Navigation, EffectFade]}
                          loop={true}
                          className="tp-blog-post-active swiper-container"
                        >
                          {item.slider_img.map((item: any, i: number) => (
                            <SwiperSlide key={i} className="swiper-slide">
                              <Link href="/blog-details">
                                <Image
                                  style={{ width: "100%", height: "100%" }}
                                  src={item}
                                  alt="image-title-here"
                                />
                              </Link>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                        <div className="tp-postbox-thumb-date text-center">
                          <span
                            style={{
                              background:
                                "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            {item.date}
                          </span>
                          <p>{item.month}</p>
                        </div>
                        <div className="tp-postbox-nav text-end">
                          <button type="button" className="tp-blog-prev-1">
                            <i className="fa-regular fa-arrow-left"></i>
                          </button>
                          <button type="button" className="tp-blog-next-1">
                            <i className="fa-regular fa-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="tp-postbox-content">
                      <div className="tp-postbox-meta">
                        <span>
                          <i
                            className="fa-regular fa-user"
                            style={{
                              background:
                                "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          ></i>{" "}
                          By Admin
                        </span>
                        <span>
                          <a href="#">Comments ({item.comments})</a>
                        </span>
                      </div>
                      <h3 className="tp-postbox-title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                      <div className="tp-postbox-text">
                        <p>{item.description}</p>
                      </div>
                      <div className="tp-postbox-read-more">
                        <Link
                          href="/blog-details"
                          className="tp-postbox-btn"
                          style={{
                            background:
                              "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          <i className="fa-solid fa-arrow-right"></i> Read More
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}

                <div className="tp-postbox-pagination">
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel={<i className="fa-light fa-arrow-right-long"></i>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={9}
                    pageCount={pageCount}
                    previousLabel={
                      <i className="fa-light fa-arrow-left-long"></i>
                    }
                    renderOnZeroPageCount={null}
                  />
                </div>
              </div>
            </div>

            <BlogSlidebar />
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"TCHq0O5rMcM"}
      />
      {/* video modal end */}
    </>
  );
};

export default BlogPostboxArea;
