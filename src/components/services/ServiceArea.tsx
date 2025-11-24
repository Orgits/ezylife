

"use client";
import service_data from '@/data/ServiceData';
import ServiceIconOne from '@/svg/home-1/ServiceIconOne';
import ServiceIconThree from '@/svg/home-1/ServiceIconThree';
import ServiceIconTwo from '@/svg/home-1/ServiceIconTwo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const services = service_data.filter(item => item.home === 'service');

const ServiceArea = () => {
  return (
    <>
      <style jsx>{`
        @media (max-width: 991px) {
          .tp-service-breadcrumb-area {
            padding-top: 80px !important;
            padding-bottom: 30px !important;
          }
          
          .tp-service-item-wrapper {
            margin-bottom: 50px !important;
            height: auto !important;
          }
          
          .tp-service-item-thumb img {
            width: 100% !important;
            height: 200px !important;
            object-fit: cover;
          }
        }
        
        @media (max-width: 767px) {
          .tp-service-breadcrumb-area {
            padding-top: 60px !important;
            padding-bottom: 25px !important;
          }
          
          .tp-service-item-wrapper {
            margin-bottom: 40px !important;
            padding: 20px !important;
          }
          
          .tp-service-item-title {
            font-size: 18px !important;
            line-height: 1.3 !important;
            margin-bottom: 15px;
          }
          
          .tp-service-item-content p {
            font-size: 14px !important;
            line-height: 1.6 !important;
            min-height: auto !important;
            max-height: none !important;
          }
          
          .tp-service-item-thumb img {
            height: 180px !important;
          }
          
          .tp-service-item-icon {
            margin-bottom: 15px;
          }
        }
        
        @media (max-width: 575px) {
          .tp-service-breadcrumb-area {
            padding-top: 50px !important;
            padding-bottom: 20px !important;
          }
          
          .tp-service-item-wrapper {
            margin-bottom: 30px !important;
            padding: 15px !important;
          }
          
          .tp-service-item-title {
            font-size: 16px !important;
            margin-bottom: 12px;
          }
          
          .tp-service-item-content p {
            font-size: 13px !important;
            margin-bottom: 15px !important;
          }
          
          .tp-service-item-thumb img {
            height: 160px !important;
          }
          
          .col-lg-4.col-md-6 {
            margin-bottom: 20px;
          }
        }
      `}</style>
      <section className="tp-service-breadcrumb-area pt-120 pb-40">
        <div className="container">
          <div className="row">
            {services.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="tp-service-item-wrapper p-relative mb-80 wow fadeInUp d-flex flex-column"
                     style={{ height: '525px' }}
                     data-wow-duration="1s"
                     data-wow-delay={item.delay}>
                  <div className="tp-service-item-icon">
                    <span>
                      {item.id === 1 && <ServiceIconOne />}
                      {item.id === 2 && <ServiceIconTwo />}
                      {item.id === 3 && <ServiceIconThree />}
                      {item.id === 4 && <ServiceIconOne />}
                      {item.id === 5 && <ServiceIconTwo />}
                      {item.id === 6 && <ServiceIconThree />}
                      {item.id === 7 && <ServiceIconOne />}
                      {item.id === 8 && <ServiceIconTwo />}
                      {item.id === 9 && <ServiceIconThree />}
                      {item.id === 10 && <ServiceIconOne />}
                    </span>
                  </div>
                  <div className="tp-service-item-content flex-grow-1 d-flex flex-column">
                    <h4 className="tp-service-item-title"><Link href={`/services-details/${item.id}`}>{item.title}</Link></h4>
                    <p className="mb-3" style={{ minHeight: '80px', maxHeight: '150px', overflow: 'hidden' }}>{item.sm_des}</p>
                  </div>
                  <div className="tp-service-item-thumb mt-auto">
                    <Link href={`/services-details/${item.id}`}>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={400}
                        height={250}
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover'
                        }}
                      />
                    </Link>
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

export default ServiceArea;