
interface DataType {
  id: string;
  question: string;
  question_2: string;
  answer: string;
}[]

const accordion_data:DataType[] = [
 
  {
    id: "One",
    question: "What is Ezylife Financial Services?",
    question_2: "How does Ezylife make financial management easier?",
    answer:
      "Ezylife Financial Services Pvt. Ltd. is a SEBI-registered sub-broker with IIFL Capital and an AMFI-registered mutual fund distributor. We simplify investing and wealth management by offering transparent, research-backed financial solutions — true to our tagline, 'Makes Your Life Easy.'"
  },
  {
    id: "Two",
    question: "What services does Ezylife offer?",
    question_2: "Can I manage all my investments under Ezylife?",
    answer:
      "Yes. Ezylife provides a complete suite of financial services including Equity & Derivatives Trading, Mutual Funds & SIPs, IPO Investments, Bonds & Debentures, Portfolio Advisory, Financial Planning, Retirement Planning, Insurance, and Tax Planning — all in one platform for your convenience."
  },
  {
    id: "Three",
    question: "How is Ezylife different from other financial advisors?",
    question_2: "Why should I choose Ezylife for my investments?",
    answer:
      "At Ezylife, our team of Chartered Accountants and Financial Experts ensures every client receives unbiased, personalized, and compliant financial advice. We combine IIFL’s cutting-edge technology with expert research and transparent execution — ensuring trust and simplicity in every transaction."
  },
  {
    id: "Four",
    question: "Is Ezylife registered and regulated?",
    question_2: "How do I know my investments are safe?",
    answer:
      "Ezylife Financial Services Pvt. Ltd. is a SEBI-registered Sub-Broker with IIFL Capital and an AMFI-registered mutual fund distributor. All operations strictly follow SEBI, AMFI, and regulatory guidelines, ensuring full compliance, transparency, and client data security."
  },
  {
    id: "Five",
    question: "How can I start investing with Ezylife?",
    question_2: "Do I need a Demat account to begin?",
    answer:
      "You can start investing by contacting us through our website (https://ezylife.in) or visiting our office in New Delhi. Our team assists you with KYC, Demat account setup, and portfolio planning. Whether you’re a first-time investor or an experienced trader, we make the process effortless."
  },
  {
    id: "Six",
    question: "Does Ezylife offer tax planning and filing support?",
    question_2: "Can Ezylife help reduce my tax burden?",
    answer:
      "Yes. Ezylife’s Chartered Accountants specialize in strategic tax planning for individuals, businesses, and NRIs. We help optimize tax savings through mutual funds, insurance, and compliant investment structures while ensuring all statutory filings are accurate and on time."
  }

]
export default accordion_data