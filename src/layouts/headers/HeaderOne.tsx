'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import Image from 'next/image';
import NavMenu from './Menu/NavMenu';
import SearchBar from './Menu/SearchBar';
import Offcanvas from './Menu/Offcanvas'; 
import UseSticky from '@/hooks/UseSticky';
import OnPageMenu from './Menu/OnPageMenu';
import HeaderLogo from "@/assets/img/logo/logo.png";
import SocialLinks from '@/components/common/SocialLinks';

const HeaderOne = ({ onePageHomeOne }: any) => {

   const { sticky } = UseSticky();
   const [searchOpen, setSearchOpen] = useState<boolean>(false);
   const [menuOpen, setMenuOpen] = useState<boolean>(false);


   return (
      <>

         <header className="tp-header-area p-relative">
            <div className="tp-header-box p-relative">
               <div className="tp-header-logo p-relative">
                  <span className=""></span>
                  <Link href="/">
                     <Image width={180} height={60} src='/logo.png' alt="image-title-here" style={{ objectFit: 'contain' }} />
                  </Link>
               </div>
               <div className="tp-header-wrapper-inner header__sticky p-relative">
                  <div className="tp-header-top d-none d-xl-flex">
                     <div className="tp-header-top-info">
                        <a href="https://maps.app.goo.gl/FGVYg7bmKbMZFwP58" target="_blank"><span style={{
                            background:
                              "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}><i className="fa-sharp fa-solid fa-location-dot"></i></span>Office No. 74D, 7th Floor, Himalaya House,KG Marg, New Delhi –110001</a>
                     </div>
                     <div className="tp-header-top-right d-flex justify-content-end align-items-center">
                        <div className="header-social ">
                           <SocialLinks />
                        </div>
                     </div>
                  </div>
                  <div className="tp-header-main-menu d-flex align-items-center justify-content-between">
                     <div className="tp-main-menu d-none d-xl-block">
                        <nav className="tp-main-menu-content">
                           {!onePageHomeOne && <NavMenu />}
                           {onePageHomeOne && <OnPageMenu onePageHomeOne={onePageHomeOne} />}

                        </nav>
                     </div>
                     <div className="tp-header-main-right d-flex align-items-center justify-content-xl-end">
                        <div className="tp-header-contact d-xl-flex align-items-center d-none">
                           {/* <div className="tp-header-contact-search search-open-btn d-none d-xxl-block">
                              <span onClick={() => setSearchOpen(true)}><i className="fa-solid fa-magnifying-glass"></i></span>
                           </div> */}
                           <div className="tp-header-contact-inner d-flex align-items-center">
                              <div className="tp-header-contact-icon">
                                 <span style={{
                                   background: "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                                   color: "white",
                                   padding: "15px",
                                   borderRadius: "50%",
                                   display: "inline-flex",
                                   alignItems: "center",
                                   justifyContent: "center",
                                   width: "50px",
                                   height: "50px"
                                 }}><i className="fa-solid fa-phone"></i></span>
                              </div>
                              <div className="tp-header-contact-content">
                                 <p>Requesting A Call:</p>
                                 <span><a href="tel:9899829830">+91 98998 29830</a></span>
                              </div>
                           </div>
                        </div>
                        <div className="tp-header-sticky-hamburger d-xl-none offcanvas-open-btn">
                           <button className="hamburger-btn">
                              <span></span>
                              <span></span>
                              <span></span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="tp-header-btn" style={{backgroundColor: 'white'}}>
                  <Link
                    className="tp-btn d-none d-xl-block"
                    href="/contact"
                    style={{
                      background: "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                      color: "white",
                      border: "none"
                    }}
                  >
                    Get in touch <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                  <div className="tp-header-main-right-hamburger-btn d-xl-none offcanvas-open-btn">
                     <button className="hamburger-btn" onClick={() => setMenuOpen(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                     </button>
                  </div>
               </div>
            </div>
         </header>

         <header id="header-sticky" className={`tp-header-main-sticky p-relative ${sticky ? 'tp-header-sticky' : ''}`}>
            <div className="tp-header-space-2">
               <div className="container-fluid">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-6">
                        <div className="tp-header-logo-2 p-relative">
                           <Link href="/">
                              <Image width={180} height={60} src='/logo.png' alt="image-title-here" style={{ objectFit: 'contain' }} />
                           </Link>
                        </div>
                     </div>
                     <div className="col-lg-6 d-none d-xl-block">
                        <div className="tp-main-menu home-2 d-none d-xl-block">
                           <nav className="tp-main-menu-content">
                              {!onePageHomeOne && <NavMenu />}
                              {onePageHomeOne && <OnPageMenu onePageHomeOne={onePageHomeOne} />}
                           </nav>
                        </div>
                     </div>
                     <div className="col-xl-3 col-6">
                        <div className="tp-header-main-right-2 d-flex align-items-center justify-content-xl-end">
                           <div className="tp-header-contact-2 d-flex align-items-center">
                              {/* <div className="tp-header-contact-search search-open-btn d-none d-xxl-block">
                                 <span onClick={() => setSearchOpen(true)}><i className="fa-solid fa-magnifying-glass"></i></span>
                              </div> */}
                              <div className="tp-header-contact-inner d-none d-xl-flex align-items-center">
                                 <div className="tp-header-contact-icon">
                                    <span style={{
                                      background: "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                                      color: "white",
                                      padding: "15px",
                                      borderRadius: "50%",
                                      display: "inline-flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      width: "50px",
                                      height: "50px"
                                    }}><i className="fa-solid fa-phone"></i></span>
                                 </div>
                                 <div className="tp-header-contact-content">
                                    <p>Requesting A Call:</p>
                                    <span><a href="tel:9899829830">+91 98998 29830</a></span>
                                 </div>
                              </div>
                           </div>
                           <div className="tp-header-main-right-hamburger-btn d-xl-none offcanvas-open-btn text-end">
                              <button className="hamburger-btn" onClick={() => setMenuOpen(true)}>
                                 <span></span>
                                 <span></span>
                                 <span></span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
         <Offcanvas menuOpen={menuOpen} setMenuOpen={setMenuOpen} onePageHomeOne={onePageHomeOne} />



      </>
   );
};

export default HeaderOne;