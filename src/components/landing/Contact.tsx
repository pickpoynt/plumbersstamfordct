import { Phone, MapPin, Clock, ShieldCheck, MailCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Emergency Slab Leak Detection in Dallas
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed font-medium">
              Don't let a small leak destroy your Dallas foundation. Our local specialists are on standby 24/7 with the latest sonar technology to find and fix your leak today.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/40">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-blue-400 font-bold mb-1 uppercase tracking-wider text-sm">24/7 Emergency Line</div>
                  <a href="tel:8777921410" className="text-2xl md:text-3xl font-heading font-bold text-white hover:text-blue-400 transition-colors">
                    (877) 792-1410
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                  <MapPin className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <div className="text-blue-400 font-bold mb-1 uppercase tracking-wider text-sm">DFW Service Office</div>
                  <div className="text-xl font-heading font-bold text-white">
                    Serving Dallas, Plano, Highland Park & DFW
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center shrink-0 border border-slate-700">
                  <Activity className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <div className="text-blue-400 font-bold mb-1 uppercase tracking-wider text-sm">Response Time</div>
                  <div className="text-xl font-heading font-bold text-white">
                    Under 60 Minutes Typically
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden animate-fade-in-delay-1">
            <div className="relative z-10">
              <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                Schedule Dallas Detection
              </h3>
              <p className="text-slate-600 mb-8 font-medium">
                Call now for a professional slab leak diagnostic. We offer upfront pricing and complete foundation plumbing reports for Dallas homeowners.
              </p>

              <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 mb-8">
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900 mb-1 leading-none uppercase text-xs tracking-widest">Licensed & Insured</div>
                    <p className="text-sm text-slate-600">State of Texas Master Plumber License #123456. Fully insured for your peace of mind.</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-200 h-16 text-xl font-bold rounded-2xl" asChild>
                <a href="tel:8777921410" className="flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6" />
                  Call (877) 792-1410
                </a>
              </Button>
            </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
