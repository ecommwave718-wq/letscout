const testimonials = [
  {
    quote:
      "letscout cut our prospecting time by 80%. We went from manually searching stores to having a full pipeline delivered every morning.",
    author: "Sarah Chen",
    role: "E-commerce Agency Owner",
    avatar: "SC",
  },
  {
    quote:
      "The enrichment data is incredibly accurate. We tripled our email reply rates within the first month of switching to letscout.",
    author: "Marcus Rivera",
    role: "Email Marketing Lead, SaaSGrid",
    avatar: "MR",
  },
  {
    quote:
      "As a solo store owner, I needed something simple but powerful. letscout's automation handles my entire outreach while I focus on fulfillment.",
    author: "Aisha Patel",
    role: "Shopify Store Owner",
    avatar: "AP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Loved by Scouts
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Users Say
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex flex-col rounded-2xl border border-border bg-background p-8"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-6 text-muted">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
