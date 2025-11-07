"use client";
import project_data from "@/data/ProjectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = project_data.filter((item) => item.home === 1);

const ProjectAreaHomeOne = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 991px) {
          .tp-project-area {
            padding-bottom: 60px !important;
          }
          
          .tp-project-title-wrapper {
            margin-bottom: 30px !important;
          }
          
          .nav-pills .nav-link {
            padding: 8px 15px !important;
            font-size: 14px !important;
            margin: 0 5px 10px 0;
          }
          
          .tp-project-thumb {
            margin-bottom: 20px !important;
          }
          
          .tp-project-thumb-info h4 {
            font-size: 16px !important;
          }
          
          .tp-project-thumb-info p {
            font-size: 13px !important;
          }
        }
        
        @media (max-width: 767px) {
          .tp-project-area {
            padding-bottom: 50px !important;
          }
          
          .tp-section-title {
            font-size: 24px !important;
            line-height: 1.3 !important;
            margin-bottom: 20px;
          }
          
          .nav-pills {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
          
          .nav-pills .nav-link {
            padding: 6px 12px !important;
            font-size: 13px !important;
            margin: 0 3px 8px 0;
            min-width: auto;
          }
          
          .tp-project-thumb img {
            width: 100% !important;
            height: 200px !important;
            object-fit: cover;
          }
          
          .tp-project-thumb.small img {
            height: 150px !important;
          }
          
          .tp-project-thumb-info {
            padding: 15px !important;
          }
          
          .tp-project-thumb-info h4 {
            font-size: 15px !important;
            line-height: 1.3;
          }
          
          .tp-project-thumb-info p {
            font-size: 12px !important;
            margin-bottom: 5px;
          }
        }
        
        @media (max-width: 575px) {
          .tp-project-area {
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
          
          .nav-pills .nav-link {
            padding: 5px 10px !important;
            font-size: 12px !important;
            margin: 0 2px 6px 0;
          }
          
          .tp-project-thumb img {
            height: 180px !important;
          }
          
          .tp-project-thumb.small img {
            height: 120px !important;
          }
          
          .tp-project-thumb-info {
            padding: 12px !important;
          }
          
          .tp-project-thumb-info h4 {
            font-size: 14px !important;
          }
          
          .tp-project-thumb-info p {
            font-size: 11px !important;
          }
          
          .row .col-lg-6.col-md-6 {
            margin-bottom: 20px;
          }
          
          .row .col-lg-6.col-md-6.col-sm-6 {
            margin-bottom: 15px;
          }
        }
      `}</style>
      <section id="project-one-page" className="tp-project-area pb-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-project-title-wrapper text-center mb-30 mt-4">
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
                  our latest project
                </span>
                <h3 className="tp-section-title">
                  Together we can achieve <br /> anything
                </h3>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="tp-project-tab-wrapper">
                <ul
                  className="nav nav-pills mb-5 justify-content-center wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                  id="pills-tab"
                  role="tablist"
                >
                  {projects.map((item, index) => (
                    <li className="nav-item" role="presentation" key={index}>
                      <button
                        className={`nav-link ${index === 0 ? "active" : ""}`}
                        id={`pills-${item.tab_id}-tab`}
                        data-bs-toggle="pill"
                        data-bs-target={`#pills-${item.tab_id}`}
                        type="button"
                        role="tab"
                        aria-controls={`pills-${item.tab_id}`}
                        aria-selected={index === 0 ? "true" : "false"}
                      >
                        {item.tab_name}
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="tab-content" id="pills-tabContent">
                  {projects.map((item, index) => (
                    <div
                      key={index}
                      className={`tab-pane fade ${
                        index === 0 ? "show active" : ""
                      }`}
                      id={`pills-${item.tab_id}`}
                      role="tabpanel"
                      aria-labelledby={`pills-${item.tab_id}-tab`}
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="tp-project-thumb mb-25">
                            <Image
                              src={item.tab_items[0].img}
                              style={{ width: "100%", height: "auto" }}
                              alt="image-title-here"
                            />
                            <div className="tp-project-thumb-info">
                              <p>{item.tab_items[0].title}</p>
                              <h4 className="tp-project-thumb-title">
                                <Link href="/project-details">
                                  {item.tab_items[0].name}
                                </Link>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="tp-project-thumb mb-25">
                            <Image
                              src={item.tab_items[1].img}
                              style={{ width: "100%", height: "auto" }}
                              alt="image-title-here"
                            />
                            <div className="tp-project-thumb-info">
                              <p>{item.tab_items[1].title}</p>
                              <h4 className="tp-project-thumb-title">
                                <Link href="/project-details">
                                  {item.tab_items[1].name}
                                </Link>
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="tp-project-thumb small mb-25">
                                <Image
                                  src={item.tab_items[2].img}
                                  style={{ width: "100%", height: "auto" }}
                                  alt="image-title-here"
                                />
                                <div className="tp-project-thumb-info">
                                  <p>{item.tab_items[2].title}</p>
                                  <h4 className="tp-project-thumb-title">
                                    <Link href="/project-details">
                                      {item.tab_items[2].name}
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <div className="tp-project-thumb small mb-25">
                                <Image
                                  src={item.tab_items[3].img}
                                  style={{ width: "100%", height: "auto" }}
                                  alt="image-title-here"
                                />
                                <div className="tp-project-thumb-info">
                                  <p>{item.tab_items[3].title}</p>
                                  <h4 className="tp-project-thumb-title">
                                    <Link href="/project-details">
                                      {item.tab_items[3].name}
                                    </Link>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
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

export default ProjectAreaHomeOne;
