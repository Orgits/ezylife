import React from "react";
import Image from "next/image";
import Link from "next/link";

import footer_shape_1 from "@/assets/img/footer/bg-shape.png";
import SocialLinks, { CopyRight } from "@/components/common/SocialLinks";

interface DataType {
  sm_info: string;
  link_title: string;
  link_list: {
    title: string;
    link: string;
  }[];
  post_title: string;
  post_list: {
    title: string;
    publish: string;
    link: string;
  }[];
  footer_links: string[];
}

const footer_content: DataType = {
  sm_info:
    "Payment processing is a critical component of any business that sells goods or se Payment processing is a critical component of any.",
  link_title: "Quick links",
  link_list: [
    { title: "About us", link: "#" },
    { title: "Categories", link: "#" },
    { title: "Services", link: "#" },
    { title: "Blog Grid", link: "#" },
    { title: "Contact Us", link: "#" },
  ],
  post_title: "Popular Post",
  post_list: [
    {
      title: "Ished fact that a reader",
      publish: "October 19, 2023",
      link: "#",
    },
    {
      title: "Will distrol acted desig",
      publish: "October 20, 2023",
      link: "#",
    },
    {
      title: "Transforming Business For You",
      publish: "October 22, 2023",
      link: "#",
    },
  ],
  footer_links: [
    "About us",
    "Categories",
    "Services",
    "Blog Grid",
    "Contact Us",
  ],
};
const { sm_info, link_title, link_list, post_title, post_list, footer_links } =
  footer_content;

const FooterOne = () => {
  return (
    <>
      <footer
        className="tp-footer-area pt-80  z-index-1"
        style={{ backgroundColor: "#5CB85C" }}
      >
        <div className="tp-footer-bg-shape">
          <Image src={footer_shape_1} alt="image-title-here" />
        </div>
        <div className="tp-footer-main-area tp-footer-border">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-1 mb-50">
                  <div className="tp-footer-logo mb-20">
                    <Link href="/">
                      {" "}
                      <Image
                        width={180}
                        height={60}
                        src="/logo.png"
                        alt="image-title-here"
                        style={{ objectFit: "contain" }}
                      />
                    </Link>
                  </div>
                  <div className="tp-footer-widget-content">
                    <p>{sm_info}</p>
                    <div className="tp-footer-widget-social">
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-2 mb-50">
                  <h3 className="tp-footer-widget-title">{link_title}</h3>
                  <div className="tp-footer-widget-content">
                    <ul>
                      {link_list.map((item, index) => (
                        <li key={index}>
                          <Link href={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-3 mb-50">
                  <h3 className="tp-footer-widget-title">{post_title}</h3>
                  <div className="tp-footer-widget-content">
                    {post_list.map((item, index) => (
                      <div key={index} className="tp-footer-widget-item">
                        <h4 className="tp-footer-widget-item-title">
                          <Link href="/blog-details">{item.title}</Link>
                        </h4>
                        <span>
                          <i className="fa-regular fa-calendar-days"></i>
                          {item.publish}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6">
                <div className="tp-footer-widget tp-footer-col-4 mb-50">
                  <h3 className="tp-footer-widget-title" style={{marginBottom: '0'}}>Contact us</h3>
                  <div className="tp-footer-widget-content">
                    <div
                      className="tp-footer-widget-contact"
                      style={{ backgroundColor: "#5CB85C", border: "none" }}
                    >
                      <div className="tp-footer-widget-contact-inner">
                        <a
                          href="https://maps.app.goo.gl/S8XKGo4GgUjRrX4S9"
                          target="_blank"
                        >
                          <i className="fa-sharp fa-solid fa-location-dot"></i>{" "}
                          Office No. 74D, 7th Floor, Himalaya House,KG Marg, New
                          Delhi –110001
                        </a>
                      </div>
                      <div className="tp-footer-widget-contact-inner">
                        <a href="tel:123456765">
                          <i className="fa-solid fa-phone"></i> (629) 555-0129
                        </a>
                      </div>
                      <div className="tp-footer-widget-contact-inner">
                        <a href="mailto:info@ezylife.in">
                          <i className="fa-solid fa-envelope"></i>{" "}
                          info@ezylife.in
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-footer-copyright-area p-relative">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner">
                  <p>
                    {" "}
                    <CopyRight />{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner text-lg-end">
                  {footer_links.map((item, index) => (
                    <a key={index} href="#">
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
