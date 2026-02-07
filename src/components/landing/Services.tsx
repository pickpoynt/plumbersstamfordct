import { Search, Droplets, Shield, Hammer, AlertTriangle, Waves, Activity, Zap, Microscope } from "lucide-react";

const services = [
  {
    icon: Microscope,
    title: "Sonar Leak Detection",
    description: "Using world-class acoustic technology to pinpoint the exact location of water leaks under your Dallas foundation with pinpoint accuracy.",
    link: "#dallas-leak-info"
  },
  {
    icon: Hammer,
    title: "Direct Access Repair",
    description: "Precision repair of compromised pipes beneath your slab. We utilize minimally invasive techniques to protect your home's flooring and structure.",
    link: "#dallas-leak-info"
  },
  {
    icon: Activity,
    title: "Thermal Mapping",
    description: "Infrared thermal imaging to detect hot water slab leaks behind walls and under floors without removing a single brick or tile.",
    link: "#dallas-leak-info"
  },
  {
    icon: Zap,
    title: "Emergency Response",
    description: "Available 24/7 across the DFW Metroplex for major slab leak floods. We act fast to mitigate foundation damage and structural shifting.",
    link: "#dallas-leak-info"
  },
  {
    icon: Shield,
    title: "Pipe Re-Routing",
    description: "Strategically bypassing active under-slab leaks with new, above-floor plumbing lines, providing a permanent solution to persistent issues.",
    link: "#dallas-leak-info"
  },
  {
    icon: Waves,
    title: "Sewer Leak Testing",
    description: "Specialized hydrostatic testing to identify sanitary sewer leaks under your slab which can be catastrophic to your Dallas foundation.",
    link: "#dallas-leak-info"
  },
  {
    icon: AlertTriangle,
    title: "Foundation Risk Check",
    description: "Comprehensive diagnostics to see if your foundation's movement is being caused by an active water leak beneath the slab.",
    link: "#dallas-leak-info"
  },
  {
    icon: Droplets,
    title: "Copper To PEX Swaps",
    description: "Replacing old, corroded copper lines under your foundation with high-durability PEX, eliminating future slab leak risks permanently.",
    link: "#dallas-leak-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Specialized Slab Leak Detection in Dallas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            North Texas foundations face unique challenges. We provide the most advanced diagnostic and repair services tailored for Dallas soil conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <a href={service.link}>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
