"use client";

import Head from "next/head";
import { usePathname } from "next/navigation";

const SITE_URL = "https://www.webfoundersusa.com";

export default function BlogCanonical() {
  const pathname = usePathname() || "/blog";
  const canonicalUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  return (
    <Head>
      <link key="blog-canonical" rel="canonical" href={canonicalUrl} />
    </Head>
  );
}
