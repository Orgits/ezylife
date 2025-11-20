"use client";
import blog_data from "@/data/BlogData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type DataType = {
  subtitle: string;
  title: React.JSX.Element;
};

const blog_content: DataType = {
  subtitle: "Financial Insights",
  title: (
    <>
      Expert guidance for your <br /> financial journey
    </>
  ),
};
const { subtitle, title } = blog_content;

const blogs = blog_data.filter((item) => item.home === 1);

const BlogAreaHomeOne = ({ style }: any) => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 991px) {
          .tp-blog-area {
            padding-top: 80px !important;
            padding-bottom: 60px !important;
          }
          
          .tp-blog-title-wrapper {
            margin-bottom: 30px !important;
          }
          
          .tp-blog-item-wrapper {
            margin-bottom: 25px !important;
          }
          
          .tp-blog-item-thumb img {
            width: 100% !important;
            height: 200px !important;
            object-fit: cover;
          }
        }
        
        @media (max-width: 767px) {
          .tp-blog-area {
            padding-top: 60px !important;
            padding-bottom: 50px !important;
          }
          
          .tp-section-title {
            font-size: 24px !important;
            line-height: 1.3 !important;
            margin-bottom: 20px;
          }
          
          .tp-blog-item-thumb img {
            height: 180px !important;
          }
          
          .tp-blog-item-date h4 {
            font-size: 18px !important;
          }
          
          .tp-blog-item-date p {
            font-size: 12px !important;
          }
          
          .tp-blog-item-content {
            padding: 15px !important;
          }
          
          .tp-blog-item-info span {
            font-size: 12px !important;
            margin-right: 15px !important;
          }
          
          .tp-blog-item-info span a {
            font-size: 12px !important;
          }
          
          .tp-blog-item-title {
            font-size: 16px !important;
            line-height: 1.4 !important;
            margin: 10px 0 !important;
          }
          
          .tp-blog-item-btn a {
            font-size: 13px !important;
          }
        }
        
        @media (max-width: 575px) {
          .tp-blog-area {
            padding-top: 50px !important;
            padding-bottom: 40px !important;
          }
          
          .tp-section-title {
            font-size: 20px !important;
            line-height: 1.4 !important;
          }
          
          .tp-section-title-pre {
            font-size: 12px !important;
            margin-bottom: 10px;
          }
          
          .tp-blog-title-wrapper {
            margin-bottom: 25px !important;
          }
          
          .tp-blog-item-wrapper {
            margin-bottom: 20px !important;
          }
          
          .tp-blog-item-thumb img {
            height: 160px !important;
          }
          
          .tp-blog-item-date {
            padding: 8px 12px !important;
          }
          
          .tp-blog-item-date h4 {
            font-size: 16px !important;
          }
          
          .tp-blog-item-date p {
            font-size: 11px !important;
          }
          
          .tp-blog-item-content {
            padding: 12px !important;
          }
          
          .tp-blog-item-info {
            margin-bottom: 8px !important;
            flex-wrap: wrap;
          }
          
          .tp-blog-item-info span {
            font-size: 11px !important;
            margin-right: 10px !important;
            margin-bottom: 5px;
          }
          
          .tp-blog-item-title {
            font-size: 15px !important;
            margin: 8px 0 !important;
          }
          
          .tp-blog-item-btn a {
            font-size: 12px !important;
          }
          
          .col-xl-4.col-lg-6.col-md-6 {
            margin-bottom: 20px;
          }
        }
      `}</style>
      <section
        id="blog-one-page"
        className={`tp-blog-area pt-120 ${style ? "" : "pb-90"}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-blog-title-wrapper text-center mb-40">
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
            </div>
          </div>
          <div className="row">
            {blogs.map((item, index) => (
              <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                <div
                  className="tp-blog-item-wrapper p-relative mb-30 wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={item.delay}
                >
                  <div className="tp-blog-item-thumb">
                    <Link href="/blog-details">
                      <Image src={item.img} alt="image-title-here" />
                    </Link>
                  </div>
                  <div className="tp-blog-item-date">
                    <h4
                      style={{
                        background:
                          "linear-gradient(90deg,  #4CAF50 0%, #89e550ff 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.date}
                    </h4>
                    <p>{item.month}</p>
                  </div>
                  <div className="tp-blog-item-content">
                    <div className="tp-blog-item-info d-flex">
                      <span>
                        <i
                          style={{
                            background:
                              "linear-gradient(90deg,  #4CAF50 0%, #89e550ff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                          className="fa-regular fa-user"
                        ></i>{" "}
                        <a href="#">By admin</a>
                      </span>
                      <span>
                        <i
                          style={{
                            background:
                              "linear-gradient(90deg,  #4CAF50 0%, #89e550ff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                          className="fa-regular fa-comments"
                        ></i>
                        <a href="#">Comments ({item.comments})</a>
                      </span>
                    </div>
                    <h4 className="tp-blog-item-title">
                      <Link href="/blog-details">{item.title}</Link>
                    </h4>
                    <div className="tp-blog-item-btn text-end">
                      <Link
                        href="/blog-details"
                        style={{
                          background:
                            "linear-gradient(90deg,  #4CAF50 0%, #89e550ff 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        <span>
                          <i className="fa-regular fa-arrow-right"></i>
                        </span>{" "}
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogAreaHomeOne;
