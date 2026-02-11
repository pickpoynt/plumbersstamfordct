import { Shield, Droplets, Wind, CheckCircle2, AlertTriangle, ThermometerSnowflake, Microscope } from "lucide-react";

const MustyOdorRemovalInfo = () => {
    return (
        <section id="musty-odor-info" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-60" />
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1490312278390-ab6414f8d29b?auto=format&fit=crop&q=80"
                                alt="MUSTY ODOR REMOVAL PITMAN NJ"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-2 text-indigo-600">
                                    <Wind className="w-5 h-5" />
                                    <span className="font-bold uppercase tracking-wider text-sm">Molecular Neutralization</span>
                                </div>
                                <p className="text-slate-800 font-medium">
                                    Historic Pitman homes often trap decades of moisture. We reset your indoor atmosphere to zero.
                                </p>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                            <Shield className="w-16 h-16 text-white" />
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                            Science-Backed <span className="text-indigo-600 uppercase">ODOR ELIMINATION</span> for Gloucester County
                        </h2>

                        <p className="text-lg text-slate-600 mb-8 leading-relaxed italic">
                            In Pitman, NJ, the combination of historic architecture and high humidity leads to persistent MUSTY odors. These are typically caused by <strong className="text-slate-900 uppercase">mVOCs</strong> (microbial Volatile Organic Compounds) that indicate active biological activity in crawlspaces.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Wind,
                                    title: "Atmospheric Purification",
                                    desc: "We use industrial-grade hydroxyl generators that mimic nature's way of cleaning the air, destroying odor molecules on contact."
                                },
                                {
                                    icon: Microscope,
                                    title: "Source Mapping",
                                    desc: "We don't just spray scents. We use thermal imaging and moisture diagnostics to find the hidden vapor intrusion points in your Pitman home."
                                },
                                {
                                    icon: CheckCircle2,
                                    title: "HEPA Filtration Reset",
                                    desc: "Our high-volume air scrubbers pull localized spores and particulates out of your air, ensuring a complete environmental reset."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-colors group">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                                        <item.icon className="w-6 h-6 text-indigo-600 group-hover:text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
                            <a
                                href="tel:3802660944"
                                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 uppercase tracking-widest"
                            >
                                <Phone className="w-5 h-5 text-white" />
                                (380) 266-0944
                            </a>
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700">
                                        NJ
                                    </div>
                                ))}
                                <div className="pl-4 text-sm font-bold text-slate-500 italic uppercase tracking-wider">
                                    Serving Gloucester County since 2012
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MustyOdorRemovalInfo;
