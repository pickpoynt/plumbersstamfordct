import { Shield, Wind, Zap, FlaskConical, Search, ClipboardCheck, Activity, Gauge, Microscope } from "lucide-react";

const services = [
  {
    icon: Wind,
    title: "Molecular Neutralization",
    description: "Industrial hydroxyl generators disrupt the chemical bonds of odor-causing molecules, ensuring a complete environmental reset.",
    link: "#musty-odor-info"
  },
  {
    icon: Microscope,
    title: "Source Mapping",
    description: "Utilizing deep-penetrating infrared moisture mapping to identify hidden microbial colonies in basements and historic walls.",
    link: "#musty-odor-info"
  },
  {
    icon: Gauge,
    title: "Vapor Barrier Control",
    description: "Eliminating the moisture source of 'old house' smells through surgical-grade crawlspace and basement containment.",
    link: "#musty-odor-info"
  },
  {
    icon: Shield,
    title: "Atmospheric Sealing",
    description: "Applying odor-blocking antimicrobial barriers to structural wood to prevent future off-gassing and spore activity.",
    link: "#musty-odor-info"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
            Molecular <span className="text-indigo-600">Odor Science</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium italic">
            Pitman's historic properties deserve a structural reset. Our MUSTY ODOR REMOVAL PITMAN NJ protocols go beyond cleaning—we chemically neutralize bacteria at the source.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              <a href={service.link}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm uppercase tracking-wider">
                  View Science <ClipboardCheck className="w-4 h-4" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
