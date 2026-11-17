"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { authLinks, contact, navLinks, socials } from "@/content/home";
import { ChevronDownIcon, CloseIcon, MailIcon, MenuIcon, PhoneIcon, SocialIcon } from "./icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);

  // Close an open dropdown with Escape.
  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menu]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-navy-950 text-white/80">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-4 py-2 text-xs sm:px-6 md:justify-between lg:px-8">
          <div className="hidden items-center gap-6 md:flex">
            <a href={contact.phoneHref} className="flex items-center gap-2 transition hover:text-white">
              <PhoneIcon className="size-3.5 text-coral" />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 transition hover:text-white">
              <MailIcon className="size-3.5 text-coral" />
              {contact.email}
            </a>
          </div>
          <ul className="flex items-center gap-1">
            <li className="mr-2 border-r border-white/15 pr-3">
              <a href={authLinks.login} className="font-semibold transition hover:text-white">
                Login
              </a>
            </li>
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid size-7 place-items-center rounded-full transition hover:bg-white/10 hover:text-white"
                >
                  <SocialIcon name={s.icon} className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-navy-900/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="https://www.ircc.world" className="shrink-0" aria-label="IRCC home">
            <Image
              src="/images/unbound-logo.png"
              alt="IRCC - International Research Conference for Children"
              width={420}
              height={110}
              priority
              className="h-10 w-auto sm:h-11"
            />
          </a>

          <nav className="hidden lg:block" aria-label="Main">
            <ul className="flex items-center gap-1 text-sm font-semibold text-navy-800">
              {navLinks.map((item) =>
                "children" in item ? (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setMenu(item.label)}
                    onMouseLeave={() => setMenu(null)}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={menu === item.label}
                      onClick={() => setMenu((m) => (m === item.label ? null : item.label))}
                      className={`flex items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 transition hover:bg-coral/10 hover:text-coral ${menu === item.label ? "bg-coral/10 text-coral" : ""}`}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`size-3.5 transition-transform ${menu === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {menu === item.label && (
                      <div className="absolute left-0 top-full pt-2">
                        <ul className="min-w-52 rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(13,21,39,0.14)] ring-1 ring-slate-200/70">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="block whitespace-nowrap rounded-xl px-4 py-2.5 font-medium text-navy-800 transition hover:bg-coral/10 hover:text-coral"
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="whitespace-nowrap rounded-full px-4 py-2 transition hover:bg-coral/10 hover:text-coral"
                    >
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={authLinks.register}
              className="whitespace-nowrap rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-coral/25 transition hover:bg-coral-dark"
            >
              Register Now
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-full text-navy-900 transition hover:bg-navy-900/5 lg:hidden"
            >
              {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-navy-900/5 lg:hidden">
            <ul className="mx-auto max-w-7xl px-4 py-3 text-sm font-semibold text-navy-800 sm:px-6">
              {navLinks.map((item) =>
                "children" in item ? (
                  <li key={item.label} className="py-1">
                    <p className="px-3 pb-1 pt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      {item.label}
                    </p>
                    <ul className="grid grid-cols-2 gap-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block rounded-lg px-3 py-2.5 transition hover:bg-coral/10 hover:text-coral"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a href={item.href} className="block rounded-lg px-3 py-2.5 transition hover:bg-coral/10 hover:text-coral">
                      {item.label}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
