import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/20">
              \ud83d\ude80 Trusted by 2,400+ scouting professionals
            </div>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl animate-fade-in-up">
            Scout Smarter.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Convert Faster.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl animate-fade-in-up stagger-1">
            The all-in-one lead generation and outreach automation platform for
            store owners, email marketers, and scouting experts. Find, enrich,
            and engage high-quality prospects at scale.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up stagger-2">
            <Link
              href="/dashboard"
              className="flex h-12 w-full items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 sm:w-auto animate-pulse-glow"
            >
              Start Scouting \u2014 It&apos;s Free
            </Link>
            <Link
              href="#how-it-works"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-border px-8 text-base font-semibold text-foreground transition-all hover:bg-surface sm:w-auto"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              See How It Works
            </Link>
          </div>

          <div className="mt-16 animate-fade-in-up stagger-3">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted">
              Powering scouting for teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-50">
              {["Shopify Stores", "Amazon Sellers", "D2C Brands", "SaaS Teams", "Agencies"].map((name) => (
                <span key={name} className="text-sm font-semibold text-muted">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
