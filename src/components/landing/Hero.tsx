import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, ShieldCheck, Wind, Zap, FlaskConical, Search, Microscope } from "lucide-react";

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  image?: string;
}

const Hero = ({
  title = "MUSTY ODOR REMOVAL PITMAN NJ",
  subtitle = "Is a persistent musty smell making your historic Pitman home unbearable? We use industrial-grade molecular neutralization and HEPA air scrubbing to eliminate odors at the source—not just mask them. PITMAN ODOR NEUTRALIZATION PROS: Scientific Removal.",
  image = "https://images.unsplash.com/photo-1490312278390-ab6414f8d29b?auto=format&fit=crop&q=80"
}: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Unique Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={image} alt="MUSTY ODOR REMOVAL PITMAN NJ" className="w-full h-full object-cover brightness-[0.4]" />
        {/* UNIQUE OVERLAY IMAGE: Using a swirling particles/light texture overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-screen overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1549413289-509200424560?auto=format&fit=crop&q=80"
            alt="Atmospheric Particles Overlay"
            className="w-full h-full object-cover scale-150 animate-pulse transition-all duration-[14000ms]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-indigo-950/40 to-slate-950/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-8 animate-fade-in shadow-lg shadow-indigo-500/5 uppercase tracking-widest text-[10px] items-center font-bold">
            <Wind className="w-4 h-4" />
            <span>PITMAN'S CERTIFIED ODOR NEUTRALIZATION</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 animate-fade-in leading-[1.1] uppercase tracking-tight">
            {title}
          </h1>

          <p className="text-xl text-slate-300 mb-10 animate-fade-in-delay-1 leading-relaxed max-w-2xl italic font-medium">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-delay-2">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-none h-14 px-8 text-lg font-bold shadow-xl shadow-indigo-900/40 uppercase tracking-widest" asChild>
              <a href="tel:3802660944" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                (380) 266-0944
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 transition-all h-14 px-8 text-lg uppercase tracking-widest font-bold" asChild>
              <a href="#services" className="flex items-center gap-2">
                Our Science
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 animate-fade-in-delay-3 uppercase tracking-widest text-[10px] font-bold">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Wind className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-white">Molecular Removal</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <Microscope className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-white">Source Diagnostics</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-indigo-400" />
              </div>
              <span className="text-white">Vapor Barriers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
