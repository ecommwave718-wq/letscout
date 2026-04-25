const steps = [
  {
    step: "01",
    title: "Define Your Target",
    description:
      "Set your ideal customer profile \u2014 industry, location, revenue range, tech stack. letscout builds a smart filter that finds exactly who you need.",
  },
  {
    step: "02",
    title: "Scout & Enrich",
    description:
      "Our engine scans stores, marketplaces, and directories to build your prospect list. Each lead is automatically enriched with verified contact data.",
  },
  {
    step: "03",
    title: "Launch Outreach",
    description:
      "Create personalized email sequences with dynamic variables. Set up automated follow-ups and A/B test your messaging for maximum conversion.",
  },
  {
    step: "04",
    title: "Close & Scale",
    description:
      "Track engagement metrics, manage replies, and close deals. Use analytics to optimize your funnel and scale what works.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simple & Powerful
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How letscout Works
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            Go from zero to a full pipeline in four simple steps.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative flex flex-col items-center p-6 text-center">
              {idx < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-full bg-gradient-to-r from-primary/40 to-transparent lg:block" />
              )}
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-white shadow-lg shadow-primary/25">
                {item.step}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
