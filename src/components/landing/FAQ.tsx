const faqs = [
  {
    question: "What actually causes that 'musty' smell in historic Pitman homes?",
    answer: "The smell is caused by mVOCs (Microbial Volatile Organic Compounds)—gases emitted by dormant or active microbial growth in damp areas like basements and crawlspaces. In Pitman, high humidity and older construction often trap these gases, requiring molecular neutralization rather than just ventilation."
  },
  {
    question: "Is the MUSTY ODOR REMOVAL PITMAN NJ process safe for pets?",
    answer: "Yes. We use advanced hydroxyl technology and HEPA air scrubbing, which are 100% non-toxic and ozone-free. Unlike older ozone treatments, your family and pets can remain in the home during the neutralization process."
  },
  {
    question: "How long does a typical odor neutralization take?",
    answer: "Most Pitman residential properties can be fully reset within 24 to 48 hours. This includes source identification, atmospheric scrubbing, and molecular neutralization. More severe crawlspace issues may require an additional day for vapor barrier installation."
  },
  {
    question: "Can't I just use candles or air fresheners?",
    answer: "Candles and sprays only 'mask' the smell by overwhelming your olfactory receptors. They do nothing to remove the toxic compounds from the air. Our process chemically destroys the odor molecules, ensuring the smell doesn't return once the scent wears off."
  },
  {
    question: "Why does the smell get worse in the summer?",
    answer: "Humidity is the fuel for microbial activity. Higher summer temperatures in Gloucester County increase the off-gassing of hidden colonies, making the musty odor much more noticeable. We solve this by addressing the vapor intrusion points."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6 uppercase tracking-tight">
              Neutralization & <span className="text-indigo-600">Odor FAQ</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed italic">
              Expert answers to common questions about MUSTY ODOR REMOVAL PITMAN NJ and historic home air quality restoration in Gloucester County.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-indigo-200 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-700 transition-colors flex items-start gap-3">
                  <span className="text-indigo-500">Q:</span> {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-indigo-100">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
