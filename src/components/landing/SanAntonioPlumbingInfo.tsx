import { Wrench, Shield, CheckCircle2, Droplets } from "lucide-react";

const sanAntonioFactors = [
    {
        icon: Droplets,
        title: "Edwards Aquifer Hard Water",
        description: "San Antonio's water source is famously hard. We specialize in scaling removal and Edwards Aquifer-ready water softening systems to protect your pipes."
    },
    {
        icon: Wrench,
        title: "Bexar County Slab Repairs",
        description: "The shifting limestone and clay in San Antonio lead to frequent slab leaks. Our non-invasive leak detection saves your flooring and foundation."
    },
    {
        icon: Shield,
        title: "Historic District Expertise",
        description: "From King William to Monte Vista, we handle the delicate plumbing needs of San Antonio's historic homes with cast iron and copper expertise."
    },
    {
        icon: CheckCircle2,
        title: "Alamo City Service",
        description: "We are local San Antonians serving our neighbors with integrity. No trip charges for the Greater San Antonio area."
    }
];

const plumbingBenefits = [
    {
        title: "Licensed & Master Plumbers",
        description: "Our team consists of highly trained professionals licensed by the TSBPE, ensuring every job meets strict Texas codes."
    },
    {
        title: "Clean Work Sites",
        description: "We treat your home like the Governor's Mansion. Booties, drop cloths, and thorough cleanup are standard on every call."
    },
    {
        title: "Flat-Rate Pricing",
        description: "No hourly surprises. You get a clear price before we touch a wrench, so you can manage your budget with confidence."
    },
    {
        title: "24/7 Emergency Support",
        description: "Pipe bursts don't care if it's Fiesta. We are available round-the-clock for San Antonio plumbing emergencies."
    }
];

const SanAntonioPlumbingInfo = () => {
    return (
        <section id="sa-plumbing" className="py-24 bg-gradient-to-br from-indigo-900 via-slate-800 to-indigo-950 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531219572328-a0e71b4a9d7c?auto=format&fit=crop&q=80')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-indigo-300 text-sm font-semibold mb-4 backdrop-blur-sm uppercase tracking-widest">
                        San Antonio Local Experts
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                        Texas-Sized Plumbing Solutions in San Antonio
                    </h2>
                    <p className="text-slate-300 text-lg leading-relaxed">
                        San Antonio homeowners face unique plumbing challenges—from the deep-seated limestone foundations to the hard water of the Edwards Aquifer.
                        We combine local knowledge with modern technology to provide lasting solutions.
                    </p>
                </div>

                {/* Factors Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {sanAntonioFactors.map((factor, index) => {
                        const IconComponent = factor.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-indigo-400/30 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-indigo-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-7 h-7 text-indigo-400" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{factor.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{factor.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <div className="bg-slate-950/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-indigo-300">
                                Trusted by Bexar County Families
                            </h3>
                            <p className="text-slate-300 mb-8 text-lg">
                                We've spent years building a reputation for reliability in the Alamo City. Our approach is simple: show up on time, provide a fair price, and do the work right the first time.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {plumbingBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">{benefit.title}</h4>
                                            <p className="text-slate-400 text-xs mt-1">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
                                alt="San Antonio Plumbing Diagnostics"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-white font-bold text-lg italic uppercase tracking-wider text-sm">Alamo City Modern Plumbing</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Areas */}
                <div className="mt-20">
                    <h4 className="text-center text-slate-500 text-sm uppercase tracking-widest font-semibold mb-8">
                        Our Priority Service Zones
                    </h4>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Alamo Heights", "Stone Oak", "The Dominion", "Boerne", "Helotes", "Cibolo", "Schertz", "Converse"].map((area) => (
                            <a
                                key={area}
                                href="https://dallasplumber.vercel.app"
                                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all font-bold text-xs uppercase tracking-widest hover:border-indigo-500/50"
                            >
                                {area}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SanAntonioPlumbingInfo;
