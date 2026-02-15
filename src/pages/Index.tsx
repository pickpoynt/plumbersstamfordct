import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import SanAntonioPlumbingInfo from "@/components/landing/SanAntonioPlumbingInfo";
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
        <title>San Antonio Plumbing San Antonio</title>
        <meta name="description" content="San Antonio Plumbing San Antonio. Expert plumbing repair and installation in San Antonio, TX. 24/7 emergency service, leak detection, and drain cleaning. Call (877) 792-1410!" />
        <meta name="keywords" content="San Antonio Plumbing San Antonio, San Antonio plumbers, emergency plumber San Antonio, water heater repair San Antonio, leak detection San Antonio" />
        <link rel="canonical" href="https://san-antonio-plumbing-pros.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "San Antonio Plumbing Pros",
            "image": "https://images.unsplash.com/photo-1531219572328-a0e71b4a9d7c?auto=format&fit=crop&q=80",
            "telephone": "+18777921410",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "San Antonio",
              "addressRegion": "TX",
              "postalCode": "78205",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "29.4241",
              "longitude": "-98.4936"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "San Antonio, TX"
            },
            "priceRange": "$$",
            "description": "Professional plumbing services in San Antonio, TX. We specialize in Edwards Aquifer hard water solutions, slab leak detection, and historic home plumbing."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Plumbing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "San Antonio Plumbing Pros",
              "telephone": "+18777921410"
            },
            "areaServed": {
              "@type": "Place",
              "name": "San Antonio, TX"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Plumbing Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Edwards Aquifer Hard Water Treatment"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Bexar County Slab Leak Detection"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Historic District Pipe Restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Emergency 24/7 Plumbing Repair"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="San Antonio Plumbing San Antonio - Professional Plumbing Services" />
        <meta property="og:description" content="Expert plumbing repair in San Antonio. Fast, reliable, and professional service for all your home plumbing needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://san-antonio-plumbing-pros.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1531219572328-a0e71b4a9d7c?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              San Antonio Plumbing San Antonio
              <span className="block text-indigo-400 mt-2 text-2xl md:text-3xl">San Antonio Plumbing Pros</span>
            </>
          }
          subtitle="San Antonio's trusted local plumber. We provide expert plumbing diagnostics, slab leak repairs, and hard water solutions fast. Professional Quality Service."
          image="https://images.unsplash.com/photo-1531219572328-a0e71b4a9d7c?q=80&w=2669&auto=format&fit=crop"
          overlayImage="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <SanAntonioPlumbingInfo />
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
