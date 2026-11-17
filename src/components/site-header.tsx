"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { authLinks, contact, navLinks, socials } from "@/content/home";
import { ChevronDownIcon, CloseIcon, MailIcon, MenuIcon, PhoneIcon, SocialIcon } from "./icons";

// Floating pill navbar. Fixed with a small top gap; its edges line up with the
// page content (same max-w-7xl + side padding as every section).
// UX: hides on scroll down, returns on scroll up; dropdowns open on hover or
// click; Escape / outside click / link click closes menus.
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeAll = () => {
    setMenu(null);
    setMobileOpen(false);
  };

  // Scroll state: elevate after leaving the top; hide while scrolling down.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 160);
        lastY = y;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape and outside click close any open menu.
  useEffect(() => {
    if (!menu && !mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll();
    };
    const onPointer = (e: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) closeAll();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [menu, mobileOpen]);

  const isHidden = hidden && !menu && !mobileOpen;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 pt-3 transition-transform duration-300 ease-out sm:pt-4 ${isHidden ? "-translate-y-[calc(100%+1rem)]" : "translate-y-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-2 rounded-full py-2 pl-3.5 pr-2 ring-1 min-[400px]:gap-3 min-[400px]:pl-4 backdrop-blur-md transition-[background-color,box-shadow] duration-300 sm:pl-6 ${
            scrolled
              ? "bg-white/95 shadow-[0_12px_40px_rgba(13,21,39,0.16)] ring-navy-900/5"
              : "bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-white/20"
          }`}
        >
          <a href="https://www.ircc.world" className="shrink-0" aria-label="IRCC home" onClick={closeAll}>
            <Image
              src="/images/unbound-logo.png"
              alt="IRCC - International Research Conference for Children"
              width={420}
              height={110}
              priority
              className="h-7 w-auto min-[400px]:h-9 sm:h-10"
            />
          </a>

          {/* Desktop links */}
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
                      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3">
                        <ul className="min-w-52 rounded-2xl bg-white p-2 shadow-[0_16px_40px_rgba(13,21,39,0.16)] ring-1 ring-slate-200/70">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                onClick={closeAll}
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

          {/* Right side */}
          <div className="flex shrink-0 items-center gap-1.5 min-[400px]:gap-2 sm:gap-3">
            <a href={contact.phoneHref} className="hidden items-center gap-2.5 pr-1 xl:flex" aria-label={`Call ${contact.phone}`}>
              <span className="grid size-10 place-items-center rounded-full bg-coral/10 text-coral">
                <PhoneIcon className="size-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-medium text-slate-500">Call Now</span>
                <span className="block text-sm font-semibold text-navy-900">{contact.phone}</span>
              </span>
            </a>
            <a
              href={authLinks.login}
              className="hidden rounded-full px-3 py-2 text-sm font-semibold text-navy-800 transition hover:text-coral sm:inline-block"
            >
              Login
            </a>
            <a
              href={authLinks.register}
              className="whitespace-nowrap rounded-full bg-coral px-3.5 py-2 text-[13px] font-bold text-white shadow-lg shadow-coral/25 transition hover:bg-coral-dark min-[400px]:px-4 min-[400px]:py-2.5 min-[400px]:text-sm sm:px-6 sm:py-3"
            >
              Register Now
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="grid size-10 place-items-center rounded-full bg-navy-900/5 text-navy-900 transition hover:bg-navy-900/10 lg:hidden"
            >
              {mobileOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu card */}
        {mobileOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="mt-2 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl bg-white p-3 shadow-[0_16px_40px_rgba(13,21,39,0.2)] ring-1 ring-slate-200/70 lg:hidden"
          >
            <ul className="text-sm font-semibold text-navy-800">
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
                            onClick={closeAll}
                            className="block rounded-xl px-3 py-2.5 transition hover:bg-coral/10 hover:text-coral"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={closeAll}
                      className="block rounded-xl px-3 py-2.5 transition hover:bg-coral/10 hover:text-coral"
                    >
                      {item.label}
                    </a>
                  </li>
                ),
              )}
              <li className="sm:hidden">
                <a href={authLinks.login} onClick={closeAll} className="block rounded-xl px-3 py-2.5 transition hover:bg-coral/10 hover:text-coral">
                  Login
                </a>
              </li>
            </ul>

            <div className="mt-2 grid gap-1 border-t border-slate-100 pt-3 text-sm">
              <a href={contact.phoneHref} className="flex items-center gap-3 rounded-xl px-3 py-2 text-navy-800 hover:bg-coral/10">
                <PhoneIcon className="size-4 text-coral" />
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-xl px-3 py-2 text-navy-800 hover:bg-coral/10">
                <MailIcon className="size-4 text-coral" />
                {contact.email}
              </a>
              <ul className="mt-1 flex gap-1 px-1.5">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="grid size-9 place-items-center rounded-full bg-slate-100 text-navy-800 transition hover:bg-coral hover:text-white"
                    >
                      <SocialIcon name={s.icon} className="size-4" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
