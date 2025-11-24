import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Breadcrumb from '@/components/common/Breadcrumb';

const PrivacyPolicyPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        {/* <Breadcrumb title="Privacy Policy" page_title="Privacy Policy" /> */}

        <section className="tp-about-area pt-50 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-about-content">
                  <div className="tp-about-title-wrapper mb-40">
                    <span className="tp-section-title-pre" style={{
                      background: "linear-gradient(90deg,  #4CAF50 0%, #89e550ff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      Data Protection
                    </span>
                    <h3 className="tp-section-title">Privacy Policy</h3>
                  </div>

                  <div className="privacy-content" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                    <div className="mb-5">
                      <div className="p-4" style={{ backgroundColor: '#d1ecf1', borderRadius: '8px', border: '1px solid #bee5eb' }}>
                        <p className="mb-0">
                          At <strong>Ezylife Financial Services Pvt. Ltd.</strong>, we are committed to protecting your privacy and maintaining the confidentiality of your personal and financial information. This Privacy Policy outlines how we collect, use, and safeguard your data in compliance with applicable regulations.
                        </p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Information We Collect</h4>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• Personal identification information (Name, Address, Phone, Email)</li>
                          <li className="mb-2">• Financial information (Income, Investment preferences, Risk profile)</li>
                          <li className="mb-2">• KYC documents and compliance-related information</li>
                          <li className="mb-0">• Transaction history and investment portfolio details</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>How We Use Your Information</h4>
                      <div className="p-4" style={{ backgroundColor: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• To provide personalized financial advisory and investment services</li>
                          <li className="mb-2">• To comply with regulatory requirements and KYC norms</li>
                          <li className="mb-2">• To process transactions and maintain investment records</li>
                          <li className="mb-2">• To communicate important updates and market information</li>
                          <li className="mb-0">• To improve our services and customer experience</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Data Security & Protection</h4>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• We implement industry-standard security measures to protect your data</li>
                          <li className="mb-2">• All sensitive information is encrypted and stored securely</li>
                          <li className="mb-2">• Access to your information is restricted to authorized personnel only</li>
                          <li className="mb-0">• Regular security audits and updates are conducted</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Information Sharing</h4>
                      <div className="p-4" style={{ backgroundColor: '#d1ecf1', borderRadius: '8px', border: '1px solid #bee5eb' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• We do not sell, trade, or rent your personal information to third parties</li>
                          <li className="mb-2">• Information may be shared with regulatory authorities as required by law</li>
                          <li className="mb-2">• Data may be shared with our business partners (IIFL Capital) for transaction processing</li>
                          <li className="mb-0">• We may share aggregated, non-personal information for research purposes</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Your Rights</h4>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• Right to access your personal information</li>
                          <li className="mb-2">• Right to correct or update your information</li>
                          <li className="mb-2">• Right to withdraw consent for data processing</li>
                          <li className="mb-0">• Right to lodge complaints with regulatory authorities</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Regulatory Compliance</h4>
                      <div className="p-4" style={{ backgroundColor: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
                        <p className="mb-0">
                          We strictly comply with SEBI and AMFI guidelines regarding client data protection and confidentiality. Our privacy practices are regularly reviewed to ensure adherence to evolving regulatory requirements.
                        </p>
                      </div>
                    </div>

                    <div className="mb-0">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Contact Us</h4>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                        <p className="mb-2">For any privacy-related queries or concerns, please contact us:</p>
                        <p className="mb-2">Email: <a href="mailto:compliance@ezylife.in" style={{ color: '#2E7D32' }}>compliance@ezylife.in</a></p>
                        <p className="mb-2">Phone: 011-45584780</p>
                        <p className="mb-0">Address: Office No. 74D, 7th Floor, Himalaya House, KG Marg, New Delhi – 110001</p>
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

export default PrivacyPolicyPage;