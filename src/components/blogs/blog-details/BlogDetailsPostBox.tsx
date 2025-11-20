
import React from 'react';
import BlogSlidebar from '../blog-common';
import Image, { StaticImageData } from 'next/image';

import post_thumb_1 from "@/assets/img/blog/blog-details/img-1.jpg";
import post_quote from "@/assets/img/blog/blog-details/quote.png";
import SocialLinks from '@/components/common/SocialLinks';
import user_comment_1 from "@/assets/img/blog/blog-details/img-2.jpg";
import user_comment_2 from "@/assets/img/blog/blog-details/img-3.jpg";
import user_comment_3 from "@/assets/img/blog/blog-details/img-4.jpg";
import CommentPost from '@/components/forms/CommentPost';

interface DataType {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  features_list: {
      title: string;
      info: string;
  }[];
  qoute: string;
  sm_des_3: string;
  sm_des_4: string;
  comments_data: {
      id: number;
      img: StaticImageData;
      name: string;
      designation: string;
      comment: string;
  }[];
}


// Dynamic blog titles from our finance-focused blog data
const financeBlogTitles = [
  "Smart Investment Strategies for Building Long-Term Wealth",
  "Tax-Efficient Investment Planning: Maximize Your Returns",
  "Retirement Planning Guide: Secure Your Financial Future"
];

// Get a random title or use the first one as default
const getRandomBlogTitle = () => {
  return financeBlogTitles[Math.floor(Math.random() * financeBlogTitles.length)];
};

const blog_details_content:DataType = {
  title: getRandomBlogTitle(),
  sm_des_1: "N/A",
  sm_des_2: "N/A",
  features_list: [],
  qoute: "N/A",
  sm_des_3: "N/A",
  sm_des_4: "N/A",
  comments_data: [
    {
      id: 1,
      img: user_comment_1,
      name: "Financial Expert",
      designation: "November 15, 2024",
      comment: "N/A",
    },
    {
      id: 2,
      img: user_comment_2,
      name: "Investment Advisor",
      designation: "November 12, 2024",
      comment: "N/A",
    },
    {
      id: 3,
      img: user_comment_3,
      name: "Wealth Manager",
      designation: "November 8, 2024",
      comment: "N/A",
    }
  ]
}

const { title, sm_des_1, sm_des_2, features_list, qoute, sm_des_3, sm_des_4, comments_data } = blog_details_content

const BlogDetailsPostBox = () => {
  return (
    <>
      <section className="tp-postbox-area pt-50 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="tp-postbox-wrapper">

                <article className="tp-postbox-item-wrapper mb-80">
                  <div className="tp-postbox-item-thumb p-relative">
                    <Image src={post_thumb_1} style={{ width: '100%', height: 'auto' }} alt="image-title-here" />
                    <div className="tp-postbox-meta2">
                      <span><i className="fa-regular fa-user"></i> By Admin</span>
                      <span><i className="fa-regular fa-folder-open"></i> Finance</span>
                      <span><i className="fa-regular fa-calendar-days"></i> November 15, 2024</span>
                    </div>
                  </div>
                  <h3 className="tp-postbox-title2">{title}</h3>
                  <p>{sm_des_1}</p>
                </article>

              </div>
            </div>

            <BlogSlidebar />

          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPostBox;