import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhyUs from "@/components/landing/WhyUs";
import MustyOdorRemovalInfo from "@/components/landing/MustyOdorRemovalInfo";
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
        <title>MUSTY ODOR REMOVAL PITMAN NJ | PITMAN ODOR NEUTRALIZATION PROS</title>
        <meta name="description" content="MUSTY ODOR REMOVAL PITMAN NJ. Professional molecular neutralization for old house smells, damp basements, and crawlspace odors in Pitman, NJ. Call (380) 266-0944!" />
        <meta name="keywords" content="MUSTY ODOR REMOVAL PITMAN NJ, old house smell solution Pitman, basement odor Gloucester County, dampness remediation NJ" />
        <link rel="canonical" href="https://pitman-odor-neutralization.com/" />

        {/* JSON-LD schema for LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Pitman Odor Neutralization Pros",
            "image": "https://images.unsplash.com/photo-1490312278390-ab6414f8d29b?auto=format&fit=crop&q=80",
            "telephone": "+1-380-266-0944",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Pitman",
              "addressRegion": "NJ",
              "postalCode": "08071",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "39.7332",
              "longitude": "-75.1313"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": {
              "@type": "Place",
              "name": "Pitman, Gloucester County, NJ"
            },
            "priceRange": "$$",
            "description": "Scientific odor neutralization and air purification in Pitman, NJ. We eliminate musty smells from historic homes and damp basements permanently using molecular science."
          })}
        </script>

        {/* JSON-LD schema for Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Musty Odor Removal Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Pitman Odor Neutralization Pros",
              "telephone": "+1-380-266-0944"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Pitman, NJ"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Atmosphere Restoration Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Molecular Odor Neutralization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "HEPA Air Scrubbing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Crawlspace Vapor Control"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Historic Home Smell Removal"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Open Graph Tags */}
        <meta property="og:title" content="MUSTY ODOR REMOVAL PITMAN NJ | PITMAN ODOR NEUTRALIZATION PROS" />
        <meta property="og:description" content="Professional musty odor removal for historic homes and basements in Pitman, NJ. Science-based molecular neutralization." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pitman-odor-neutralization.com/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1490312278390-ab6414f8d29b?auto=format&fit=crop&q=80" />
      </Helmet>

      <Header />
      <main>
        <Hero
          title={
            <>
              MUSTY ODOR REMOVAL PITMAN NJ
              <span className="block text-indigo-400 mt-2">PITMAN ODOR NEUTRALIZATION PROS: SCIENTIFIC REMOVAL</span>
            </>
          }
          subtitle="Is a persistent musty smell making your historic Pitman home unbearable? We use advanced molecular neutralization and HEPA air scrubbing to eliminate odors at the source—not just mask them. Restore your home's air today."
          image="https://images.unsplash.com/photo-1490312278390-ab6414f8d29b?auto=format&fit=crop&q=80"
        />
        <Services />
        <WhyUs />
        <MustyOdorRemovalInfo />
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
