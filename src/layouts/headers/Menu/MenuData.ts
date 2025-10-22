import { StaticImageData } from "next/image";

import demo_img_1 from "@/assets/img/menu/img-1.jpg";
import demo_img_2 from "@/assets/img/menu/img-2.jpg";
import demo_img_3 from "@/assets/img/menu/img-3.jpg";


interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: {
    link: string;
    title: string;
    btn_title?: string;
    one_page_link?: string | any;
    demo_img?: StaticImageData | any;
  }[];
}[]


const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "About Us",
    link: "/about",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Service",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/services-details/1", title: "Equity & Derivatives Trading" },
      { link: "/services-details/2", title: "Mutual Funds & SIPs" },
      { link: "/services-details/3", title: "IPO Investments" },
      { link: "/services-details/4", title: "Bonds & Debentures" },
      { link: "/services-details/5", title: "Portfolio Advisory" },
      { link: "/services-details/6", title: "Financial Planning" },
      { link: "/services-details/7", title: "Retirement Planning" },
      { link: "/services-details/8", title: "Portfolio Management Services (PMS)" },
      { link: "/services-details/9", title: "Insurance Services" },
      { link: "/services-details/10", title: "Tax Planning" },
    ],
  },
  {
    id: 4,
    title: "Pages",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/project", title: "Project" },
      { link: "/project-details", title: "Project Details" },
      { link: "/team", title: "Team " },
      { link: "/team-details", title: "Team Details" },
      { link: "/faq", title: "FAQ" },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },


]
export default menu_data