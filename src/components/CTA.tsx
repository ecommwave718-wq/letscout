import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Transform Your Lead Generation?
        </h2>
        <p className="mt-4 text-lg leading-8 text-white/80">
          Join 2,400+ scouting professionals who use letscout to find and convert
          high-quality leads every day.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/dashboard" className="flex h-12 w-full items-center justify-center rounded-xl bg-white px-8 text-base font-semibold text-primary shadow-lg transition-all hover:bg-gray-50 sm:w-auto">
            Get Started Free
          </Link>
          <Link href="#features" className="flex h-12 w-full items-center justify-center rounded-xl border border-white/30 px-8 text-base font-semibold text-white transition-all hover:bg-white/10 sm:w-auto">
            Explore Features
          </Link>
        </div>
      </div>
    </section>
  );
}
