export default function OurProcess() {
  const steps = [
    {
      number: "01",
      title: "Schedule Your Repair",
      description: "Contact us to book your appointment at a time that works for you. We're open Monday-Friday for your convenience."
    },
    {
      number: "02",
      title: "Honest & Upfront Estimate",
      description: "We provide transparent pricing with no hidden fees. Working with insurance? We deal directly with your carrier and adjuster so you don't have to."
    },
    {
      number: "03",
      title: "Get Your Repair Done",
      description: "Our certified technicians will restore your vehicle to its original condition with quality craftsmanship."
    }
  ];

  return (
    <section className="relative py-16 bg-neutral-900">
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
              className="relative bg-neutral-800 border border-white/10 rounded-2xl p-8 transition hover:border-(--accent-red)/40"
            >
              <div className="absolute -top-6 left-8 bg-accent-red text-white font-bold text-2xl rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
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
