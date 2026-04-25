import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="letscout logo" width={32} height={32} className="rounded-lg" />
              <span className="text-lg font-bold text-foreground">letscout</span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-muted">
              The all-in-one scouting and lead generation platform for modern businesses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-3">
              {["Features", "Pricing", "Integrations", "API Docs", "Changelog"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted transition-colors hover:text-foreground">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              {["Blog", "Help Center", "Community", "Templates", "Webinars"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted transition-colors hover:text-foreground">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {["About", "Careers", "Privacy", "Terms", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-muted transition-colors hover:text-foreground">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} letscout. All rights reserved. Built for scouting professionals worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
