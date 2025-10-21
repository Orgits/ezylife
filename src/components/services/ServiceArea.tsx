

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
      <section className="tp-service-breadcrumb-area pt-120 pb-40">
        <div className="container">
          <div className="row">
            {services.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="tp-service-item-wrapper p-relative mb-80 wow fadeInUp d-flex flex-column"
                     style={{ height: '475px' }}
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
                      <Image src={item.img} alt="image-title-here" />
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