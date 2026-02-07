import { Shield, Microscope, MapPin, Building2, ClipboardCheck, Zap, Award, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Dallas Clay Soil Experts",
    description: "We understand how Dallas's expansive clay soil puts extreme stress on under-slab plumbing, leading to cracks and pipe failures."
  },
  {
    icon: Microscope,
    title: "Electronic Precision",
    description: "Why dig up your whole house? We pinpoint leaks within inches using world-class sonar, saving thousands in repair costs."
  },
  {
    icon: Building2,
    title: "Foundation Focused",
    description: "We don't just fix pipes; we protect your home's structure. We work closely with foundation experts to ensure a holistic solution."
  },
  {
    icon: CheckCircle2,
    title: "Master Plumber Led",
    description: "Every diagnostic is overseen by Texas Master Plumbers with decades of specific experience in slab leak detection and repair."
  },
  {
    icon: Shield,
    title: "Upfront DFW Pricing",
    description: "No hidden fees. We provide clear, fixed-price quotes for detection and repair so you can make informed decisions about your home."
  },
  {
    icon: MapPin,
    title: "Local Dallas Service",
    description: "Based in the heart of the DFW Metroplex. From Lakewood to Highland Park and North Dallas, we're your local neighbor experts."
  }
];

const stats = [
  { number: "5000+", label: "Leaks Detected" },
  { number: "24/7", label: "Service" },
  { number: "Zero", label: "Damage Goal" },
  { number: "Licensed", label: "In Texas" }
];

const WhyUs = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Trusted Dallas Homeowners Choose Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Slab leaks are complex and high-stakes. Our combination of technology and experience provides the most reliable protection for your Dallas investment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-heading font-bold">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
