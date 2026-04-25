"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { href: "/#results", label: "Results" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark" />
          SelfStorage.help
        </Link>

        <div className={`nav-links${open ? " open" : ""}`}>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/#contact" className="nav-cta" onClick={() => setOpen(false)}>
            Free Audit
          </Link>
        </div>

        <button
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </nav>
  );
}
