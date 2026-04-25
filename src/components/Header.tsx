"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="letscout logo"
            width={36}
            height={36}
            className="rounded-lg"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-foreground">
            letscout
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-muted transition-colors hover:text-foreground">Features</Link>
          <Link href="#how-it-works" className="text-sm font-medium text-muted transition-colors hover:text-foreground">How It Works</Link>
          <Link href="#testimonials" className="text-sm font-medium text-muted transition-colors hover:text-foreground">Testimonials</Link>
          <Link href="#pricing" className="text-sm font-medium text-muted transition-colors hover:text-foreground">Pricing</Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/dashboard" className="rounded-lg px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground">Sign In</Link>
          <Link href="/dashboard" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md">Get Started Free</Link>
        </div>

        <button type="button" className="md:hidden rounded-md p-2 text-muted" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="#features" className="text-sm font-medium text-muted" onClick={() => setMobileOpen(false)}>Features</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted" onClick={() => setMobileOpen(false)}>How It Works</Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted" onClick={() => setMobileOpen(false)}>Testimonials</Link>
            <Link href="#pricing" className="text-sm font-medium text-muted" onClick={() => setMobileOpen(false)}>Pricing</Link>
            <hr className="border-border" />
            <Link href="/dashboard" className="text-sm font-medium text-muted">Sign In</Link>
            <Link href="/dashboard" className="rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white">Get Started Free</Link>
          </div>
        </div>
      )}
    </header>
  );
}
