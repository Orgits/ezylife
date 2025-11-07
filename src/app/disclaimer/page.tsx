import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Breadcrumb from '@/components/common/Breadcrumb';

const DisclaimerPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Compliance & Disclaimer" page_title="Disclaimer" />

        <section className="tp-about-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-about-content">
                  <div className="tp-about-title-wrapper mb-40">
                    <span className="tp-section-title-pre" style={{
                      background: "linear-gradient(90deg, #4CAF50 0%, #2E7D32 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      Legal Information
                    </span>
                    <h3 className="tp-section-title">Compliance & Disclaimer</h3>
                  </div>

                  <div className="disclaimer-content" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Regulatory Status</h4>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                        <p className="mb-0">
                          <strong>Ezylife Financial Services Pvt. Ltd.</strong> is a SEBI-registered Sub-Broker with IIFL Capital and an AMFI-registered mutual fund distributor.
                        </p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>General Disclaimer</h4>
                      <div className="p-4" style={{ backgroundColor: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• Investments in securities are subject to market risks. Please read all related documents carefully before investing.</li>
                          <li className="mb-2">• Past performance is not indicative of future returns.</li>
                          <li className="mb-0">• Ezylife Financial Services Pvt. Ltd. does not provide any assured returns or guaranteed profits.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Research & Advisory Disclaimer</h4>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• Research reports, market views, or investment ideas shared are for information purposes only.</li>
                          <li className="mb-0">• Ezylife and its employees are not responsible for losses arising from such information.</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Privacy & Confidentiality</h4>
                      <div className="p-4" style={{ backgroundColor: '#d1ecf1', borderRadius: '8px', border: '1px solid #bee5eb' }}>
                        <p className="mb-0">We maintain strict confidentiality of client data and comply with SEBI and AMFI guidelines.</p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Grievance Redressal</h4>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                        <p><strong>Grievance Officer:</strong></p>
                        <p className="mb-2">Ezylife Financial Services Pvt. Ltd.</p>
                        <p className="mb-2">Office No. 74D, 7th Floor, Himalaya House, KG Marg, New Delhi – 110001</p>
                        <p className="mb-2">Email: <a href="mailto:compliance@ezylife.in" style={{ color: '#2E7D32' }}>compliance@ezylife.in</a></p>
                        <p className="mb-3">Phone: 011-45584780</p>
                        <p className="mb-0">If unresolved, escalate to: <a href="https://www.scores.gov.in" target="_blank" style={{ color: '#2E7D32' }}>SEBI SCORES – www.scores.gov.in</a></p>
                      </div>
                    </div>

                    <div className="mb-0">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Important Regulatory Disclaimers</h4>
                      <div className="p-4" style={{ backgroundColor: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• Mutual Fund investments are subject to market risks. Read all scheme-related documents carefully.</li>
                          <li className="mb-0">• Stock market investments are subject to market risks. Please read risk disclosure documents carefully before investing.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
    </Wrapper>
  );
};

export default DisclaimerPage;