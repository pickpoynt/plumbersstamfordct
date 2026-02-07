import { ShieldCheck, Waves, Activity, AlertTriangle, MapPin, Search } from "lucide-react";

const DallasLeakInfo = () => {
    const signs = [
        {
            icon: Waves,
            title: "Warm Spots on Floors",
            description: "If a hot water line under your Dallas slab is leaking, you'll often feel distinct warm areas on your tile or laminate flooring."
        },
        {
            icon: Activity,
            title: "The 'Hissing' Sound",
            description: "A constant sound of water running when all faucets are off is a primary indicator of an active under-slab pipe failure."
        },
        {
            icon: AlertTriangle,
            title: "Foundation Cracks",
            description: "Dallas's clay soil expands rapidly when wet. A slab leak can cause sudden heaving, leading to cracks in walls and floors."
        },
        {
            icon: Search,
            title: "Unexpected Water Bills",
            description: "Even a pinhole leak can waste thousands of gallons a month. If your Dallas water bill has spiked, we need to test your slab."
        }
    ];

    const dallasSoilFactors = [
        {
            icon: MapPin,
            title: "Dallas Clay Soil Impact",
            description: "North Texas is known for 'Blackland Prairie' clay soil. This soil expands and contracts with moisture changes, putting immense physical pressure on under-slab plumbing assemblies."
        },
        {
            icon: ShieldCheck,
            title: "Cast Iron Decay",
            description: "Many older Dallas homes (1950s-70s) have cast iron sewer pipes under the slab. These pipes corrode from the inside out, causing foundation-destabilizing leaks."
        }
    ];

    return (
        <section id="dallas-leak-info" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 capitalize leading-tight">
                            Protecting Your <span className="text-blue-600">Dallas Foundation</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed shadow-sm p-4 bg-white/50 rounded-xl border border-blue-100">
                            A slab leak in Dallas isn't just a plumbing problem—it's a threat to your home's structure. Our non-invasive process pinpoints the leak early to prevent catastrophic foundation failure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {signs.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:border-blue-300 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors shadow-inner">
                                    <item.icon className="w-7 h-7 text-blue-600 group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8">Understanding the Dallas Niche</h3>
                            <div className="grid md:grid-cols-2 gap-12">
                                {dallasSoilFactors.map((factor, idx) => (
                                    <div key={idx} className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <factor.icon className="w-6 h-6 text-blue-400" />
                                            <h4 className="text-lg font-bold">{factor.title}</h4>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed italic border-l-2 border-blue-500 pl-4">
                                            {factor.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Abstract Texas/Dallas Map Overlay */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl" />
                    </div>

                    <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-10 text-center text-white shadow-2xl">
                        <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">Don't Wait for the Foundation to Shift</h3>
                        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                            Early detection saves up to 70% in repair costs. If you suspect a leak under your Dallas home, call our certified specialists immediately.
                        </p>
                        <a
                            href="tel:8777921410"
                            className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-2xl font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
                        >
                            Call (877) 792-1410
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DallasLeakInfo;
