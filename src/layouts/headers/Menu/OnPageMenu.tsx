'use client'
import Link from "next/link";
import ScrollspyNav from "react-scrollspy-nav";
import Image, { StaticImageData } from "next/image";


import demo_img_1 from "@/assets/img/menu/img-1.jpg";
import demo_img_2 from "@/assets/img/menu/img-2.jpg";
import demo_img_3 from "@/assets/img/menu/img-3.jpg"; 

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown: boolean;
  sub_menus: {
    link: string;
    title: string;
    one_page_link: string;
    demo_img: StaticImageData;
  }[];
}[]
const on_page_menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    img_dropdown: false,
    sub_menus: [],
  },
]

type styleType = {
  onePageHomeOne?: any
  onePageHomeTwo?: any
  onePageHomeThree?: any
}

const OnPageMenu = ({ onePageHomeOne, onePageHomeTwo, onePageHomeThree }: styleType) => {


  return (
    <>
      <ul className="tp-onepage-menu d-flex">
        {on_page_menu_data.map((item, i) =>
          <li key={i}>
            <Link href={item.link}>{item.title}</Link>
          </li>
        )}
        {onePageHomeOne &&
          <ScrollspyNav
            scrollTargetIds={["About", "Service", "Project", "Blog", "Contact",]}
            offset={50}
            activeNavClass="is-active"
            scrollDuration="100"
            headerBackground="true"
          >
            <ul>
              <li><a href="#about-one-page">About</a></li>
              <li><a href="#services-one-page">Service</a></li>
              <li><a href="#project-one-page">Project</a></li>
              <li><a href="#blog-one-page">Blog </a></li>
              <li><a href="#contact-one-page">Contact</a></li>
            </ul>
          </ScrollspyNav>
        } 
      </ul>
    </>
  );
};

export default OnPageMenu;