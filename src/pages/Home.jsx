import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Herosection from '../components/Herosection';
import Homebody from '../components/Homebody';
import Whyflexistore from '../components/Whyflexistore';
import Features from '../components/Features';
import Casestudy from '../components/Casestudy';
import Banner from '../components/Banner';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 250);
    }
  }, [location]);

  return (
    <div>

      {/* ========================= HOME PAGE SEO ========================= */}
    <Helmet>
  <title>Launch & Grow Your Online Store with Flexi Store | Sell B2B & B2C</title>

  <meta
    name="description"
    content="Flexi Store helps manufacturers and traders sell to wholesalers, retailers & consumers from one platform. Grow your business faster. book a demo today!"
  />

  <meta name="keywords" content="Flexi Store, B2B ecommerce, wholesale selling, retail selling, online store, manufacturers, traders" />

  <meta name="robots" content="index, follow" />
  <meta name="language" content="en" />
  <meta name="author" content="Flexi Store" />

  <link rel="canonical" href="https://www.flexistore.in" />

  {/* Preconnect & Prefetch */}
  <link rel="preconnect" href="https://www.flexistore.in" />
  <link rel="dns-prefetch" href="https://www.flexistore.in" />

  {/* Preload */}
  <link rel="preload" as="image" href="https://www.flexistore.in/assets/images/favicon.png" />

  {/* Favicon */}
  <link rel="icon" href="/public/favicon.png" type="image/png" />
  <link rel="shortcut icon" href="/images/favicon.png" type="image/png" />

  {/* Open Graph */}
  <meta property="og:url" content="https://www.flexistore.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Launch & Grow Your Online Store with Flexi Store | Sell B2B & B2C" />
  <meta property="og:description" content="Flexi Store helps manufacturers and traders sell to wholesalers, retailers & consumers from one platform. Grow your business faster. book a demo today!" />
  <meta property="og:image" content="https://www.flexistore.in/assets/images/logo.png" />
  <meta property="og:site_name" content="Flexi Store" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Launch & Grow Your Online Store with Flexi Store | Sell B2B & B2C" />
  <meta name="twitter:description" content="Flexi Store helps manufacturers and traders sell to wholesalers, retailers & consumers from one platform. Grow your business faster. book a demo today!" />
  <meta name="twitter:image" content="https://www.flexistore.in/assets/images/logo.png" />

  {/* JSON-LD Schema */}
  <script type="application/ld+json">{`
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Flexi Store",
    "url": "https://www.flexistore.in",
    "description": "Flexi Store helps manufacturers and traders sell to wholesalers, retailers & consumers from one platform. Grow your business faster.",
    "publisher": {
      "@type": "Organization",
      "name": "Flexi Store"
    }
  }
  `}</script>
</Helmet>


      {/* ========================= PAGE CONTENT ========================= */}
      <Herosection />
      <Homebody />

      <section id="advantage"><Whyflexistore /></section>
      <section id="features"><Features /></section>
      <section id="case"><Casestudy /></section>

      <Banner />
    </div>
  );
}

export default Home;
