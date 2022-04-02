import React, { ReactNode } from "react";
import Link from "next/link";

import Head from "next/head";
import Navi from "./test/Navi";
import Footer from "./test/Footer";
import Favicon from "./Favicon"

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({ children, title, description }: Props) => (
  <div>
    <Head>
      <title>{title ? title + " | Lanas" : "Lanas"}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content={
          description
            ? description
            : "Lanas designs & builds fast and responsible Websites for startups and businesses alike. "
        }
      />
      <meta
        name="keywords"
        content="Websites, design, build, startup, React, Nextjs"
      />
      <meta name="author" content="Lanas" />
      <Favicon />
      <link
            rel="preload"
            href="/fonts/Inter/Inter-Medium.woff2?v=3.19"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Inter/Inter-Bold.woff2?v=3.19"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
    </Head>

    <Navi />
    {children}
    <Footer />
  </div>
);

export default Layout;
