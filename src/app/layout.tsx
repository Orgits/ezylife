
import "../style/index.scss";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EzyLife - Make Your Life Easy',
  description: 'A SEBI-registered sub-broker with IIFL Capital We are also registered with AMFI, enabling us to distribute mutual funds and SIPs across all major asset management companies. Our team of Chartered Accountants, Financial Advisors, and Wealth Experts simplifies financial decisions for our clients, ensuring they get the right solutions at the right time — true to our tagline, Makes Your Life Easy. Our Vision To simplify financial decisions and create wealth with trust, transparency, and innovation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="EzyLife - Make Your Life Easy" />
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=Kumbh+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>

      <body>{children}</body>
    </html>
  )
}
