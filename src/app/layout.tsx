import React from "react";
import "../style/index.scss";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EzyLife - Make Your Life Easy",
  description:
    "SEBI-registered sub-broker with IIFL Capital offering mutual funds, SIPs, financial planning, and wealth management with trust, transparency, and innovation.",
  metadataBase: new URL("https://www.ezylife.in"), // 👈 Add your actual domain
  alternates: {
    canonical: "/", // 👈 This generates the canonical tag automatically
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="AwfYFpp4CTA_ULlBHZDyK08zRfxa5hWUrVDq8gmU1Uk" />
        <meta name="facebook-domain-verification" content="kzjlkm2ire9o3lbae99kga0vevz1kw" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=Kumbh+Sans:wght@400;500;600;700;800&display=swap"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:''; j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl; f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NCRCXNN6');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NCRCXNN6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm-noscript"
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}