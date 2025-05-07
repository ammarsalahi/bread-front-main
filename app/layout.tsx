import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./assets/css/boostrap.min.css";
import "./assets/css/bootstrap-select.min.css";
import "./assets/css/nouislider.min.css";
import "./assets/css/swiper-bundle.min.css";
import "./assets/css/styles.css";
import "./assets/fonts/font-icons.css";
export const metadata: Metadata = {
  title: "صفینو",
  description: " تحویل آنلاین نان تازه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="shortcut icon" href="/images/logo/48.png" />
        <link rel="apple-touch-icon-precomposed" href="/images/logo/48.png" />

        <title>صفینو</title>
      </head>
      <body>
        {children}

        <Script type="text/javascript" src="/js/bootstrap.min.js"></Script>
        <Script
          type="text/javascript"
          src="/js/bootstrap-select.min.js"
        ></Script>
        <Script type="text/javascript" src="/js/jquery.min.js"></Script>
        <Script type="text/javascript" src="/js/swiper-bundle.min.js"></Script>
        <Script type="text/javascript" src="/js/carousel.js"></Script>
        <Script type="text/javascript" src="/js/nouislider.min.js"></Script>
        {/* <Script type="text/javascript" src="/js/sidebar.js"></Script> */}
        <Script type="text/javascript" src="/js/main.js"></Script>
      </body>
    </html>
  );
}
