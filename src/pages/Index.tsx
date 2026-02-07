import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import DallasLeakInfo from "@/components/landing/DallasLeakInfo";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";
import RandomLinks from "@/components/landing/RandomLinks";
import FloatingCallButton from "@/components/ui/FloatingCallButton";

import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Slab leak detection Dallas | Dallas Slab Leak Pros: Precision Detection & Repair</title>
        <meta name="description" content="Expert Slab leak detection Dallas. Professional slab leak repair, foundation leak detection, and under-slab plumbing repairs. Licensed plumbers serving DFW. Call (877) 792-1410 today!" />
        <meta name="keywords" content="Slab leak detection Dallas, slab leak repair Dallas, foundation leak repair TX, Dallas under slab plumbing, professional leak detection DFW" />
        <link rel="canonical" href="https://slab-leak-detection-dallas.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dallas Slab Leak Pros",
            "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
            "telephone": "+1-877-792-1410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dallas",
              "addressRegion": "TX",
              "postalCode": "75201",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "32.7767",
              "longitude": "-96.7970"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Dallas, Texas"
            },
            "priceRange": "$$$",
            "description": "Professional slab leak detection and repair services in Dallas, Texas. We specialize in finding and fixing foundation water leaks using advanced sonar technology."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Slab Leak Detection and Repair",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Dallas Slab Leak Pros",
              "telephone": "+1-877-792-1410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Dallas, Texas"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Leak Detection Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Electronic Slab Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Foundation Plumbing Repair"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Under-Slab Pipe Re-routing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Trenchless Sewer Repair"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="Slab leak detection Dallas | Dallas Slab Leak Pros" />
        <meta property="og:description" content="Expert slab leak detection in Dallas, TX. Professional repair of foundation water leaks using non-invasive sonar technology. Call (877) 792-1410." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://slab-leak-detection-dallas.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Slab leak detection Dallas | Dallas Slab Leak Pros" />
        <meta name="twitter:description" content="Professional slab leak detection in Dallas. Advanced technology for pinpointing foundation leaks." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              Slab leak detection Dallas
              <span className="block text-blue-400 mt-2">Dallas Foundation Plumbing: Non-Invasive Experts</span>
            </>
          }
          subtitle="Is your Dallas foundation at risk? We use advanced acoustic and thermal imaging technology to pinpoint slab leaks with ZERO unnecessary digging. Protect your home's structural integrity with Dallas's most trusted leak detection specialists. Licensed and ready 24/7."
          image="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <DallasLeakInfo />
        <FAQ />
        <Contact />
        <RandomLinks />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
