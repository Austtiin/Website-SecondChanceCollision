export default function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "Schedule Your Repair",
      description: "Contact us to book your appointment at a time that works for you. We're open 6 days a week for your convenience."
    },
    {
      number: "02",
      title: "Honest & Upfront Estimate",
      description: "We provide transparent pricing with no hidden fees. Work directly with us or through your insurance provider."
    },
    {
      number: "03",
      title: "Get Your Repair Done",
      description: "Our certified technicians will restore your vehicle to its original condition with quality craftsmanship."
    }
  ];

  return (
    <section className="relative py-16 bg-neutral-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Red accent shapes */}
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[var(--accent-red)]/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[var(--accent-red)]/10 blur-3xl" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle, #e6141f 1px, transparent 1px)', backgroundSize: '30px 30px'}} />
        
        {/* Corner accents */}
        <div className="absolute top-0 left-1/4 h-px w-32 bg-gradient-to-r from-transparent via-[var(--accent-red)]/30 to-transparent" />
        <div className="absolute bottom-0 right-1/4 h-px w-32 bg-gradient-to-r from-transparent via-[var(--accent-red)]/30 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            Getting your vehicle back on the road is simple and stress-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-neutral-800 to-neutral-900 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-[var(--accent-red)]/50 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgb(230,20,31,0.3)] hover:-translate-y-2 hover:scale-[1.02]"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent-red)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute -top-6 left-8 bg-gradient-to-br from-[var(--accent-red)] to-red-700 text-white font-bold text-2xl rounded-full h-12 w-12 flex items-center justify-center shadow-lg ring-2 ring-white/10">
                {step.number}
              </div>
              <div className="relative mt-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
