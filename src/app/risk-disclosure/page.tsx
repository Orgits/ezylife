import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Breadcrumb from '@/components/common/Breadcrumb';

const RiskDisclosurePage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <main>
        <Breadcrumb title="Risk Disclosure & Rights & Obligations" page_title="Risk Disclosure" />

        <section className="tp-about-area pt-120 pb-120">
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
                      Important Information
                    </span>
                    <h3 className="tp-section-title">Risk Disclosure & Rights & Obligations</h3>
                  </div>

                  <div className="risk-content" style={{ lineHeight: '1.8', fontSize: '16px' }}>
                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Risk Disclosure</h4>
                      <div className="p-4 mb-3" style={{ backgroundColor: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
                        <p className="mb-3"><strong>Market Risk:</strong> Prices may rise or fall due to economic, political, or market factors.</p>
                        <p className="mb-3"><strong>Liquidity Risk:</strong> Certain securities may be difficult to sell/buy at desired prices.</p>
                        <p className="mb-3"><strong>Credit Risk:</strong> Issuer may default on bonds or debentures.</p>
                        <p className="mb-3"><strong>Derivative Risks:</strong> Futures & Options trading can lead to substantial losses.</p>
                        <p className="mb-3"><strong>Past Performance:</strong> Not indicative of future results.</p>
                        <p className="mb-0"><strong>Investment Decisions:</strong> Consult financial advisor before investing.</p>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Client Rights</h4>
                      <div className="p-4" style={{ backgroundColor: '#d1ecf1', borderRadius: '8px', border: '1px solid #bee5eb' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• Receive confirmations & account statements</li>
                          <li className="mb-2">• Access to investment, charges, and brokerage information</li>
                          <li className="mb-2">• Lodge complaints & escalate to IIFL Capital or SEBI SCORES</li>
                          <li className="mb-0">• Withdraw consent for services as per regulations</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Client Obligations</h4>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• Provide accurate KYC and update regularly</li>
                          <li className="mb-2">• Read contract notes, statements, and risk disclosures carefully</li>
                          <li className="mb-2">• Understand products before trading</li>
                          <li className="mb-2">• Settle funds timely</li>
                          <li className="mb-0">• Maintain confidentiality of credentials</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Rights & Obligations of Ezylife</h4>
                      <div className="p-4" style={{ backgroundColor: '#fff3cd', borderRadius: '8px', border: '1px solid #ffeaa7' }}>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• Act as an authorized sub-broker of IIFL Capital</li>
                          <li className="mb-2">• Provide timely information, research, and advisory services within regulations</li>
                          <li className="mb-2">• Maintain client confidentiality</li>
                          <li className="mb-0">• Charge only agreed fees or commissions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Important Investment Warnings</h4>
                      <div className="p-4" style={{ backgroundColor: '#f8d7da', borderRadius: '8px', border: '1px solid #f5c6cb' }}>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <div className="p-3" style={{ backgroundColor: 'white', borderRadius: '6px' }}>
                              <h6 style={{ color: '#dc3545', fontWeight: '600' }}>Equity Markets</h6>
                              <p className="mb-0 small">Stock prices are volatile and can result in significant gains or losses. Market conditions can change rapidly.</p>
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <div className="p-3" style={{ backgroundColor: 'white', borderRadius: '6px' }}>
                              <h6 style={{ color: '#dc3545', fontWeight: '600' }}>Mutual Funds</h6>
                              <p className="mb-0 small">Mutual fund investments are subject to market risks. Past performance does not guarantee future returns.</p>
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <div className="p-3" style={{ backgroundColor: 'white', borderRadius: '6px' }}>
                              <h6 style={{ color: '#dc3545', fontWeight: '600' }}>Derivatives</h6>
                              <p className="mb-0 small">Futures and Options trading involves high risk and may not be suitable for all investors.</p>
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <div className="p-3" style={{ backgroundColor: 'white', borderRadius: '6px' }}>
                              <h6 style={{ color: '#dc3545', fontWeight: '600' }}>Fixed Income</h6>
                              <p className="mb-0 small">Bond investments carry credit risk, interest rate risk, and inflation risk.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Regulatory Compliance</h4>
                      <div className="p-4" style={{ backgroundColor: '#d1ecf1', borderRadius: '8px', border: '1px solid #bee5eb' }}>
                        <p className="mb-2">Ezylife Financial Services Pvt. Ltd. operates under the regulatory framework of:</p>
                        <ul className="list-unstyled mb-0">
                          <li className="mb-2">• <strong>SEBI (Securities and Exchange Board of India)</strong> - For securities trading and advisory services</li>
                          <li className="mb-0">• <strong>AMFI (Association of Mutual Funds in India)</strong> - For mutual fund distribution</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mb-0">
                      <h4 className="mb-3" style={{ color: '#2E7D32', fontWeight: '600' }}>Grievance Redressal</h4>
                      <div className="p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef' }}>
                        <p className="mb-3">For any complaints or grievances:</p>
                        <div className="row">
                          <div className="col-md-6">
                            <p className="mb-2"><strong>Primary Contact:</strong></p>
                            <p className="mb-1">Email: <a href="mailto:compliance@ezylife.in" style={{ color: '#2E7D32' }}>compliance@ezylife.in</a></p>
                            <p className="mb-1">Phone: 011-45584780</p>
                            <p className="mb-0">Address: Office No. 74D, 7th Floor, Himalaya House, KG Marg, New Delhi – 110001</p>
                          </div>
                          <div className="col-md-6">
                            <p className="mb-2"><strong>Escalation:</strong></p>
                            <p className="mb-0">If unresolved, escalate to: <a href="https://www.scores.gov.in" target="_blank" style={{ color: '#2E7D32' }}>SEBI SCORES – www.scores.gov.in</a></p>
                          </div>
                        </div>
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

export default RiskDisclosurePage;