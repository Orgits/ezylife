import Link from "next/link";


interface social_links_type {
  link: string;
  target: string;
  icon: string;
}


const social_links: social_links_type[] = [
  {
    link: "https://www.facebook.com/EZYLIFEIN/",
    target: "_blank",
    icon: "fab fa-facebook-f",
  },
  {
    link: "https://x.com/EzyLife_In?t=35wnC81n6LQrScDn14zT6Q&s=09",
    target: "_blank",
    icon: "fab fa-x",
  },
  {
    link: "https://www.linkedin.com/company/ezylife-in/",
    target: "_blank",
    icon: "fab fa-linkedin-in",
  },
  {
    link: "https://www.instagram.com/ezylife_in/",
    target: "_blank",
    icon: "fa-brands fa-instagram",
  },
  {
    link: "https://wa.me/919899829830",
    target: "_blank",
    icon: "fab fa-whatsapp",
  },
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <Link
          key={i}
          href={l.link}
          target={l.target ? l.target : ""}>
          <i className={l.icon} ></i> {' '}
        </Link>
      ))}
    </>
  );
};

export default SocialLinks;




interface social_links_type_2 {
  link: string;
  color: string;
  icon: string;
}

const social_links_2: social_links_type_2[] = [
  {
    link: "https://www.facebook.com/EZYLIFEIN",
    color: "footer-facebook",
    icon: "fa-brands fa-facebook-f",
  },
  {
    link: "https://x.com/EzyLife_In?t=35wnC81n6LQrScDn14zT6Q&s=09",
    color: "footer-x",
    icon: "fa-brands fa-x",
  },
  {
    link: "http://www.linkedin.com/company/ezylife-in/",
    color: "footer-linkedin",
    icon: "fa-brands fa-linkedin-in",
  },
  {
    link: "https://www.instagram.com/ezylife_in/",
    color: "footer-insta",
    icon: "fa-brands fa-instagram",
  },
  {
    link: "https://wa.me/919899829830",
    color: "footer-whatsapp",
    icon: "fa-brands fa-whatsapp",
  },
];

export const SocialLinksTwo = () => {
  return (
    <>
      {social_links_2.map((link, index) => (
        <Link
          key={index}
          href={link.link}
          className={link.color}
          target="_blank">
          <i className={link.icon}></i>{" "}
        </Link>
      ))}
    </>
  );
};




// team social links
interface DataType {
  id: number;
  link: string;
  icon: string; 
}
const team_social_data: DataType[] = [
  {
    id: 1,
    link: "https://www.facebook.com/EZYLIFEIN",
    icon: "fa-brands fa-facebook-f",
  },
  {
    id: 2,
    link: "https://www.instagram.com/ezylife_in/",
    icon: "fa-brands fa-instagram",
  },
  {
    id: 3,
    link: "https://x.com/EzyLife_In?t=35wnC81n6LQrScDn14zT6Q&s=09",
    icon: "fa-brands fa-x",
  },
  {
    id: 4,
    link: "http://linkedin.com/company/ezylife-in/",
    icon: "fa-brands fa-linkedin-in",
  },
{
    id: 5,
    link: "https://wa.me/919899829830",
    icon: "fa-brands fa-whatsapp",
  },  

]

export const TeamSocialLinks = () => {
  return (
    <>
      {team_social_data.map((t_item, t_index) => (
        <Link
          key={t_index}
          href={t_item.link} 
          className={`icon-${t_item.id}`}
          target="_blank">
          <i className={t_item.icon}></i>{" "}
        </Link>
      ))}
    </>
  )
}


// copy right text 
type copy_right_text_type = {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>
    <span>© Ezylife {new Date().getFullYear()} All Rights Reserved</span>
  </>
}

const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}


