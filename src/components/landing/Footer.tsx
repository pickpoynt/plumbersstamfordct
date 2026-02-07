import { Phone, Mail, MapPin, Activity, Shield, Waves } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Dallas Slab Leak Pros
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Serving the entire Dallas-Fort Worth Metroplex with advanced, non-invasive slab leak detection and expert foundation plumbing repair. Protect your Texas home with the best.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:8777921410" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Detection & Repair</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Electronic Detection</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Thermal Leak Mapping</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Under-Slab Sewer Test</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Foundation Plumbing</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-blue-600" /> Pipe Re-routing</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">DFW Service Area</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Dallas & Highland Park</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Plano & Richardson</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Addison & Carrollton</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Garland & Mesquite</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Fort Worth & Arlington</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-wider text-sm">Dallas Hot Line</h4>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
              <div className="text-blue-400 font-bold text-sm uppercase mb-2">Texas Master Plumber</div>
              <a href="tel:8777921410" className="text-2xl font-heading font-bold text-white hover:text-blue-400 transition-colors">
                (877) 792-1410
              </a>
              <div className="flex items-center gap-2 mt-4 text-slate-400 text-sm">
                <Shield className="w-4 h-4 text-blue-600" />
                Licensed & Insured #12345
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 text-center md:text-left flex flex-col md:row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">
            © {currentYear} Dallas Slab Leak Pros. All rights reserved.
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
          <div className="flex items-center gap-3">
            <div className="text-xs text-slate-600 italic">Slab leak detection Dallas</div>
            <div className="w-2 h-2 rounded-full bg-blue-600/30" />
            <div className="text-xs text-slate-600 italic">Foundation plumbing repair DFW Metroplex</div>
          </div>
        </div>
      </div>

      {/* Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Plumber",
          "name": "Dallas Slab Leak Pros",
          "telephone": "+1-877-792-1410",
          "url": "https://slab-leak-detection-dallas.com/",
          "logo": "https://slab-leak-detection-dallas.com/logo.png",
          "image": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80",
          "description": "Professional slab leak detection and repair in Dallas, Texas. We specialize in non-invasive sonar detection and foundation-protecting pipe repair.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Serving the entire DFW Metroplex",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "postalCode": "75201",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.7767,
            "longitude": -96.7970
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        })}
      </script>
    </footer>
  );
};

export default Footer;
